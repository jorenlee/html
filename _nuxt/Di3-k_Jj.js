import{_ as $}from"./CRlSJ_Pa.js";import{u as E,g as M,r as _,q,h as Y,B as G,c as s,a as e,t as c,f as p,F as f,s as v,i as H,v as J,d as L,z as x,b as K,x as P,o as l,n as C,p as Q,e as W}from"./ro2K5Opj.js";import"./pZ4memGL.js";/* empty css        */import"./C5S46NFB.js";import{_ as X}from"./vUEbHlag.js";import{_ as Z}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const a=b=>(Q("data-v-d299ea86"),b=b(),W(),b),j={class:""},ee={class:"flex min-h-screen"},te={class:"w-full"},se={class:"bg-green-800"},le={class:"lg:flex mx-auto justify-between py-2"},oe={class:"lg:flex items-center text-white gap-5"},ae=a(()=>e("div",{class:"lg:p-0 pt-1 pb-3 mx-3.5"},[e("img",{class:"rounded-full w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),ne={class:"flex py-2 items-center lg:border-none border-t-2 border-white justify-center"},ie=a(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),re={class:"text-sm pt-1"},de=a(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),ce=a(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),ue=[de,ce],ge={class:"px-3 pt-5"},he={class:"lg:flex items-center mb-5"},_e={class:"w-full"},pe={class:"text-xs mr-4 lg:mb-0 mb-2 block lg:flex font-bold text-green-900"},xe=a(()=>e("div",{class:"w-full flex items-center lg:mt-0 mt-5"},[e("input",{type:"text",class:"shadow-lg search capitalize w-full border border-b-4 border-green-800 rounded-sm h-8",value:"",placeholder:"Search"})],-1)),me={class:""},fe={class:"w-full"},ve={class:""},be={class:"shadow mx-auto text-xs"},we={class:""},ye=P('<div class="lg:flex hidden header w-full p-2 bg-green-800 text-white items-center shadow-lg" data-v-d299ea86><ul class="flex justify-between w-full lg:whitespace-nowrap" data-v-d299ea86><li class="lg:w-2/12" data-v-d299ea86>Tracking ID</li><li class="lg:w-2/12" data-v-d299ea86>LSU ID</li><li class="text-center lg:w-7/12" data-v-d299ea86>Status</li><li class="px-1 lg:w-1/12" data-v-d299ea86>Action</li></ul></div>',1),ke={key:0,class:"w-full"},Ce={class:"lg:px-2 font-bold text-xs text-green-800 lg:w-2/12 uppercase"},Se={class:"lg:px-1 font-bold text-xs text-green-800 lg:w-2/12 whitespace-nowrap uppercase"},De={class:"flex font-bold text-xs text-green-800 lg:w-7/12 text-center"},Ae={class:"flex lg:items-center lg:h-fit h-0 lg:w-full w-3/12 lg:ml-4 relative"},Be={class:"lg:flex hidden"},Le={class:"lg:hidden flex pl-7"},Ne={key:0},Ie=a(()=>e("i",{class:"fa fa-address-card"},null,-1)),Ve=[Ie],Fe={key:1},ze=a(()=>e("i",{class:"fa fa-calendar-check"},null,-1)),Oe=[ze],Te={key:2},Re=a(()=>e("i",{class:"fa fa-money-bill-alt"},null,-1)),Ue=[Re],$e={key:3},Ee=a(()=>e("i",{class:"fa fa-university"},null,-1)),Me=[Ee],qe={key:4},Ye=a(()=>e("i",{class:"fa fa-star"},null,-1)),Ge=[Ye],He={class:"flex justify-center font-bold text-xs text-green-800 lg:w-1/12 lg:static absolute top-2 right-2"},Je={class:"w-fit px-1 flex gap-5"},Ke={class:""},Pe=["onClick"],Qe=a(()=>e("i",{class:"fa fa-edit text-yellow-500 rounded-lg uppercase text-xl hover:text-3xl","aria-hidden":"true"},null,-1)),We=[Qe],Xe={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Ze=a(()=>e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),je={class:"flex gap-5 mx-auto w-fit my-5"},et={key:1,class:"itallic text-gray-400 text-center p-1"},tt={key:0,class:"flex items-center w-fit mx-auto font-bold text-sm rounded-lg my-5"},st=a(()=>e("i",{class:"fa fa-angle-left","aria-hidden":"true"},null,-1)),lt={class:"border-t border-gray-50 flex w-[150px] justify-evenly overflow-x-scroll px-2"},ot=["onClick"],at=a(()=>e("i",{class:"fa fa-angle-right","aria-hidden":"true"},null,-1)),nt={__name:"index",async setup(b){let w,S;const y=E(),n=M(),N=_(n.mainDevServer),D=([w,S]=q(()=>$fetch(N.value+"/api/admissions/list/").catch(i=>i.data)),w=await w,S(),w);let g=_(0);Y(()=>{n.user.isAuthenticated&&(n.user.email==="saodirector@lsu.edu.ph"||n.user.email==="ascdirector@lsu.edu.ph"||n.user.email==="admissions@lsu.edu.ph"||n.user.email==="scholarships@lsu.edu.ph"||n.user.email==="katerijunine.tabernero@lsu.edu.ph"||n.user.email==="sherryl.origenes@lsu.edu.ph"||n.user.email==="lourdes.niebla@lsu.edu.ph"||n.user.email==="lindakj11196@gmail.com"||n.user.email==="jorenleeluna24@gmail.com")?(y.push("/enrollment/admin/dashboard"),console.log("enrollees",D),g.value=D||0,A=Math.ceil(g._rawValue.length/r.value),B=g._rawValue.length):y.push("/_/unauthorized")});const u=_(10),r=_(10),h=_(0);let A,B,I=G(()=>g.value.slice(h.value,r.value));const V=()=>{h.value>0&&(h.value-=u.value,r.value-=u.value,console.log("prev"))},F=()=>{r.value<B&&(h.value+=u.value,r.value+=u.value,console.log("next"))},z=i=>{h.value=0,r.value=u.value,i>1&&(r.value*=i,h.value=r.value-u.value)},O=i=>{y.push("/enrollment/admin/dashboard/update-student/"+i)},T=_([{category_title:"Student Classification Status",list:["Continuing","Returnee"]}]),R=()=>{y.push("/enrollment"),n.removeToken()};return(i,k)=>{const U=$;return l(),s("div",j,[e("div",ee,[e("div",te,[e("div",se,[e("div",le,[e("div",oe,[ae,e("div",ne,[ie,e("h1",re,c(p(n).user.email),1)])]),e("button",{onClick:R,class:"flex hover:font-bold pt-3 lg:static absolute top-2 right-2 lg:pt-1.5"},ue)])]),e("div",ge,[e("div",he,[e("div",_e,[(l(!0),s(f,null,v(T.value,(o,m)=>(l(),s("div",{class:"lg:flex items-center block lg:text-left text-center",key:m},[e("label",pe,c(o.category_title)+" : ",1),(l(!0),s(f,null,v(o.list,(t,d)=>(l(),s("button",{key:d,class:"bg-green-900 text-white rounded-lg mx-2 py-1 px-3 hover:bg-white hover:text-green-900 border-2 border-green-900 uppercase text-xs"},c(t),1))),128))]))),128))]),xe]),e("div",me,[e("div",fe,[e("div",ve,[e("div",be,[e("div",we,[ye,p(g).length>0?(l(),s("div",ke,[(l(!0),s(f,null,v(p(X).orderBy(p(I),"created_at","asc"),(o,m)=>(l(),s("ul",{class:"lg:flex w-full items-center h-auto border-b border-gray-100 border lg:mb-0 mb-3 lg:p-0 p-3 relative",key:m},[e("li",Ce,c(o.tracking_id),1),e("li",Se,c(o.student_lsu_id_number),1),e("li",De,[(l(!0),s(f,null,v(o.enrollment_tracking_status,(t,d)=>(l(),s("div",{class:"relative w-full lg:py-2 py-1 block",key:d},[e("div",Ae,[e("p",{class:C(["text-white lg:px-2 px-1 py-1 lg:mx-0 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[t.status==="yes"?"bg-green-900":""],[t.status==="ongoing"?"bg-blue-700":""],[t.status==="no"?"bg-gray-300":""],[t.status===""?"bg-gray-300":""],[d===4?"ml-0":""]])},c(d+1),3),e("div",{class:C(["lg:rotate-0 rotate-90 h-1 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px] lg:flex hidden",[d===4?"hidden":"lg:w-full w-5"],[t.status==="yes"?"bg-green-900":""],[t.status==="no"?"bg-gray-300":""],[t.status===""?"bg-gray-300":""],[t.status==="ongoing"?"bg-blue-700":""]])},null,2)]),e("div",{class:C(["lg:static lg:text-center lg:w-auto w-full",""])},[e("p",{class:C(["capitalize lg:w-fit mx-auto text-xs py-1 lg:py-0",[t.status==="yes"?" lg:bg-white bg-green-800 text-white lg:text-black":""],[t.status==="no"?"text-gray-300":""],[t.status===""?"lg:bg-transparent bg-gray-300 lg:text-gray-300 text-white":""],[t.status==="ongoing"?"text-white bg-blue-700":""],[d===4?"lg:-mt-5 lg:ml-12":"lg:-mt-2"]])},[e("div",Be,[e("span",null,c(t.track_name),1)]),e("div",Le,[t.track_name==="admissions"?(l(),s("span",Ne,Ve)):x("",!0),t.track_name==="advising"?(l(),s("span",Fe,Oe)):x("",!0),t.track_name==="accounting"?(l(),s("span",Te,Ue)):x("",!0),t.track_name==="registration"?(l(),s("span",$e,Me)):x("",!0),t.track_name==="evaluation"?(l(),s("span",qe,Ge)):x("",!0)])],2)],2)]))),128))]),e("li",He,[e("div",Je,[e("div",Ke,[e("button",{onClick:t=>O(o.id)},We,8,Pe)])])])]))),128)),H(e("div",Xe,[Ze,e("div",je,[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg",onClick:k[0]||(k[0]=(...o)=>i.deleteAppointment&&i.deleteAppointment(...o))},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg",onClick:k[1]||(k[1]=(...o)=>i.toggleDeleteBtn&&i.toggleDeleteBtn(...o))},"Cancel")])],512),[[J,i.toggleConfirmDelete]])])):(l(),s("div",et," No Results Found! "))])]),p(g).length>u.value?(l(),s("div",tt,[e("div",{onClick:V,class:"shadow px-2 py-1.5 rounded-tl-lg rounded-bl-lg bg-white hover:bg-green-900 hover:text-white text-green-950"},[st,L(" Prev ")]),e("ul",lt,[(l(!0),s(f,null,v(p(A),(o,m)=>(l(),s("li",{class:"bg-white hover:bg-green-900 hover:text-white text-green-950 cursor-pointer px-2 py-0.5 border mx-1 my-1 rounded-lg",key:m,onClick:t=>z(o)},c(o),9,ot))),128))]),e("div",{onClick:F,class:"bg-white hover:bg-green-900 hover:text-white text-green-950 shadow px-2 py-1.5 rounded-tr-lg rounded-br-lg"},[L(" Next "),at])])):x("",!0)])])])])])]),K(U)])}}},pt=Z(nt,[["__scopeId","data-v-d299ea86"]]);export{pt as default};