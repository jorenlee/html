import{_ as V}from"./CyOfWZys.js";import{u as j,f as B,l as H,r as s,g as A,m as D,c as L,a as e,h as f,v as P,e as a,b as R,i as p,n as z,t as E,j as N,k as _,o as O}from"./DfQsSFlo.js";import"./5JjjnmY2.js";const q={class:""},G={class:"flex"},I={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},J={class:"w-full h-screen"},K={class:"bg-green-800"},Q={class:"lg:flex mx-auto justify-between py-2 px-3.5"},W={class:"lg:flex lg:items-center text-white gap-5"},X={class:"flex -mt-1"},Y={class:"text-sm"},Z={class:"text-xs mb-5"},$={class:"p-5"},ee={class:"lg:flex"},te={class:"w-full md:w-1/2 mt-1"},le={class:"w-full md:w-1/2 mt-1 ml-3"},se={class:"w-full md:w-1/2 mt-1 ml-3"},ae={class:"w-full md:w-1/2 mt-1 ml-3"},ue={__name:"[id]",async setup(oe){let v,w;const d=j(),o=B(),g=H(),h=s(o.mainDevServer);A(()=>{o.user.isAuthenticated&&(o.user.email==="jorenleeluna24@gmail.com"||o.user.email==="roquevanefren@gmail.com"||o.user.email==="procurement@lsu.edu.ph")?d.push("/_/panels/mco/edit/"+g.params.id):d.push("/_/unauthorized")});const c=([v,w]=D(()=>$fetch(h.value+"/api/mco/"+g.params.id+"/").catch(b=>b.data)),v=await v,w(),v);let F=s(c.value.id),r=s(c.value.field_1),u=s(c.value.field_2),n=s(c.value.field_3),m=s(c.value.field_4),y=s("Mco Admin"),k=s(o.user.email),x=s([]),i=s(!0);const C=()=>{d.push("/_/mco-admin"),o.removeToken()},M=()=>{d.push("/_/panels/mco")},T=()=>{d.push("/_/panels/mco/create")},S=async()=>{x.value=[],r.value==""&&u.value==""&&n.value==""&&m.value==""&&y.value==""&&k.value==""&&x.value.push("Please fill in all fields."),x.value.length==0&&await $fetch(h.value+"/api/mco/"+F.value+"/edit/",{method:"PUT",headers:{"Content-Type":"application/json"},body:{field_1:r.value,field_2:u.value,field_3:n.value,field_4:m.value,created_by_name:y.value,created_by_email:k.value}}).then(b=>{d.push({path:"/_/panels/mco"})})};return(b,t)=>{const U=V;return O(),L("div",q,[e("div",G,[f(e("div",I,[R(U,{goToList:M,goToCreate:T})],512),[[P,a(i)]]),e("div",J,[e("div",K,[e("div",Q,[e("div",W,[e("div",{onClick:t[0]||(t[0]=l=>p(i)?i.value=!a(i):i=!a(i)),class:"w-10 px-1.5"},[e("i",{class:z(["fa text-3xl text-white",a(i)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",X,[t[5]||(t[5]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",Y,E(a(o).user.email),1)])]),e("button",{onClick:C,class:"flex hover:font-bold pt-1"},t[6]||(t[6]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",Z,[e("div",$,[t[12]||(t[12]=e("div",{class:"lg:mb-4 text-lg font-medium"},"Edit Mco",-1)),e("form",{onSubmit:N(S,["prevent"])},[e("div",ee,[e("div",te,[t[7]||(t[7]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 1 ",-1)),f(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_1","onUpdate:modelValue":t[1]||(t[1]=l=>p(r)?r.value=l:r=l),placeholder:"Field 1 Here"},null,512),[[_,a(r)]])]),e("div",le,[t[8]||(t[8]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 2 ",-1)),f(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_2","onUpdate:modelValue":t[2]||(t[2]=l=>p(u)?u.value=l:u=l),placeholder:"Field 2 Here"},null,512),[[_,a(u)]])]),e("div",se,[t[9]||(t[9]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 3 ",-1)),f(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_3","onUpdate:modelValue":t[3]||(t[3]=l=>p(n)?n.value=l:n=l),placeholder:"Field 3 Here"},null,512),[[_,a(n)]])]),e("div",ae,[t[10]||(t[10]=e("label",{class:"block uppercase tracking-wide text-gray-700 text-medium font-semibold mb-2",for:"startdate-1"}," Field 4 ",-1)),f(e("input",{class:"shadow-md p-2 rounded-sm w-full border",id:"field_4","onUpdate:modelValue":t[4]||(t[4]=l=>p(m)?m.value=l:m=l),placeholder:"Field 4 Here"},null,512),[[_,a(m)]])])]),t[11]||(t[11]=e("div",{class:"w-1/2 justify-between flex mt-5"},[e("button",{class:"text-white lasalle-green rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"}," Create Post ")],-1))],32)])])])])])}}};export{ue as default};
