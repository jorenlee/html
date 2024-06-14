import{_ as Q}from"./LZ88SyS9.js";import{u as X,m as Z,g as ee,r as d,h as te,B as le,c as o,a as t,t as m,f as a,F as D,s as z,i as F,l as se,j as ae,v as ie,d as O,z as x,b as oe,x as ne,o as n,n as V,p as re,e as ue}from"./BfjF16w0.js";import{_ as de}from"./vUEbHlag.js";/* empty css        */import"./DMG3FHpu.js";import"./C5S46NFB.js";import{_ as ce}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const g=T=>(re("data-v-202e630a"),T=T(),ue(),T),he={class:""},ge={class:"flex min-h-screen"},pe={class:"w-full"},me={class:"bg-green-800"},_e={class:"lg:flex items-center mx-auto justify-between py-2"},ve={class:"lg:flex items-center text-white gap-1 lg:px-1"},fe=g(()=>t("div",{class:"lg:p-0 pt-0.5 pb-3 mx-3"},[t("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),xe={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},be=g(()=>t("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),we={class:"text-sm pt-1"},ye=g(()=>t("i",{class:"fa fa-sign-out text-xl"},null,-1)),ke=g(()=>t("h1",{class:"text-xs p-1.5"},"Log Out",-1)),Ce=[ye,ke],Ae={class:"px-3 pt-5"},Se={class:"lg:flex items-center mb-5"},Ee={class:"w-full"},Ve={class:"text-xs mr-4 lg:mb-0 mb-2 block font-bold text-green-900"},Te={class:"block"},De={class:"w-full flex items-center lg:mt-0 mt-5"},ze={key:0},Le={class:"w-full"},je={class:""},Me={class:"shadow mx-auto text-xs"},Ne={class:""},Ie=ne('<div class="lg:flex hidden header w-full p-2 bg-green-800 text-white items-center shadow-lg" data-v-202e630a><ul class="flex justify-between w-full lg:whitespace-nowrap" data-v-202e630a><li class="lg:w-1/12" data-v-202e630a>Tracking ID</li><li class="lg:w-1/12" data-v-202e630a>LSU ID</li><li class="lg:w-1/12 text-left" data-v-202e630a>Full Name</li><li class="text-center lg:w-7/12" data-v-202e630a>Status</li><li class="px-1 lg:w-1/12 text-center" data-v-202e630a>Action</li></ul></div>',1),Be={key:0,class:"w-full"},$e={class:"lg:px-2 font-bold text-xs text-green-800 lg:w-1/12 uppercase"},Fe={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap uppercase"},Oe={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap uppercase"},Ue={class:"flex font-bold text-xs text-green-800 lg:w-7/12 text-center"},Re={class:"flex lg:items-center lg:h-fit h-0 lg:w-full w-3/12 lg:ml-4 relative"},He={class:"lg:flex hidden"},Je={class:"lg:hidden flex pl-7"},Pe={key:0},qe=g(()=>t("i",{class:"fa fa-address-card"},null,-1)),We=[qe],Ye={key:1},Ge=g(()=>t("i",{class:"fa fa-calendar-check"},null,-1)),Ke=[Ge],Qe={key:2},Xe=g(()=>t("i",{class:"fa fa-money-bill-alt"},null,-1)),Ze=[Xe],et={key:3},tt=g(()=>t("i",{class:"fa fa-star"},null,-1)),lt=[tt],st={class:"flex justify-center font-bold text-xs text-green-800 lg:w-1/12 lg:static absolute top-2 right-2"},at={class:"w-auto px-1 flex gap-7"},it={class:""},ot=["onClick"],nt=g(()=>t("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),rt=[nt],ut={key:0,class:""},dt=["onClick"],ct=g(()=>t("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),ht=[ct],gt=["onClick"],pt={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},mt=g(()=>t("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),_t={key:1,class:"itallic text-gray-700 text-center p-1"},vt={key:0,class:"flex items-center justify-center w-fit mx-auto font-bold text-sm rounded-lg my-5"},ft=g(()=>t("i",{class:"fa fa-angle-left px-2","aria-hidden":"true"},null,-1)),xt={class:"border-t border-gray-50 flex lg:w-6/12 w-[150px] justify-evenly overflow-x-scroll px-2"},bt=["onClick"],wt=g(()=>t("i",{class:"fa fa-angle-right px-2","aria-hidden":"true"},null,-1)),yt={key:1,class:"mx-auto w-fit my-20"},kt=g(()=>t("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1)),Ct=g(()=>t("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)),At=[kt,Ct],St={__name:"index",setup(T){const C=X();Z();const e=ee(),L=d(e.mainDevServer);let l=d(0);const j=d(!1);let w=d(""),p=d(null),M=d(0),_=d(0);const N=d(!0),y=d(25),c=d(25),k=d(0);let I=d(),v,f,S=d(!1),b=d(""),U=d(0),R=()=>{w.value===""?(l.value=p.value,B(1)):(k.value=0,l.value=p.value.filter(function(r){return w.value===r.tracking_id||w.value===r.student_lsu_id_number}))};te(async()=>{let r=await $fetch(L.value+"/api/admissions/list/").catch(s=>s.data);if(p.value=r,console.log("enrolleesList.value",p.value),M.value=r.length||0,e.user.isAuthenticated&&(e.user.email==="saodirector@lsu.edu.ph"||e.user.email==="ascdirector@lsu.edu.ph"||e.user.email==="admissions@lsu.edu.ph"||e.user.email==="scholarships@lsu.edu.ph"||e.user.email==="katerijunine.tabernero@lsu.edu.ph"||e.user.email==="sherryl.origenes@lsu.edu.ph"||e.user.email==="lourdes_niebla@lsu.edu.ph"||e.user.email==="lindakj11196@gmail.com"||e.user.email==="jorenleeluna24@gmail.com"||e.user.email==="jayharold.reazol@lsu.edu.ph"||e.user.email==="cheryl.osorio@lsu.edu.ph"||e.user.email==="cte.registrar@lsu.edu.ph"||e.user.email==="onlinerequest@lsu.edu.ph"||e.user.email==="ccsea.registrar@lsu.edu.ph"||e.user.email==="cba.registrar@lsu.edu.ph"||e.user.email==="patrick.obut@lsu.edu.ph"||e.user.email==="maryeloise.pilvera@lsu.edu.ph"||e.user.email==="johny14_gonzaga@lsu.edu.ph"||e.user.email==="denzelroy.suarez@lsu.edu.ph"||e.user.email==="jason.yap@lsu.edu.ph"))l.value=p.value||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length;else if(e.user.isAuthenticated&&(e.user.email==="ramel.recentes@lsu.edu.ph"||e.user.email==="markkrisli.delapena@lsu.edu.ph"||e.user.email==="grace.dolloso@lsu.edu.ph"||e.user.email==="ladyvi.tagailo@lsu.edu.ph"||e.user.email==="earl.gangoso@lsu.edu.ph"||e.user.email==="honimar.panganiban@lsu.edu.ph"||e.user.email==="olaira.imbong@lsu.edu.ph"||e.user.email==="jessel.abarca@lsu.edu.ph"||e.user.email==="jorenlee.luna@lsu.edu.ph")){let s=p.value.filter(function(h){return h.admissions_list_filter.college==="CCSEA (College of Computer Studies, Engineering, and Architecture)"});b.value="CCSEA",l.value=s||0,_.value=s.length||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="anilou.dilao@lsu.edu.ph"||e.user.email==="marvel.deromol@lsu.edu.ph"||e.user.email==="nizel.apas@lsu.edu.ph"||e.user.email==="noel.alamin@lsu.edu.ph")){let s=p.value.filter(function(h){return h.admissions_list_filter.college==="CAS (College of Arts and Sciences)"});b.value="CAS",l.value=s||0,_.value=s.length||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="emma.suana@lsu.edu.ph"||e.user.email==="jenel.cruz@lsu.edu.ph"||e.user.email==="johnmark.saldivar@lsu.edu.ph"||e.user.email==="kenneth.yagong@lsu.edu.ph")){let s=p.value.filter(function(h){return h.admissions_list_filter.college==="CTE (College of Teacher Education)"});b.value="CTE",l.value=s||0,_.value=s.length||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="lowelle.pacot@lsu.edu.ph"||e.user.email==="jennifer.aguanta@lsu.edu.ph"||e.user.email==="jaysavelle.tubigon@lsu.edu.ph")){let s=p.value.filter(function(h){return h.admissions_list_filter.college==="CBA (College of Business and Accountancy)"});b.value="CBA",l.value=s||0,_.value=s.length||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="arlene.apao@lsu.edu.ph"){let s=p.value.filter(function(h){return h.admissions_list_filter.college==="CON (College of Nursing)"});b.value="CON",l.value=s||0,_.value=s.length||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="joed.layna@lsu.edu.ph"||e.user.email==="michael.angelo.pagara@lsu.edu.ph"||e.user.email==="karen.linganay@lsu.edu.ph")){let s=p.value.filter(function(h){return h.admissions_list_filter.college==="CTHM (College of Tourism and Hospitality Management)"});b.value="CTHM",l.value=s||0,_.value=s.length||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="estephanie.zamora@lsu.edu.ph"){let s=p.value.filter(function(h){return h.admissions_list_filter.college==="CCJE (College of Criminal Justice Education)"});b.value="CCJE",l.value=s||0,_.value=s.length||0,v=Math.ceil(l._rawValue.length/c.value),f=l._rawValue.length}else(e.user.email===""||e.user.email===void 0)&&C.push("/enrollment/admin/login"),C.push("/_/unauthorized");C.push("/enrollment/admin/old-dashboard")});let H=le(()=>l.value.slice(k.value,c.value));const J=()=>{k.value>0&&(k.value-=y.value,c.value-=y.value,console.log("prev"))},P=()=>{c.value<f&&(k.value+=y.value,c.value+=y.value,console.log("next"))},B=r=>{U.value=r,k.value=0,c.value=y.value,r>1&&(c.value*=r,k.value=c.value-y.value)},q=d([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),W=async r=>{C.push("/enrollment/admin/old-dashboard/update-student/"+r),N.value=!1,j.value=!0},Y=()=>{C.push("/enrollment"),e.removeToken()},$=r=>{S.value=!S.value,I.value=r},G=async()=>{await $fetch(L.value+"/api/admissions/"+I.value+"/delete/",{method:"DELETE",headers:{Authorization:e.user.token,"Content-Type":"application/json"}}).then(r=>{console.log("response",r),C.go(),S.value=!S.value})},K=async r=>{await $fetch(L.value+"/api/admissions/"+r+"/delete/",{method:"DELETE",headers:{Authorization:e.user.token,"Content-Type":"application/json"}}).then(s=>{console.log("response",s)})};return(r,s)=>{const h=Q;return n(),o("div",he,[t("div",ge,[t("div",pe,[t("div",me,[t("div",_e,[t("div",ve,[fe,t("div",xe,[be,t("h1",we,m(a(e).user.email),1)])]),t("button",{onClick:Y,class:"flex items-center hover:font-bold py-2 lg:static absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-2 hover:text-green-900 hover:bg-white text-white rounded-xl"},Ce)])]),t("div",Ae,[t("div",Se,[t("div",Ee,[(n(!0),o(D,null,z(q.value,(u,E)=>(n(),o("div",{class:"lg:flex items-center block lg:text-left text-center",key:E},[t("label",Ve,[t("span",Te,"Total Enrollees : "+m(a(M)),1),t("span",{class:V(["block",a(_)===0?"hidden":""])}," Total "+m(a(b))+" Enrollees : "+m(a(_)),3)])]))),128))]),t("div",De,[F(t("input",{"onUpdate:modelValue":s[0]||(s[0]=u=>ae(w)?w.value=u:w=u),type:"text",class:"shadow-lg search w-full border border-b-4 border-green-800 h-8 rounded-lg",placeholder:"Search Tracking ID or LSU ID Number then press Enter",onChange:s[1]||(s[1]=u=>a(R)())},null,544),[[se,a(w)]])])]),N.value?(n(),o("div",ze,[t("div",Le,[t("div",je,[t("div",Me,[t("div",Ne,[Ie,a(l).length>0?(n(),o("div",Be,[(n(!0),o(D,null,z(a(de).orderBy(a(H),"created_at","asc"),(u,E)=>(n(),o("ul",{class:"lg:flex justify-between w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative",key:E},[t("li",$e,m(u.tracking_id),1),t("li",Fe,m(u.student_lsu_id_number),1),t("li",Oe,m(u.student_personal_info.firstname||"")+" "+m(u.student_personal_info.lastname||""),1),t("li",Ue,[(n(!0),o(D,null,z(u.enrollment_tracking_status,(i,A)=>(n(),o("div",{class:"relative w-full lg:py-2 py-1 block",key:A},[t("div",Re,[t("p",{class:V(["text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[i.status==="yes"?"bg-green-900":""],[i.status==="ongoing"?"bg-blue-700":""],[i.status==="no"?"bg-gray-300":""],[i.status===""?"bg-gray-300":""],[A===3?"ml-0":""]])},m(A+1),3),t("div",{class:V(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden",[A===3?"hidden":"lg:w-full w-5"],[i.status==="yes"?"bg-green-900":""],[i.status==="no"?"bg-gray-300":""],[i.status===""?"bg-gray-300":""],[i.status==="ongoing"?"bg-blue-700":""]])},null,2)]),t("div",{class:V(["lg:static lg:text-center lg:w-auto w-full",""])},[t("p",{class:V(["capitalize lg:w-fit mx-auto text-xs py-1 lg:py-0",[i.status==="yes"?" lg:bg-white bg-green-800 text-white lg:text-black":""],[i.status==="no"?"text-gray-300":""],[i.status===""?"lg:bg-transparent bg-gray-300 lg:text-gray-300 text-white":""],[i.status==="ongoing"?"text-white bg-blue-700":""],[A===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[t("div",He,[t("span",null,m(i.track_name),1)]),t("div",Je,[i.track_name==="admissions"?(n(),o("span",Pe,We)):x("",!0),i.track_name==="advising"?(n(),o("span",Ye,Ke)):x("",!0),i.track_name==="accounting"?(n(),o("span",Qe,Ze)):x("",!0),i.track_name==="evaluation"||i.track_name==="verification"?(n(),o("span",et,lt)):x("",!0)])],2)],2)]))),128))]),t("li",st,[t("div",at,[t("div",it,[t("button",{onClick:i=>W(u.id)},rt,8,ot)]),a(e).user.email==="saodirector@lsu.edu.ph"||a(e).user.email==="ascdirector@lsu.edu.ph"||a(e).user.email==="admissions@lsu.edu.ph"||a(e).user.email==="scholarships@lsu.edu.ph"||a(e).user.email==="katerijunine.tabernero@lsu.edu.ph"||a(e).user.email==="sherryl.origenes@lsu.edu.ph"||a(e).user.email==="lourdes.niebla@lsu.edu.ph"||a(e).user.email==="lindakj11196@gmail.com"||a(e).user.email==="jayharold.reazol@lsu.edu.ph"?(n(),o("div",ut,[t("button",{onClick:i=>$(u.id),class:"cursor-pointer"},ht,8,dt)])):x("",!0),a(e).user.email==="jorenleeluna24@gmail.com"?(n(),o("button",{key:1,onClick:i=>K(u.id),class:"cursor-pointer px-2 border font-bold bg-red-800 text-white"}," Delete Direct ",8,gt)):x("",!0)])])]))),128)),F(t("div",pt,[mt,t("div",{class:"flex gap-5 mx-auto w-fit my-5"},[t("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:G},"Yes"),t("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:$},"Cancel")])],512),[[ie,a(S)]])])):(n(),o("div",_t," Loading Please Wait ... "))])]),a(l).length>y.value?(n(),o("div",vt,[t("div",{onClick:J,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[ft,O(" Prev ")]),t("ul",xt,[(n(!0),o(D,null,z(a(v),(u,E)=>(n(),o("li",{class:"hover:bg-green-900 hover:text-white cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:E,onClick:i=>B(u)},m(u),9,bt))),128))]),t("div",{onClick:P,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[O(" Next "),wt])])):x("",!0)])])])):x("",!0),j.value?(n(),o("div",yt,At)):x("",!0)])])]),oe(h)])}}},Nt=ce(St,[["__scopeId","data-v-202e630a"]]);export{Nt as default};
