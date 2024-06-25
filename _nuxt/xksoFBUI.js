import{_ as le}from"./CWdZnkO6.js";import{_ as oe}from"./DWBd0UaW.js";import{u as ae,g as se,r as a,q as ie,h as ne,c as d,a as e,i as u,v as de,f as s,b as N,j as U,n as L,t as z,k as re,F as $,s as q,y as ue,l as v,z as f,o as r,A as ce,p as me,e as pe,x as be}from"./DW51Lek_.js";import{h as _e}from"./C5S46NFB.js";import{_ as S}from"./vUEbHlag.js";import{s as he}from"./BEx1_QdV.js";import{X as ve}from"./DObfOPD5.js";/* empty css        */import{_ as fe}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const i=g=>(me("data-v-6c66bb7b"),g=g(),pe(),g),ge={class:""},xe={class:"flex"},we={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},ye={class:"w-full"},ke={class:"bg-green-800"},Se={class:"lg:flex mx-auto justify-between py-2 px-3.5"},Ve={class:"lg:flex lg:items-center text-white gap-5"},Ce={class:"flex -mt-1"},De=i(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),Te={class:"text-sm"},Ne=i(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),Ue=i(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ze=[Ne,Ue],Be={class:"text-xs lg:mb-5"},Ae={class:"lg:p-5 p-2"},je=i(()=>e("div",{class:"mb-4 text-base font-medium text-green-900 text-center uppercase tracking-tighter"}," Book an Appointment ",-1)),Fe={class:"w-11/12 mx-auto lg:flex"},Me={class:"w-4/12 mb-1"},Ie={class:""},Le=i(()=>e("h1",{class:"font-bold lasalle-green-text text-xs text-center capitalize mb-3"}," Please Select Date ",-1)),$e={class:"mx-auto w-fit"},qe={class:"w-8/12"},Ee=i(()=>e("h1",{class:"text-center font-bold lasalle-green-text lg:whitespace-nowrap capitalize mb-3"}," Select Available Time ",-1)),Oe={class:"w-full border rounded-md"},Re={class:"flex flex-wrap px-5 py-4 justify-center"},Pe=["value"],Ye=["value"],Xe={class:"lg:w-8/12 mx-auto shadow-sm lg:p-5"},Ge={class:"lg:flex gap-2 lg:mb-3"},Je={class:"lg:w-3/12 lg:mb-0 mb-2"},He=i(()=>e("label",{class:"text-[10px] text-gray-300"}," Borrower Category ",-1)),Ke=be('<option value="" disabled selected hidden data-v-6c66bb7b> Select Borrower Category </option><option value="Faculty" data-v-6c66bb7b>Faculty</option><option value="Staff" data-v-6c66bb7b>Staff</option><option value="Student" data-v-6c66bb7b>Student</option><option value="Visitor" data-v-6c66bb7b>Visitor</option>',5),Qe=[Ke],We={key:0,class:"lg:w-3/12 lg:mb-0 mb-2"},Ze=i(()=>e("label",{class:"text-[10px] text-gray-300"}," ID Number ",-1)),et={class:"lg:flex gap-2 lg:mb-3"},tt={class:"w-full lg:mb-0 mb-2"},lt=i(()=>e("label",{class:"text-[10px] text-gray-300"}," First Name ",-1)),ot={class:"w-full lg:mb-0 mb-2"},at=i(()=>e("label",{class:"text-[10px] text-gray-300"}," Last Name ",-1)),st={class:"w-full lg:mb-0 mb-2"},it=i(()=>e("label",{class:"text-[10px] text-gray-300"}," Email ",-1)),nt={class:"shadow rounded-lg px-5 pt-5 pb-2"},dt={class:"flex items-center pr-3 pt-3 font-bold"},rt={class:"w-full lg:mb-0 mb-2"},ut=i(()=>e("label",{class:"text-[10px] text-gray-300"}," Book Title ",-1)),ct=["onUpdate:modelValue"],mt={class:"w-full lg:mb-0 mb-2"},pt=i(()=>e("label",{class:"text-[10px] text-gray-300"}," Book Author ",-1)),bt=["onUpdate:modelValue"],_t={class:"w-full lg:mb-0 mb-2"},ht=i(()=>e("label",{class:"text-[10px] text-gray-300"}," Book Call Number ",-1)),vt=["onUpdate:modelValue"],ft=["onClick"],gt=i(()=>e("i",{class:"fa fa-close"},null,-1)),xt=[gt],wt={key:0,class:"text-white w-full bg-red-800 text-sm px-3 py-2 rounded-md text-center"},yt={key:1,class:"text-center w-full p-2 bg-green-900 text-white uppercase"},kt=i(()=>e("div",{class:"mt-5 w-fit mx-auto"},[e("button",{class:"text-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center"}," Submit ")],-1)),St={__name:"index",async setup(g){let x,B;const w=ae(),n=se(),y=a(n.mainServer),A=([x,B]=ie(()=>$fetch(y.value+"/api/library/schedule/booking/list/").catch(l=>l.data)),x=await x,B(),x),j=a(he.timeSelection);let F=a(),c=a(),p=a(j._rawValue[0].time),M=a([]);const E=a(new Date),O=a(n.user.developerEmail);a(!0),a(!1),ne(()=>{n.user.isAuthenticated&&(n.user.email===O.value||n.user.email==="monaliza.mugot@lsu.edu.ph"||n.user.email==="marilyn.bejec@lsu.edu.ph"||n.user.email==="applejane.ebarle@lsu.edu.ph"||n.user.email==="janekaren.gudmalin@lsu.edu.ph"||n.user.email==="macy.beniola@lsu.edu.ph"||n.user.email==="lynn.lumacad@lsu.edu.ph")?(A.filter(function(l){M.value.push(l.date)}),w.push("/_/panels/library/appointment/create"),created_by_email.value=n.user.email):w.push("/_/unauthorized")});const I=a({borrower_category:"",id_number:"",firstname:"",lastname:"",email:"",books:[],booking_date:"",booking_time:"",status:"pending",created_by_email:"",updated_at:new Date});let b=a(0),R=a(""),P=a(""),Y=a(""),V=a(!1),_=a(),h=a(!0),C=a(!1),D=a(!1);const T=()=>{C.value=!0,id_number.value=""},X=()=>{borrower_category.value==="Faculty"&&(b.value=20,T()),borrower_category.value==="Staff"&&(b.value=20,T()),borrower_category.value==="Student"&&(b.value=15,T()),borrower_category.value==="Visitor"&&(b.value=5,C.value=!1,id_number.value="N/A"),books.value=[{book_title:null,book_author:null,book_call_number:null}]},G=()=>{books.value.push({book_title:R.value,book_author:P.value,book_call_number:Y.value}),b.value--},J=l=>{books.value.length>1&&(S.pull(books.value,l),b.value++)},H=l=>{c.value=_e(l).format("MM-DD-YYYY"),p.value=["-"],setTimeout(()=>{A.filter(function(o){o.date===c.value&&(F.value=o.id,_.value=o.time)})},100)},K=()=>{w.push("/_/lib-admin"),n.removeToken()},Q=async()=>{_.value.length===1&&(_.value=["-"]),S.pull(_.value,p.value),await $fetch(y.value+"/api/library/schedule/booking/"+F.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{date:c.value,time:_.value,updated_at:updated_at.value}}).then(l=>{console.log("response",l)})},W=async()=>{booking_date.value=c.value,booking_time.value=p.value,await $fetch(y.value+"/api/library/booking/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:I.value}).then(l=>{l.status==="errors"?(V.value=!0,setTimeout(()=>{V.value=!1},1e4)):(Q(),Z(),D.value=!0,setTimeout(()=>{D.value=!1,w.go()},2e3))})},Z=async()=>{await $fetch(y.value+"/api/library/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:I.value}).then(l=>{})};return(l,o)=>{const ee=le,te=oe;return r(),d("div",ge,[e("div",xe,[u(e("div",we,[N(ee)],512),[[de,s(h)]]),e("div",ye,[e("div",ke,[e("div",Se,[e("div",Ve,[e("div",{onClick:o[0]||(o[0]=t=>U(h)?h.value=!s(h):h=!s(h)),class:"w-10 px-1.5"},[e("i",{class:L(["fa text-3xl text-white",s(h)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",Ce,[De,e("h1",Te,z(s(n).user.email),1)])]),e("button",{onClick:K,class:"flex hover:font-bold pt-1"},ze)])]),e("div",Be,[e("div",Ae,[je,e("form",{onSubmit:re(W,["prevent"])},[e("div",Fe,[e("div",Me,[e("div",Ie,[Le,e("div",$e,[N(s(ve),{modelValue:s(c),"onUpdate:modelValue":[o[1]||(o[1]=t=>U(c)?c.value=t:c=t),o[2]||(o[2]=t=>H(s(c)))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:s(M),"year-range":[2023,2024],"disabled-week-days":[6,7,0],"week-start":"0","min-date":s(E)},null,8,["modelValue","highlight","min-date"])])])]),e("div",qe,[Ee,e("div",Oe,[e("ul",Re,[(r(!0),d($,null,q(s(j)[0].time,(t,k)=>(r(),d("li",{class:"mb-3 font-bold mx-10",key:k},[s(S).includes(s(_),t)?u((r(),d("input",{key:0,type:"radio",name:"time",value:t,class:"mr-2 mt-0.5","onUpdate:modelValue":o[3]||(o[3]=m=>U(p)?p.value=m:p=m),required:""},null,8,Pe)),[[ce,s(p)]]):(r(),d("input",{key:1,type:"radio",name:"time",value:t,class:"mr-2 mt-0.5",disabled:""},null,8,Ye)),e("label",{class:L(s(S).includes(s(_),t)?"text-green-600":" text-red-600")},z(t),3)]))),128))])])])]),e("div",Xe,[e("div",Ge,[e("div",Je,[He,u(e("select",{"onUpdate:modelValue":o[4]||(o[4]=t=>l.borrower_category=t),name:"borrower_category",class:"shadow-md p-2 rounded-md w-full border border-[#e5e7eb] capitalize",required:"",onChange:o[5]||(o[5]=t=>X())},Qe,544),[[ue,l.borrower_category]])]),s(C)?(r(),d("div",We,[Ze,u(e("input",{class:"shadow-md px-2 lg:py-2 py-3 rounded-md w-full border capitalize","onUpdate:modelValue":o[6]||(o[6]=t=>l.id_number=t),placeholder:"ID Number",required:""},null,512),[[v,l.id_number]])])):f("",!0)]),e("div",et,[e("div",tt,[lt,u(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":o[7]||(o[7]=t=>l.firstname=t),placeholder:"first Name"},null,512),[[v,l.firstname]])]),e("div",ot,[at,u(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":o[8]||(o[8]=t=>l.lastname=t),placeholder:"last Name"},null,512),[[v,l.lastname]])]),e("div",st,[it,u(e("input",{class:"shadow-md p-2 rounded-md w-full border","onUpdate:modelValue":o[9]||(o[9]=t=>l.email=t),placeholder:"Email"},null,512),[[v,l.email]])])]),e("div",nt,[(r(!0),d($,null,q(l.books,(t,k)=>(r(),d("div",{class:"flex shadow p-5 gap-2 mb-3",key:k},[e("div",dt,z(k+1),1),e("div",rt,[ut,u(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":m=>t.book_title=m,placeholder:"book title"},null,8,ct),[[v,t.book_title]])]),e("div",mt,[pt,u(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":m=>t.book_author=m,placeholder:"book author"},null,8,bt),[[v,t.book_author]])]),e("div",_t,[ht,u(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":m=>t.book_call_number=m,placeholder:"book call number"},null,8,vt),[[v,t.book_call_number]])]),l.books.length>1?(r(),d("div",{key:0,class:"flex items-center lg:ml-10 mt-5 justify-center bg-green-900 text-white rounded-full lg:h-7 h-8 w-8 lg:w-12 mx-auto px-2.5 text-sm",onClick:m=>J(t)},xt,8,ft)):f("",!0)]))),128)),s(b)>1?(r(),d("div",{key:0,class:"text-white cursor-pointer ml-12 w-fit mb-3 bg-green-800 uppercase text-xs rounded-md px-5 py-2 text-center",onClick:G}," Add Book ")):f("",!0)]),s(V)?(r(),d("div",wt," Date and Time and other fields are required! ")):f("",!0),s(D)?(r(),d("div",yt," Appointment Sent! ")):f("",!0),kt])],32)])])])]),N(te)])}}},Ft=fe(St,[["__scopeId","data-v-6c66bb7b"]]);export{Ft as default};
