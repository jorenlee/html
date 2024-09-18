import{_ as m}from"./Dhbgj7Ek.js";import{_ as u}from"./ClWBFrg_.js";import{_ as w}from"./BFWdOXU4.js";import{g as f,r as p,h as b,c as o,a as t,b as l,w as i,d as v,F as y,s as k,f as D,x as N,o as a,n as T,t as s}from"./6xoVAQCu.js";import"./DlAUqK2U.js";const S={class:"relative font-montserrat"},V={class:"lg:flex w-full mb-5 fixed bg-white z-10"},L=t("h1",{class:"lg:static flex items-center lg:mx-auto mx-3 lg:w-fit lg:px-8"},[t("span",{class:"lg:w-fit w-16 lg:mx-0 py-3 pr-3 lg:pl-0"},[t("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/lsuseal-mono.png",class:"lg:w-[60px] w-auto lg:mx-0 mx-auto"})]),t("span",{class:"ml-1"},[t("h1",{class:"lg:whitespace-nowrap uppercase text-green-800 font-bold text-3xl mt-1 font-hk-compression"},"la salle university"),t("span",{class:"lg:whitespace-nowrap text-2xl font-bold font-hk-compression -mt-2 flex capitalize"},"support our mission")])],-1),z={class:"lg:py-3 lg:bg-white bg-green-900 ml-auto lg:mr-5"},A={class:"flex text-center justify-between lg:mt-2.5"},B=t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Home ",-1),C=t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Vision ",-1),F=t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Dashboard ",-1),I={class:"lg:h-4/6 block lg:pt-28 pt-[140px] lg:pb-10 bg-white"},E=t("div",{class:"bg-green-900 text-white py-1 mx-3"},[t("h2",{class:"text-center"},"Donation Log")],-1),M={class:"px-3 lg:mb-5 lg:w-fit w-11/12 mx-auto text-center py-3 shadow-lg"},U={class:"font-bold text-green-800 text-sm"},$={class:"px-3 shadow-lg lg:flex pb-10 gap-3"},H={class:"shadow w-full bg-white"},O={class:"lg:w-full"},P=N('<ul class="flex bg-green-900 text-white lg:w-full lg:overflow-auto overflow-x-scroll uppercase text-[10px]"><li class="lg:w-1/12 p-2">Payment Mode</li><li class="lg:w-1/12 p-2">Donated To</li><li class="lg:w-1/12 p-2">Amount</li><li class="lg:w-1/12 p-2">Name</li><li class="lg:w-1/12 p-2">Contact No.</li><li class="lg:w-1/12 p-2">Email</li><li class="lg:w-1/12 p-2">Transaction No.</li><li class="lg:w-1/12 p-2">Receipt</li><li class="lg:w-1/12 p-2">Donation ID</li><li class="lg:w-1/12 p-2">Usher ID</li><li class="lg:w-1/12 p-2">Date Time</li></ul>',1),R={class:"flex w-full"},q={class:"text-left lg:w-1/12 text-xs p-2 uppercase"},G={class:"text-left lg:w-1/12 text-xs p-2"},J={class:"text-left lg:w-1/12 text-xs p-2"},K={class:"text-left lg:w-1/12 text-xs p-2 uppercase"},Q=t("li",{class:"text-left lg:w-1/12 text-xs p-2"}," ... ",-1),W=t("li",{class:"text-left lg:w-1/12 min-w-[50px] text-xs p-2"}," ... ",-1),X={class:"text-left lg:w-1/12 text-xs p-2"},Y={key:0},Z={key:1},j={class:"text-left lg:w-1/12 text-xs lg:p-2 flex"},tt=["href"],et=["src"],st={class:"text-left lg:w-1/12 text-xs p-2"},lt={class:"text-left lg:w-1/12 text-xs p-2"},ot={class:"text-left lg:w-1/12 text-xs p-2"},_t={__name:"index",setup(at){const x=f(),_=p(x.mainDevServer),c=p(null);return b(async()=>{c.value=await $fetch(_.value+"/api/investiture/list/").catch(r=>r.data)}),(r,nt)=>{const n=m,g=u,d=w;return a(),o("div",S,[t("div",V,[l(n,{to:"/"},{default:i(()=>[L]),_:1}),t("div",z,[t("ul",A,[l(n,{to:"/"},{default:i(()=>[B]),_:1}),l(n,{to:"/investiture"},{default:i(()=>[C]),_:1}),l(n,{to:"/investiture/donation/dashboard"},{default:i(()=>[F]),_:1})])])]),t("div",I,[E,t("div",M,[t("h2",U,[v("Total Amount "),l(g)])]),t("div",$,[t("div",H,[t("div",O,[P,(a(!0),o(y,null,k(D(c),(e,h)=>(a(),o("div",{class:"hover:bg-gray-50 w-full lg:overflow-auto overflow-x-scroll",key:h},[t("ul",R,[t("li",q,[t("span",{class:T([[e.payment_method==="cash"?"font-black text-green-500 ":""],[e.payment_method==="bank transfer"?"text-orange-300  py-1 block ":""],[e.payment_method==="pledge"?" text-blue-600":""],[e.payment_method==="all"?"text-gray-700 ":""],"font-black"])},s(e.payment_method),3)]),t("li",G,s(e.donate_to),1),t("li",J,s(e.amount),1),t("li",K,s(e.name),1),Q,W,t("li",X,[e.transaction_number?(a(),o("span",Y," ... ")):(a(),o("span",Z," N/A "))]),t("li",j,[t("a",{href:e.receipt_url,download:"",class:"lg:w-10 lg:h-10 w-[100px] h-[100px] border lg:rounded-full"},[t("img",{src:e.receipt_url,class:"lg:w-10 lg:h-10 w-[100px] h-[100px] border lg:rounded-full"},null,8,et)],8,tt)]),t("li",st,s(e.donation_id),1),t("li",lt,s(e.usher_id),1),t("li",ot,s(e.date_time),1)])]))),128))])])])]),l(d)])}}};export{_t as default};