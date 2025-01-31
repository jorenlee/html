import{_ as ee}from"./CRKcxgbq.js";import{_ as te}from"./D6riK9Vm.js";import{m as le,u as oe,r as a,s as ae,q as se,c as n,a as e,v as d,x as ie,n as s,b as C,y as T,z as M,t as N,A as ne,F as $,D as L,C as re,G as de,B as f,E as g,o as r,H as ue}from"./BNl0RaR5.js";import{h as me}from"./C5S46NFB.js";import{_ as y}from"./5JjjnmY2.js";import{s as pe}from"./Uh1Scs3X.js";import{X as be}from"./Dq79hGE-.js";/* empty css        */import{_ as ce}from"./DlAUqK2U.js";const ve={class:""},fe={class:"flex"},ge={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},xe={class:"w-full"},_e={class:"bg-green-800"},he={class:"lg:flex mx-auto justify-between py-2 px-3.5"},we={class:"lg:flex lg:items-center text-white gap-5"},ye={class:"flex -mt-1"},ke={class:"text-sm"},Se={class:"text-xs lg:mb-5"},Ve={class:"lg:p-5 p-2"},De={class:"w-11/12 mx-auto lg:flex"},Ce={class:"w-4/12 mb-1"},Te={class:""},Ne={class:"mx-auto w-fit"},Ue={class:"w-8/12"},Be={class:"w-full border rounded-md"},ze={class:"flex flex-wrap px-5 py-4 justify-center"},Ae=["value"],je=["value"],Fe={class:"lg:w-8/12 mx-auto shadow-sm lg:p-5"},Me={class:"lg:flex gap-2 lg:mb-3"},$e={class:"lg:w-3/12 lg:mb-0 mb-2"},Le={key:0,class:"lg:w-3/12 lg:mb-0 mb-2"},qe={class:"lg:flex gap-2 lg:mb-3"},Ee={class:"w-full lg:mb-0 mb-2"},Ie={class:"w-full lg:mb-0 mb-2"},Oe={class:"w-full lg:mb-0 mb-2"},Re={class:"shadow rounded-lg px-5 pt-5 pb-2"},Pe={class:"flex items-center pr-3 pt-3 font-bold"},Ye={class:"w-full lg:mb-0 mb-2"},Ge=["onUpdate:modelValue"],Xe={class:"w-full lg:mb-0 mb-2"},He=["onUpdate:modelValue"],Je={class:"w-full lg:mb-0 mb-2"},Ke=["onUpdate:modelValue"],Qe=["onClick"],We={key:0,class:"text-white w-full bg-red-800 text-sm px-3 py-2 rounded-md text-center"},Ze={key:1,class:"text-center w-full p-2 bg-green-900 text-white uppercase"},et={__name:"index",async setup(tt){let x,U;const _=le(),i=oe(),h=a(i.mainDevServer),B=([x,U]=ae(()=>$fetch(h.value+"/api/library/schedule/booking/list/").catch(o=>o.data)),x=await x,U(),x),z=a(pe.timeSelection);let A=a(),u=a(),p=a(z._rawValue[0].time),j=a([]);const q=a(new Date),E=a(i.user.developerEmail);a(!0),a(!1),se(()=>{i.user.isAuthenticated&&(i.user.email===E.value||i.user.email==="monaliza.mugot@lsu.edu.ph"||i.user.email==="marilyn.bejec@lsu.edu.ph"||i.user.email==="applejane.ebarle@lsu.edu.ph"||i.user.email==="janekaren.gudmalin@lsu.edu.ph"||i.user.email==="macy.beniola@lsu.edu.ph"||i.user.email==="lynn.lumacad@lsu.edu.ph")?(B.filter(function(o){j.value.push(o.date)}),_.push("/_/panels/library/appointment/create"),created_by_email.value=i.user.email):_.push("/_/unauthorized")});const F=a({borrower_category:"",id_number:"",firstname:"",lastname:"",email:"",books:[],booking_date:"",booking_time:"",status:"pending",created_by_email:"",updated_at:new Date});let b=a(0),I=a(""),O=a(""),R=a(""),k=a(!1),c=a(),v=a(!0),S=a(!1),V=a(!1);const D=()=>{S.value=!0,id_number.value=""},P=()=>{borrower_category.value==="Faculty"&&(b.value=20,D()),borrower_category.value==="Staff"&&(b.value=20,D()),borrower_category.value==="Student"&&(b.value=15,D()),borrower_category.value==="Visitor"&&(b.value=5,S.value=!1,id_number.value="N/A"),books.value=[{book_title:null,book_author:null,book_call_number:null}]},Y=()=>{books.value.push({book_title:I.value,book_author:O.value,book_call_number:R.value}),b.value--},G=o=>{books.value.length>1&&(y.pull(books.value,o),b.value++)},X=o=>{u.value=me(o).format("MM-DD-YYYY"),p.value=["-"],setTimeout(()=>{B.filter(function(t){t.date===u.value&&(A.value=t.id,c.value=t.time)})},100)},H=()=>{_.push("/_/lib-admin"),i.removeToken()},J=async()=>{c.value.length===1&&(c.value=["-"]),y.pull(c.value,p.value),await $fetch(h.value+"/api/library/schedule/booking/"+A.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{date:u.value,time:c.value,updated_at:updated_at.value}}).then(o=>{})},K=async()=>{booking_date.value=u.value,booking_time.value=p.value,await $fetch(h.value+"/api/library/booking/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:F.value}).then(o=>{o.status==="errors"?(k.value=!0,setTimeout(()=>{k.value=!1},1e4)):(J(),Q(),V.value=!0,setTimeout(()=>{V.value=!1,_.go()},2e3))})},Q=async()=>{await $fetch(h.value+"/api/library/submit-appointment-to-gmail/",{method:"POST",headers:{"Content-Type":"application/json"},body:F.value}).then(o=>{})};return(o,t)=>{const W=ee,Z=te;return r(),n("div",ve,[e("div",fe,[d(e("div",ge,[C(W)],512),[[ie,s(v)]]),e("div",xe,[e("div",_e,[e("div",he,[e("div",we,[e("div",{onClick:t[0]||(t[0]=l=>T(v)?v.value=!s(v):v=!s(v)),class:"w-10 px-1.5"},[e("i",{class:M(["fa text-3xl text-white",s(v)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",ye,[t[10]||(t[10]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ke,N(s(i).user.email),1)])]),e("button",{onClick:H,class:"flex hover:font-bold pt-1"},t[11]||(t[11]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",Se,[e("div",Ve,[t[25]||(t[25]=e("div",{class:"mb-4 text-base font-medium text-green-900 text-center uppercase tracking-tighter"}," Book an Appointment ",-1)),e("form",{onSubmit:ne(K,["prevent"])},[e("div",De,[e("div",Ce,[e("div",Te,[t[12]||(t[12]=e("h1",{class:"font-bold lasalle-green-text text-xs text-center capitalize mb-3"}," Please Select Date ",-1)),e("div",Ne,[C(s(be),{modelValue:s(u),"onUpdate:modelValue":[t[1]||(t[1]=l=>T(u)?u.value=l:u=l),t[2]||(t[2]=l=>X(s(u)))],inline:"","enable-time-picker":!1,name:"date","auto-apply":"",highlight:s(j),"year-range":[2025,2025],"disabled-week-days":[0,7],"week-start":"0","min-date":s(q)},null,8,["modelValue","highlight","min-date"])])])]),e("div",Ue,[t[13]||(t[13]=e("h1",{class:"text-center font-bold lasalle-green-text lg:whitespace-nowrap capitalize mb-3"}," Select Available Time ",-1)),e("div",Be,[e("ul",ze,[(r(!0),n($,null,L(s(z)[0].time,(l,w)=>(r(),n("li",{class:"mb-3 font-bold mx-10",key:w},[s(y).includes(s(c),l)?d((r(),n("input",{key:0,type:"radio",name:"time",value:l,class:"mr-2 mt-0.5","onUpdate:modelValue":t[3]||(t[3]=m=>T(p)?p.value=m:p=m),required:""},null,8,Ae)),[[ue,s(p)]]):(r(),n("input",{key:1,type:"radio",name:"time",value:l,class:"mr-2 mt-0.5",disabled:""},null,8,je)),e("label",{class:M(s(y).includes(s(c),l)?"text-green-600":" text-red-600")},N(l),3)]))),128))])])])]),e("div",Fe,[e("div",Me,[e("div",$e,[t[15]||(t[15]=e("label",{class:"text-[10px] text-gray-300"}," Borrower Category ",-1)),d(e("select",{"onUpdate:modelValue":t[4]||(t[4]=l=>o.borrower_category=l),name:"borrower_category",class:"shadow-md p-2 rounded-md w-full border border-[#e5e7eb] capitalize",required:"",onChange:t[5]||(t[5]=l=>P())},t[14]||(t[14]=[de('<option value="" disabled selected hidden data-v-b6182746> Select Borrower Category </option><option value="Faculty" data-v-b6182746>Faculty</option><option value="Staff" data-v-b6182746>Staff</option><option value="Student" data-v-b6182746>Student</option><option value="Visitor" data-v-b6182746>Visitor</option>',5)]),544),[[re,o.borrower_category]])]),s(S)?(r(),n("div",Le,[t[16]||(t[16]=e("label",{class:"text-[10px] text-gray-300"}," ID Number ",-1)),d(e("input",{class:"shadow-md px-2 lg:py-2 py-3 rounded-md w-full border capitalize","onUpdate:modelValue":t[6]||(t[6]=l=>o.id_number=l),placeholder:"ID Number",required:""},null,512),[[f,o.id_number]])])):g("",!0)]),e("div",qe,[e("div",Ee,[t[17]||(t[17]=e("label",{class:"text-[10px] text-gray-300"}," First Name ",-1)),d(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":t[7]||(t[7]=l=>o.firstname=l),placeholder:"first Name"},null,512),[[f,o.firstname]])]),e("div",Ie,[t[18]||(t[18]=e("label",{class:"text-[10px] text-gray-300"}," Last Name ",-1)),d(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":t[8]||(t[8]=l=>o.lastname=l),placeholder:"last Name"},null,512),[[f,o.lastname]])]),e("div",Oe,[t[19]||(t[19]=e("label",{class:"text-[10px] text-gray-300"}," Email ",-1)),d(e("input",{class:"shadow-md p-2 rounded-md w-full border","onUpdate:modelValue":t[9]||(t[9]=l=>o.email=l),placeholder:"Email"},null,512),[[f,o.email]])])]),e("div",Re,[(r(!0),n($,null,L(o.books,(l,w)=>(r(),n("div",{class:"flex shadow p-5 gap-2 mb-3",key:w},[e("div",Pe,N(w+1),1),e("div",Ye,[t[20]||(t[20]=e("label",{class:"text-[10px] text-gray-300"}," Book Title ",-1)),d(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":m=>l.book_title=m,placeholder:"book title"},null,8,Ge),[[f,l.book_title]])]),e("div",Xe,[t[21]||(t[21]=e("label",{class:"text-[10px] text-gray-300"}," Book Author ",-1)),d(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":m=>l.book_author=m,placeholder:"book author"},null,8,He),[[f,l.book_author]])]),e("div",Je,[t[22]||(t[22]=e("label",{class:"text-[10px] text-gray-300"}," Book Call Number ",-1)),d(e("input",{class:"shadow-md p-2 rounded-md w-full border capitalize","onUpdate:modelValue":m=>l.book_call_number=m,placeholder:"book call number"},null,8,Ke),[[f,l.book_call_number]])]),o.books.length>1?(r(),n("div",{key:0,class:"flex items-center lg:ml-10 mt-5 justify-center bg-green-900 text-white rounded-full lg:h-7 h-8 w-8 lg:w-12 mx-auto px-2.5 text-sm",onClick:m=>G(l)},t[23]||(t[23]=[e("i",{class:"fa fa-close"},null,-1)]),8,Qe)):g("",!0)]))),128)),s(b)>1?(r(),n("div",{key:0,class:"text-white cursor-pointer ml-12 w-fit mb-3 bg-green-800 uppercase text-xs rounded-md px-5 py-2 text-center",onClick:Y}," Add Book ")):g("",!0)]),s(k)?(r(),n("div",We," Date and Time and other fields are required! ")):g("",!0),s(V)?(r(),n("div",Ze," Appointment Sent! ")):g("",!0),t[24]||(t[24]=e("div",{class:"mt-5 w-fit mx-auto"},[e("button",{class:"text-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center"}," Submit ")],-1))])],32)])])])]),C(Z)])}}},mt=ce(et,[["__scopeId","data-v-b6182746"]]);export{mt as default};
