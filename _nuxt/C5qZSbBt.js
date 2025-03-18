import{_ as A}from"./BXrrMipw.js";import{e as M,u as N,q as $,r as u,s as F,g as R,c as h,a as e,b as j,h as a,v as k,f as n,i as O,t as P,j as U,n as f,d as q,m as d,F as G,l as H,p as I,o as _}from"./nwF0sMHc.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const J={class:""},K={class:"flex"},Q={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},W={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},X={class:"flex items-center w-full px-2"},Y={class:"text-sm"},Z={class:"w-full"},ee={class:"bg-green-800"},te={class:"lg:flex mx-auto justify-between py-2 px-3.5"},se={class:"lg:flex lg:items-center text-white gap-5"},le={class:"text-xs mb-5"},ae={class:"p-5"},oe={class:"lg:w-8/12 w-11/12 mx-auto"},ie={class:"p-3"},re={class:"lg:flex gap-2 mb-3"},de={class:"w-full"},ne={class:"w-full"},ue={class:"lg:flex gap-2 mb-3"},me={class:"w-full"},pe={class:"w-full"},be={class:"lg:flex gap-2 mb-3"},ce={class:"w-full"},ge={class:"w-full"},fe={class:"w-7/12 mb-3"},xe={class:"w-full shadow-lg p-2 mb-5"},ve={class:"w-full mb-3"},we=["onUpdate:modelValue"],he={class:"w-full mb-3"},ke=["onUpdate:modelValue"],_e={class:"w-full mb-3"},ye=["onUpdate:modelValue"],Ue={class:"flex w-fit mx-auto my-10 gap-10"},Be={class:"w-fit mx-auto flex items-center gap-3"},Ce={class:"flex items-center shadow-2xl border-2 rounded-lg py-2"},Se={class:"text-green-800 font-bold lg:text-lg text-sm text-center w-fit mx-auto"},Le={__name:"[id]",async setup(Ve){let p,y;const x=M(),o=N(),b=$(),v=u(o.mainDevServer),B=u(o.user.developerEmail),i=([p,y]=F(()=>$fetch(v.value+"/api/library/booking/"+b.params.id+"/").catch(g=>g.data)),p=await p,y(),p),s=u({borrower_category:i.borrower_category,id_number:i.id_number,firstname:i.firstname,lastname:i.lastname,email:i.email,books:i.books,booking_date:i.booking_date,booking_time:i.booking_time,status:i.status,created_by_email:i.created_by_email,updated_at:i.updated_at,created_at:i.created_at});R(()=>{o.user.isAuthenticated&&(o.user.email===B.value||o.user.email==="monaliza.mugot@lsu.edu.ph"||o.user.email==="marilyn.bejec@lsu.edu.ph"||o.user.email==="applejane.ebarle@lsu.edu.ph"||o.user.email==="janekaren.gudmalin@lsu.edu.ph"||o.user.email==="macy.beniola@lsu.edu.ph"||o.user.email==="lynn.lumacad@lsu.edu.ph"||o.user.email==="zosette.salas@lsu.edu.ph")?x.push("/library/dashboard/appointment/edit/"+b.params.id):x.push("/_/unauthorized")});let r=u(!0);const C=async()=>{await $fetch(v.value+"/api/library/booking/"+b.params.id+"/edit/",{method:"PUT",body:s.value}).then(g=>{})},S=async()=>{await $fetch(v.value+"/api/library/submit-status-to-gmail/"+b.params.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:s.value}).then(g=>{})},c=u(!1),V=()=>c.value=!0,w=u(!1),T=()=>{C(),c.value=!1,w.value=!0,setTimeout(()=>{S(),w.value=!1},5e3)},z=async()=>{c.value=!1,s.value.status=i.status},D=()=>{x.push("/library/login"),o.removeToken()};return(g,t)=>{const E=A;return _(),h("div",J,[e("div",K,[a(e("div",Q,[e("div",W,[e("div",X,[t[11]||(t[11]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",Y,P(n(o).user.email),1)]),e("div",{onClick:t[0]||(t[0]=l=>U(r)?r.value=!n(r):r=!n(r)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:f(["fa text-3xl text-white",n(r)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[12]||(t[12]=O('<div class="min-h-[570px]"><div class="w-fit mx-auto mt-5 mb-3"><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSULRC.jpg" class="lg:w-24 w-20 mx-auto rounded-full"></div><div class="text-center"><h2 class="font-bold text-green-800 text-lg">Learning Resource Center</h2></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1"><a href="/library/dashboard/appointment" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-list mr-3" aria-hidden="true"></i> Appointment Lists </a><a href="/library/dashboard/appointment/reports/books" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-book mr-3" aria-hidden="true"></i> Available Books </a><a href="/library/dashboard/appointment/set-schedules" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-calendar mr-3.5" aria-hidden="true"></i> SET SCHEDULES </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"><i class="fa fa-globe mr-3" aria-hidden="true"></i> LSU HOME PAGE </a></div></div>',1))],512),[[k,n(r)]]),e("div",Z,[e("div",ee,[e("div",te,[e("div",se,[e("div",{onClick:t[1]||(t[1]=l=>U(r)?r.value=!n(r):r=!n(r)),class:"w-10 px-1.5"},[e("i",{class:f(["fa text-3xl text-white",n(r)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),e("button",{onClick:D,class:"flex hover:font-bold pt-1"},t[13]||(t[13]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",le,[e("div",ae,[t[26]||(t[26]=e("div",{class:"flex p-2 mb-7 text-center bg-green-900 text-white uppercase text-xs tracking-widest"},[e("div",null,[e("a",{href:"https://lsu.edu.ph/library/dashboard/appointment",class:"tracking-tight absolute flex bg-white hover:bg-green-900 text-green-800 hover:text-white px-3 py-1 -mt-1 rounded-lg font-bold"},[e("i",{class:"fa fa-caret-left mt-0.5 mr-1"}),q(" Back ")])]),e("div",{class:"w-full"},"Appointment Details")],-1)),e("div",oe,[e("div",ie,[e("div",re,[e("div",de,[t[14]||(t[14]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Borrower Category ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[2]||(t[2]=l=>s.value.borrower_category=l),placeholder:"Borrower Category",disabled:""},null,512),[[d,s.value.borrower_category]])]),e("div",ne,[t[15]||(t[15]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," ID Number ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[3]||(t[3]=l=>s.value.id_number=l),placeholder:"ID Number",disabled:""},null,512),[[d,s.value.id_number]])])]),e("div",ue,[e("div",me,[t[16]||(t[16]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Firstname ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":t[4]||(t[4]=l=>s.value.firstname=l),placeholder:"Firstname",disabled:""},null,512),[[d,s.value.firstname]])]),e("div",pe,[t[17]||(t[17]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Lastname ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":t[5]||(t[5]=l=>s.value.lastname=l),placeholder:"Lastname",disabled:""},null,512),[[d,s.value.lastname]])])]),e("div",be,[e("div",ce,[t[18]||(t[18]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Booking Date ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[6]||(t[6]=l=>s.value.booking_date=l),placeholder:"Booking Date",disabled:""},null,512),[[d,s.value.booking_date]])]),e("div",ge,[t[19]||(t[19]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Booking Time ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[7]||(t[7]=l=>s.value.booking_time=l),placeholder:"Booking Time",disabled:""},null,512),[[d,s.value.booking_time]])])]),e("div",fe,[t[20]||(t[20]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Email ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":t[8]||(t[8]=l=>s.value.email=l),placeholder:"Email",disabled:""},null,512),[[d,s.value.email]])])]),e("div",xe,[e("label",{class:f([{"bg-red-700":s.value.status==="pending","bg-yellow-500":s.value.status==="reserved","bg-green-900":s.value.status==="received","bg-blue-300":s.value.status==="returned"},"block uppercase tracking-wide text-white text-sm text-center mt-5 mb-5 py-1 rounded-sm"])}," Books ",2),e("ul",null,[(_(!0),h(G,null,H(s.value.books,(l,L)=>(_(),h("li",{key:L,class:"lg:flex gap-3"},[e("div",ve,[t[21]||(t[21]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Title ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":m=>l.book_title=m,placeholder:"Book Title",disabled:""},null,8,we),[[d,l.book_title]])]),e("div",he,[t[22]||(t[22]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Author ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":m=>l.book_author=m,placeholder:"Book Author",disabled:""},null,8,ke),[[d,l.book_author]])]),e("div",_e,[t[23]||(t[23]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Call Number ",-1)),a(e("input",{class:"shadow-md p-2 rounded-sm w-full border uppercase","onUpdate:modelValue":m=>l.book_call_number=m,placeholder:"Book Call Number",disabled:""},null,8,ye),[[d,l.book_call_number]])])]))),128))])])]),e("div",Ue,[e("div",Be,[e("label",{class:f(["font-bold pt-1",{"text-red-700":s.value.status==="pending","text-yellow-500":s.value.status==="reserved","text-green-900":s.value.status==="received","text-blue-400":s.value.status==="returned"}])},"STATUS:",2),a(e("select",{"onUpdate:modelValue":t[9]||(t[9]=l=>s.value.status=l),name:"borrower_category",class:"shadow-md p-2 font-bold rounded-md w-full border border-[#e5e7eb] capitalize",required:"",onChange:t[10]||(t[10]=l=>V())},t[24]||(t[24]=[e("option",{value:"pending"},"pending",-1),e("option",{value:"reserved"},"reserved",-1),e("option",{value:"received"},"received",-1),e("option",{value:"returned"},"returned",-1)]),544),[[I,s.value.status]])]),a(e("div",Ce,[e("div",{class:"flex items-center"},[t[25]||(t[25]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Status: ",-1)),e("div",{class:"flex gap-10 mr-10"},[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold",onClick:T},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold",onClick:z},"no")])])],512),[[k,c.value]])]),a(e("div",Se," sending email, please wait ... ",512),[[k,w.value]])])])])]),j(E)])}}};export{Le as default};
