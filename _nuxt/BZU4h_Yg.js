import{_ as S}from"./DbJM5MhW.js";import{u as C,r as i,E as L,c as r,n as l,q as z,B,a as e,d as V,A as m,y as f,t as o,F as A,z as E,b as U,o as a}from"./CHOFwWJE.js";import{_ as j}from"./5JjjnmY2.js";/* empty css        */import"./C5S46NFB.js";const F={key:0,class:"min-h-screen w-full items-center"},I={key:0,class:"mt-3 mb-2 flex items-center lg:shadow-none shadow-lg w-fit mx-auto"},T={key:1},H={key:2},M={class:""},R={class:"bg-green-800"},$={class:"lg:flex items-center mx-auto justify-between py-2"},q={key:0,class:"px-5 font-bold text-white"},W={class:"px-3 pt-5"},G={class:""},J={class:"text-left text-xs w-1/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1"},K={class:"text-left text-xs w-1/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1"},O={class:"text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1"},P={class:"text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] px-1.5 py-1"},Q={class:"text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3"},X={class:"text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3"},Y={class:"text-left text-xs w-2/12 uppercase shrink-0 border-gray-100 hover:bg-[#464646] text-white hover:text-[#cacaca] bg-[#181818] py-1 px-3"},Z={key:1,class:"text-center text-gray-800 text-xs"},oe={__name:"index",async setup(ee){let n,g;const b=C(),v=i(b.mainDevServer);let c=i(([n,g]=L(()=>$fetch(v.value+"/api/admissions-first-sem/student-profile/list/").catch(_=>_.data)),n=await n,g(),n)),w=i(c.value||null);const d=i(""),x=i(!0),u=i(!1),p=i(!1),h=i(""),y=()=>{h.value=d.value,h.value==="ASC000"&&h.value.length===6?(p.value=!0,u.value=!1,x.value=!1):(x.value=!1,p.value=!1,u.value=!0)},k=()=>{u.value=!1,x.value=!0,h.value="",d.value="",p.value=!1};return(_,t)=>{const N=S;return a(),r("div",null,[l(c).length===4236?(a(),r("div",F,[x.value?(a(),r("div",I,[z(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>d.value=s),type:"password",maxlength:"6",class:"h-8 rounded-tl-sm rounded-bl-sm w-[110px] border-y-2 border-l-2 px-2 border-green-800",placeholder:"Enter Code"},null,512),[[B,d.value]]),e("button",{class:"bg-green-800 text-white hover:bg-green-700 border-2 border-green-800 px-2 h-8 lg:shadow-none shadow-lg",onClick:y},t[1]||(t[1]=[V(" Verify "),e("i",{class:"fa fa-check ml-1"},null,-1)]))])):m("",!0),u.value?(a(),r("div",T,[t[2]||(t[2]=e("p",{class:"text-center text-red-800 font-montserrat text-sm mt-5"}," Code does not exists! ",-1)),e("button",{class:"bg-green-800 text-white hover:bg-white hover:text-green-800 border border-green-800 px-2 py-1 mt-3 mx-auto uppercase text-xs rounded-md w-fit block",onClick:k},"reset")])):m("",!0),p.value?(a(),r("div",H,[e("div",M,[e("div",R,[e("div",$,[t[3]||(t[3]=f('<div class="lg:flex items-center text-white gap-1 lg:px-1"><div class="lg:p-0 pt-0.5 pb-3 mx-3"><img class="rounded-full w-10" src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"></div><div class="flex py-2 items-center lg:border-none border-t-2 border-white justify-center"><i class="fa fa-user mr-2 mt-1" aria-hidden="true"></i><h1 class="text-sm pt-1"> LSU Admissions and Scholarships Center </h1></div></div>',1)),l(c)?(a(),r("div",q," Total: "+o(l(c).length),1)):m("",!0)])]),e("div",W,[e("div",G,[t[4]||(t[4]=f('<ul class="flex shadow-lg text-xs"><li class="w-1/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">LSU ID</li><li class="w-1/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Last Name</li><li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">First Name</li><li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white px-1.5 py-2">Middle Name</li><li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">Learner Reference Info Number</li><li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">CHED Award Number</li><li class="w-2/12 shrink-0 text-left capitalize bg-green-800 text-white py-2 px-3">DSWD Household Number</li></ul>',1)),(a(!0),r(A,null,E(l(j).orderBy(l(w),"created_at","desc"),(s,D)=>(a(),r("ul",{class:"flex mb-0 border-b",key:D},[e("li",J,o(s.primary_info.student_lsu_id_number||"N/A"),1),e("li",K,o(s.primary_info.lastname||""),1),e("li",O,o(s.primary_info.firstname||""),1),e("li",P,o(s.primary_info.middlename||""),1),e("li",Q,o(s.student_education_information_number.learner_reference_number||""),1),e("li",X,o(s.student_education_information_number.ched_award_number||""),1),e("li",Y,o(s.student_education_information_number.dswd_household_number||""),1)]))),128))])])]),U(N)])):m("",!0)])):(a(),r("div",Z," Loading Data... "))])}}};export{oe as default};
