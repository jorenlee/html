import{_ as m}from"./CuY7fYME.js";import{_ as u,a as w}from"./C2uEVRUN.js";import{g as f,r as p,h as b,c as o,a as t,b as l,w as i,F as v,s as y,f as k,x as D,o as a,n as N,t as s}from"./BlFfZE4o.js";import"./DlAUqK2U.js";const S={class:"relative font-montserrat"},T={class:"lg:flex w-full mb-5 fixed bg-white z-10"},L=t("h1",{class:"lg:static flex items-center lg:mx-auto mx-3 lg:w-fit lg:px-8"},[t("span",{class:"lg:w-fit w-16 lg:mx-0 py-3 pr-3 lg:pl-0"},[t("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/lsuseal-mono.png",class:"lg:w-[60px] w-auto lg:mx-0 mx-auto"})]),t("span",{class:"ml-1"},[t("h1",{class:"lg:whitespace-nowrap uppercase text-green-800 font-bold text-3xl mt-1 font-hk-compression"},"la salle university"),t("span",{class:"lg:whitespace-nowrap text-2xl font-bold font-hk-compression -mt-2 flex capitalize"},"support our mission")])],-1),V={class:"lg:py-3 lg:bg-white bg-green-900 ml-auto lg:mr-5"},z={class:"flex text-center justify-between lg:mt-2.5"},A=t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Home ",-1),B=t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Vision ",-1),C=t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Dashboard ",-1),F={class:"lg:h-4/6 block lg:pt-28 pt-[140px] lg:pb-10 bg-white"},I=t("div",{class:"bg-green-900 text-white py-1 mx-3"},[t("h2",{class:"text-center"},"Donation Log")],-1),E={class:"px-3 mb-5 lg:w-fit w-11/12 mx-auto text-center py-3 shadow-lg"},M=t("h2",{class:"font-bold text-green-800 mb-3"},"Total Amount Raised",-1),R={class:"text-3xl font-bold tracking-widest"},U={class:"px-3 shadow-lg lg:flex pb-10 gap-3"},$={class:"shadow w-full bg-white"},H={class:"lg:w-full"},O=D('<ul class="flex bg-green-900 text-white lg:w-full lg:overflow-auto overflow-x-scroll uppercase text-[10px]"><li class="lg:w-1/12 p-2">Payment Mode</li><li class="lg:w-1/12 p-2">Donated To</li><li class="lg:w-1/12 p-2">Amount</li><li class="lg:w-1/12 p-2">Name</li><li class="lg:w-1/12 p-2">Contact No.</li><li class="lg:w-1/12 p-2">Email</li><li class="lg:w-1/12 p-2">Transaction No.</li><li class="lg:w-1/12 p-2">Receipt</li><li class="lg:w-1/12 p-2">Donation ID</li><li class="lg:w-1/12 p-2">Usher ID</li><li class="lg:w-1/12 p-2">Date Time</li></ul>',1),P={class:"flex w-full"},q={class:"text-left lg:w-1/12 text-xs p-2 uppercase"},G={class:"text-left lg:w-1/12 text-xs p-2"},J={class:"text-left lg:w-1/12 text-xs p-2"},K={class:"text-left lg:w-1/12 text-xs p-2 uppercase"},Q={class:"text-left lg:w-1/12 text-xs p-2"},W={class:"text-left lg:w-1/12 min-w-[50px] text-xs p-2 overflow-x-scroll"},X={class:"text-left lg:w-1/12 text-xs p-2"},Y={key:0},Z={key:1},j={class:"text-left lg:w-1/12 text-xs lg:p-2 flex"},tt=["href"],et=["src"],st={class:"text-left lg:w-1/12 text-xs p-2"},lt={class:"text-left lg:w-1/12 text-xs p-2"},ot={class:"text-left lg:w-1/12 text-xs p-2"},xt={__name:"index",setup(at){const x=f(),_=p(x.mainServer),c=p(null);return b(async()=>{c.value=await $fetch(_.value+"/api/investiture/list/").catch(r=>r.data)}),(r,nt)=>{const n=m,d=u,g=w;return a(),o("div",S,[t("div",T,[l(n,{to:"/"},{default:i(()=>[L]),_:1}),t("div",V,[t("ul",z,[l(n,{to:"/"},{default:i(()=>[A]),_:1}),l(n,{to:"/investiture"},{default:i(()=>[B]),_:1}),l(n,{to:"/investiture/donation/dashboard"},{default:i(()=>[C]),_:1})])])]),t("div",F,[I,t("div",E,[M,t("p",R,[l(d)])]),t("div",U,[t("div",$,[t("div",H,[O,(a(!0),o(v,null,y(k(c),(e,h)=>(a(),o("div",{class:"hover:bg-gray-50 w-full lg:overflow-auto overflow-x-scroll",key:h},[t("ul",P,[t("li",q,[t("span",{class:N([[e.payment_method==="cash"?"font-black text-green-500 ":""],[e.payment_method==="bank transfer"?"text-orange-300  py-1 block ":""],[e.payment_method==="pledge"?" text-blue-600":""],[e.payment_method==="all"?"text-gray-700 ":""],"font-black"])},s(e.payment_method),3)]),t("li",G,s(e.donate_to),1),t("li",J,s(e.amount),1),t("li",K,s(e.name),1),t("li",Q,s(e.contact_number),1),t("li",W,s(e.email),1),t("li",X,[e.transaction_number?(a(),o("span",Y,s(e.transaction_number),1)):(a(),o("span",Z," N/A "))]),t("li",j,[t("a",{href:e.receipt_url,download:"",class:"lg:w-10 lg:h-10 w-[100px] h-[100px] border lg:rounded-full"},[t("img",{src:e.receipt_url,class:"lg:w-10 lg:h-10 w-[100px] h-[100px] border lg:rounded-full"},null,8,et)],8,tt)]),t("li",st,s(e.donation_id),1),t("li",lt,s(e.usher_id),1),t("li",ot,s(e.date_time),1)])]))),128))])])])]),l(g)])}}};export{xt as default};
