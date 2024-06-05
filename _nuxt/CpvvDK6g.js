import{_ as U}from"./NcaLue8S.js";import{u as $,g as E,r as _,q as M,h as q,B as Y,c as l,a as e,t as u,f as x,F as m,s as v,i as G,v as H,d as B,z as J,b as K,x as P,o,n as k,p as Q,e as W}from"./rz3qw7TN.js";import"./ByGUe7RV.js";/* empty css        */import"./C5S46NFB.js";import{_ as X}from"./vUEbHlag.js";import{_ as Z}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const i=f=>(Q("data-v-f0525304"),f=f(),W(),f),j={class:""},ee={class:"flex"},te={class:"w-full h-screen"},se={class:"bg-green-800"},le={class:"lg:flex mx-auto justify-between py-2 px-3.5"},oe={class:"lg:flex items-center text-white lg:gap-5"},ae=i(()=>e("div",null,[e("img",{class:"rounded-full mx-auto lg:w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),ne={class:"flex -mt-1"},ie=i(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),re={class:"text-sm"},de=i(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),ue=i(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ce=[de,ue],ge={class:"px-3 pt-5"},he={class:"flex items-center mb-5"},_e={class:"w-full"},xe={class:"text-xs text-gray-600 mr-4"},pe=i(()=>e("div",{class:"w-full flex items-center"},[e("input",{type:"text",class:"shadow-lg search capitalize w-full border-b-4 border-green-800 border-x-0 border-t-0 rounded-lg h-8",value:"",placeholder:"Search"})],-1)),me={class:""},ve={class:"w-full"},fe={class:""},we={class:"shadow mx-auto text-xs"},be={class:""},ye=P('<div class="header w-full p-2 bg-green-800 text-white flex items-center shadow-lg" data-v-f0525304><ul class="lg:flex w-full lg:whitespace-nowrap" data-v-f0525304><li class="lg:w-2/12" data-v-f0525304>Tracking ID</li><li class="lg:w-2/12" data-v-f0525304>LSU ID</li><li class="text-center lg:w-7/12" data-v-f0525304>Status</li><li class="px-1 lg:w-1/12" data-v-f0525304>Action</li></ul></div>',1),ke={key:0,class:"w-full"},Ce={class:"px-2 font-bold text-xs text-green-800 lg:w-2/12"},Se={class:"px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap"},De={class:"flex font-bold text-xs px-1 text-green-800 lg:w-7/12 text-center"},Ae={class:"flex lg:items-center w-full lg:ml-4 relative"},Be={class:"flex font-bold text-xs text-green-800 lg:w-1/12"},Le={class:"w-fit px-1 flex gap-5"},Ne={class:""},Ie=["onClick"],Ve=i(()=>e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),Fe=[Ve],ze={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Oe=i(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),Te={class:"flex gap-5 mx-auto w-fit my-5"},Re={key:1,class:"itallic text-gray-400 text-center p-1"},Ue={key:0,class:"flex items-center w-fit mx-auto font-bold text-sm rounded-lg mt-5"},$e=i(()=>e("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1)),Ee={class:"border-t border-gray-50 flex w-[150px] justify-evenly overflow-x-scroll px-2"},Me=["onClick"],qe=i(()=>e("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1)),Ye={__name:"index",async setup(f){let w,C;const b=$(),a=E(),L=_(a.mainDevServer),S=([w,C]=M(()=>$fetch(L.value+"/api/admissions/list/").catch(n=>n.data)),w=await w,C(),w);let g=_(0);q(()=>{a.user.isAuthenticated&&(a.user.email==="saodirector@lsu.edu.ph"||a.user.email==="admissions@lsu.edu.ph"||a.user.email==="scholarships@lsu.edu.ph"||a.user.email==="katerijunine.tabernero@lsu.edu.ph"||a.user.email==="sherryl.origenes@lsu.edu.ph"||a.user.email==="lourdes.niebla@lsu.edu.ph"||a.user.email==="lindakj11196@gmail.com"||a.user.email==="jorenleeluna24@gmail.com")?(b.push("/enrollment/admin/dashboard"),console.log("enrollees",S),g.value=S||0,D=Math.ceil(g._rawValue.length/r.value),A=g._rawValue.length):b.push("/_/unauthorized")});const c=_(10),r=_(10),h=_(0);let D,A,N=Y(()=>g.value.slice(h.value,r.value));const I=()=>{h.value>0&&(h.value-=c.value,r.value-=c.value,console.log("prev"))},V=()=>{r.value<A&&(h.value+=c.value,r.value+=c.value,console.log("next"))},F=n=>{h.value=0,r.value=c.value,n>1&&(r.value*=n,h.value=r.value-c.value)},z=n=>{b.push("/enrollment/admin/dashboard/update-student/"+n)},O=_([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),T=()=>{b.push("/enrollment"),a.removeToken()};return(n,y)=>{const R=U;return o(),l("div",j,[e("div",ee,[e("div",te,[e("div",se,[e("div",le,[e("div",oe,[ae,e("div",ne,[ie,e("h1",re,u(x(a).user.email),1)])]),e("button",{onClick:T,class:"flex hover:font-boldn pt-1"},ce)])]),e("div",ge,[e("div",he,[e("div",_e,[(o(!0),l(m,null,v(O.value,(s,p)=>(o(),l("div",{class:"block",key:p},[e("label",xe,u(s.category_title)+" :",1),(o(!0),l(m,null,v(s.list,(t,d)=>(o(),l("button",{key:d,class:"bg-green-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-green-900 border-2 border-green-900 uppercase text-xs"},u(t),1))),128))]))),128))]),pe]),e("div",me,[e("div",ve,[e("div",fe,[e("div",we,[e("div",be,[ye,x(g).length>0?(o(),l("div",ke,[(o(!0),l(m,null,v(x(X).orderBy(x(N),"created_at","asc"),(s,p)=>(o(),l("ul",{class:"lg:flex w-full items-center h-auto border-b border-gray-100",key:p},[e("li",Ce,u(s.tracking_id),1),e("li",Se,u(s.student_lsu_id_number),1),e("li",De,[(o(!0),l(m,null,v(s.enrollment_tracking_status,(t,d)=>(o(),l("div",{class:"relative w-full my-2",key:d},[e("div",Ae,[e("p",{class:k(["text-white lg:px-2 px-1 py-1 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[t.status==="yes"?"bg-green-900":""],[t.status==="ongoing"?"bg-blue-700":""],[t.status==="no"?"bg-gray-300":""],[t.status===""?"bg-gray-300":""],[d===4?"ml-0":""]])},u(d+1),3),e("div",{class:k(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px]",[d===4?"hidden":"lg:w-full w-5"],[t.status==="yes"?"bg-green-900":""],[t.status==="no"?"bg-gray-300":""],[t.status===""?"bg-gray-300":""],[t.status==="ongoing"?"bg-blue-700":""]])},null,2)]),e("div",{class:k(["lg:static absolute top-0 left-24 lg:text-center",""])},[e("p",{class:k(["capitalize w-fit mx-auto text-xs bg-white",[t.status==="yes"?"text-green-900":""],[t.status==="no"?"text-gray-300":""],[t.status===""?"text-gray-300":""],[t.status==="ongoing"?"text-blue-700":""],[d===4?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},u(t.track_name),3)],2)]))),128))]),e("li",Be,[e("div",Le,[e("div",Ne,[e("button",{onClick:t=>z(s.id)},Fe,8,Ie)])])])]))),128)),G(e("div",ze,[Oe,e("div",Te,[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:y[0]||(y[0]=(...s)=>n.deleteAppointment&&n.deleteAppointment(...s))},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:y[1]||(y[1]=(...s)=>n.toggleDeleteBtn&&n.toggleDeleteBtn(...s))},"Cancel")])],512),[[H,n.toggleConfirmDelete]])])):(o(),l("div",Re," No Results Found! "))])]),x(g).length>c.value?(o(),l("div",Ue,[e("div",{onClick:I,class:"shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[$e,B(" Prev ")]),e("ul",Ee,[(o(!0),l(m,null,v(x(D),(s,p)=>(o(),l("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:p,onClick:t=>F(s)},u(s),9,Me))),128))]),e("div",{onClick:V,class:"bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[B(" Next "),qe])])):J("",!0)])])])])])]),K(R)])}}},Ze=Z(Ye,[["__scopeId","data-v-f0525304"]]);export{Ze as default};
