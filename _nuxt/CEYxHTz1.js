import{_ as te}from"./DpbvVW7c.js";import{e as se,u as ae,r as c,g as le,y as k,c as o,a as e,h,v as C,f as i,i as G,t as r,j as R,n as p,k as j,F as P,l as T,b as oe,o as n,d as b,m as B,p as ie}from"./D6qV6Mad.js";import"./C5S46NFB.js";import{_ as re}from"./5JjjnmY2.js";import{_ as ne}from"./DlAUqK2U.js";const de={class:"lg:flex min-h-screen"},ce={class:"pb-3 lg:w-3/12 bg-gray-100 z-10 w-full lg:block lg:static absolute"},ue={class:"flex items-center justify-center text-white bg-green-900 lg:py-[16px] py-[8px]"},pe={class:"flex items-center w-full px-2"},ve={class:"text-sm"},fe={class:"w-full"},ge={class:"bg-green-800"},me={class:"flex mx-auto justify-between py-2 px-3.5"},he={class:"w-full lg:p-5 px-2 py-2"},xe={class:"relative"},_e={key:0,class:"text-center"},be={key:1},we={key:0,class:"gap-4"},ye={class:"w-full"},ke={class:"lg:flex items-center"},Ce={class:"lg:w-[250px] w-full lg:border-r block text-left lg:px-2 px-0.5"},Pe={class:"w-full px-2 py-0.5"},Te={class:""},$e={class:"w-full px-2 py-0.5 border-b"},Se={class:"px-2 py-0.5"},De={class:"lg:w-[100px] w-full flex items-center justify-center uppercase"},Le={class:"gap-x-0.5 w-full lg:block flex"},je={class:"lg:w-[270px] w-full border font-bold py-1 px-2 flex items-center lg:justify-start justify-center"},Ie={class:"lg:w-[300px] w-full border flex items-center py-1"},Ae={class:"w-full"},Me={class:"flex items-center w-11/12 mx-auto mb-1"},Ne={class:"flex w-full"},Ve=["onUpdate:modelValue"],Ue={class:"flex items-center w-11/12 mx-auto"},ze={class:"flex w-full"},Ee=["onUpdate:modelValue"],Ge={class:"flex gap-x-5 w-fit mx-auto pt-1"},Re=["href"],Be=["href"],Oe={class:"w-full px-10 lg:-mt-1"},qe=["onClick"],Fe={class:"pb-1 text-[10px] font-light whitespace-nowrap text-center"},He={class:""},Ye={class:"flex w-full"},Je={class:"w-fit mx-auto py-1 flex items-center"},Ke={class:"lg:block flex items-center w-full"},Qe=["onUpdate:modelValue","onChange"],We={class:"flex px-2 font-bold pl-4"},Xe={class:"mr-0 ml-auto lg:flex justify-center text-white items-center"},Ze=["onClick"],et={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center"},tt={class:"w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white"},st={class:"flex items-center"},at={class:"flex gap-10 mr-10"},lt={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},ot={key:1,class:"flex justify-center my-4"},it=["disabled"],rt=["onClick"],nt=["disabled"],dt={key:2,class:"text-center my-5"},ct={key:0,class:"w-full z-10 bg-white h-full"},ut={class:"border-4 border-gray-100 shadow-lg"},pt={class:"flex items-center"},vt={class:"lg:grid grid-cols-4 lg:gap-x-3 lg:text-sm text-xs"},ft={class:"static bottom-0 w-full"},I=5,$=3,gt={__name:"index",setup(mt){const S=se(),g=ae(),f=c(g.mainDevServer),y=c(0);let A=c();c();let O=c(!0),d=c(!1),w=c(!1);const q=c(!1),l=c(null),x=c(!1),M=c([]);le(async()=>{setTimeout(async()=>{g.user.isAuthenticated&&(g.user.email==="jorenleeluna24@gmail.com"||g.user.email==="esmael.larubis@lsu.edu.ph")?(await N(),S.push("/_/panels/campus-security")):S.push("/_/unauthorized")},5e3),await N()});const N=async()=>{try{y.value=await $fetch(f.value+"/api/campus-pass/list").catch(a=>a.data)||[]}catch(a){console.error("Error fetching list items:",a)}finally{L.value=!1}},F=async(a,t,m,s)=>{l.value=await $fetch(f.value+"/api/campus-pass/"+a+"/").catch(_=>_.data),l.value.approval_status=t,l.value.purpose=m,l.value.remarks=s,H(a)},H=async a=>{await $fetch(f.value+"/api/campus-pass/"+a+"/edit/",{method:"PUT",body:l.value}).then(t=>{console.log("response",t),l.value.approval_status==="approved"&&Y(),l.value.approval_status==="declined"&&J(),l.value.approval_status==="for revision"&&K()})},Y=async()=>{await $fetch(f.value+"/api/campus-pass/to-gmail-approved/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:l.value.incharge_firstname,incharge_contact_email:l.value.incharge_contact_email,schedule:l.value.schedule,approval_status:l.value.approval_status,remarks:l.value.remarks,purpose:l.value.purpose,tracking_id:l.value.tracking_id}}).then(a=>{console.log(a)})},J=async()=>{await $fetch(f.value+"/api/campus-pass/to-gmail-declined/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:l.value.incharge_firstname,incharge_contact_email:l.value.incharge_contact_email,schedule:l.value.schedule,approval_status:l.value.approval_status,remarks:l.value.remarks,tracking_id:l.value.tracking_id}}).then(a=>{console.log(a)})},K=async()=>{await $fetch(f.value+"/api/campus-pass/to-gmail-for-revision/",{method:"POST",headers:{"Content-Type":"application/json"},body:{incharge_firstname:l.value.incharge_firstname,incharge_contact_email:l.value.incharge_contact_email,schedule:l.value.schedule,approval_status:l.value.approval_status,remarks:l.value.remarks,tracking_id:l.value.tracking_id}}).then(a=>{console.log(a)})},V=a=>{w.value=!w.value,A.value=a},Q=async()=>{await $fetch(f.value+"/api/campus-pass/"+A.value+"/delete/",{method:"DELETE",headers:{Authorization:g.user.token,"Content-Type":"application/json"}}).then(async a=>{console.log("response",a),y.value=await $fetch(f.value+"/api/campus-pass/list").catch(t=>t.data)||0,w.value=!w.value})},W=a=>{y.value.filter(function(t){a===t.id&&(M.value=t.name_list,x.value=!x.value)})},X=()=>{g.removeToken(),S.push("/_/campus-pass-admin")};let U;const D=k(()=>(U=y.value,re.orderBy(U,"id","asc"))),L=c(!0),v=c(1),z=k(()=>Math.ceil(D.value.length/I)),E=k(()=>{const a=(v.value-1)*I,t=a+I;return D.value.slice(a,t)}),Z=k(()=>{const a=[];let t=Math.max(1,v.value-Math.floor($/2)),m=Math.min(z.value,t+$-1);m-t+1<$&&(t=Math.max(1,m-$+1));for(let s=t;s<=m;s++)a.push(s);return a});return(a,t)=>{const m=te;return n(),o("div",null,[e("div",de,[h(e("div",ce,[e("div",ue,[e("div",pe,[t[7]||(t[7]=e("i",{class:"fa fa-user mx-2","aria-hidden":"true"},null,-1)),e("h1",ve,r(i(g).user.email),1)]),e("div",{onClick:t[0]||(t[0]=s=>R(d)?d.value=!i(d):d=!i(d)),class:"w-10 px-1.5 lg:hidden flex"},[e("i",{class:p(["fa text-3xl text-white",i(d)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)])]),t[8]||(t[8]=G('<div class="" data-v-ec7143c1><div class="w-fit mx-auto mt-5 mb-3" data-v-ec7143c1><img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG" class="lg:w-24 w-20 mx-auto" data-v-ec7143c1></div><div class="text-center" data-v-ec7143c1><h1 class="font-bold text-green-800 text-2xl" data-v-ec7143c1>Dashboard</h1></div><div class="mx-auto mt-10 mb-5 grid grid-cols-1" data-v-ec7143c1><a href="/_/panels/campus-security" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-black hover:bg-black hover:text-white" data-v-ec7143c1><i class="fa fa-list mr-3" aria-hidden="true" data-v-ec7143c1></i> All Request Lists </a><a href="/_/panels/campus-security/pending" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-gray-900 hover:bg-gray-900 hover:text-white" data-v-ec7143c1><i class="fa fa-clock mr-0.5" aria-hidden="true" data-v-ec7143c1></i> Pending </a><a href="/_/panels/campus-security/declined" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-red-900 hover:bg-red-900 hover:text-white" data-v-ec7143c1><i class="fa fa-ban mr-0.5" aria-hidden="true" data-v-ec7143c1></i> Declined </a><a href="/_/panels/campus-security/inprogress" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-yellow-600 hover:bg-yellow-600 hover:text-white" data-v-ec7143c1><i class="fa fa-adjust mr-0.5" aria-hidden="true" data-v-ec7143c1></i> In Progress </a><a href="/_/panels/campus-security/approved" class="pl-12 text-xs mx-auto mb-2 w-full capitalize whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-ec7143c1><i class="fa fa-check" aria-hidden="true" data-v-ec7143c1></i> Approved </a><a href="/" class="text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white" data-v-ec7143c1><i class="fa fa-globe mr-3" aria-hidden="true" data-v-ec7143c1></i> LSU HOME PAGE </a></div></div>',1))],512),[[C,i(d)]]),e("div",fe,[e("div",ge,[e("div",me,[e("div",{onClick:t[1]||(t[1]=s=>R(d)?d.value=!i(d):d=!i(d)),class:"w-10 px-1.5"},[e("i",{class:p(["fa text-3xl text-white",i(d)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("button",{onClick:X,class:"flex hover:font-bold pt-1"},t[9]||(t[9]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",he,[h(e("div",null,[t[27]||(t[27]=e("div",{class:"w-full shadow bg-gray-100 text-green-900 font-bold px-2 text-center mb-3 py-2 text-xs uppercase"}," All Request Lists ",-1)),e("div",xe,[e("div",{class:p(["appointment-lists mx-auto text-xs",x.value?"hidden":""])},[L.value?(n(),o("div",_e,t[10]||(t[10]=[G('<div class="" data-v-ec7143c1><div class="flex animate-pulse space-x-4" data-v-ec7143c1><div class="flex-1" data-v-ec7143c1><div class="h-10 bg-gray-300" data-v-ec7143c1></div><div class="h-0.5 bg-gray-100" data-v-ec7143c1></div><div class="h-10 bg-gray-200" data-v-ec7143c1></div><div class="h-0.5 bg-gray-100" data-v-ec7143c1></div><div class="h-10 bg-gray-300" data-v-ec7143c1></div><div class="h-0.5 bg-gray-100" data-v-ec7143c1></div><div class="h-10 bg-gray-200" data-v-ec7143c1></div><div class="h-0.5 bg-gray-100" data-v-ec7143c1></div><div class="h-10 bg-gray-300" data-v-ec7143c1></div><div class="h-0.5 bg-gray-100" data-v-ec7143c1></div><div class="h-10 bg-gray-100" data-v-ec7143c1></div><div class="h-0.5 bg-gray-100" data-v-ec7143c1></div></div></div></div>',1)]))):(n(),o("div",be,[i(E).length>0?(n(),o("div",we,[(n(!0),o(P,null,T(i(E),(s,_)=>(n(),o("div",{class:"justify-evenly items-center h-auto border border-gray-200 shadow mb-5 lg:w-fit mx-auto",key:_},[e("div",ye,[e("div",ke,[e("div",Ce,[e("div",Pe,[e("span",Te,[t[11]||(t[11]=e("i",{class:"fa fa-user mr-2"},null,-1)),b(" "+r(s.incharge_firstname),1)]),e("span",{class:p([{hidden:s.incharge_middlename==="-",hidden:s.incharge_middlename==="n/a",hidden:s.incharge_middlename==="N/A",hidden:s.incharge_middlename===""},"mx-1"])},r(s.incharge_middlename),3),e("span",null,r(s.incharge_lastname),1)]),e("div",$e,[t[12]||(t[12]=e("i",{class:"fa fa-envelope mr-2"},null,-1)),b(" "+r(s.incharge_contact_email),1)]),e("div",Se,[t[13]||(t[13]=e("i",{class:"fa fa-phone lg:mr-2 mr-1.5"},null,-1)),b(" "+r(s.incharge_contact_number),1)])]),e("div",De,[e("ul",Le,[(n(!0),o(P,null,T(s.type_of_access,(u,ee)=>(n(),o("li",{key:ee,class:"shadow px-2 py-0.5 text-[10px] tracking-tighter w-full whitespace-nowrap lg:text-left text-center"},r(u),1))),128))])]),e("div",je,[t[14]||(t[14]=e("i",{class:"fa fa-calendar mr-2"},null,-1)),b(" "+r(s.schedule),1)]),e("div",Ie,[e("div",Ae,[e("div",Me,[t[15]||(t[15]=e("label",{for:"remarks",class:"font-bold text-gray-800 mr-2.5"},"Remarks:",-1)),e("div",Ne,[h(e("input",{type:"text",class:"border w-full mx-auto py-1 px-1 shadow-sm","onUpdate:modelValue":u=>s.remarks=u},null,8,Ve),[[B,s.remarks]])])]),e("div",Ue,[t[16]||(t[16]=e("label",{for:"purpose",class:"font-bold text-gray-800 mr-3"},"Purpose:",-1)),e("div",ze,[h(e("input",{type:"text",class:"border w-full mx-auto py-1 px-1 shadow-sm",placeholder:"Purpose","onUpdate:modelValue":u=>s.purpose=u},null,8,Ee),[[B,s.purpose]])])])])]),e("div",{class:p(["lg:w-[200px]",s.attendees==="Group"?"cursor-pointer hover:bg-gray-300 hover:text-black bg-gray-200":"bg-gray-50 h-16 flex items-center"])},[e("div",Ge,[e("a",{href:s.approved_activities_link,target:"_blank",class:p(["font-bold w-full block text-green-800",s.approved_activities_link==="-"?"hidden":""])},t[17]||(t[17]=[e("i",{class:"fa fa-file-pdf text-lg"},null,-1)]),10,Re),e("a",{href:s.approved_gso_docs_link,target:"_blank",class:p(["font-bold w-full block text-green-800",s.approved_gso_docs_link==="-"?"hidden":""])},t[18]||(t[18]=[e("i",{class:"fa fa-soccer-ball text-lg"},null,-1)]),10,Be)]),e("div",Oe,[e("div",{class:"font-bold uppercase lg:w-full w-fit mx-auto text-center",onClick:u=>W(s.id)},[b(r(s.attendees)+" ",1),e("i",{class:p(["fa fa-caret-down text-lg ml-2 -mt-[1px] h-[0px]",s.attendees==="Group"?"text-green-800":"hidden"])},null,2)],8,qe),e("div",Fe,[t[19]||(t[19]=b(" TID: ")),e("span",He,r(s.tracking_id),1)])])],2),e("div",{class:p(["lg:w-[110px] w-full lg:min-h-16 border flex items-center justify-center",{"bg-red-700":s.approval_status==="declined","bg-gray-700":s.approval_status==="pending","bg-yellow-500":s.approval_status==="for revision","bg-green-900":s.approval_status==="approved"}])},[e("div",Ye,[e("div",Je,[e("div",Ke,[t[21]||(t[21]=e("label",{class:"font-bold block text-white lg:mr-0 mr-2 text-center"},"Status",-1)),h(e("select",{"onUpdate:modelValue":u=>s.approval_status=u,name:"borrower_category",class:"shadow block font-bold rounded-md w-fit border pb-0.5 border-[#e5e7eb] capitalize",required:"",onChange:u=>F(s.id,s.approval_status,s.purpose,s.remarks)},t[20]||(t[20]=[e("option",{value:"pending"},"Update Data",-1),e("option",{value:"approved"},"Approved",-1),e("option",{value:"declined"},"declined",-1),e("option",{value:"for revision"}," revision ",-1)]),40,Qe),[[ie,s.approval_status]])])])])],2),e("div",We,[e("div",Xe,[e("button",{onClick:u=>V(s.id),class:"text-red-500 hover:text-white hover:bg-red-500 bg-white border border-red-500 px-1.5 py-0.5 rounded-md"},t[22]||(t[22]=[e("i",{class:"fa fa-close rounded-lg uppercase","aria-hidden":"true"},null,-1)]),8,Ze)])])])])]))),128)),h(e("div",et,[e("div",tt,[e("div",st,[t[23]||(t[23]=e("div",{class:"font-bold pl-5 pr-10"}," Confirm Remarks: ",-1)),e("div",at,[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[2]||(t[2]=(...s)=>a.btnConfirm&&a.btnConfirm(...s))},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:t[3]||(t[3]=(...s)=>a.btnCloseModal&&a.btnCloseModal(...s))},"no")])])])],512),[[C,q.value]]),h(e("div",lt,[t[24]||(t[24]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:Q},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:V},"Cancel")])],512),[[C,i(w)]])])):j("",!0),i(D).length>0?(n(),o("div",ot,[e("button",{disabled:v.value===1,onClick:t[4]||(t[4]=s=>v.value--),class:"px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-500 hover:text-white"}," Previous ",8,it),(n(!0),o(P,null,T(i(Z),s=>(n(),o("button",{key:s,onClick:_=>v.value=s,class:p(["hover:bg-green-500 hover:text-white",{"px-4 py-2 mx-1 rounded":!0,"bg-green-800 text-white":v.value===s,"bg-gray-200":v.value!==s}])},r(s),11,rt))),128)),e("button",{disabled:v.value===i(z),onClick:t[5]||(t[5]=s=>v.value++),class:"px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-500 hover:text-white"}," Next ",8,nt)])):L.value?j("",!0):(n(),o("div",dt," No items found! "))]))],2),x.value?(n(),o("div",ct,[e("div",ut,[e("div",pt,[t[26]||(t[26]=e("div",{class:"text-center border-b py-2 font-bold w-full"}," List of Names ",-1)),e("div",{onClick:t[6]||(t[6]=s=>x.value=!x.value),class:"bg-gray-600 hover:bg-white hover:text-gray-600 border-b border-l text-white px-2 py-[8px]"},t[25]||(t[25]=[e("i",{class:"fa fa-close","aria-hidden":"true"},null,-1)]))]),e("div",vt,[(n(!0),o(P,null,T(M.value,(s,_)=>(n(),o("div",{key:_,class:"text-left lg:px-10 px-2 py-1 bg-gray-100 mb-0.5"},[e("div",null,r(s.lastname)+", "+r(s.firstname)+" "+r(s.middlename),1),e("div",null,r(s.email),1)]))),128))])])])):j("",!0)])],512),[[C,i(O)]])])])])]),e("div",ft,[oe(m)])])}}},yt=ne(gt,[["__scopeId","data-v-ec7143c1"]]);export{yt as default};
