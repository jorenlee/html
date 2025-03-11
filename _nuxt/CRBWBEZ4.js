import{_ as K}from"./pR1Mv6Wa.js";import{_ as Q}from"./z_yBbgRS.js";import{e as W,u as Z,r as s,s as ee,g as te,c as _,a as e,b as T,h as c,v as g,f as a,j as S,n as se,t as A,x as ae,F as L,l as N,k as le,o as h,N as oe,M as ie}from"./BuTRJ6wZ.js";import{p as re}from"./DsCrdf0t.js";import{s as ne}from"./C1zSg28U.js";import{X as de}from"./YvHRbCel.js";/* empty css        */import{h as v}from"./C5S46NFB.js";import"./5JjjnmY2.js";import{_ as ue}from"./DlAUqK2U.js";const ce={class:""},ve={class:"flex"},me={class:"pt-7 pb-24 w-3/12 px-1 bg-gray-100 lg:block hidden"},pe={class:"w-full"},fe={class:"bg-green-800"},_e={class:"flex mx-auto justify-between py-2 px-3.5"},he={class:"flex items-center text-white gap-5"},xe={class:"flex -mt-1"},be={class:"text-sm"},ge={class:""},we={class:"lg:w-full p-5"},De={class:"h-full shadow-lg"},ye={class:""},ke={class:"w-full"},Se={class:""},Me={class:"w-fit mx-auto"},Ye={class:"w-fit mx-auto"},Ce={class:"border p-5 w-fit mx-auto"},Te={class:"text-xs mb-3 font-bold"},Ae={class:""},Pe={class:"flex"},Ve=["value","onClick"],Be={class:"ml-1",for:"provider"},Ee={class:"w-fit mx-auto mb-10 h-full"},Le={class:""},Ne={class:"text-red-700"},Oe={class:"text-red-700"},Re={class:"w-fit mx-auto"},je={class:"w-full"},Fe={class:""},Ie={class:""},Ue={class:"flex h-full w-full px-5 py-2 shadow-sm border"},ze={class:"text-xs"},$e=["value"],Je={class:"",for:"time"},Xe={class:"lg:py-80"},qe={key:0,class:"bg-green-700 text-xs text-white font-bold py-2 px-4 rounded-lg mt-6 uppercase"},Ge={__name:"create",async setup(He){let w,P;const x=W(),o=Z(),V=s(o.mainDevServer),B=s(ne.timeSelection),O=s(re.providerListsDepartment);s();let n=s(),l=s(),d=s(B._rawValue[0].time),M=s([]),Y=s([]),m=s(!0),u=s(!0);const D=s(!1),y=s(!1),b=s(!0),k=s(!0),E=([w,P]=ee(()=>$fetch(V.value+"/api/schedules/list/").catch(i=>i.data)),w=await w,P(),w),R=s(o.user.registrarEmail),j=s(o.user.developerEmail),F=s(o.user.testEmail),I=s(new Date);te(()=>{o.user.isAuthenticated&&(o.user.email===R.value||o.user.email===j.value||o.user.email===F.value)?x.push("/_/panels/registrar/appointment/set-schedules/create"):x.push("/_/unauthorized")});const U=i=>{Y.value=[],D.value=!1,y.value=!1,b.value=!0,m.value=!0,k.value=!1;let t=v(v().toDate()).format("MM-DD-YYYY");l.value=v(t).format("MM-DD-YYYY"),setTimeout(()=>{E.filter(function(p){i===p.provider&&(n.value=p.provider,l.value=p.date,Y.value.push(p.date))},100)})},z=()=>{setTimeout(()=>{E.filter(function(i){i.provider===n.value&&(d.value=i.time,i.date===l.value&&(m.value=!1))})},100)},$=i=>{l.value=v(i).format("MM-DD-YYYY");let t=v(v().toDate()).format("MM-DD-YYYY");D.value=!1,y.value=!1,b.value=!0,m.value=!0,l.value===t?(m.value=!1,D.value=!0,b.value=!1,k.value=!0,n.value=""):v(l.value).isBefore(t)?(m.value=!1,y.value=!0,b.value=!1,k.value=!0,n.value=""):z()},J=()=>{x.go()},X=()=>{x.push("/_/panels/registrar/appointment/set-schedules")},q=()=>{x.push("/_/reg-admin"),o.removeToken()},G=async()=>{M.value=[],l.value==""&&n.value==[]&&d.value==[]&&M.value.push("Please Input All Fields (date, provider, time)"),M.value.length===0&&await $fetch(V.value+"/api/schedules/create/",{method:"POST",headers:{Authorization:o.user.token,"Content-Type":"application/json"},body:{provider:n.value,date:l.value,time:d.value}}).then(async i=>{J()})};return(i,t)=>{const p=K,H=Q;return h(),_("div",ce,[e("div",ve,[c(e("div",me,[T(p)],512),[[g,a(u)]]),e("div",pe,[e("div",fe,[e("div",_e,[e("div",he,[e("div",{onClick:t[0]||(t[0]=r=>S(u)?u.value=!a(u):u=!a(u)),class:"w-10 px-1.5"},[e("i",{class:se(["fa text-3xl text-white",a(u)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",xe,[t[5]||(t[5]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",be,A(a(o).user.email),1)])]),e("button",{onClick:q,class:"flex hover:font-bold pt-1"},t[6]||(t[6]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",ge,[e("div",we,[e("div",De,[e("div",ye,[e("div",{class:"w-full shadow mb-10"},[e("div",{class:"px-3"},[e("button",{onClick:X,class:"shadow text-center uppercase my-3 px-4 py-1 bg-green-900 font-semibold text-sm text-white rounded-md whitespace-nowrap"}," Browse Dates ")])]),e("div",ke,[e("div",Se,[e("form",{class:"lg:flex p-5",onSubmit:ae(G,["prevent"])},[e("div",Me,[e("div",Ye,[t[8]||(t[8]=e("label",{for:"registrar",class:"uppercase block mb-2 text-xs font-bold text-gray-900 text-center lasalle-green-text"},"Provider",-1)),e("div",Ce,[c(e("div",Te,t[7]||(t[7]=[e("label",{class:"text-red-900",for:"selectprovider"},"Please Select a Provider",-1)]),512),[[g,a(k)]]),e("div",Ae,[(h(!0),_(L,null,N(a(O),(r,C)=>(h(),_("div",{key:C,class:""},[e("div",Pe,[c(e("input",{id:"provider",type:"radio",name:"provider",value:r.department,class:"mr-2 mt-0.5","onUpdate:modelValue":t[1]||(t[1]=f=>S(n)?n.value=f:n=f),onClick:f=>U(r.department)},null,8,Ve),[[oe,a(n)]]),e("label",Be,A(r.department),1)])]))),128))])])])]),e("div",Ee,[t[9]||(t[9]=e("h1",{class:"mb-3 font-bold lasalle-green-text text-xs text-center uppercase"}," Calendar ",-1)),e("div",Le,[T(a(de),{modelValue:a(l),"onUpdate:modelValue":[t[2]||(t[2]=r=>S(l)?l.value=r:l=r),t[3]||(t[3]=r=>$(a(l)))],inline:"","enable-time-picker":!1,id:"date",name:"date","auto-apply":"",highlight:a(Y),"year-range":[2025,2025],"disabled-week-days":[6,7,0],"week-start":"0","hide-offset-dates":"","min-date":a(I)},null,8,["modelValue","highlight","min-date"])])]),c(e("div",Ne," Sorry! Can't Add Current Date ",512),[[g,a(D)]]),c(e("div",Oe," Sorry! Can't Add Previous Dates ",512),[[g,a(y)]]),c(e("div",Re,[t[10]||(t[10]=e("h1",{class:"mb-3 font-bold lasalle-green-text whitespace-nowrap text-xs text-center uppercase"}," Set Time ( AM ) ",-1)),e("div",je,[e("div",Fe,[e("div",Ie,[e("div",Ue,[e("ul",ze,[(h(!0),_(L,null,N(a(B)[0].time,(r,C)=>(h(),_("li",{class:"mb-3 lg:flex justify-center font-bold text-black",key:C},[c(e("input",{id:"time",type:"checkbox",name:"time",value:r,class:"mr-2 mt-0.5 available","onUpdate:modelValue":t[4]||(t[4]=f=>S(d)?d.value=f:d=f)},null,8,$e),[[ie,a(d)]]),e("label",Je,A(r),1)]))),128))])])])])])],512),[[g,a(b)]]),e("div",Xe,[a(m)?(h(),_("button",qe," Add ")):le("",!0)])],32)])])])])])])])]),T(H)])}}},it=ue(Ge,[["__scopeId","data-v-89e118b8"]]);export{it as default};
