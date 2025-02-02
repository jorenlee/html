import{_ as L}from"./COweQDNK.js";import{_ as E}from"./41sJbjK6.js";import{_ as F}from"./4kkBFhKz.js";import{m as R,u as q,p as I,r as n,s as O,q as P,c as w,a as e,v as o,x as _,n as m,b as k,y as G,z as h,t as j,w as H,B as i,F as J,D as K,C as Q,o as y,d as W}from"./By_D9HbC.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const X={class:""},Y={class:"flex"},Z={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},ee={class:"w-full"},te={class:"bg-green-800"},se={class:"lg:flex mx-auto justify-between py-2 px-3.5"},le={class:"lg:flex lg:items-center text-white gap-5"},oe={class:"flex -mt-1"},ae={class:"text-sm"},de={class:"text-xs mb-5"},ie={class:"p-5"},re={class:"flex p-2 mb-7 text-center bg-green-900 text-white uppercase text-xs tracking-widest"},ne={class:"lg:w-8/12 w-11/12 mx-auto"},ue={class:"p-3"},me={class:"lg:flex gap-2 mb-3"},pe={class:"w-full"},be={class:"w-full"},ce={class:"lg:flex gap-2 mb-3"},ge={class:"w-full"},ve={class:"w-full"},fe={class:"lg:flex gap-2 mb-3"},xe={class:"w-full"},we={class:"w-full"},_e={class:"w-7/12 mb-3"},ke={class:"w-full shadow-lg p-2 mb-5"},he={class:"w-full mb-3"},ye=["onUpdate:modelValue"],Be={class:"w-full mb-3"},Ue=["onUpdate:modelValue"],Ce={class:"w-full mb-3"},Ve=["onUpdate:modelValue"],Te={class:"flex w-fit mx-auto my-10 gap-10"},Se={class:"w-fit mx-auto flex items-center gap-3"},De={class:"flex items-center shadow-2xl border-2 rounded-lg py-2"},ze={class:"text-green-800 font-bold lg:text-lg text-sm text-center w-fit mx-auto"},Re={__name:"[id]",async setup(Me){let p,B;const v=R(),d=q(),b=I(),f=n(d.mainDevServer),U=n(d.user.developerEmail),a=([p,B]=O(()=>$fetch(f.value+"/api/library/booking/"+b.params.id+"/").catch(g=>g.data)),p=await p,B(),p),s=n({borrower_category:a.borrower_category,id_number:a.id_number,firstname:a.firstname,lastname:a.lastname,email:a.email,books:a.books,booking_date:a.booking_date,booking_time:a.booking_time,status:a.status,created_by_email:a.created_by_email,updated_at:a.updated_at,created_at:a.created_at});P(()=>{d.user.isAuthenticated&&(d.user.email===U.value||d.user.email==="monaliza.mugot@lsu.edu.ph"||d.user.email==="marilyn.bejec@lsu.edu.ph"||d.user.email==="applejane.ebarle@lsu.edu.ph"||d.user.email==="janekaren.gudmalin@lsu.edu.ph"||d.user.email==="macy.beniola@lsu.edu.ph"||d.user.email==="lynn.lumacad@lsu.edu.ph")?v.push("/_/panels/library/appointment/edit/"+b.params.id):v.push("/_/unauthorized")});let r=n(!0);const C=async()=>{await $fetch(f.value+"/api/library/booking/"+b.params.id+"/edit/",{method:"PUT",body:s.value}).then(g=>{})},V=async()=>{await $fetch(f.value+"/api/library/submit-status-to-gmail/"+b.params.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:s.value}).then(g=>{})},c=n(!1),T=()=>c.value=!0,x=n(!1),S=()=>{C(),c.value=!1,x.value=!0,setTimeout(()=>{V(),x.value=!1},5e3)},D=async()=>{c.value=!1,s.value.status=a.status},z=()=>{v.push("/_/lib-admin"),d.removeToken()};return(g,t)=>{const M=L,N=E,$=F;return y(),w("div",X,[e("div",Y,[o(e("div",Z,[k(M)],512),[[_,m(r)]]),e("div",ee,[e("div",te,[e("div",se,[e("div",le,[e("div",{onClick:t[0]||(t[0]=l=>G(r)?r.value=!m(r):r=!m(r)),class:"w-10 px-1.5"},[e("i",{class:h(["fa text-3xl text-white",m(r)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",oe,[t[10]||(t[10]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ae,j(m(d).user.email),1)])]),e("button",{onClick:z,class:"flex hover:font-bold pt-1"},t[11]||(t[11]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",de,[e("div",ie,[e("div",re,[e("div",null,[k(N,{to:"/_/panels/library/appointment",class:"tracking-tight absolute flex bg-white hover:bg-green-900 text-green-800 hover:text-white px-3 py-1 -mt-1 rounded-lg font-bold"},{default:H(()=>t[12]||(t[12]=[e("i",{class:"fa fa-caret-left mt-0.5 mr-1"},null,-1),W(" Back ")])),_:1})]),t[13]||(t[13]=e("div",{class:"w-full"},"Appointment Details",-1))]),e("div",ne,[e("div",ue,[e("div",me,[e("div",pe,[t[14]||(t[14]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Borrower Category ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[1]||(t[1]=l=>s.value.borrower_category=l),placeholder:"Borrower Category",disabled:""},null,512),[[i,s.value.borrower_category]])]),e("div",be,[t[15]||(t[15]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," ID Number ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[2]||(t[2]=l=>s.value.id_number=l),placeholder:"ID Number",disabled:""},null,512),[[i,s.value.id_number]])])]),e("div",ce,[e("div",ge,[t[16]||(t[16]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Firstname ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":t[3]||(t[3]=l=>s.value.firstname=l),placeholder:"Firstname",disabled:""},null,512),[[i,s.value.firstname]])]),e("div",ve,[t[17]||(t[17]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Lastname ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":t[4]||(t[4]=l=>s.value.lastname=l),placeholder:"Lastname",disabled:""},null,512),[[i,s.value.lastname]])])]),e("div",fe,[e("div",xe,[t[18]||(t[18]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Booking Date ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[5]||(t[5]=l=>s.value.booking_date=l),placeholder:"Booking Date",disabled:""},null,512),[[i,s.value.booking_date]])]),e("div",we,[t[19]||(t[19]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Booking Time ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[6]||(t[6]=l=>s.value.booking_time=l),placeholder:"Booking Time",disabled:""},null,512),[[i,s.value.booking_time]])])]),e("div",_e,[t[20]||(t[20]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Email ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[7]||(t[7]=l=>s.value.email=l),placeholder:"Email",disabled:""},null,512),[[i,s.value.email]])])]),e("div",ke,[e("label",{class:h([{"bg-red-700":s.value.status==="pending","bg-yellow-500":s.value.status==="reserved","bg-green-900":s.value.status==="received","bg-blue-300":s.value.status==="returned"},"block uppercase tracking-wide text-white text-sm text-center mt-5 mb-5 py-1 rounded-sm"])}," Books ",2),e("ul",null,[(y(!0),w(J,null,K(s.value.books,(l,A)=>(y(),w("li",{key:A,class:"lg:flex gap-3"},[e("div",he,[t[21]||(t[21]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Title ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":u=>l.book_title=u,placeholder:"Book Title",disabled:""},null,8,ye),[[i,l.book_title]])]),e("div",Be,[t[22]||(t[22]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Author ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":u=>l.book_author=u,placeholder:"Book Author",disabled:""},null,8,Ue),[[i,l.book_author]])]),e("div",Ce,[t[23]||(t[23]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Call Number ",-1)),o(e("input",{class:"shadow-md p-2 rounded-sm w-full border uppercase","onUpdate:modelValue":u=>l.book_call_number=u,placeholder:"Book Call Number",disabled:""},null,8,Ve),[[i,l.book_call_number]])])]))),128))])])]),e("div",Te,[e("div",Se,[e("label",{class:h(["font-bold pt-1",{"text-red-700":s.value.status==="pending","text-yellow-500":s.value.status==="reserved","text-green-900":s.value.status==="received","text-blue-400":s.value.status==="returned"}])},"STATUS:",2),o(e("select",{"onUpdate:modelValue":t[8]||(t[8]=l=>s.value.status=l),name:"borrower_category",class:"shadow-md p-2 font-bold rounded-md w-full border border-[#e5e7eb] capitalize",required:"",onChange:t[9]||(t[9]=l=>T())},t[24]||(t[24]=[e("option",{value:"pending"},"pending",-1),e("option",{value:"reserved"},"reserved",-1),e("option",{value:"received"},"received",-1),e("option",{value:"returned"},"returned",-1)]),544),[[Q,s.value.status]])]),o(e("div",De,[e("div",{class:"flex items-center"},[t[25]||(t[25]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Status: ",-1)),e("div",{class:"flex gap-10 mr-10"},[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold",onClick:S},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold",onClick:D},"no")])])],512),[[_,c.value]])]),o(e("div",ze," sending email, please wait ... ",512),[[_,x.value]])])])])]),k($)])}}};export{Re as default};
