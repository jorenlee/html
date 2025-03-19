import{_}from"./Do8Q8sEk.js";import{_ as f}from"./CJX8_LA6.js";import{_ as h}from"./PJH8cLt_.js";import{u as b,r as x,g as v,c as a,a as t,b as o,w as r,d as y,i as k,F as D,l as N,f as T,o as n,n as S,t as l}from"./C7epRmsl.js";import"./C5S46NFB.js";const V={class:"relative font-montserrat"},L={class:"lg:flex w-full mb-5 fixed bg-white z-10"},z={class:"lg:py-3 lg:bg-white bg-green-900 ml-auto lg:mr-5"},A={class:"flex text-center justify-between lg:mt-2.5"},B={class:"lg:h-4/6 block lg:pt-28 pt-[140px] lg:pb-10 bg-white"},C={class:"px-3 lg:mb-5 lg:w-fit w-11/12 mx-auto text-center py-3 shadow-lg"},F={class:"font-bold text-green-800 text-sm"},I={class:"px-3 shadow-lg lg:flex pb-10 gap-3"},$={class:"shadow w-full bg-white"},E={class:"lg:w-full"},M={class:"flex w-full"},U={class:"text-left lg:w-1/12 text-xs p-2 uppercase"},H={class:"text-left lg:w-1/12 text-xs p-2"},O={class:"text-left lg:w-1/12 text-xs p-2"},P={class:"text-left lg:w-1/12 text-xs p-2 uppercase"},R={class:"text-left lg:w-1/12 text-xs p-2"},q={key:0},G={key:1},J={class:"text-left lg:w-1/12 text-xs lg:p-2 flex"},K=["href"],Q=["src"],W={class:"text-left lg:w-1/12 text-xs p-2"},X={class:"text-left lg:w-1/12 text-xs p-2"},Y={class:"text-left lg:w-1/12 text-xs p-2"},ot={__name:"index",setup(Z){const g=b(),d=x(g.mainDevServer),p=x(null);return v(async()=>{p.value=await $fetch(d.value+"/api/investiture/list/").catch(c=>c.data)}),(c,e)=>{const i=_,m=f,u=h;return n(),a("div",V,[t("div",L,[o(i,{to:"/"},{default:r(()=>e[0]||(e[0]=[t("h1",{class:"lg:static flex items-center lg:mx-auto mx-3 lg:w-fit lg:px-8"},[t("span",{class:"lg:w-fit w-16 lg:mx-0 py-3 pr-3 lg:pl-0"},[t("img",{src:"https://lsu-media-styles.sgp1.digitaloceanspaces.com/lsu-public-images/banners/logo/lsuseal-mono.png",class:"lg:w-[60px] w-auto lg:mx-0 mx-auto"})]),t("span",{class:"ml-1"},[t("h1",{class:"lg:whitespace-nowrap uppercase text-green-800 font-bold text-3xl mt-1 font-hk-compression"},"la salle university"),t("span",{class:"lg:whitespace-nowrap text-2xl font-bold font-hk-compression -mt-2 flex capitalize"},"support our mission")])],-1)])),_:1}),t("div",z,[t("ul",A,[o(i,{to:"/"},{default:r(()=>e[1]||(e[1]=[t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Home ",-1)])),_:1}),o(i,{to:"/investiture"},{default:r(()=>e[2]||(e[2]=[t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Vision ",-1)])),_:1}),o(i,{to:"/investiture/donation/dashboard"},{default:r(()=>e[3]||(e[3]=[t("li",{class:"lg:text-green-800 text-white py-2 lg:text-base mx-5 text-xs lg:py-5 text-center hover:font-bold hover:underline cursor-pointer static whitespace-nowrap font-montserrat"},"Dashboard ",-1)])),_:1})])])]),t("div",B,[e[8]||(e[8]=t("div",{class:"bg-green-900 text-white py-1 mx-3"},[t("h2",{class:"text-center"},"Donation Log")],-1)),t("div",C,[t("h2",F,[e[4]||(e[4]=y("Total Amount ")),o(m)])]),t("div",I,[t("div",$,[t("div",E,[e[7]||(e[7]=k('<ul class="flex bg-green-900 text-white lg:w-full lg:overflow-auto overflow-x-scroll uppercase text-[10px]"><li class="lg:w-1/12 p-2">Payment Mode</li><li class="lg:w-1/12 p-2">Donated To</li><li class="lg:w-1/12 p-2">Amount</li><li class="lg:w-1/12 p-2">Name</li><li class="lg:w-1/12 p-2">Contact No.</li><li class="lg:w-1/12 p-2">Email</li><li class="lg:w-1/12 p-2">Transaction No.</li><li class="lg:w-1/12 p-2">Receipt</li><li class="lg:w-1/12 p-2">Donation ID</li><li class="lg:w-1/12 p-2">Usher ID</li><li class="lg:w-1/12 p-2">Date Time</li></ul>',1)),(n(!0),a(D,null,N(T(p),(s,w)=>(n(),a("div",{class:"hover:bg-gray-50 w-full lg:overflow-auto overflow-x-scroll",key:w},[t("ul",M,[t("li",U,[t("span",{class:S([[s.payment_method==="cash"?"font-black text-green-500 ":""],[s.payment_method==="bank transfer"?"text-orange-300  py-1 block ":""],[s.payment_method==="pledge"?" text-blue-600":""],[s.payment_method==="all"?"text-gray-700 ":""],"font-black"])},l(s.payment_method),3)]),t("li",H,l(s.donate_to),1),t("li",O,l(s.amount),1),t("li",P,l(s.name),1),e[5]||(e[5]=t("li",{class:"text-left lg:w-1/12 text-xs p-2"}," ... ",-1)),e[6]||(e[6]=t("li",{class:"text-left lg:w-1/12 min-w-[50px] text-xs p-2"}," ... ",-1)),t("li",R,[s.transaction_number?(n(),a("span",q," ... ")):(n(),a("span",G," N/A "))]),t("li",J,[t("a",{href:s.receipt_url,download:"",class:"lg:w-10 lg:h-10 w-[100px] h-[100px] border lg:rounded-full"},[t("img",{src:s.receipt_url,class:"lg:w-10 lg:h-10 w-[100px] h-[100px] border lg:rounded-full"},null,8,Q)],8,K)]),t("li",W,l(s.donation_id),1),t("li",X,l(s.usher_id),1),t("li",Y,l(s.date_time),1)])]))),128))])])])]),o(u)])}}};export{ot as default};
