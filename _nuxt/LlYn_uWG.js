import{o as i,c as r,a as e,d,m as F,u as O,r as n,q as R,v as g,x as h,n as p,b as D,y as q,z as C,t as a,F as L,D as $,E as G,C as W}from"./By_D9HbC.js";import{_ as H}from"./4kkBFhKz.js";import{_ as Y}from"./5JjjnmY2.js";import{_ as J}from"./DlAUqK2U.js";import"./C5S46NFB.js";const K={class:"mx-auto mt-10 mb-5 grid grid-cols-1"},Q={__name:"CampusPassMenuBar",props:["goToList","goToCreate"],setup(b){return(v,o)=>(i(),r("div",null,[o[3]||(o[3]=e("div",{class:"w-fit mx-auto mt-5 mb-3"},[e("img",{src:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/logos/LSU_Seal.PNG",class:"lg:w-24 w-20 mx-auto"})],-1)),o[4]||(o[4]=e("div",{class:"text-center"},[e("h1",{class:"font-bold text-green-800 text-3xl"},"Welcome!")],-1)),e("div",K,[e("button",{onClick:o[0]||(o[0]=(...u)=>b.goToList&&b.goToList(...u)),class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},o[1]||(o[1]=[e("i",{class:"fa fa-list mr-3","aria-hidden":"true"},null,-1),d(" All Request Lists ")])),o[2]||(o[2]=e("a",{href:"/",class:"text-xs mx-auto mb-2 w-full uppercase whitespace-nowrap px-5 py-1 font-bold text-left text-green-900 hover:bg-green-900 hover:text-white"},[e("i",{class:"fa fa-globe mr-3","aria-hidden":"true"}),d(" LSU HOME PAGE ")],-1))])]))}},X={class:"flex"},Z={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},ee={class:"w-full min-h-screen"},te={class:"bg-green-800"},se={class:"lg:flex mx-auto justify-between py-2 px-3.5"},oe={class:"lg:flex items-center text-white gap-5"},le={class:"flex -mt-1"},ae={class:"text-sm"},ne={class:"w-full lg:p-5 py-2"},ie={class:""},re={class:"appointment-lists mx-auto text-xs"},de={class:""},ue={key:0,class:"px-2 lg:grid grid-cols-4 gap-x-10"},ce={class:"py-3 w-full border-4 border-gray-100 shadow-lg"},pe={class:"flex items-center px-2 mb-5"},me={class:"w-full"},fe={class:""},ve={class:"px-2 flex items-center justify-center"},_e={class:"px-2 flex items-center justify-center"},ge={class:"flex items-center"},xe={class:"w-full"},he={class:"font-bold"},be={class:"font-bold"},we={class:"font-bold"},ye={class:"font-bold"},ke={class:"my-5"},Ce=["href"],Te=["href"],Se=["href"],De={class:"flex items-center justify-center"},Le={class:"flex w-fit mx-auto my-2 gap-5"},$e={class:"w-fit mx-auto flex items-center gap-3"},Be=["onUpdate:modelValue","onChange"],je={class:"flex px-2 font-bold justify-center"},Ae={class:"mx-auto lg:flex justify-center text-white items-center"},Me=["onClick"],Ee={class:"border-4 border-gray-100 shadow-lg"},Ie={class:""},Ne={class:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff59] w-full h-screen flex items-center"},Ue={class:"px-5 rounded-lg bg-white shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},Pe={key:0,class:"italic text-gray-400 text-center p-1"},Ve={__name:"index",setup(b){const v=F(),o=O(),u=n(o.mainDevServer),c=n(0);let T=n(),w=n(),B=n(!0),m=n(!0),_=n(!1);const x=n(!1),y=n(null),j=async(l,t)=>{x.value=!0,w.value=l,console.log(w.value),y.value=await $fetch(u.value+"/api/campus-pass/"+l+"/").catch(k=>k.data),y.value.approval_status=t},A=()=>{M(),x.value=!1};R(()=>{setTimeout(async()=>{o.user.isAuthenticated&&(o.user.email==="jorenleeluna24@gmail.com"||o.user.email==="esmael.larubis@lsu.edu.ph")?(c.value=await $fetch(u.value+"/api/campus-pass/list").catch(l=>l.data)||0,v.push("/_/panels/campus-security"),console.log(c.value)):v.push("/_/unauthorized")},5e3)});const M=async()=>{await $fetch(u.value+"/api/campus-pass/"+w.value+"/edit/",{method:"PUT",body:y.value}).then(l=>{console.log("response",l)})},E=async()=>{x.value=!1,c.value=await $fetch(u.value+"/api/campus-pass/list").catch(l=>l.data)||0},S=l=>{_.value=!_.value,T.value=l},I=async()=>{await $fetch(u.value+"/api/campus-pass/"+T.value+"/delete/",{method:"DELETE",headers:{Authorization:o.user.token,"Content-Type":"application/json"}}).then(async l=>{console.log("response",l),c.value=await $fetch(u.value+"/api/campus-pass/list").catch(t=>t.data)||0,_.value=!_.value})},N=()=>{o.removeToken(),v.push("/_/campus-pass-admin")};n(!0);const U=()=>{v.push("/_/panels/campus-security")};return(l,t)=>{const k=Q,P=H;return i(),r("div",null,[e("div",X,[g(e("div",Z,[D(k,{goToList:U,goToCreate:l.goToCreate},null,8,["goToCreate"])],512),[[h,p(m)]]),e("div",ee,[e("div",te,[e("div",se,[e("div",oe,[e("div",{onClick:t[0]||(t[0]=s=>q(m)?m.value=!p(m):m=!p(m)),class:"w-10 px-1.5"},[e("i",{class:C(["fa text-3xl text-white",p(m)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",le,[t[1]||(t[1]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",ae,a(p(o).user.email),1)])]),e("button",{onClick:N,class:"flex hover:font-bold pt-1"},t[2]||(t[2]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",null,[e("div",ne,[g(e("div",null,[e("div",ie,[e("div",re,[e("div",de,[c.value.length>0?(i(),r("div",ue,[(i(!0),r(L,null,$(p(Y).orderBy(c.value,"id","asc"),(s,V)=>(i(),r("div",{class:"justify-evenly text-center items-center h-auto mb-5",key:V},[e("div",ce,[e("div",pe,[e("div",me,[e("span",fe,a(s.main_in_charge_fullname),1),t[3]||(t[3]=e("br",null,null,-1)),d(" "+a(s.email_address)+" ",1),t[4]||(t[4]=e("br",null,null,-1)),d(" "+a(s.mobile_phone_number),1)])]),e("div",ve,a(s.purpose_of_access),1),e("div",_e,a(s.location),1),e("div",ge,[e("div",xe,[t[5]||(t[5]=d(" Start : ")),e("span",he,a(s.date_start),1),t[6]||(t[6]=d(" Time: ")),e("span",be,a(s.from_time_start)+" to "+a(s.from_time_end),1),t[7]||(t[7]=e("br",null,null,-1)),t[8]||(t[8]=d(" End : ")),e("span",we,a(s.date_end),1),t[9]||(t[9]=d(" Time: ")),e("span",ye,a(s.to_time_start)+" to "+a(s.to_time_end),1)])]),e("div",ke,[e("a",{href:s.approved_activities_link,target:"_blank",class:"font-bold w-full block text-green-800"},"Approved Activities",8,Ce),e("a",{href:s.approved_booking_document_gso_link,target:"_blank",class:"font-bold w-full block text-green-800"},"Approved Booking GSO",8,Te),e("a",{href:s.lists_names_link,target:"_blank",class:"font-bold w-full block text-green-800"},"Bulk List of Names",8,Se)]),e("div",De,[e("div",Le,[e("div",$e,[e("div",null,[e("label",{class:C(["font-bold py-1 block",{"text-red-700":s.approval_status==="declined","text-yellow-500":s.approval_status==="pending","text-orange-500":s.approval_status==="for revision","text-green-900":s.approval_status==="approved"}])},"STATUS:",2),g(e("select",{"onUpdate:modelValue":f=>s.approval_status=f,name:"borrower_category",class:"shadow-md p-2 block font-bold rounded-md w-fit border border-[#e5e7eb] capitalize",required:"",onChange:f=>j(s.id,s.approval_status)},t[10]||(t[10]=[e("option",{value:"approved"},"approved",-1),e("option",{value:"declined"},"declined",-1),e("option",{value:"pending"},"pending",-1),e("option",{value:"for revision"},"for revision",-1)]),40,Be),[[W,s.approval_status]])])])])]),e("div",je,[e("div",Ae,[e("button",{onClick:f=>S(s.id),class:"bg-red-500 px-5 py-2 rounded-md"},t[11]||(t[11]=[e("i",{class:"fa fa-trash text-white rounded-lg uppercase hover:text-3xl mr-3","aria-hidden":"true"},null,-1),d(" Delete ")]),8,Me)])])]),e("div",Ee,[t[12]||(t[12]=e("div",{class:"text-center border-y py-2 font-bold"}," List of Names ",-1)),e("div",Ie,[(i(!0),r(L,null,$(s.few_name_list,(f,z)=>(i(),r("div",{key:z,class:"text-left px-3 py-5 bg-gray-100 mb-0.5"},[e("div",null,a(f.fullname),1),e("div",null,a(f.email),1)]))),128))])])]))),128)),g(e("div",Ne,[e("div",{class:"w-fit mx-auto flex items-center shadow-2xl border-2 rounded-lg py-2 bg-white"},[e("div",{class:"flex items-center"},[t[13]||(t[13]=e("div",{class:"font-bold pl-5 pr-10"},"Confirm Status: ",-1)),e("div",{class:"flex gap-10 mr-10"},[e("span",{class:"px-3 uppercase py-1 rounded-lg bg-green-900 border hover:border-green-900 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:A},"yes"),e("span",{class:"px-3 uppercase py-1 rounded-lg bg-red-700 border hover:border-red-700 hover:bg-white hover:text-green-900 text-white font-bold cursor-pointer",onClick:E},"no")])])])],512),[[h,x.value]]),g(e("div",Ue,[t[14]||(t[14]=e("div",{class:"my-6"},"Are you sure you want to Delete?",-1)),e("div",{class:"flex gap-5 mx-auto w-fit my-5"},[e("span",{class:"bg-green-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:I},"Yes"),e("span",{class:"bg-red-900 text-white px-3 py-1 rounded-lg cursor-pointer",onClick:S},"Cancel")])],512),[[h,p(_)]])])):G("",!0)]),c.value.length===0?(i(),r("div",Pe," No Results Found! ")):(i(),r("div",{key:1,class:C(["italic text-gray-400 text-center p-1",c.value.length>0?"hidden":""])}," Please Wait ... ",2))])])],512),[[h,p(B)]])])])])]),D(P)])}}},Ge=J(Ve,[["__scopeId","data-v-8be06666"]]);export{Ge as default};
