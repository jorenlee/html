import{_ as k}from"./CGgMcuAS.js";import{_ as C}from"./DF96-TIT.js";import{u as V,l as z,f as S,r as u,g as B,m as D,c as A,a as e,h as o,v as g,e as t,b as w,i as T,n as j,t as N,j as R,k as i,o as F}from"./3BZUK-jX.js";import"./vUEbHlag.js";import{_ as M}from"./DlAUqK2U.js";import"./C5S46NFB.js";import"./Cpj98o6Y.js";const $={class:""},E={class:"flex"},L={class:"pt-7 pb-24 w-3/12 px-5 bg-gray-100 lg:block hidden"},O={class:"w-full"},Y={class:"bg-green-800"},I={class:"lg:flex mx-auto justify-between py-2 px-3.5"},P={class:"lg:flex lg:items-center text-white gap-5"},G={class:"flex -mt-1"},H={class:"text-sm"},J={class:"text-xs lg:mb-5"},K={class:"lg:p-5 p-2"},Q={class:"lg:w-11/12 mx-auto shadow-lg lg:p-5 border mt-5 rounded-lg"},W={class:"lg:flex gap-2 lg:mb-3"},X={class:"lg:w-full lg:mb-0 mb-2"},Z={class:"lg:w-full lg:mb-0 mb-2"},ee={class:"lg:w-full lg:mb-0 mb-2"},le={class:"lg:flex gap-2 lg:mb-3"},te={class:"lg:w-full lg:mb-0 mb-2"},se={class:"lg:w-full lg:mb-0 mb-2"},ae={class:"lg:w-full lg:mb-0 mb-2"},oe={class:"lg:w-6/12 lg:mb-0 mb-2"},re={class:"lg:flex gap-2 lg:mb-3"},ie={class:"lg:w-6/12 lg:mb-0 mb-2"},de={class:"lg:w-full lg:mb-0 mb-2"},ue={class:"lg:w-5/12 lg:mb-0 mb-2"},ne={class:"lg:w-5/12 lg:mb-0 mb-2"},pe={class:"text-center w-full p-2 bg-red-700 text-white uppercase mt-10"},be={class:"text-center w-full p-2 bg-green-700 text-white uppercase my-10"},me={__name:"[id]",async setup(xe){let n,c;const f=V(),b=z(),r=S(),y=u(r.mainDevServer),v=u(r.user.developerEmail);B(()=>{r.user.isAuthenticated&&(r.user.email===v.value||r.user.email==="monaliza.mugot@lsu.edu.ph"||r.user.email==="marilyn.bejec@lsu.edu.ph"||r.user.email==="applejane.ebarle@lsu.edu.ph"||r.user.email==="janekaren.gudmalin@lsu.edu.ph"||r.user.email==="macy.beniola@lsu.edu.ph"||r.user.email==="lynn.lumacad@lsu.edu.ph")&&f.push("/_/panels/library/appointment/reports/books/edit/"+b.params.id)});let s=([n,c]=D(()=>$fetch(y.value+"/api/library/reports/book/"+b.params.id+"/").catch(p=>p.data)),n=await n,c(),n||0);console.log(s);let m=u(!1),x=u(!1),d=u(!0);const _=()=>{f.push("/_/lib-admin"),r.removeToken()},h=async()=>{console.log("submitForm"),await $fetch(y.value+"/api/library/reports/book/edit/"+b.params.id+"/",{method:"PUT",headers:{"Content-Type":"application/json"},body:s}).then(async p=>{p.status==="errors"?(x.value=!0,setTimeout(()=>{x.value=!1},1e4)):(m.value=!0,setTimeout(()=>{m.value=!1},2e3))})};return(p,l)=>{const q=k,U=C;return F(),A("div",$,[e("div",E,[o(e("div",L,[w(q)],512),[[g,t(d)]]),e("div",O,[e("div",Y,[e("div",I,[e("div",P,[e("div",{onClick:l[0]||(l[0]=a=>T(d)?d.value=!t(d):d=!t(d)),class:"w-10 px-1.5"},[e("i",{class:j(["fa text-3xl text-white",t(d)?"fa-caret-left":"fa-bars"]),"aria-hidden":"true"},null,2)]),e("div",G,[l[12]||(l[12]=e("i",{class:"fa fa-user mr-2 mt-1","aria-hidden":"true"},null,-1)),e("h1",H,N(t(r).user.email),1)])]),e("button",{onClick:_,class:"flex hover:font-bold pt-1"},l[13]||(l[13]=[e("i",{class:"fa fa-sign-out text-white text-xl"},null,-1),e("h1",{class:"text-xs text-white p-1.5"},"Log Out",-1)]))])]),e("div",J,[e("div",K,[l[26]||(l[26]=e("div",{class:"mt-4 text-base font-medium text-green-900 text-center uppercase tracking-tighter"}," Record Book Details ",-1)),e("form",{onSubmit:R(h,["prevent"])},[e("div",Q,[e("div",W,[e("div",X,[l[14]||(l[14]=e("label",{class:"text-[10px] text-gray-600"}," Call Number ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Call Number","onUpdate:modelValue":l[1]||(l[1]=a=>t(s).call_number=a),required:""},null,512),[[i,t(s).call_number]])]),e("div",Z,[l[15]||(l[15]=e("label",{class:"text-[10px] text-gray-600"}," Author ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Author","onUpdate:modelValue":l[2]||(l[2]=a=>t(s).author=a),required:""},null,512),[[i,t(s).author]])]),e("div",ee,[l[16]||(l[16]=e("label",{class:"text-[10px] text-gray-600"}," Title ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Title","onUpdate:modelValue":l[3]||(l[3]=a=>t(s).title=a),required:""},null,512),[[i,t(s).title]])])]),e("div",le,[e("div",te,[l[17]||(l[17]=e("label",{class:"text-[10px] text-gray-600"}," Barcode ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Barcode","onUpdate:modelValue":l[4]||(l[4]=a=>t(s).barcode=a),required:""},null,512),[[i,t(s).barcode]])]),e("div",se,[l[18]||(l[18]=e("label",{class:"text-[10px] text-gray-600"}," Date Acquired ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Date Acquired","onUpdate:modelValue":l[5]||(l[5]=a=>t(s).date_acquired=a),required:""},null,512),[[i,t(s).date_acquired]])]),e("div",ae,[l[19]||(l[19]=e("label",{class:"text-[10px] text-gray-600"}," Sublocation ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Sublocation","onUpdate:modelValue":l[6]||(l[6]=a=>t(s).sublocation=a),required:""},null,512),[[i,t(s).sublocation]])]),e("div",oe,[l[20]||(l[20]=e("label",{class:"text-[10px] text-gray-600"}," Year ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Year","onUpdate:modelValue":l[7]||(l[7]=a=>t(s).year=a),required:""},null,512),[[i,t(s).year]])])]),e("div",re,[e("div",ie,[l[21]||(l[21]=e("label",{class:"text-[10px] text-gray-600"}," Status ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",placeholder:"Status","onUpdate:modelValue":l[8]||(l[8]=a=>t(s).status=a),required:""},null,512),[[i,t(s).status]])]),e("div",de,[l[22]||(l[22]=e("label",{class:"text-[10px] text-gray-600"}," Created By ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 lowercase",placeholder:"Created By","onUpdate:modelValue":l[9]||(l[9]=a=>t(s).created_by_email=a),disabled:""},null,512),[[i,t(s).created_by_email]])]),e("div",ue,[l[23]||(l[23]=e("label",{class:"text-[10px] text-gray-600"}," Circulation ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",type:"number",placeholder:"Circulation","onUpdate:modelValue":l[10]||(l[10]=a=>t(s).circulation=a),required:""},null,512),[[i,t(s).circulation]])]),e("div",ne,[l[24]||(l[24]=e("label",{class:"text-[10px] text-gray-600"}," Number of Copies ",-1)),o(e("input",{class:"shadow-xl px-2 lg:py-2 py-3 w-full border-b-2 border-green-700 capitalize",type:"number",placeholder:"Number of Copies","onUpdate:modelValue":l[11]||(l[11]=a=>t(s).number_of_copies=a),required:""},null,512),[[i,t(s).number_of_copies]])])]),o(e("div",pe," All Fields are Required! ",512),[[g,t(x)]]),o(e("div",be," Details Updated! ",512),[[g,t(m)]]),l[25]||(l[25]=e("div",{class:"mt-10 w-fit mx-auto"},[e("button",{class:"text-white bg-green-800 uppercase text-xs rounded-md w-fit mx-auto px-5 py-2 text-center"}," Update ")],-1))])],32)])])])]),w(U)])}}},he=M(me,[["__scopeId","data-v-c77754a5"]]);export{he as default};