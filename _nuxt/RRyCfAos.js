import{_ as j}from"./CaKql0cy.js";import{e as ee,u as te,r as i,g as se,y as L,c as l,a as e,k as f,h as x,m as T,f as g,j as Q,v as le,d as m,n as d,i as E,F as y,l as _,t as a,N as V,b as ae,o}from"./D-Kfk08n.js";import{_ as oe}from"./5JjjnmY2.js";import"./C5S46NFB.js";const ne={class:"lg:flex min-h-screen"},re={class:"w-full"},ie={key:0,class:"w-fit mx-auto flex items-center"},de={key:1},ue={key:0,class:"w-fit mx-auto mt-4 shadow-lg rounded-lg"},ce={class:"w-full lg:p-5 px-2 py-2"},ve={class:"relative"},ge={key:0,class:"text-center"},pe={key:1},fe={key:0,class:"gap-4"},xe={class:"w-full"},he={class:"lg:flex items-center w-full"},me={class:"lg:w-4/12 w-full block text-left lg:px-2 px-0.5"},be={class:"w-full px-2 truncate"},we={class:""},ye={class:""},_e={class:"w-full px-2"},ke={class:"px-2"},Ce={class:"lg:w-[100px] w-full flex items-center justify-center uppercase"},Ie={class:"gap-x-0.5 w-full flex"},Le={class:"lg:w-[270px] w-full font-bold py-1 px-2 flex items-center lg:justify-normal justify-center"},Ve={class:"lg:w-4/12 w-full flex items-center"},Pe={class:"w-full"},Se={class:"lg:flex items-center w-11/12 mx-auto mb-1"},Ne={class:"flex w-full"},Ue={class:"border-b py-0.5 px-1 text-left truncate w-[200px]"},$e={key:0,class:"lg:flex items-center w-11/12 mx-auto"},Me={class:"flex w-full"},Be={class:"border-b py-0.5 px-1 text-left truncate w-[200px]"},Te={class:"gap-x-5 w-fit ml-5 pt-1"},Ae=["href"],De=["href"],Re={class:"w-full px-10"},Fe=["onClick"],Qe={class:"text-[10px] font-light whitespace-nowrap text-center"},Ee={class:""},Ge={key:2,class:"flex justify-center my-4"},qe=["disabled"],ze=["onClick"],Oe=["disabled"],He={key:3,class:"text-center my-5"},Je={key:0,class:"w-full z-10 bg-white h-full"},Ke={class:"w-fit mx-auto shadow-lg rounded-lg mb-6"},We={class:"border-4 border-gray-100 shadow-lg"},Xe={class:"flex items-center"},Ye={class:"lg:gap-x-3 lg:text-sm text-xs"},Ze={class:"w-full"},je={class:"w-full"},et={class:"w-full"},tt={class:"w-full"},st={class:"w-full"},lt={class:"w-full lg:text-center my-2 border-2 border-green-800 shadow-2xl flex"},at={class:"w-full"},ot={class:"w-full"},nt={class:"w-full"},rt={class:"w-full"},it={class:"w-full"},dt={class:"flex items-center w-full lg:text-center my-2 border-2 border-green-800 shadow-2xl"},ut=["onUpdate:modelValue"],ct=["onUpdate:modelValue"],vt={class:"static bottom-0 w-full"},A=5,P=3,mt={__name:"index",setup(gt){ee();const G=te(),S=i(G.mainDevServer),k=i(0),q=i("13579"),N=i("");let z=i(!0);i(!1),i(!1);const n=i(null),p=i(!1);se(async()=>{await O()});const O=async()=>{try{k.value=await $fetch(S.value+"/api/campus-pass/list").catch(r=>r.data)||[]}catch(r){console.error("Error fetching list items:",r)}finally{M.value=!1}},H=()=>{window.print()},U=i(!1),J=()=>{q.value===N.value&&(U.value=!0)};let K=i(null);const W=async r=>{n.value=await $fetch(S.value+"/api/campus-pass/"+r+"/").catch(t=>t.data),p.value=!p.value,K.value=r},I=async r=>{console.log(r),X(r)},X=async r=>{await $fetch(S.value+"/api/campus-pass/"+r+"/edit/",{method:"PUT",body:n.value}).then(async t=>{console.log("response",t)})};let b=i(""),h=i(""),C;const $=L(()=>{if(C=Array.isArray(k.value)?[...k.value]:[],b.value!==""){const r=b.value.toLowerCase();c.value=1,C=C.filter(t=>{for(const u in t)if(typeof t[u]=="string"&&t[u].toLowerCase().includes(r))return!0;return!1})}else C=Array.isArray(k.value)?[...k.value]:[];return oe.orderBy(C,"incharge_lastname","asc")});let D=i(null);const Y=async()=>{if(h.value!==""){const r=h.value.toLowerCase();D.value=n.value.name_list.filter(t=>{for(const u in t)return typeof t[u]=="string"&&t[u].toLowerCase().includes(r)})}},M=i(!0),c=i(1),R=L(()=>Math.ceil($.value.length/A)),F=L(()=>{const r=(c.value-1)*A,t=r+A;return $.value.slice(r,t)}),Z=L(()=>{const r=[];let t=Math.max(1,c.value-Math.floor(P/2)),u=Math.min(R.value,t+P-1);u-t+1<P&&(t=Math.max(1,u-P+1));for(let s=t;s<=u;s++)r.push(s);return r});return(r,t)=>{const u=j;return o(),l("div",null,[e("div",ne,[e("div",re,[t[32]||(t[32]=e("div",{class:"bg-green-800"},[e("div",{class:"flex mx-auto justify-between py-2 px-3.5"},[e("a",{href:"/",class:"w-fit mx-auto"},[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/lsu-w-h.png",class:"lg:h-9 h-8"})])])],-1)),U.value?f("",!0):(o(),l("div",ie,[x(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>N.value=s),placeholder:"Pin Code",class:"text-center my-3 rounded-bl-md rounded-tl-md px-2 text-lg border shadow-lg border-green-700 w-[100px]",type:"password",maxlength:"5"},null,512),[[T,N.value]]),e("div",{onClick:J,class:"bg-green-800 font-bold text-white text-sm h-fit cursor-pointer px-3 py-[4px] rounded-br-md rounded-tr-md hover:bg-white hover:text-green-800 border border-green-800"}," Go ")])),U.value?(o(),l("div",de,[p.value?f("",!0):(o(),l("div",ue,[x(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>Q(b)?b.value=s:b=s),placeholder:"Search ...",class:"pt-[3px] pb-[2px] px-2 border rounded-tl-md rounded-bl-md"},null,512),[[T,g(b)]]),t[12]||(t[12]=e("label",{class:"bg-green-700 text-white py-[5px] px-2 border-transparent rounded-tr-md rounded-br-md"},[e("i",{class:"fa fa-search","aria-hidden":"true"})],-1))])),e("div",ce,[x(e("div",null,[p.value?f("",!0):(o(),l("div",{key:0,class:"cursor-pointer w-full flex shadow bg-gray-100 text-green-900 font-bold px-2 text-center mb-3 py-2 text-xs uppercase",onClick:H},t[13]||(t[13]=[e("div",{class:"w-fit mx-auto flex items-center"},[e("span",{class:"w-fit mx-auto block rounded-md text-green-800 px-4 font-bold"},[e("i",{class:"fa fa-print"})]),m(" All Request Lists ")],-1)]))),e("div",ve,[e("div",{class:d(["appointment-lists mx-auto text-xs",p.value?"hidden":""])},[M.value?(o(),l("div",ge,t[14]||(t[14]=[E('<div class=""><div class="flex animate-pulse space-x-4"><div class="flex-1"><div class="h-10 bg-gray-300"></div><div class="h-0.5 bg-gray-100"></div><div class="h-10 bg-gray-200"></div><div class="h-0.5 bg-gray-100"></div><div class="h-10 bg-gray-300"></div><div class="h-0.5 bg-gray-100"></div><div class="h-10 bg-gray-200"></div><div class="h-0.5 bg-gray-100"></div><div class="h-10 bg-gray-300"></div><div class="h-0.5 bg-gray-100"></div><div class="h-10 bg-gray-100"></div><div class="h-0.5 bg-gray-100"></div></div></div></div>',1)]))):(o(),l("div",pe,[g(F).length>0?(o(),l("div",fe,[(o(!0),l(y,null,_(g(F),(s,w)=>(o(),l("div",{class:"justify-evenly text-center items-center h-auto border border-gray-200 shadow mb-3",key:w},[e("div",xe,[e("div",he,[e("div",me,[e("div",be,[e("span",we,[t[15]||(t[15]=e("i",{class:"fa fa-user mr-2"},null,-1)),m(" "+a(s.incharge_lastname)+", ",1)]),e("span",ye,a(s.incharge_firstname),1),e("span",{class:d([s.incharge_middlename==="-"?"hidden":"","mx-1"])},a(s.incharge_middlename),3)]),e("div",_e,[t[16]||(t[16]=e("i",{class:"fa fa-envelope mr-2"},null,-1)),m(" "+a(s.incharge_contact_email),1)]),e("div",ke,[t[17]||(t[17]=e("i",{class:"fa fa-phone lg:mr-2 mr-1.5"},null,-1)),m(" "+a(s.incharge_contact_number),1)])]),e("div",null,[e("div",Ce,[e("ul",Ie,[(o(!0),l(y,null,_(s.type_of_access,(v,B)=>(o(),l("li",{key:B,class:"px-2 lg:py-0.5 py-2 lg:border-transparent border text-[10px] tracking-tighter w-full whitespace-nowrap lg:text-left text-center"},a(v),1))),128))])]),e("div",Le,[t[18]||(t[18]=e("i",{class:"fa fa-calendar mr-2"},null,-1)),m(" "+a(s.schedule),1)])]),e("div",Ve,[e("div",Pe,[e("div",Se,[t[19]||(t[19]=e("label",{for:"remarks",class:"font-bold text-gray-800 mr-2.5 text-left w-fit ml-0 block"},"Remarks:",-1)),e("div",Ne,[e("p",Ue,a(s.remarks),1)])]),s.purpose?(o(),l("div",$e,[t[20]||(t[20]=e("label",{for:"purpose",class:"font-bold text-gray-800 mr-3 text-left w-fit ml-0 block"},"Purpose:",-1)),e("div",Me,[e("p",Be,a(s.purpose),1)])])):f("",!0)])]),e("div",{class:d(["lg:w-3/12 min-h-[60px] flex items-center",s.attendees==="Group"?"cursor-pointer hover:bg-gray-300 hover:text-black bg-gray-200":"bg-gray-50 h-16 flex items-center"])},[e("div",Te,[e("a",{href:s.approved_activities_link,target:"_blank",class:d(["font-bold w-full block text-green-800",s.approved_activities_link==="-"?"hidden":""])},t[21]||(t[21]=[e("i",{class:"fa fa-file-pdf text-lg"},null,-1)]),10,Ae),e("a",{href:s.approved_gso_docs_link,target:"_blank",class:d(["font-bold w-full block text-green-800",s.approved_gso_docs_link==="-"?"hidden":""])},t[22]||(t[22]=[e("i",{class:"fa fa-soccer-ball text-lg"},null,-1)]),10,De)]),e("div",Re,[e("div",{class:"font-bold uppercase lg:w-full w-fit mx-auto text-center",onClick:v=>W(s.id)},[m(a(s.attendees)+" ",1),e("i",{class:d(["fa fa-caret-down text-lg ml-2 -mt-[1px] h-[0px]",s.attendees==="Group"?"text-green-800":"hidden"])},null,2)],8,Fe),e("div",Qe,[t[23]||(t[23]=m(" TID: ")),e("span",Ee,a(s.tracking_id),1)])])],2)])])]))),128))])):f("",!0)])),g($).length>0?(o(),l("div",Ge,[e("button",{disabled:c.value===1,onClick:t[2]||(t[2]=s=>c.value--),class:"px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-500 hover:text-white"}," Previous ",8,qe),(o(!0),l(y,null,_(g(Z),s=>(o(),l("button",{key:s,onClick:w=>c.value=s,class:d(["hover:bg-green-500 hover:text-white",{"px-4 py-2 mx-1 rounded":!0,"bg-green-800 text-white":c.value===s,"bg-gray-200":c.value!==s}])},a(s),11,ze))),128)),e("button",{disabled:c.value===g(R),onClick:t[3]||(t[3]=s=>c.value++),class:"px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-500 hover:text-white"}," Next ",8,Oe)])):M.value?f("",!0):(o(),l("div",He," No items found! "))],2),p.value?(o(),l("div",Je,[e("div",Ke,[x(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>Q(h)?h.value=s:h=s),placeholder:"Search ...",onInput:Y,class:"pt-[3px] pb-[2px] px-2 border rounded-tl-md rounded-bl-md"},null,544),[[T,g(h)]]),t[24]||(t[24]=e("label",{class:"bg-green-700 text-white py-[5px] px-2 border-transparent rounded-tr-md rounded-br-md"},[e("i",{class:"fa fa-search","aria-hidden":"true"})],-1))]),e("div",We,[e("div",Xe,[t[26]||(t[26]=e("div",{class:"text-center border-b py-2 font-bold w-full"}," List of Names ",-1)),e("div",{onClick:t[5]||(t[5]=s=>p.value=!p.value),class:"bg-gray-600 hover:bg-white hover:text-gray-600 border-b border-l text-white px-2 py-[8px]"},t[25]||(t[25]=[e("i",{class:"fa fa-caret-left","aria-hidden":"true"},null,-1)]))]),e("div",Ye,[t[31]||(t[31]=E('<div class="lg:flex items-center hidden text-left lg:px-4 px-2 py-1 font-bold bg-gray-700 mb-0.5 border-b-2 border-gray-600 text-white"><div class="w-full">Full Name</div><div class="w-full">Email</div><div class="w-full">Tracking Id</div><div class="w-full">Type of Access</div><div class="w-full">Schedule</div><div class="w-full">Check-In</div></div>',1)),e("div",{class:d(g(h).value!==""?"hidden":"")},[e("div",{class:d(["lg:flex items-center text-left lg:px-4 px-2 pt-2 mb-0.5 border-b-2 border-gray-600 lg:border-t-0 border-t-2",n.value.checkin==="login"?"bg-green-800 text-white":"text-black bg-gray-100"])},[e("div",Ze,a(n.value.incharge_firstname)+" "+a(n.value.incharge_lastname),1),e("div",je,a(n.value.incharge_contact_email),1),e("div",et,a(n.value.tracking_id),1),e("div",tt,[(o(!0),l(y,null,_(n.value.type_of_access,(s,w)=>(o(),l("div",{key:w},a(s),1))),128))]),e("div",st,a(n.value.schedule),1),e("div",lt,[e("label",{class:d(["flex items-center text-center h-7 cursor-pointer text-xs bg-green-900 text-white",n.value.checkin==="login"?"hidden":"w-full"])},[x(e("input",{type:"radio",value:"login","onUpdate:modelValue":t[6]||(t[6]=s=>n.value.checkin=s),onChange:t[7]||(t[7]=s=>I(n.value.id)),class:"absolute opacity-0 cursor-pointer h-0 w-0"},null,544),[[V,n.value.checkin]]),t[27]||(t[27]=e("span",{class:"w-fit mx-auto whitespace-nowrap px-3"}," Log-In",-1))],2),e("label",{class:d(["flex items-center text-center h-7 cursor-pointer text-xs bg-gray-300 text-black",n.value.checkin==="logout"?"hidden":"w-full"])},[x(e("input",{type:"radio",value:"logout","onUpdate:modelValue":t[8]||(t[8]=s=>n.value.checkin=s),onChange:t[9]||(t[9]=s=>I(n.value.id)),class:"absolute opacity-0 cursor-pointer h-0 w-0"},null,544),[[V,n.value.checkin]]),t[28]||(t[28]=e("span",{class:"w-fit mx-auto whitespace-nowrap px-3"}," Log-Out",-1))],2)])],2)],2),(o(!0),l(y,null,_(g(D),(s,w)=>(o(),l("div",{key:w,class:d(["lg:flex items-center text-left lg:px-4 px-2 pt-2 border-b-2 border-gray-300",s.checkin==="login"?"bg-green-800 text-white":"text-black bg-gray-100"])},[e("div",at,a(s.firstname)+" "+a(s.lastname),1),e("div",ot,a(s.email),1),e("div",nt,a(n.value.tracking_id),1),e("div",rt,[(o(!0),l(y,null,_(n.value.type_of_access,(v,B)=>(o(),l("div",{key:B},a(v),1))),128))]),e("div",it,a(n.value.schedule),1),e("div",dt,[e("label",{class:d(["flex items-center text-center w-full h-7 cursor-pointer text-xs bg-green-900 text-white hover:bg-white hover:text-green-900",s.checkin==="login"?"hidden":"w-full"])},[x(e("input",{type:"radio",value:"login","onUpdate:modelValue":v=>s.checkin=v,class:"hidden cursor-pointer h-0 w-0",onChange:t[10]||(t[10]=v=>I(n.value.id))},null,40,ut),[[V,s.checkin]]),t[29]||(t[29]=e("span",{class:"w-fit mx-auto"}," Log-In",-1))],2),e("label",{class:d(["flex items-center text-center w-full h-7 cursor-pointer text-xs bg-gray-300 text-black",s.checkin==="logout"?"hidden":"w-full"])},[x(e("input",{type:"radio",value:"logout","onUpdate:modelValue":v=>s.checkin=v,class:"hidden cursor-pointer h-0 w-0",onChange:t[11]||(t[11]=v=>I(n.value.id))},null,40,ct),[[V,s.checkin]]),t[30]||(t[30]=e("span",{class:"w-fit mx-auto"}," Log-Out",-1))],2)])],2))),128))])])])):f("",!0)])],512),[[le,g(z)]])])])):f("",!0)])]),e("div",vt,[ae(u)])])}}};export{mt as default};
