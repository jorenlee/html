import{_ as K}from"./DQfH6pqY.js";import{u as Q,m as X,g as Z,r as d,h as ee,B as te,c as r,a as t,t as m,f as i,F as z,s as M,i as $,l as le,j as se,v as ae,d as j,z as w,b as ie,x as re,o,n as y,p as oe,e as ne}from"./DvtV7oqB.js";import{_ as ue}from"./vUEbHlag.js";/* empty css        */import"./Ben9xlMi.js";import"./C5S46NFB.js";import{_ as de}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const g=D=>(oe("data-v-18f20e1e"),D=D(),ne(),D),ce={class:""},he={class:"flex min-h-screen"},ge={class:"w-full"},pe={class:"bg-green-800"},me={class:"lg:flex items-center mx-auto justify-between py-2"},_e={class:"lg:flex items-center text-white gap-1 lg:px-1"},fe=g(()=>t("div",{class:"lg:p-0 pt-0.5 pb-3 mx-3"},[t("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),ve={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},xe=g(()=>t("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),be={class:"text-sm pt-1"},we=g(()=>t("i",{class:"fa fa-sign-out text-xl"},null,-1)),ye=g(()=>t("h1",{class:"text-xs p-1.5"},"Log Out",-1)),ke=[we,ye],Ce={class:"px-3 pt-5"},Se={class:"lg:flex items-center mb-5"},Ae={class:"w-full"},Ve={class:"text-xs mr-4 lg:mb-0 mb-2 block font-bold text-green-900"},Ee={class:"block"},Te={class:"w-full flex items-center lg:mt-0 mt-5"},De={key:0},ze={class:"w-full"},Me={class:""},Ne={class:"shadow mx-auto text-xs"},Le={class:""},Be=re('<div class="lg:flex hidden header w-full p-2 bg-green-800 text-white items-center shadow-lg" data-v-18f20e1e><ul class="flex justify-between w-full lg:whitespace-nowrap" data-v-18f20e1e><li class="lg:w-1/12" data-v-18f20e1e>Tracking ID</li><li class="lg:w-1/12" data-v-18f20e1e>LSU ID</li><li class="lg:w-1/12 text-left" data-v-18f20e1e>Full Name</li><li class="text-center lg:w-7/12" data-v-18f20e1e>Status</li><li class="px-1 lg:w-1/12 text-center" data-v-18f20e1e>Action</li></ul></div>',1),Ie={key:0,class:"w-full"},Fe={class:"lg:px-2 font-bold text-xs text-green-800 lg:w-1/12 uppercase"},Oe={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap uppercase"},Ue={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap uppercase"},$e={class:"flex font-bold text-xs text-green-800 lg:w-7/12 text-center"},je={class:"flex lg:items-center lg:h-fit h-0 lg:w-full w-3/12 lg:ml-4 relative"},Re={key:0},He=g(()=>t("i",{class:"fa fa-address-card"},null,-1)),Je=[He],Pe={key:1},qe=g(()=>t("i",{class:"fa fa-calendar-check"},null,-1)),We=[qe],Ye={key:2},Ge=g(()=>t("i",{class:"fa fa-money-bill-alt"},null,-1)),Ke=[Ge],Qe={key:3},Xe=g(()=>t("i",{class:"fa fa-star"},null,-1)),Ze=[Xe],et={class:"flex justify-center font-bold text-xs text-green-800 lg:w-1/12 lg:static absolute top-2 right-2"},tt={class:"w-auto px-1 flex gap-10"},lt={class:""},st=["onClick"],at=g(()=>t("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),it=[at],rt={key:0,class:""},ot=["onClick"],nt=g(()=>t("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),ut=[nt],dt={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ct=g(()=>t("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),ht={key:1,class:"itallic text-gray-700 text-center p-1"},gt={key:0,class:"flex items-center justify-center w-fit mx-auto font-bold text-sm rounded-lg my-5"},pt=g(()=>t("i",{class:"fa fa-angle-left px-2","aria-hidden":"true"},null,-1)),mt={class:"border-t border-gray-50 flex lg:w-6/12 w-[150px] justify-evenly overflow-x-scroll px-2"},_t=["onClick"],ft=g(()=>t("i",{class:"fa fa-angle-right px-2","aria-hidden":"true"},null,-1)),vt={key:1,class:"mx-auto w-fit my-20"},xt=g(()=>t("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1)),bt=g(()=>t("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)),wt=[xt,bt],yt={__name:"index",setup(D){const A=Q();X();const e=Z(),N=d(e.mainServer);let l=d(0);const L=d(!1);let k=d(""),p=d(null),B=d(0),f=d(0);const I=d(!0),C=d(25),c=d(25),S=d(0);let F=d(),_,v,E=d(!1),x=d(""),V=d(1),R=()=>{k.value===""?(l.value=p.value,O(1)):(S.value=0,l.value=p.value.filter(function(n){return k.value===n.tracking_id||k.value===n.student_lsu_id_number}))};ee(async()=>{let n=await $fetch(N.value+"/api/admissions/list/").catch(a=>a.data);if(p.value=n,B.value=n.length||0,e.user.isAuthenticated&&(e.user.email==="saodirector@lsu.edu.ph"||e.user.email==="ascdirector@lsu.edu.ph"||e.user.email==="admissions@lsu.edu.ph"||e.user.email==="scholarships@lsu.edu.ph"||e.user.email==="katerijunine.tabernero@lsu.edu.ph"||e.user.email==="sherryl.origenes@lsu.edu.ph"||e.user.email==="lourdes_niebla@lsu.edu.ph"||e.user.email==="lindakj11196@gmail.com"||e.user.email==="jorenleeluna24@gmail.com"||e.user.email==="jayharold.reazol@lsu.edu.ph"||e.user.email==="cheryl.osorio@lsu.edu.ph"||e.user.email==="cte.registrar@lsu.edu.ph"||e.user.email==="onlinerequest@lsu.edu.ph"||e.user.email==="ccsea.registrar@lsu.edu.ph"||e.user.email==="cba.registrar@lsu.edu.ph"||e.user.email==="patrick.obut@lsu.edu.ph"||e.user.email==="maryeloise.pilvera@lsu.edu.ph"||e.user.email==="johny14_gonzaga@lsu.edu.ph"||e.user.email==="denzelroy.suarez@lsu.edu.ph"||e.user.email==="jason.yap@lsu.edu.ph"||e.user.email==="rommel.rosal@lsu.edu.ph"))l.value=p.value||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length;else if(e.user.isAuthenticated&&(e.user.email==="ramel.recentes@lsu.edu.ph"||e.user.email==="markkrisli.delapena@lsu.edu.ph"||e.user.email==="grace.dolloso@lsu.edu.ph"||e.user.email==="ladyvi.tagailo@lsu.edu.ph"||e.user.email==="earl.gangoso@lsu.edu.ph"||e.user.email==="honimar.panganiban@lsu.edu.ph"||e.user.email==="olaira.imbong@lsu.edu.ph"||e.user.email==="jessel.abarca@lsu.edu.ph")){let a=p.value.filter(function(h){return h.admissions_list_filter.college==="CCSEA (College of Computer Studies, Engineering, and Architecture)"});x.value="CCSEA",l.value=a||0,f.value=a.length||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="anilou.dilao@lsu.edu.ph"||e.user.email==="marvel.deromol@lsu.edu.ph"||e.user.email==="nizel.apas@lsu.edu.ph"||e.user.email==="noel.alamin@lsu.edu.ph")){let a=p.value.filter(function(h){return h.admissions_list_filter.college==="CAS (College of Arts and Sciences)"});x.value="CAS",l.value=a||0,f.value=a.length||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="emma.suana@lsu.edu.ph"||e.user.email==="jenel.cruz@lsu.edu.ph"||e.user.email==="johnmark.saldivar@lsu.edu.ph"||e.user.email==="kenneth.yagong@lsu.edu.ph")){let a=p.value.filter(function(h){return h.admissions_list_filter.college==="CTE (College of Teacher Education)"});x.value="CTE",l.value=a||0,f.value=a.length||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="lowelle.pacot@lsu.edu.ph"||e.user.email==="jennifer.aguanta@lsu.edu.ph"||e.user.email==="jaysavelle.tubigon@lsu.edu.ph"||e.user.email==="jorenlee.luna@lsu.edu.ph")){let a=p.value.filter(function(h){return h.admissions_list_filter.college==="CBA (College of Business and Accountancy)"});x.value="CBA",l.value=a||0,f.value=a.length||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="arlene.apao@lsu.edu.ph"){let a=p.value.filter(function(h){return h.admissions_list_filter.college==="CON (College of Nursing)"});x.value="CON",l.value=a||0,f.value=a.length||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="joed.layna@lsu.edu.ph"||e.user.email==="michael.angelo.pagara@lsu.edu.ph"||e.user.email==="karen.linganay@lsu.edu.ph")){let a=p.value.filter(function(h){return h.admissions_list_filter.college==="CTHM (College of Tourism and Hospitality Management)"});x.value="CTHM",l.value=a||0,f.value=a.length||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="estephanie.zamora@lsu.edu.ph"){let a=p.value.filter(function(h){return h.admissions_list_filter.college==="CCJE (College of Criminal Justice Education)"});x.value="CCJE",l.value=a||0,f.value=a.length||0,_=Math.ceil(l._rawValue.length/c.value),v=l._rawValue.length}else(e.user.email===""||e.user.email===void 0)&&A.push("/enrollment/admin/login"),A.push("/_/unauthorized");A.push("/enrollment/admin/dashboard")});let H=te(()=>l.value.slice(S.value,c.value));const J=()=>{V.value>1&&V.value--,S.value>0&&(S.value-=C.value,c.value-=C.value,console.log("prev"))},P=()=>{V.value<_&&V.value++,c.value<v&&(S.value+=C.value,c.value+=C.value,console.log("next"))},O=n=>{V.value=n,S.value=0,c.value=C.value,n>1&&(c.value*=n,S.value=c.value-C.value)},q=d([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),W=async n=>{A.push("/enrollment/admin/dashboard/update-student/"+n),I.value=!1,L.value=!0},Y=()=>{A.push("/enrollment"),e.removeToken()},U=n=>{E.value=!E.value,F.value=n},G=async()=>{await $fetch(N.value+"/api/admissions/"+F.value+"/delete/",{method:"DELETE",headers:{Authorization:e.user.token,"Content-Type":"application/json"}}).then(n=>{console.log("response",n),A.go(),E.value=!E.value})};return(n,a)=>{const h=K;return o(),r("div",ce,[t("div",he,[t("div",ge,[t("div",pe,[t("div",me,[t("div",_e,[fe,t("div",ve,[xe,t("h1",be,m(i(e).user.email),1)])]),t("button",{onClick:Y,class:"flex items-center hover:font-bold py-2 lg:static absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-4 hover:text-green-900 hover:bg-white text-white rounded-xl"},ke)])]),t("div",Ce,[t("div",Se,[t("div",Ae,[(o(!0),r(z,null,M(q.value,(u,T)=>(o(),r("div",{class:"lg:flex items-center block lg:text-left text-center",key:T},[t("label",Ve,[t("span",Ee,"Total Enrollees : "+m(i(B)),1),t("span",{class:y(["block",i(f)===0?"hidden":""])}," Total "+m(i(x))+" Enrollees : "+m(i(f)),3)])]))),128))]),t("div",Te,[$(t("input",{"onUpdate:modelValue":a[0]||(a[0]=u=>se(k)?k.value=u:k=u),type:"text",class:"shadow-lg search w-full border border-b-4 border-green-800 h-8 rounded-lg",placeholder:"Search Tracking ID or LSU ID Number then press Enter",onChange:a[1]||(a[1]=u=>i(R)())},null,544),[[le,i(k)]])])]),I.value?(o(),r("div",De,[t("div",ze,[t("div",Me,[t("div",Ne,[t("div",Le,[Be,i(l).length>0?(o(),r("div",Ie,[(o(!0),r(z,null,M(i(ue).orderBy(i(H),"created_at","asc"),(u,T)=>(o(),r("ul",{class:"lg:flex justify-between w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative",key:T},[t("li",Fe,m(u.tracking_id),1),t("li",Oe,m(u.student_lsu_id_number),1),t("li",Ue,m(u.student_personal_info.firstname||"")+" "+m(u.student_personal_info.lastname||""),1),t("li",$e,[(o(!0),r(z,null,M(u.enrollment_tracking_status,(s,b)=>(o(),r("div",{class:"relative w-full lg:py-2 py-1 block",key:b},[t("div",je,[t("p",{class:y(["text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[s.status==="yes"?"bg-green-900 text-white":""],[s.status==="no"?"bg-red-700 text-white":""],[s.status===""?"bg-gray-300 text-gray-200":""],[s.status==="ongoing"?"bg-blue-800 text-white":""],[b===3?"ml-0":""]])},m(b+1),3),t("div",{class:y(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden",[s.status==="yes"?"bg-green-900 text-white":""],[s.status==="no"?"bg-red-700 text-white":""],[s.status===""?"bg-gray-300 text-gray-200":""],[s.status==="ongoing"?"bg-blue-800 text-white":""],[b===3?"hidden":"lg:w-full w-5"]])},null,2)]),t("div",{class:y(["lg:static lg:text-center lg:w-auto w-full",""])},[t("p",{class:y(["capitalize lg:w-fit mx-auto text-xs py-1 lg:py-0",[s.status==="yes"?"bg-green-900 text-white":""],[s.status==="no"?"bg-red-700 text-white":""],[s.status===""?"bg-gray-300 text-gray-200":""],[s.status==="ongoing"?"bg-blue-800 text-white":""],[b===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[t("div",{class:y(["lg:flex hidden",[s.status==="yes"?"text-green-900 bg-white":""],[s.status==="no"?"text-red-700 bg-white":""],[s.status===""?"text-gray-300 bg-white":""],[s.status==="ongoing"?"text-blue-800 bg-white":""],[b===3?"lg:-mt-5":"lg:-mt-2"]])},[t("span",null,m(s.track_name),1)],2),t("div",{class:y(["lg:hidden flex pl-7",[s.status==="yes"?"bg-green-900 text-white":""],[s.status==="no"?"bg-red-700 text-white":""],[s.status===""?"bg-gray-300 text-gray-200":""],[s.status==="ongoing"?"bg-blue-800 text-white":""],[b===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[s.track_name==="admissions"?(o(),r("span",Re,Je)):w("",!0),s.track_name==="advising"?(o(),r("span",Pe,We)):w("",!0),s.track_name==="accounting"?(o(),r("span",Ye,Ke)):w("",!0),s.track_name==="evaluation"||s.track_name==="verification"?(o(),r("span",Qe,Ze)):w("",!0)],2)],2)],2)]))),128))]),t("li",et,[t("div",tt,[t("div",lt,[t("button",{onClick:s=>W(u.id)},it,8,st)]),i(e).user.email==="saodirector@lsu.edu.ph"||i(e).user.email==="ascdirector@lsu.edu.ph"||i(e).user.email==="admissions@lsu.edu.ph"||i(e).user.email==="scholarships@lsu.edu.ph"||i(e).user.email==="katerijunine.tabernero@lsu.edu.ph"||i(e).user.email==="sherryl.origenes@lsu.edu.ph"||i(e).user.email==="lourdes.niebla@lsu.edu.ph"||i(e).user.email==="lindakj11196@gmail.com"||i(e).user.email==="jorenleeluna24@gmail.com"||i(e).user.email==="jayharold.reazol@lsu.edu.ph"?(o(),r("div",rt,[t("button",{onClick:s=>U(u.id),class:"cursor-pointer"},ut,8,ot)])):w("",!0)])])]))),128)),$(t("div",dt,[ct,t("div",{class:"flex gap-5 mx-auto w-fit my-5"},[t("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:G},"Yes"),t("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:U},"Cancel")])],512),[[ae,i(E)]])])):(o(),r("div",ht," Loading Please Wait ... "))])]),i(l).length>C.value?(o(),r("div",gt,[t("div",{onClick:J,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[pt,j(" Prev ")]),t("ul",mt,[(o(!0),r(z,null,M(i(_),(u,T)=>(o(),r("li",{class:y(["hover:bg-green-900 hover:text-white cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",i(V)===u?"bg-green-900 text-white":""]),key:T,onClick:s=>O(u)},m(u),11,_t))),128))]),t("div",{onClick:P,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[j(" Next "),ft])])):w("",!0)])])])):w("",!0),L.value?(o(),r("div",vt,wt)):w("",!0)])])]),ie(h)])}}},zt=de(yt,[["__scopeId","data-v-18f20e1e"]]);export{zt as default};
