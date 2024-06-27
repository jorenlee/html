import{_ as Z}from"./UPA3sOSJ.js";import{u as ee,m as te,g as le,r as d,h as se,B as ae,c as o,a as t,t as _,f as i,F as L,s as B,i as U,l as ie,j as ne,z as y,v as oe,d as R,b as re,x as ue,o as r,n as k,p as de,e as ce}from"./D42_E3UP.js";import{_ as he}from"./vUEbHlag.js";/* empty css        */import"./CHr0sBS-.js";import"./C5S46NFB.js";import{_ as ge}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const c=z=>(de("data-v-8394be1a"),z=z(),ce(),z),me={class:"lg:overflow-x-hidden"},pe={class:"flex min-h-screen"},_e={class:"w-full"},ve={class:"bg-green-800"},fe={class:"lg:flex items-center mx-auto justify-between py-2"},xe={class:"lg:flex items-center text-white gap-1 lg:px-1"},be=c(()=>t("div",{class:"lg:p-0 pt-0.5 pb-3 mx-3"},[t("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),we={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},ye=c(()=>t("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ke={class:"text-sm pt-1"},Ce=c(()=>t("i",{class:"fa fa-sign-out text-xl"},null,-1)),Se=c(()=>t("h1",{class:"text-xs p-1.5"},"Log Out",-1)),Ae=[Ce,Se],Ve={class:"px-3 pt-5"},Te={class:"lg:flex items-center mb-5"},Ee={class:"w-full"},De={class:"text-xs mr-4 lg:mb-0 mb-2 block font-bold text-green-900"},Me={class:"block"},Ne={class:"w-full flex items-center lg:mt-0 mt-5"},ze={key:0,class:"mx-auto w-fit my-20"},Le=c(()=>t("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1)),Be=c(()=>t("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)),Ie=[Le,Be],$e={key:1},je={class:"w-full"},Oe={class:""},Fe={class:"shadow mx-auto text-xs"},Ue={class:""},Re=ue('<div class="lg:flex hidden header w-full p-2 bg-green-800 text-white items-center shadow-lg" data-v-8394be1a><ul class="flex justify-between w-full lg:whitespace-nowrap" data-v-8394be1a><li class="lg:w-1/12" data-v-8394be1a>Tracking ID</li><li class="lg:w-1/12" data-v-8394be1a>LSU ID</li><li class="lg:w-2/12 text-left" data-v-8394be1a>Full Name</li><li class="text-center lg:w-6/12" data-v-8394be1a>Status</li><li class="px-1 lg:w-2/12 text-center" data-v-8394be1a>Action</li></ul></div>',1),Pe={key:0,class:"w-full"},He={class:"lg:px-2 font-bold text-xs text-green-800 lg:w-1/12 uppercase"},Je={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap uppercase"},qe={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase"},Ye={class:"flex font-bold text-xs text-green-800 lg:w-6/12 text-center"},We={key:0},Ge=c(()=>t("i",{class:"fa fa-address-card"},null,-1)),Ke=[Ge],Qe={key:1},Xe=c(()=>t("i",{class:"fa fa-calendar-check"},null,-1)),Ze=[Xe],et={key:2},tt=c(()=>t("i",{class:"fa fa-money-bill-alt"},null,-1)),lt=[tt],st={key:3},at=c(()=>t("i",{class:"fa fa-star"},null,-1)),it=[at],nt={class:"flex justify-center font-bold text-xs text-green-800 lg:w-2/12 lg:static absolute top-2 right-2"},ot={class:"w-auto px-1 flex gap-10"},rt={key:0},ut=["onClick"],dt=c(()=>t("i",{class:"fa fa-check text-lg font-bold"},null,-1)),ct=[dt],ht={class:""},gt=["onClick"],mt=c(()=>t("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),pt=[mt],_t={key:1,class:""},vt=["onClick"],ft=c(()=>t("i",{class:"fa fa-trash text-red-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),xt=[ft],bt={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},wt=c(()=>t("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),yt={key:1,class:"itallic text-gray-700 text-center p-1"},kt={key:0,class:"flex items-center justify-center lg:w-[600px] w-fit mx-auto font-bold text-sm rounded-lg my-5"},Ct=c(()=>t("i",{class:"fa fa-angle-left px-2","aria-hidden":"true"},null,-1)),St={class:"border-t border-gray-50 flex lg:w-6/12 w-[150px] justify-evenly overflow-x-scroll px-2"},At=["onClick"],Vt=c(()=>t("i",{class:"fa fa-angle-right px-2","aria-hidden":"true"},null,-1)),Tt={__name:"index",setup(z){const f=ee();te();const e=le(),D=d(e.mainServer);let a=d(0);const T=d(!1);let S=d(""),p=d(null),I=d(0),x=d(0);const $=d(!0),A=d(25),h=d(25),V=d(0);let j=d(),v,b,M=d(!1),C=d(""),E=d(1),P=()=>{S.value===""?(a.value=p.value,O(1)):(V.value=0,a.value=p.value.filter(function(n){return S.value===n.tracking_id||S.value===n.student_lsu_id_number}))};se(async()=>{let n=await $fetch(D.value+"/api/admissions/list/").catch(l=>l.data);if(p.value=n,I.value=n.length||0,e.user.isAuthenticated&&(e.user.email==="saodirector@lsu.edu.ph"||e.user.email==="ascdirector@lsu.edu.ph"||e.user.email==="admissions@lsu.edu.ph"||e.user.email==="scholarships@lsu.edu.ph"||e.user.email==="katerijunine.tabernero@lsu.edu.ph"||e.user.email==="sherryl.origenes@lsu.edu.ph"||e.user.email==="lourdes_niebla@lsu.edu.ph"||e.user.email==="lindakj11196@gmail.com"||e.user.email==="jorenleeluna24@gmail.com"||e.user.email==="jayharold.reazol@lsu.edu.ph"||e.user.email==="cheryl.osorio@lsu.edu.ph"||e.user.email==="cte.registrar@lsu.edu.ph"||e.user.email==="onlinerequest@lsu.edu.ph"||e.user.email==="ccsea.registrar@lsu.edu.ph"||e.user.email==="cba.registrar@lsu.edu.ph"||e.user.email==="patrick.obut@lsu.edu.ph"||e.user.email==="maryeloise.pilvera@lsu.edu.ph"||e.user.email==="johny14_gonzaga@lsu.edu.ph"||e.user.email==="denzelroy.suarez@lsu.edu.ph"||e.user.email==="jason.yap@lsu.edu.ph"||e.user.email==="rommel.rosal@lsu.edu.ph"))a.value=p.value||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length;else if(e.user.isAuthenticated&&(e.user.email==="ramel.recentes@lsu.edu.ph"||e.user.email==="markkrisli.delapena@lsu.edu.ph"||e.user.email==="grace.dolloso@lsu.edu.ph"||e.user.email==="ladyvi.tagailo@lsu.edu.ph"||e.user.email==="earl.gangoso@lsu.edu.ph"||e.user.email==="honimar.panganiban@lsu.edu.ph"||e.user.email==="olaira.imbong@lsu.edu.ph"||e.user.email==="jessel.abarca@lsu.edu.ph"||e.user.email==="jorenlee.luna@lsu.edu.ph")){let l=p.value.filter(function(g){return g.admissions_list_filter.college==="CCSEA (College of Computer Studies, Engineering, and Architecture)"});C.value="CCSEA",a.value=l||0,x.value=l.length||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="anilou.dilao@lsu.edu.ph"||e.user.email==="marvel.deromol@lsu.edu.ph"||e.user.email==="nizel.apas@lsu.edu.ph"||e.user.email==="noel.alamin@lsu.edu.ph")){let l=p.value.filter(function(g){return g.admissions_list_filter.college==="CAS (College of Arts and Sciences)"});C.value="CAS",a.value=l||0,x.value=l.length||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="emma.suana@lsu.edu.ph"||e.user.email==="jenel.cruz@lsu.edu.ph"||e.user.email==="johnmark.saldivar@lsu.edu.ph"||e.user.email==="kenneth.yagong@lsu.edu.ph")){let l=p.value.filter(function(g){return g.admissions_list_filter.college==="CTE (College of Teacher Education)"});C.value="CTE",a.value=l||0,x.value=l.length||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="lowelle.pacot@lsu.edu.ph"||e.user.email==="jennifer.aguanta@lsu.edu.ph"||e.user.email==="jaysavelle.tubigon@lsu.edu.ph")){let l=p.value.filter(function(g){return g.admissions_list_filter.college==="CBA (College of Business and Accountancy)"});C.value="CBA",a.value=l||0,x.value=l.length||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="arlene.apao@lsu.edu.ph"){let l=p.value.filter(function(g){return g.admissions_list_filter.college==="CON (College of Nursing)"});C.value="CON",a.value=l||0,x.value=l.length||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length}else if(e.user.isAuthenticated&&(e.user.email==="joed.layna@lsu.edu.ph"||e.user.email==="michael.angelo.pagara@lsu.edu.ph"||e.user.email==="karen.linganay@lsu.edu.ph")){let l=p.value.filter(function(g){return g.admissions_list_filter.college==="CTHM (College of Tourism and Hospitality Management)"});C.value="CTHM",a.value=l||0,x.value=l.length||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length}else if(e.user.isAuthenticated&&e.user.email==="estephanie.zamora@lsu.edu.ph"){let l=p.value.filter(function(g){return g.admissions_list_filter.college==="CCJE (College of Criminal Justice Education)"});C.value="CCJE",a.value=l||0,x.value=l.length||0,v=Math.ceil(a._rawValue.length/h.value),b=a._rawValue.length}else(e.user.email===""||e.user.email===void 0)&&f.push("/enrollment/admin/login"),f.push("/_/unauthorized");f.push("/enrollment/admin/dashboard")});let H=ae(()=>a.value.slice(V.value,h.value));const J=()=>{E.value>1&&E.value--,V.value>0&&(V.value-=A.value,h.value-=A.value,console.log("prev"))},q=()=>{E.value<v&&E.value++,h.value<b&&(V.value+=A.value,h.value+=A.value,console.log("next"))},O=n=>{E.value=n,V.value=0,h.value=A.value,n>1&&(h.value*=n,V.value=h.value-A.value)},Y=d([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),W=async n=>{f.push("/enrollment/admin/dashboard/update-student/"+n),$.value=!1,T.value=!0},G=()=>{f.push("/enrollment"),e.removeToken()},F=n=>{M.value=!M.value,j.value=n},K=async()=>{await $fetch(D.value+"/api/admissions/"+j.value+"/delete/",{method:"DELETE",headers:{Authorization:e.user.token,"Content-Type":"application/json"}}).then(n=>{console.log("response",n),f.go(),M.value=!M.value})};let m=d(null);const Q=async n=>{T.value=!0,await $fetch(D.value+"/api/admissions/"+n+"/edit/",{method:"PUT",body:m.value}).then(l=>{console.log("response",l),f.push("/enrollment/admin/dashboard/"),T.value=!1,f.go()})},X=async n=>{m.value=await $fetch(D.value+"/api/admissions/"+n+"/").catch(l=>l.data),m.value!==null&&(T.value=!0,m.value.enrollment_tracking_status[0]={track_name:"admissions",label:"admission",details:"Requirements",date_checked:"-",check_by:"-",status:"yes",remarks:""},m.value.enrollment_tracking_status[1]={track_name:"advising",label:"advising",details:"Course Subjects ",date_checked:"-",check_by:"-",status:"yes",remarks:""},m.value.enrollment_tracking_status[2]={track_name:"accounting",label:"payment",details:"payment",date_checked:"-",check_by:"-",status:"yes",remarks:""},m.value.enrollment_tracking_status[3]={track_name:"verification",label:"verification",details:"verification",date_checked:"",check_by:"-",status:"yes",remarks:"You are now officially enrolled,"},m.value.evaluation.submitted=!0,m.value.receipt.submitted=!0,await $fetch(D.value+"/api/admissions/submit-new-student-to-gmail-evaluation-done/",{method:"POST",headers:{"Content-Type":"application/json"},body:{tracking_id:m.value.tracking_id,student_lsu_id_number:m.value.student_lsu_id_number,firstname:m.value.student_personal_info.firstname,email:m.value.student_contact_info.contact.personal_email_address,lsu_email:m.value.student_contact_info.contact.lsu_email_address}}).then(l=>{console.log(l),Q(n),f.push("/enrollment/admin/dashboard/"),T.value=!1}))};return(n,l)=>{const g=Z;return r(),o("div",me,[t("div",pe,[t("div",_e,[t("div",ve,[t("div",fe,[t("div",xe,[be,t("div",we,[ye,t("h1",ke,_(i(e).user.email),1)])]),t("button",{onClick:G,class:"flex items-center hover:font-bold py-2 lg:static absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-4 hover:text-green-900 hover:bg-white text-white rounded-xl"},Ae)])]),t("div",Ve,[t("div",Te,[t("div",Ee,[(r(!0),o(L,null,B(Y.value,(u,N)=>(r(),o("div",{class:"lg:flex items-center block lg:text-left text-center",key:N},[t("label",De,[t("span",Me,"Total Enrollees : "+_(i(I)),1),t("span",{class:k(["block",i(x)===0?"hidden":""])}," Total "+_(i(C))+" Enrollees : "+_(i(x)),3)])]))),128))]),t("div",Ne,[U(t("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>ne(S)?S.value=u:S=u),type:"text",class:"shadow-lg search w-full border border-b-4 border-green-800 h-8 rounded-lg",placeholder:"Search Tracking ID or LSU ID Number then press Enter",onChange:l[1]||(l[1]=u=>i(P)())},null,544),[[ie,i(S)]])])]),T.value?(r(),o("div",ze,Ie)):y("",!0),$.value?(r(),o("div",$e,[t("div",je,[t("div",Oe,[t("div",Fe,[t("div",Ue,[Re,i(a).length>0?(r(),o("div",Pe,[(r(!0),o(L,null,B(i(he).orderBy(i(H),"created_at","asc"),(u,N)=>(r(),o("ul",{class:"lg:flex justify-between w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative hover:bg-gray-200",key:N},[t("li",He,_(u.tracking_id),1),t("li",Je,_(u.student_lsu_id_number),1),t("li",qe,_(u.student_personal_info.firstname||"")+" "+_(u.student_personal_info.lastname||""),1),t("li",Ye,[(r(!0),o(L,null,B(u.enrollment_tracking_status,(s,w)=>(r(),o("div",{class:"relative w-full lg:py-2 py-1 block",key:w},[t("div",{class:k(["flex lg:items-center lg:h-fit h-0 w-3/12 lg:ml-4 relative",[w===3?"w-fit":"lg:w-full"]])},[t("p",{class:k(["text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[s.status==="yes"?"bg-green-900 text-white":""],[s.status==="no"?"bg-red-700 text-white":""],[s.status===""?"bg-gray-300 text-gray-200":""],[s.status==="ongoing"?"bg-blue-800 text-white":""],[w===3?"ml-0":""]])},_(w+1),3),t("div",{class:k(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden",[s.status==="yes"?"bg-green-900 text-white":""],[s.status==="no"?"bg-red-700 text-white":""],[s.status===""?"bg-gray-300 text-gray-200":""],[s.status==="ongoing"?"bg-blue-800 text-white":""],[w===3?"hidden":"lg:w-full w-5"]])},null,2)],2),t("div",{class:k(["lg:static lg:text-center lg:w-auto w-full",""])},[t("p",{class:k(["capitalize lg:w-fit mx-auto text-xs py-1 lg:py-0",[s.status==="yes"?" text-white":""],[s.status==="no"?" text-white":""],[s.status===""?" text-gray-200":""],[s.status==="ongoing"?"text-white":""],[w===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[t("div",{class:k(["lg:flex hidden",[s.status==="yes"?"text-green-900 ":""],[s.status==="no"?"text-red-700 ":""],[s.status===""?"text-gray-300 ":""],[s.status==="ongoing"?"text-blue-800 ":""],[w===3?"lg:-mt-5":"lg:-mt-2"]])},[t("span",null,_(s.track_name),1)],2),t("div",{class:k(["lg:hidden flex pl-7",[s.status==="yes"?"bg-green-900 text-white":""],[s.status==="no"?"bg-red-700 text-white":""],[s.status===""?"bg-gray-300 text-gray-200":""],[s.status==="ongoing"?"bg-blue-800 text-white":""],[w===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[s.track_name==="admissions"?(r(),o("span",We,Ke)):y("",!0),s.track_name==="advising"?(r(),o("span",Qe,Ze)):y("",!0),s.track_name==="accounting"?(r(),o("span",et,lt)):y("",!0),s.track_name==="evaluation"||s.track_name==="verification"?(r(),o("span",st,it)):y("",!0)],2)],2)],2)]))),128))]),t("li",nt,[t("div",ot,[i(e).user.email==="jorenleeluna24@gmail.com"||i(e).user.email==="jorenlee.luna@lsu.edu.ph"||i(e).user.email==="saodirector@lsu.edu.ph"||i(e).user.email==="ascdirector@lsu.edu.ph"||i(e).user.email==="admissions@lsu.edu.ph"||i(e).user.email==="scholarships@lsu.edu.ph"||i(e).user.email==="katerijunine.tabernero@lsu.edu.ph"||i(e).user.email==="sherryl.origenes@lsu.edu.ph"||i(e).user.email==="lourdes.niebla@lsu.edu.ph"?(r(),o("div",rt,[t("button",{onClick:s=>X(u.id),class:"cursor-pointer hover:bg-white hover:text-green-600 border-green-600 border-2 bg-green-600 text-white uppercase font-bold px-1 rounded-lg"},ct,8,ut)])):y("",!0),t("div",ht,[t("button",{onClick:s=>W(u.id)},pt,8,gt)]),i(e).user.email==="saodirector@lsu.edu.ph"||i(e).user.email==="ascdirector@lsu.edu.ph"||i(e).user.email==="admissions@lsu.edu.ph"||i(e).user.email==="scholarships@lsu.edu.ph"||i(e).user.email==="jorenleeluna24@gmail.com"||i(e).user.email==="jorenlee.luna@lsu.edu.ph"?(r(),o("div",_t,[t("button",{onClick:s=>F(u.id),class:"cursor-pointer"},xt,8,vt)])):y("",!0)])])]))),128)),U(t("div",bt,[wt,t("div",{class:"flex gap-5 mx-auto w-fit my-5"},[t("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:K},"Yes"),t("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:F},"Cancel")])],512),[[oe,i(M)]])])):(r(),o("div",yt," Loading Please Wait ... "))])]),i(a).length>A.value?(r(),o("div",kt,[t("div",{onClick:J,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[Ct,R(" Prev ")]),t("ul",St,[(r(!0),o(L,null,B(i(v),(u,N)=>(r(),o("li",{class:k(["hover:bg-green-900 hover:text-white cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",i(E)===u?"bg-green-900 text-white":""]),key:N,onClick:s=>O(u)},_(u),11,At))),128))]),t("div",{onClick:q,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[R(" Next "),Vt])])):y("",!0)])])])):y("",!0)])])]),re(g)])}}},$t=ge(Tt,[["__scopeId","data-v-8394be1a"]]);export{$t as default};
