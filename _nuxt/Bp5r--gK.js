import{_ as O}from"./OFrYdAV5.js";import{u as $,g as I,m as P,r as w,q as E,h as N,c as v,a as e,t as y,f as i,i as c,l as m,F as B,s as F,b as M,o as k,n as l,y as R,p as A,e as G}from"./BAZbkzMV.js";/* empty css        */import"./vUEbHlag.js";import"./70U-Vxc5.js";import"./C5S46NFB.js";import{_ as q}from"./DlAUqK2U.js";import"./Cpj98o6Y.js";const s=h=>(A("data-v-b4e3e051"),h=h(),G(),h),H={class:""},J={class:"flex mb-20"},K={class:"w-full"},Q={class:"bg-green-800"},W={class:"lg:flex mx-auto justify-between py-2 px-3.5"},X={class:"lg:flex items-center text-white lg:gap-5"},Y=s(()=>e("div",null,[e("img",{class:"rounded-full mx-auto lg:w-10",src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/circleLSULogo.jpg"})],-1)),Z={class:"flex -mt-1"},j=s(()=>e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),ee={class:"text-sm"},te=s(()=>e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1)),se=s(()=>e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)),oe=[te,se],ae={class:"px-3 pt-5"},ne={class:""},le={class:"w-full"},ie={class:"mt-8 w-fit mx-auto"},de=s(()=>e("span",{class:"w-4/12 text-right pr-5 text-xs"}," LSU Student ID Number ",-1)),re={class:"w-7/12"},ce=s(()=>e("span",{class:"w-4/12 text-right pr-5 text-xs"}," Gmail ",-1)),ue={class:"w-7/12"},pe=s(()=>e("span",{class:"w-4/12 text-right pr-5 text-xs"}," LSU Email ",-1)),me={class:"w-7/12"},ge={class:"lg:flex w-10/12 mx-auto py-10"},_e={class:"flex lg:items-center w-full lg:ml-28 relative mb-3"},he=s(()=>e("label",{class:"text-right justify-right w-10/12 font-bold capitalize text-green-900 pr-3"}," status: ",-1)),xe=["onUpdate:modelValue"],be=s(()=>e("option",{value:"",disabled:"",selected:"",hidden:""},"status ",-1)),fe=s(()=>e("option",{value:"yes"},"done",-1)),ye=s(()=>e("option",{value:"ongoing"},"ongoing",-1)),we=s(()=>e("option",{value:"no"},"pending",-1)),ve=[be,fe,ye,we],ke=s(()=>e("label",{class:"text-right justify-right w-10/12 font-bold capitalize text-green-900"}," date checked: ",-1)),Se=["onUpdate:modelValue","placeholder"],Ce=s(()=>e("label",{class:"text-right justify-right w-10/12 font-bold capitalize text-green-900"}," check by: ",-1)),Ue=["onUpdate:modelValue","placeholder"],Te=s(()=>e("label",{class:"text-right justify-right w-10/12 font-bold capitalize text-green-900"}," Remarks: ",-1)),ze=["onUpdate:modelValue","placeholder"],Ve={__name:"[id]",async setup(h){let x,S;const b=$(),n=I(),f=P(),d=w(n.mainDevServer);f.params.id;const o=([x,S]=E(()=>$fetch(d.value+"/api/admissions/"+f.params.id+"/").catch(a=>a.data)),x=await x,S(),x);N(()=>{n.user.isAuthenticated&&(n.user.email==="saodirector@lsu.edu.ph"||n.user.email==="admissions@lsu.edu.ph"||n.user.email==="scholarships@lsu.edu.ph"||n.user.email==="katerijunine.tabernero@lsu.edu.ph"||n.user.email==="sherryl.origenes@lsu.edu.ph"||n.user.email==="lourdes.niebla@lsu.edu.ph"||n.user.email==="lindakj11196@gmail.com"||n.user.email==="jorenleeluna24@gmail.com")?(b.push("/enrollment/admin/dashboard/update-student/"+f.params.id),console.log(o)):b.push("/_/unauthorized")}),w();const g=async()=>{await $fetch(d.value+"/api/admissions/"+f.params.id+"/edit/",{method:"PUT",body:o}).then(a=>{console.log("response",a),b.push("/enrollment/admin/dashboard/")})},C=()=>{b.push("/enrollment"),n.removeToken()},_=w({tracking_id:o.tracking_id,student_lsu_id_number:o.student_lsu_id_number,firstname:o.student_personal_info.firstname,email:o.student_contact_info.contact.personal_email_address,lsu_email:o.student_contact_info.contact.lsu_email_address}),U=async()=>{await $fetch(d.value+"/api/admissions/submit-new-student-to-gmail-admissions-done/",{method:"POST",headers:{"Content-Type":"application/json"},body:_.value}).then(a=>{console.log(a),g()})},T=async()=>{await $fetch(d.value+"/api/admissions/submit-new-student-to-gmail-advising-done/",{method:"POST",headers:{"Content-Type":"application/json"},body:_.value}).then(a=>{console.log(a),g()})},z=async()=>{await $fetch(d.value+"/api/admissions/submit-new-student-to-gmail-accounting-done/",{method:"POST",headers:{"Content-Type":"application/json"},body:_.value}).then(a=>{console.log(a),g()})},V=async()=>{await $fetch(d.value+"/api/admissions/submit-new-student-to-gmail-registration-done/",{method:"POST",headers:{"Content-Type":"application/json"},body:_.value}).then(a=>{console.log(a),g()})},D=async()=>{await $fetch(d.value+"/api/admissions/submit-new-student-to-gmail-evaluation-done/",{method:"POST",headers:{"Content-Type":"application/json"},body:_.value}).then(a=>{console.log(a),g()})};return(a,u)=>{const L=O;return k(),v("div",H,[e("div",J,[e("div",K,[e("div",Q,[e("div",W,[e("div",X,[Y,e("div",Z,[j,e("h1",ee,y(i(n).user.email),1)])]),e("button",{onClick:C,class:"flex hover:font-boldn pt-1"},oe)])]),e("div",ae,[e("div",ne,[e("div",le,[e("div",ie,[de,e("span",re,[c(e("input",{"onUpdate:modelValue":u[0]||(u[0]=t=>i(o).student_lsu_id_number=t),class:"w-fit text-xs px-3 py-1 capitalize border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm",placeholder:"LSU Student ID Number"},null,512),[[m,i(o).student_lsu_id_number]])]),ce,e("span",ue,[c(e("input",{"onUpdate:modelValue":u[1]||(u[1]=t=>i(o).student_contact_info.contact.personal_email_address=t),class:"w-fit text-xs px-3 py-1 lowercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm",placeholder:"Gmail"},null,512),[[m,i(o).student_contact_info.contact.personal_email_address]])]),pe,e("span",me,[c(e("input",{"onUpdate:modelValue":u[2]||(u[2]=t=>i(o).student_contact_info.contact.lsu_email_address=t),class:"w-fit text-xs px-3 py-1 lowercase border-b-2 border-t-0 border-x-0 border-green-700 shadow-lg rounded-sm",placeholder:"LSU Email"},null,512),[[m,i(o).student_contact_info.contact.lsu_email_address]])])]),e("div",ge,[(k(!0),v(B,null,F(i(o).enrollment_tracking_status,(t,p)=>(k(),v("div",{class:"relative w-full",key:p},[e("div",_e,[e("p",{class:l(["text-white lg:px-3 px-4 py-2 lg:mx-0 ml-10 h-fit w-fit lg:rounded-lg rounded-sm font-bold",[t.status==="yes"?"bg-green-900":""],[t.status==="ongoing"?"bg-blue-700":""],[t.status==="no"?"bg-gray-300":""],[t.status===""?"bg-gray-300":""],[p===4?"ml-0":""]])},y(p+1),3),e("div",{class:l(["lg:rotate-0 rotate-90 h-3 lg:my-auto lg:mx-auto mt-[70px] lg:ml-0 -ml-[60px]",[p===4?"hidden":"lg:w-full w-20"],[t.status==="yes"?"bg-green-900":""],[t.status==="ongoing"?"bg-blue-700":""],[t.status==="no"?"bg-gray-300":""],[t.status===""?"bg-gray-300":""]])},null,2)]),e("div",{class:l(["lg:static absolute top-0 left-10 lg:text-left pl-10 pr-8 shadow py-4",""])},[e("p",{class:l(["uppercase font-bold lg:mt-4 pl-10",[t.status==="yes"?"text-green-900":""],[t.status==="ongoing"?"text-blue-700":""],[t.status==="no"?"text-gray-300":""],[t.status===""?"text-gray-300":""],[p===4?"ml-0":""]])},y(t.track_name),3),e("span",{class:l(["text-xs capitalize mb-4 pl-10",[t.status==="yes"?"text-green-900":""],[t.status==="ongoing"?"text-blue-700":""],[t.status==="no"?"text-gray-300":""],[t.status===""?"text-gray-300":""]])},y(t.details),3),e("div",{class:l(["flex text-xs capitalize mt-7 gap-3",[t.status==="yes"?"text-green-900":"text-black"]])},[he,c(e("select",{class:"w-10/12 px-4 py-1 capitalize border border-green-500 shadow-lg rounded-sm text-xs -ml-1","onUpdate:modelValue":r=>t.status=r},ve,8,xe),[[R,t.status]])],2),e("div",{class:l(["flex text-xs capitalize mb-4 gap-5 mt-5",[t.status==="yes"?"text-green-900":"text-black"]])},[ke,c(e("input",{"onUpdate:modelValue":r=>t.date_checked=r,class:"border shadow border-green-500 rounded-sm w-full py-1 px-2",placeholder:t.date_checked},null,8,Se),[[m,t.date_checked]])],2),e("div",{class:l(["flex text-xs capitalize mb-4 gap-5",[t.status==="yes"?"text-green-900":"text-black"]])},[Ce,c(e("input",{"onUpdate:modelValue":r=>t.check_by=r,class:"border shadow border-green-500 rounded-sm w-full py-1 px-2",placeholder:t.check_by},null,8,Ue),[[m,t.check_by]])],2),e("div",{class:l(["flex text-xs capitalize mb-4 gap-5",[t.status==="yes"?"text-green-900":"text-black"]])},[Te,c(e("input",{"onUpdate:modelValue":r=>t.remarks=r,class:"border shadow border-green-500 rounded-sm w-full py-1 px-2",placeholder:t.remarks},null,8,ze),[[m,t.remarks]])],2)],2)]))),128))]),e("ul",{class:"flex w-11/12 mx-auto justify-evenly"},[e("li",{onClick:U,class:"border-2 border-green-900 rounded-lg text-green-800 hover:bg-green-800 hover:text-white font-bold px-10 py-2"}," Confirm"),e("li",{onClick:T,class:"border-2 border-green-900 rounded-lg text-green-800 hover:bg-green-800 hover:text-white font-bold px-10 py-2"}," Confirm"),e("li",{onClick:z,class:"border-2 border-green-900 rounded-lg text-green-800 hover:bg-green-800 hover:text-white font-bold px-10 py-2"}," Confirm"),e("li",{onClick:V,class:"border-2 border-green-900 rounded-lg text-green-800 hover:bg-green-800 hover:text-white font-bold px-10 py-2"}," Confirm"),e("li",{onClick:D,class:"border-2 border-green-900 rounded-lg text-green-800 hover:bg-green-800 hover:text-white font-bold px-10 py-2"}," Confirm")])])])])])]),M(L)])}}},Be=q(Ve,[["__scopeId","data-v-b4e3e051"]]);export{Be as default};
