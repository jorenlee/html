import{_ as S}from"./BQaQWaMr.js";import{_ as T}from"./ubrNiOZL.js";import{u as V,g as j,r as l,h as B,c as U,a as e,i as m,v as H,f as o,b as v,j as _,n as O,t as D,k as L,l as p,o as P}from"./CRFeAyhs.js";import"./vUEbHlag.js";import"./DlAUqK2U.js";import"./Cpj98o6Y.js";const z={class:""},A={class:"flex"},N={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},R={class:"w-full lg:h-screen"},q={class:"bg-green-800"},E={class:"lg:flex mx-auto justify-between py-2 px-3.5"},G={class:"lg:flex lg:items-center text-white gap-5"},I={class:"flex -mt-1"},J=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),K={class:"text-sm"},Q=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),W=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),X=[Q,W],Y={class:"text-xs mb-5"},Z={class:"p-5"},$=e("div",{class:"lg:mb-4 text-lg font-medium"},"Create MCO",-1),ee={class:"lg:flex"},te={class:"w-full md:w-1/2 mt-1"},se=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 1 ",-1),le={class:"w-full md:w-1/2 mt-1 lg:ml-3"},oe=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 2 ",-1),ae={class:"w-full md:w-1/2 mt-1 lg:ml-3"},ie=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 3 ",-1),de={class:"w-full md:w-1/2 mt-1 lg:ml-3"},ne=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 4 ",-1),re=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Create Post ")],-1),ve={__name:"index",setup(ce){const d=V(),a=j(),x=l(a.mainServer);B(()=>{a.user.isAuthenticated&&(a.user.email==="jorenleeluna24@gmail.com"||a.user.email==="roquevanefren@gmail.com")||a.user.email==="procurement@lsu.edu.ph"?d.push("/_/panels/mco/create"):d.push("/_/unauthorized")}),l();let n=l(""),r=l(""),c=l(""),u=l(""),b=l("Mco Admin"),g=l(a.user.email),f=l([]),i=l(!0);const w=()=>{d.push("/_/mco-admin"),a.removeToken()},y=()=>{d.push("/_/panels/mco")},k=()=>{d.push("/_/panels/mco/create")},F=async()=>{f.value=[],n.value==""&&r.value==""&&c.value==""&&u.value==""&&f.value.push("Please fill in all fields."),f.value.length==0&&await $fetch(x.value+"/api/mco/create/",{method:"POST",headers:{"Content-Type":"application/json"},body:{field_1:n.value,field_2:r.value,field_3:c.value,field_4:u.value,created_by_name:b.value,created_by_email:g.value}}).then(h=>{console.log("response",h),d.push({path:"/_/panels/mco"})})};return(h,s)=>{const C=S,M=T;return P(),U("div",z,[e("div",A,[m(e("div",N,[v(C,{goToList:y,goToCreate:k})],512),[[H,o(i)]]),e("div",R,[e("div",q,[e("div",E,[e("div",G,[e("div",{onClick:s[0]||(s[0]=t=>_(i)?i.value=!o(i):i=!o(i)),class:"w-10 px-1.5"},[e("i",{class:O(["fa text-3xl text-white",o(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",I,[J,e("h1",K,D(o(a).user.email),1)])]),e("button",{onClick:w,class:"flex hover:font-bold pt-1"},X)])]),e("div",Y,[e("div",Z,[$,e("form",{onSubmit:L(F,["prevent"])},[e("div",ee,[e("div",te,[se,m(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_1","onUpdate:modelValue":s[1]||(s[1]=t=>_(n)?n.value=t:n=t),placeholder:"Field 1 Here"},null,512),[[p,o(n)]])]),e("div",le,[oe,m(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_2","onUpdate:modelValue":s[2]||(s[2]=t=>_(r)?r.value=t:r=t),placeholder:"Field 2 Here"},null,512),[[p,o(r)]])]),e("div",ae,[ie,m(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_3","onUpdate:modelValue":s[3]||(s[3]=t=>_(c)?c.value=t:c=t),placeholder:"Field 3 Here"},null,512),[[p,o(c)]])]),e("div",de,[ne,m(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_4","onUpdate:modelValue":s[4]||(s[4]=t=>_(u)?u.value=t:u=t),placeholder:"Field 4 Here"},null,512),[[p,o(u)]])])]),re],32)])])])]),v(M)])}}};export{ve as default};
