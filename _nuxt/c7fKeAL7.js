import{_ as S}from"./CyOfWZys.js";import{_ as T}from"./DpFXN4v5.js";import{u as V,f as j,r as s,g as B,c as U,a as e,h as p,v as D,e as o,b as v,i as f,n as H,t as O,j as L,k as c,o as P}from"./DfQsSFlo.js";import"./5JjjnmY2.js";import"./C5S46NFB.js";const z={class:""},A={class:"flex"},N={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},R={class:"w-full lg:h-screen"},q={class:"bg-green-800"},E={class:"lg:flex mx-auto justify-between py-2 px-3.5"},G={class:"lg:flex lg:items-center text-white gap-5"},I={class:"flex -mt-1"},J={class:"text-sm"},K={class:"text-xs mb-5"},Q={class:"p-5"},W={class:"lg:flex"},X={class:"w-full md:w-1/2 mt-1"},Y={class:"w-full md:w-1/2 mt-1 lg:ml-3"},Z={class:"w-full md:w-1/2 mt-1 lg:ml-3"},$={class:"w-full md:w-1/2 mt-1 lg:ml-3"},ie={__name:"index",setup(ee){const d=V(),a=j(),b=s(a.mainDevServer);B(()=>{a.user.isAuthenticated&&(a.user.email==="jorenleeluna24@gmail.com"||a.user.email==="roquevanefren@gmail.com")||a.user.email==="procurement@lsu.edu.ph"?d.push("/_/panels/mco/create"):d.push("/_/unauthorized")}),s();let r=s(""),n=s(""),u=s(""),m=s(""),x=s("Mco Admin"),g=s(a.user.email),_=s([]),i=s(!0);const w=()=>{d.push("/_/mco-admin"),a.removeToken()},h=()=>{d.push("/_/panels/mco")},y=()=>{d.push("/_/panels/mco/create")},k=async()=>{_.value=[],r.value==""&&n.value==""&&u.value==""&&m.value==""&&_.value.push("Please fill in all fields."),_.value.length==0&&await $fetch(b.value+"/api/mco/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{field_1:r.value,field_2:n.value,field_3:u.value,field_4:m.value,created_by_name:x.value,created_by_email:g.value}}).then(F=>{d.push({path:"/_/panels/mco"})})};return(F,t)=>{const C=S,M=T;return P(),U("div",z,[e("div",A,[p(e("div",N,[v(C,{goToList:h,goToCreate:y})],512),[[D,o(i)]]),e("div",R,[e("div",q,[e("div",E,[e("div",G,[e("div",{onClick:t[0]||(t[0]=l=>f(i)?i.value=!o(i):i=!o(i)),class:"w-10 px-1.5"},[e("i",{class:H(["fa text-3xl text-white",o(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",I,[t[5]||(t[5]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",J,O(o(a).user.email),1)])]),e("button",{onClick:w,class:"flex hover:font-bold pt-1"},t[6]||(t[6]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",K,[e("div",Q,[t[12]||(t[12]=e("div",{class:"lg:mb-4 text-lg font-medium"},"Create MCO",-1)),e("form",{onSubmit:L(k,["prevent"])},[e("div",W,[e("div",X,[t[7]||(t[7]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 1 ",-1)),p(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_1","onUpdate:modelValue":t[1]||(t[1]=l=>f(r)?r.value=l:r=l),placeholder:"Field 1 Here"},null,512),[[c,o(r)]])]),e("div",Y,[t[8]||(t[8]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 2 ",-1)),p(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_2","onUpdate:modelValue":t[2]||(t[2]=l=>f(n)?n.value=l:n=l),placeholder:"Field 2 Here"},null,512),[[c,o(n)]])]),e("div",Z,[t[9]||(t[9]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 3 ",-1)),p(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_3","onUpdate:modelValue":t[3]||(t[3]=l=>f(u)?u.value=l:u=l),placeholder:"Field 3 Here"},null,512),[[c,o(u)]])]),e("div",$,[t[10]||(t[10]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 4 ",-1)),p(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_4","onUpdate:modelValue":t[4]||(t[4]=l=>f(m)?m.value=l:m=l),placeholder:"Field 4 Here"},null,512),[[c,o(m)]])])]),t[11]||(t[11]=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Create Post ")],-1))],32)])])])]),v(M)])}}};export{ie as default};
