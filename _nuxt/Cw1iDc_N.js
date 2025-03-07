import{_ as Z}from"./BR2xbI82.js";import{m as j,u as ee,r as c,p as te,M as le,c as o,a as e,t as a,n as s,F as z,z as M,q as F,B as se,s as O,A as f,y as ae,v as re,d as R,b as ne,o as d,x as b}from"./BY5DGt9j.js";import{_ as ie}from"./5JjjnmY2.js";/* empty css        */import{_ as ue}from"./DlAUqK2U.js";import"./BjLXg0w5.js";const oe={class:"lg:overflow-x-hidden"},de={class:"flex min-h-screen"},ce={class:"w-full"},ge={class:"bg-green-800"},pe={class:"lg:flex items-center mx-auto justify-between py-2"},he={class:"lg:flex items-center text-white gap-1 lg:px-1"},me={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},xe={class:"text-sm pt-1"},fe={class:"px-3 pt-5"},ve={class:"lg:flex items-center mb-5"},_e={class:"w-full"},be={class:"w-full flex items-center lg:mt-0 mt-5"},we={key:0,class:"mx-auto w-fit my-20"},ye={key:1,class:"w-5/12 h-4/6 bg-white border z-10 shadow-2xl rounded-lg px-5 py-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ke={class:""},Ce={key:2},Se={class:"w-full"},Ve={class:""},Ae={class:"shadow mx-auto text-xs"},De={class:""},Ee={key:0,class:"w-full"},Te={class:"lg:px-2 font-bold text-xs text-green-800 lg:w-1/12 uppercase"},ze={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-1/12 whitespace-nowrap text-center uppercase"},Me={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase text-center"},Ne={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase text-center"},Le={key:0},Be={key:1},Ie={key:2},$e={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-4/12 uppercase text-center"},Fe={class:"flex font-bold text-xs text-green-800 lg:w-7/12 text-center"},Oe={key:0},Re={key:1},Ue={key:2},He={key:3},qe={class:"flex justify-center font-bold text-xs text-green-800 lg:w-1/12 lg:static absolute top-2 right-2"},Je={class:"w-auto px-1 flex gap-10"},Pe=["onClick"],Ye={class:""},Ge=["onClick"],Ke={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Qe={key:0,class:"flex items-center justify-center lg:w-[600px] w-fit mx-auto font-bold text-sm rounded-lg my-5"},We={class:"border-t border-gray-50 flex lg:w-6/12 w-[150px] justify-evenly overflow-x-scroll px-2"},Xe=["onClick"],Ze={__name:"backup",setup(je){const A=j(),t=ee(),N=c(t.mainDevServer);let r=c(0);const L=c(!1);let w=c(""),m=c(null),U=c(0),y=c(0);const B=c(!0),k=c(25),p=c(25),C=c(0);let I=c(),x,v,E=c(!1),S=c(""),D=c(1),H=()=>{w.value===""?(r.value=m.value,$(1)):(C.value=0,r.value=m.value.filter(function(g){return w.value===g.tracking_id||w.value===g.student_lsu_id_number}))};te(async()=>{let g=await $fetch(N.value+"/api/admissions-first-sem/list/").catch(l=>l.data);if(m.value=g,U.value=g.length||0,t.user.isAuthenticated&&(t.user.email==="ccc@lsu.edu.ph"||t.user.email==="saodirector@lsu.edu.ph"||t.user.email==="ascdirector@lsu.edu.ph"||t.user.email==="admissions@lsu.edu.ph"||t.user.email==="scholarships@lsu.edu.ph"||t.user.email==="katerijunine.tabernero@lsu.edu.ph"||t.user.email==="sherryl.origenes@lsu.edu.ph"||t.user.email==="lourdes_niebla@lsu.edu.ph"||t.user.email==="lindakj11196@gmail.com"||t.user.email==="jorenleeluna24@gmail.com"||t.user.email==="jayharold.reazol@lsu.edu.ph"||t.user.email==="cheryl.osorio@lsu.edu.ph"||t.user.email==="cte.registrar@lsu.edu.ph"||t.user.email==="onlinerequest@lsu.edu.ph"||t.user.email==="ccsea.registrar@lsu.edu.ph"||t.user.email==="cba.registrar@lsu.edu.ph"||t.user.email==="patrick.obut@lsu.edu.ph"||t.user.email==="maryeloise.pilvera@lsu.edu.ph"||t.user.email==="johny14_gonzaga@lsu.edu.ph"||t.user.email==="denzelroy.suarez@lsu.edu.ph"||t.user.email==="jason.yap@lsu.edu.ph"||t.user.email==="rommel.rosal@lsu.edu.ph"))r.value=m.value||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length;else if(t.user.isAuthenticated&&(t.user.email==="ramel.recentes@lsu.edu.ph"||t.user.email==="markkrisli.delapena@lsu.edu.ph"||t.user.email==="grace.dolloso@lsu.edu.ph"||t.user.email==="ladyvi.tagailo@lsu.edu.ph"||t.user.email==="earl.gangoso@lsu.edu.ph"||t.user.email==="honimar.panganiban@lsu.edu.ph"||t.user.email==="olaira.imbong@lsu.edu.ph"||t.user.email==="jessel.abarca@lsu.edu.ph"||t.user.email==="jorenlee.luna@lsu.edu.ph")){let l=m.value.filter(function(h){return h.college==="CCSEA"});S.value="CCSEA",r.value=l||0,y.value=l.length||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length}else if(t.user.isAuthenticated&&(t.user.email==="anilou.dilao@lsu.edu.ph"||t.user.email==="marvel.deromol@lsu.edu.ph"||t.user.email==="nizel.apas@lsu.edu.ph"||t.user.email==="noel.alamin@lsu.edu.ph")){let l=m.value.filter(function(h){return h.college==="CAS"});S.value="CAS",r.value=l||0,y.value=l.length||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length}else if(t.user.isAuthenticated&&(t.user.email==="emma.suana@lsu.edu.ph"||t.user.email==="jenel.cruz@lsu.edu.ph"||t.user.email==="johnmark.saldivar@lsu.edu.ph"||t.user.email==="kenneth.yagong@lsu.edu.ph")){let l=m.value.filter(function(h){return h.college==="CTE"});S.value="CTE",r.value=l||0,y.value=l.length||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length}else if(t.user.isAuthenticated&&(t.user.email==="lowelle.pacot@lsu.edu.ph"||t.user.email==="jennifer.aguanta@lsu.edu.ph"||t.user.email==="jaysavelle.tubigon@lsu.edu.ph")){let l=m.value.filter(function(h){return h.college==="CBA"});S.value="CBA",r.value=l||0,y.value=l.length||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length}else if(t.user.isAuthenticated&&t.user.email==="arlene.apao@lsu.edu.ph"){let l=m.value.filter(function(h){return h.admissions_list_filter.college==="CON"});S.value="CON",r.value=l||0,y.value=l.length||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length}else if(t.user.isAuthenticated&&(t.user.email==="joed.layna@lsu.edu.ph"||t.user.email==="michael.angelo.pagara@lsu.edu.ph"||t.user.email==="karen.linganay@lsu.edu.ph")){let l=m.value.filter(function(h){return h.college==="CTHM"});S.value="CTHM",r.value=l||0,y.value=l.length||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length}else if(t.user.isAuthenticated&&t.user.email==="estephanie.zamora@lsu.edu.ph"){let l=m.value.filter(function(h){return h.college==="CCJE"});S.value="CCJE",r.value=l||0,y.value=l.length||0,x=Math.ceil(r._rawValue.length/p.value),v=r._rawValue.length}else(t.user.email===""||t.user.email===void 0)&&A.push("/enrollment/admin/login"),A.push("/_/unauthorized");A.push("/enrollment/admin/dashboard")});let q=le(()=>r.value.slice(C.value,p.value));const J=()=>{D.value>1&&D.value--,C.value>0&&(C.value-=k.value,p.value-=k.value)},P=()=>{D.value<x&&D.value++,p.value<v&&(C.value+=k.value,p.value+=k.value)},$=g=>{D.value=g,C.value=0,p.value=k.value,g>1&&(p.value*=g,C.value=p.value-k.value)},Y=c([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),G=async g=>{A.push("/enrollment/admin/dashboard/update-student/"+g),B.value=!1,L.value=!0},K=()=>{A.push("/enrollment"),t.removeToken()},Q=g=>{E.value=!E.value,I.value=g},W=async()=>{await $fetch(N.value+"/api/admissions/"+I.value+"/delete/",{method:"DELETE",headers:{Authorization:t.user.token,"Content-Type":"application/json"}}).then(g=>{A.go(),E.value=!E.value})};let i=c(null),V=c(!1);const X=async g=>{i.value=await $fetch(N.value+"/api/admissions-first-sem/"+g+"/").catch(l=>l.data),V.value=!0};return(g,l)=>{const h=Z;return d(),o("div",oe,[e("div",de,[e("div",ce,[e("div",ge,[e("div",pe,[e("div",he,[l[4]||(l[4]=e("div",{class:"lg:p-0 pt-0.5 pb-3 mx-3"},[e("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),e("div",me,[l[3]||(l[3]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",xe,a(s(t).user.email),1)])]),e("button",{onClick:K,class:"flex items-center hover:font-bold py-2 lg:static absolute top-2 right-2 lg:pt-2 lg:pr-2 lg:pl-4 lg:mx-4 hover:text-green-900 hover:bg-white text-white rounded-xl"},l[5]||(l[5]=[e("i",{class:"fa fa-sign-out text-xl"},null,-1),e("h1",{class:"text-xs p-1.5"},"Log Out",-1)]))])]),e("div",fe,[e("div",ve,[e("div",_e,[(d(!0),o(z,null,M(Y.value,(u,T)=>(d(),o("div",{class:"lg:flex items-center block lg:text-left text-center",key:T},l[6]||(l[6]=[e("a",{href:"/enrollment/admin/dashboard/new-first-years",class:"bg-green-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-green-900 border-2 border-green-900 uppercase text-xs"}," New Freshmen ",-1),e("a",{href:"/enrollment/admin/dashboard/transferees",class:"bg-blue-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-blue-900 border-2 border-blue-900 uppercase text-xs"}," Transferees ",-1),e("a",{href:"/enrollment/admin/dashboard/second-degree-students",class:"bg-yellow-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-pink-900 border-2 border-pink-900 uppercase text-xs"}," Second Degree Holder ",-1),e("a",{href:"/enrollment/admin/dashboard",class:"bg-pink-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-pink-900 border-2 border-pink-900 uppercase text-xs"}," Continuing ",-1)])))),128))]),e("div",be,[F(e("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>O(w)?w.value=u:w=u),type:"text",class:"shadow-lg search w-full border border-b-4 border-green-800 h-8 rounded-lg",placeholder:"Search Tracking ID or LSU ID Number then press Enter",onChange:l[1]||(l[1]=u=>s(H)())},null,544),[[se,s(w)]])])]),L.value?(d(),o("div",we,l[7]||(l[7]=[e("p",{class:"text-base text-green-900 font-bold mb-4"},"Please wait ... ",-1),e("i",{class:"fa fa-spinner fa-spin text-8xl text-green-800 animate-spin"},null,-1)]))):f("",!0),s(V)?(d(),o("div",ye,[e("div",ke,[e("div",{onClick:l[2]||(l[2]=u=>O(V)?V.value=!s(V):V=!s(V)),class:"w-fit mr-0 ml-auto bg-red-900 text-white rounded-full px-5 cursor-pointer"},"close")]),e("p",null,a(s(i).tracking_id),1),e("p",null,a(s(i).student_lsu_id_number),1),e("p",null,a(s(i).lastname),1),e("p",null,a(s(i).firstname),1),e("p",null,a(s(i).middlename),1),e("p",null,a(s(i).extension_or_suffix_name),1),e("p",null,a(s(i).birth_sex),1),e("p",null,a(s(i).birth_date),1),e("p",null,a(s(i).citizenship),1),e("p",null,a(s(i).college),1),e("p",null,a(s(i).program),1),e("p",null,a(s(i).contact_primary_number),1),e("p",null,a(s(i).contact_alternate_number),1),e("p",null,a(s(i).contact_personal_email_address),1),e("p",null,a(s(i).contact_lsu_email_address),1),e("p",null,a(s(i).last_term_enrolled),1),e("p",null,a(s(i).last_academic_year_enrolled),1),e("p",null,a(s(i).media_release_consent),1),e("p",null,a(s(i).has_health_condition),1),e("p",null,a(s(i).hereby_certification),1),e("p",null,a(s(i).shiftee_placement.details),1),e("p",null,a(s(i).shiftee_placement.department),1),e("p",null,a(s(i).shiftee_placement.recommendation_status),1),e("p",null,a(s(i).shiftee_placement.accepting_college),1),e("p",null,a(s(i).shiftee_placement.approval_status),1)])):f("",!0),B.value?(d(),o("div",Ce,[e("div",Se,[e("div",Ve,[e("div",Ae,[e("div",De,[l[14]||(l[14]=ae('<div class="lg:flex hidden header w-full p-2 bg-pink-900 text-white items-center shadow-lg" data-v-22e0666f><ul class="flex items-center text-center justify-between w-full lg:whitespace-nowrap" data-v-22e0666f><li class="lg:w-1/12" data-v-22e0666f>Tracking ID</li><li class="lg:w-1/12" data-v-22e0666f>LSU ID</li><li class="lg:w-2/12" data-v-22e0666f>Full Name</li><li class="lg:w-2/12" data-v-22e0666f>Status <br data-v-22e0666f>(Continuing /Shiftee/ Returnee)</li><li class="lg:w-4/12" data-v-22e0666f>Program</li><li class="text-center lg:w-7/12" data-v-22e0666f>Status</li><li class="px-1 lg:w-1/12 text-center" data-v-22e0666f>Action</li></ul></div>',1)),s(r).length>0?(d(),o("div",Ee,[(d(!0),o(z,null,M(s(ie).orderBy(s(q),"created_at","asc"),(u,T)=>(d(),o("ul",{class:"lg:flex justify-between w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative hover:bg-gray-200",key:T},[e("li",Te,a(u.tracking_id),1),e("li",ze,a(u.student_lsu_id_number),1),e("li",Me,a(u.firstname)+" "+a(u.lastname),1),e("li",Ne,[u.shiftee_student.is_student_shiftee==="yes"?(d(),o("div",Le,"Shiftee")):f("",!0),u.returnee_student.is_student_returnee==="yes"?(d(),o("div",Be,"Returnee")):(d(),o("div",Ie,"Continuing"))]),e("li",$e,a(u.college)+" | "+a(u.program),1),e("li",Fe,[(d(!0),o(z,null,M(u.enrollment_tracking_status,(n,_)=>(d(),o("div",{class:"relative w-full lg:py-2 py-1 block",key:_},[e("div",{class:b(["flex lg:items-center lg:h-fit h-0 w-3/12 lg:ml-4 relative",[_===3?"w-fit":"lg:w-full"]])},[e("p",{class:b(["text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[n.status==="yes"?"bg-green-900 text-white":""],[n.status==="no"?"bg-red-700 text-white":""],[n.status===""?"bg-gray-300 text-gray-200":""],[n.status==="ongoing"?"bg-blue-800 text-white":""],[_===3?"ml-0":""]])},a(_+1),3),e("div",{class:b(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden",[n.status==="yes"?"bg-green-900 text-white":""],[n.status==="no"?"bg-red-700 text-white":""],[n.status===""?"bg-gray-300 text-gray-200":""],[n.status==="ongoing"?"bg-blue-800 text-white":""],[_===3?"hidden":"lg:w-full w-5"]])},null,2)],2),e("div",{class:b(["lg:static lg:text-center lg:w-auto w-full",""])},[e("div",{class:b(["capitalize lg:w-fit mx-auto text-xs py-1 lg:py-0",[n.status==="yes"?" text-white":""],[n.status==="no"?" text-white":""],[n.status===""?" text-gray-200":""],[n.status==="ongoing"?"text-white":""],[_===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[e("div",{class:b(["lg:flex hidden",[n.status==="yes"?"text-green-900 ":""],[n.status==="no"?"text-red-700 ":""],[n.status===""?"text-gray-300 ":""],[n.status==="ongoing"?"text-blue-800 ":""],[_===3?"lg:-mt-5":"lg:-mt-2"]])},[e("span",null,a(n.track_name),1)],2),e("div",{class:b(["lg:hidden flex pl-7",[n.status==="yes"?"bg-green-900 text-white":""],[n.status==="no"?"bg-red-700 text-white":""],[n.status===""?"bg-gray-300 text-gray-200":""],[n.status==="ongoing"?"bg-blue-800 text-white":""],[_===3?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[n.track_name==="admissions"?(d(),o("span",Oe,l[8]||(l[8]=[e("i",{class:"fa fa-address-card"},null,-1)]))):f("",!0),n.track_name==="advising"?(d(),o("span",Re,l[9]||(l[9]=[e("i",{class:"fa fa-calendar-check"},null,-1)]))):f("",!0),n.track_name==="accounting"?(d(),o("span",Ue,l[10]||(l[10]=[e("i",{class:"fa fa-money-bill-alt"},null,-1)]))):f("",!0),n.track_name==="evaluation"||n.track_name==="verification"?(d(),o("span",He,l[11]||(l[11]=[e("i",{class:"fa fa-star"},null,-1)]))):f("",!0)],2)],2)],2)]))),128))]),e("li",qe,[e("div",Je,[e("button",{onClick:n=>X(u.id),class:"cursor-pointer hover:bg-white hover:text-green-600 border-green-600 border-2 bg-green-600 text-white uppercase font-bold px-1 rounded-lg"}," Details ",8,Pe),e("div",Ye,[e("button",{onClick:n=>G(u.id)},l[12]||(l[12]=[e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)]),8,Ge)])])])]))),128)),F(e("div",Ke,[l[13]||(l[13]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:W},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:Q},"Cancel")])],512),[[re,s(E)]])])):f("",!0)])]),s(r).length>k.value?(d(),o("div",Qe,[e("div",{onClick:J,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},l[15]||(l[15]=[e("i",{class:"fa fa-angle-left px-2","aria-hidden":"true"},null,-1),R(" Prev ")])),e("ul",We,[(d(!0),o(z,null,M(s(x),(u,T)=>(d(),o("li",{class:b(["hover:bg-green-900 hover:text-white cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",s(D)===u?"bg-green-900 text-white":""]),key:T,onClick:n=>$(u)},a(u),11,Xe))),128))]),e("div",{onClick:P,class:"mt-[2px] border-b-[5px] border-t-[1px] border-r-[1px] border-l-[1px] border-green-900 flex items-center cursor-pointer bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},l[16]||(l[16]=[R(" Next "),e("i",{class:"fa fa-angle-right px-2","aria-hidden":"true"},null,-1)]))])):f("",!0)])])])):f("",!0)])])]),ne(h)])}}},nt=ue(Ze,[["__scopeId","data-v-22e0666f"]]);export{nt as default};
