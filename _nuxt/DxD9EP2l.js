import{_ as V}from"./CTlonLfK.js";import{u as j,g as B,m as H,r as l,h as A,q as L,c as P,a as e,i as _,v as R,f as a,b as q,j as f,n as z,t as D,k as E,l as v,o as N}from"./BzQWnDbm.js";import"./vUEbHlag.js";import"./Cpj98o6Y.js";const O={class:""},G={class:"flex"},I={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},J={class:"w-full h-screen"},K={class:"bg-green-800"},Q={class:"lg:flex mx-auto justify-between py-2 px-3.5"},W={class:"lg:flex lg:items-center text-white gap-5"},X={class:"flex -mt-1"},Y=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1),Z={class:"text-sm"},$=e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),ee=e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1),te=[$,ee],se={class:"text-xs mb-5"},le={class:"p-5"},ae=e("div",{class:"lg:mb-4 text-lg font-medium"},"Edit Mco",-1),oe={class:"lg:flex"},ie={class:"w-full md:w-1/2 mt-1"},de=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 1 ",-1),ne={class:"w-full md:w-1/2 mt-1 ml-3"},re=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 2 ",-1),ue={class:"w-full md:w-1/2 mt-1 ml-3"},ce=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 3 ",-1),me={class:"w-full md:w-1/2 mt-1 ml-3"},_e=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 4 ",-1),fe=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Create Post ")],-1),we={__name:"[id]",async setup(pe){let p,b;const d=j(),o=B(),w=H(),g=l(o.mainServer);A(()=>{o.user.isAuthenticated&&(o.user.email==="jorenleeluna24@gmail.com"||o.user.email==="roquevanefren@gmail.com"||o.user.email==="procurement@lsu.edu.ph")?d.push("/_/panels/mco/edit/"+w.params.id):d.push("/_/unauthorized")});const m=([p,b]=L(()=>$fetch(g.value+"/api/mco/"+w.params.id+"/").catch(h=>h.data)),p=await p,b(),p);let F=l(m.value.id),n=l(m.value.field_1),r=l(m.value.field_2),u=l(m.value.field_3),c=l(m.value.field_4),y=l("Mco Admin"),k=l(o.user.email),x=l([]),i=l(!0);const C=()=>{d.push("/_/mco-admin"),o.removeToken()},M=()=>{d.push("/_/panels/mco")},T=()=>{d.push("/_/panels/mco/create")},S=async()=>{x.value=[],n.value==""&&r.value==""&&u.value==""&&c.value==""&&y.value==""&&k.value==""&&x.value.push("Please fill in all fields."),x.value.length==0&&await $fetch(g.value+"/api/mco/"+F.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{field_1:n.value,field_2:r.value,field_3:u.value,field_4:c.value,created_by_name:y.value,created_by_email:k.value}}).then(h=>{console.log("response",h),d.push({path:"/_/panels/mco"})})};return(h,s)=>{const U=V;return N(),P("div",O,[e("div",G,[_(e("div",I,[q(U,{goToList:M,goToCreate:T})],512),[[R,a(i)]]),e("div",J,[e("div",K,[e("div",Q,[e("div",W,[e("div",{onClick:s[0]||(s[0]=t=>f(i)?i.value=!a(i):i=!a(i)),class:"w-10 px-1.5"},[e("i",{class:z(["fa text-3xl text-white",a(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",X,[Y,e("h1",Z,D(a(o).user.email),1)])]),e("button",{onClick:C,class:"flex hover:font-bold pt-1"},te)])]),e("div",se,[e("div",le,[ae,e("form",{onSubmit:E(S,["prevent"])},[e("div",oe,[e("div",ie,[de,_(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_1","onUpdate:modelValue":s[1]||(s[1]=t=>f(n)?n.value=t:n=t),placeholder:"Field 1 Here"},null,512),[[v,a(n)]])]),e("div",ne,[re,_(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_2","onUpdate:modelValue":s[2]||(s[2]=t=>f(r)?r.value=t:r=t),placeholder:"Field 2 Here"},null,512),[[v,a(r)]])]),e("div",ue,[ce,_(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_3","onUpdate:modelValue":s[3]||(s[3]=t=>f(u)?u.value=t:u=t),placeholder:"Field 3 Here"},null,512),[[v,a(u)]])]),e("div",me,[_e,_(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_4","onUpdate:modelValue":s[4]||(s[4]=t=>f(c)?c.value=t:c=t),placeholder:"Field 4 Here"},null,512),[[v,a(c)]])])]),fe],32)])])])])])}}};export{we as default};
