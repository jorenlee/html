import{_ as L}from"./C9bUIP7b.js";import{_ as E}from"./BRkYr8tY.js";import{_ as F}from"./C_kbrGxy.js";import{u as R,g as q,m as I,r as u,q as O,h as P,c as f,a as e,i as l,v as x,f as m,b as w,j,n as k,t as G,w as H,l as i,F as J,s as K,y as Q,o as y,d as W}from"./Dl-oWLyK.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const X={class:""},Y={class:"flex"},Z={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},ee={class:"w-full"},te={class:"bg-green-800"},se={class:"lg:flex mx-auto justify-between py-2 px-3.5"},oe={class:"lg:flex lg:items-center text-white gap-5"},le={class:"flex -mt-1"},ae=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),de={class:"text-sm"},ie=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),ne=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),re=[ie,ne],ue={class:"text-xs mb-5"},ce={class:"p-5"},me={class:"flex p-2 mb-7 text-center bg-green-900 text-white uppercase text-xs tracking-widest"},pe=e("i",{class:"fa fa-caret-left mt-0.5 mr-1"},null,-1),be=e("div",{class:"w-full"},"Appointment Details",-1),_e={class:"lg:w-8/12 w-11/12 mx-auto"},he={class:"p-3"},ge={class:"lg:flex gap-2 mb-3"},ve={class:"w-full"},fe=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Borrower Category ",-1),xe={class:"w-full"},we=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," ID Number ",-1),ke={class:"lg:flex gap-2 mb-3"},ye={class:"w-full"},Be=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Firstname ",-1),Ue={class:"w-full"},Ve=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Lastname ",-1),Ce={class:"lg:flex gap-2 mb-3"},Te={class:"w-full"},Se=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Booking Date ",-1),ze={class:"w-full"},De=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Booking Time ",-1),Me={class:"w-7/12 mb-3"},Ne=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Email ",-1),$e={class:"w-full shadow-lg p-2 mb-5"},Ae={class:"w-full mb-3"},Le=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Title ",-1),Ee=["onUpdate:modelValue"],Fe={class:"w-full mb-3"},Re=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Author ",-1),qe=["onUpdate:modelValue"],Ie={class:"w-full mb-3"},Oe=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2"}," Book Call Number ",-1),Pe=["onUpdate:modelValue"],je={class:"flex w-fit mx-auto my-10 gap-10"},Ge={class:"w-fit mx-auto flex items-center gap-3"},He=e("option",{value:"pending"},"pending",-1),Je=e("option",{value:"reserved"},"reserved",-1),Ke=e("option",{value:"received"},"received",-1),Qe=e("option",{value:"returned"},"returned",-1),We=[He,Je,Ke,Qe],Xe={class:"flex items-center shadow-2xl border-2 rounded-lg py-2"},Ye=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Status: ",-1),Ze={class:"text-green-800 font-bold lg:text-lg text-sm text-center w-fit mx-auto"},nt={__name:"[id]",async setup(et){let p,B;const h=R(),d=q(),b=I(),g=u(d.mainServer),U=u(d.user.developerEmail),a=([p,B]=O(()=>$fetch(g.value+"/api/library/booking/"+b.params.id+"/").catch(r=>r.data)),p=await p,B(),p),t=u({borrower_category:a.borrower_category,id_number:a.id_number,firstname:a.firstname,lastname:a.lastname,email:a.email,books:a.books,booking_date:a.booking_date,booking_time:a.booking_time,status:a.status,created_by_email:a.created_by_email,updated_at:a.updated_at,created_at:a.created_at});P(()=>{d.user.isAuthenticated&&(d.user.email===U.value||d.user.email==="monaliza.mugot@lsu.edu.ph"||d.user.email==="marilyn.bejec@lsu.edu.ph"||d.user.email==="applejane.ebarle@lsu.edu.ph"||d.user.email==="janekaren.gudmalin@lsu.edu.ph"||d.user.email==="macy.beniola@lsu.edu.ph"||d.user.email==="lynn.lumacad@lsu.edu.ph")?h.push("/_/panels/library/appointment/edit/"+b.params.id):h.push("/_/unauthorized")});let n=u(!0);const V=async()=>{await $fetch(g.value+"/api/library/booking/"+b.params.id+"/edit/",{method:"PUT",body:t.value}).then(r=>{console.log("response",r)})},C=async()=>{await $fetch(g.value+"/api/library/submit-status-to-gmail/"+b.params.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:t.value}).then(r=>{console.log(r)})},_=u(!1),T=()=>_.value=!0,v=u(!1),S=()=>{V(),_.value=!1,v.value=!0,setTimeout(()=>{C(),v.value=!1},5e3)},z=async()=>{_.value=!1,t.value.status=a.status},D=()=>{h.push("/_/lib-admin"),d.removeToken()};return(r,o)=>{const M=L,N=E,$=F;return y(),f("div",X,[e("div",Y,[l(e("div",Z,[w(M)],512),[[x,m(n)]]),e("div",ee,[e("div",te,[e("div",se,[e("div",oe,[e("div",{onClick:o[0]||(o[0]=s=>j(n)?n.value=!m(n):n=!m(n)),class:"w-10 px-1.5"},[e("i",{class:k(["fa text-3xl text-white",m(n)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",le,[ae,e("h1",de,G(m(d).user.email),1)])]),e("button",{onClick:D,class:"flex hover:font-bold pt-1"},re)])]),e("div",ue,[e("div",ce,[e("div",me,[e("div",null,[w(N,{to:"/_/panels/library/appointment",class:"tracking-tight absolute flex bg-white hover:bg-green-900 text-green-800 hover:text-white px-3 py-1 -mt-1 rounded-lg font-bold"},{default:H(()=>[pe,W(" Back ")]),_:1})]),be]),e("div",_e,[e("div",he,[e("div",ge,[e("div",ve,[fe,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":o[1]||(o[1]=s=>t.value.borrower_category=s),placeholder:"Borrower Category",disabled:""},null,512),[[i,t.value.borrower_category]])]),e("div",xe,[we,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":o[2]||(o[2]=s=>t.value.id_number=s),placeholder:"ID Number",disabled:""},null,512),[[i,t.value.id_number]])])]),e("div",ke,[e("div",ye,[Be,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":o[3]||(o[3]=s=>t.value.firstname=s),placeholder:"Firstname",disabled:""},null,512),[[i,t.value.firstname]])]),e("div",Ue,[Ve,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":o[4]||(o[4]=s=>t.value.lastname=s),placeholder:"Lastname",disabled:""},null,512),[[i,t.value.lastname]])])]),e("div",Ce,[e("div",Te,[Se,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":o[5]||(o[5]=s=>t.value.booking_date=s),placeholder:"Booking Date",disabled:""},null,512),[[i,t.value.booking_date]])]),e("div",ze,[De,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":o[6]||(o[6]=s=>t.value.booking_time=s),placeholder:"Booking Time",disabled:""},null,512),[[i,t.value.booking_time]])])]),e("div",Me,[Ne,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border","onUpdate:modelValue":o[7]||(o[7]=s=>t.value.email=s),placeholder:"Email",disabled:""},null,512),[[i,t.value.email]])])]),e("div",$e,[e("label",{class:k([{"bg-red-700":t.value.status==="pending","bg-yellow-500":t.value.status==="reserved","bg-green-900":t.value.status==="received","bg-blue-300":t.value.status==="returned"},"block uppercase tracking-wide text-white text-sm text-center mt-5 mb-5 py-1 rounded-sm"])}," Books ",2),e("ul",null,[(y(!0),f(J,null,K(t.value.books,(s,A)=>(y(),f("li",{key:A,class:"lg:flex gap-3"},[e("div",Ae,[Le,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":c=>s.book_title=c,placeholder:"Book Title",disabled:""},null,8,Ee),[[i,s.book_title]])]),e("div",Fe,[Re,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border capitalize","onUpdate:modelValue":c=>s.book_author=c,placeholder:"Book Author",disabled:""},null,8,qe),[[i,s.book_author]])]),e("div",Ie,[Oe,l(e("input",{class:"shadow-md p-2 rounded-sm w-full border uppercase","onUpdate:modelValue":c=>s.book_call_number=c,placeholder:"Book Call Number",disabled:""},null,8,Pe),[[i,s.book_call_number]])])]))),128))])])]),e("div",je,[e("div",Ge,[e("label",{class:k(["font-bold pt-1",{"text-red-700":t.value.status==="pending","text-yellow-500":t.value.status==="reserved","text-green-900":t.value.status==="received","text-blue-400":t.value.status==="returned"}])},"STATUS:",2),l(e("select",{"onUpdate:modelValue":o[8]||(o[8]=s=>t.value.status=s),name:"borrower_category",class:"shadow-md p-2 font-bold rounded-md w-full border border-[#e5e7eb] capitalize",required:"",onChange:o[9]||(o[9]=s=>T())},We,544),[[Q,t.value.status]])]),l(e("div",Xe,[e("div",{class:"flex items-center"},[Ye,e("div",{class:"flex gap-10 mr-10"},[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold",onClick:S},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold",onClick:z},"no")])])],512),[[x,_.value]])]),l(e("div",Ze," sending email, please wait ... ",512),[[x,v.value]])])])])]),w($)])}}};export{nt as default};
