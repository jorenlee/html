import{_ as V}from"./ClQlNQyi.js";import{_ as w}from"./jGFS0Hgl.js";import{g as x,r as u,q as v,c as o,b as c,a as e,F as m,s as _,f as p,o as t,t as f}from"./ls-2Xi6G.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const j=[{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._12_No._1.pdf",title:"Vol. 12 No. 1"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._12_No._2.pdf",title:"Vol. 12 No. 2"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._12_No._3.pdf",title:"Vol. 12 No. 3"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._12_No._4.pdf",title:"Vol. 12 No. 4"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._13_No._1.pdf",title:"Vol. 13 No. 1"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._13_No._2.pdf",title:"Vol. 13 No. 2"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._13_No._3.pdf",title:"Vol. 13 No. 3"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._13_No._4.pdf",title:"Vol. 13 No. 4"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._13_No._8.pdf",title:"Vol. 13 No. 8"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._14_No._1.pdf",title:"Vol. 14 No. 1"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._14_No._2.pdf",title:"Vol. 14 No. 2"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._14_No._3.pdf",title:"Vol. 14 No. 3"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._14_No._4.pdf",title:"Vol. 14 No. 4"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._14_No._5.pdf",title:"Vol. 14 No. 5"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._14_No._6.pdf",title:"Vol. 14 No. 6"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._14_No._7.pdf",title:"Vol. 14 No. 7"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._15_No._1.pdf",title:"Vol. 15 No. 1"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._15_No._2.pdf",title:"Vol. 15 No. 2"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._15_No._3.pdf",title:"Vol. 15 No. 3"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._15_No._5.pdf",title:"Vol. 15 No. 5"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._15_No._6.pdf",title:"Vol. 15 No. 6"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._15_No._7.pdf",title:"Vol. 15 No. 7"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._16_No._1.pdf",title:"Vol. 16 No. 1"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._16_No._2.pdf",title:"Vol. 16 No. 2"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._17_No._1.pdf",title:"Vol. 17 No. 1"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._17_No._2.pdf",title:"Vol. 17 No. 2"},{file:"https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/files/vol/Vol._18_No._1.pdf",title:"Vol. 18 No. 1"}],y={volumes:j},F={class:""},k={class:"lg:pt-24 pt-20 pb-5 lg:w-11/12 mx-auto text-center"},S=e("h1",{class:"text-lg text-green-900 uppercase border-y-2 border-green-900 py-2 w-11/12 mx-auto"}," Downloads ",-1),B={class:"shadow-xl rounded-3xl lg:w-11/12 mx-auto"},D=e("h1",{class:"text-base text-green-900 mt-3 mb-4 w-8/12 mx-auto font-bold pt-10 pb-5 uppercase"}," Forms ",-1),$={class:"flex flex-wrap gap-5 mb-10 pb-10 mx-auto w-full justify-left lg:grid lg:grid-cols-2 text-sm"},q=e("i",{class:"mr-5 fa fa-download mt-1","aria-hidden":"true"},null,-1),A=["href"],C={class:"shadow-xl rounded-3xl lg:w-11/12 mx-auto"},E=e("h1",{class:"text-base text-green-900 mt-5 mb-3 w-8/12 mx-auto font-bold pt-10 pb-5 uppercase"}," Research Volumes ",-1),H={class:"gap-2 mb-10 pb-10 mx-auto w-full justify-left grid lg:grid-cols-4 grid-cols-2 text-sm"},J=e("i",{class:"mr-5 fa fa-download mt-1","aria-hidden":"true"},null,-1),L=["href"],M={__name:"index",async setup(O){let s,n;const d=x(),h=u(d.mainServer),g=u(y.volumes),a=([s,n]=v(()=>$fetch(h.value+"/api/cits/lsu-download-file/list/").catch(r=>r.data)),s=await s,n(),s);return console.log("downloadFile",a),(r,R)=>{const b=V,N=w;return t(),o("div",F,[c(b),e("div",k,[S,e("div",B,[D,e("ul",$,[(t(!0),o(m,null,_(p(a),(l,i)=>(t(),o("li",{class:"flex shadow py-2 px-3 rounded-lg mb-4 text-green-900 font-semibold mx-6 lg:w-auto w-full text-left",key:i},[q,e("a",{href:l.file_name,target:"_blank",class:""},f(l.title),9,A)]))),128))])]),e("div",C,[E,e("ul",H,[(t(!0),o(m,null,_(p(g),(l,i)=>(t(),o("li",{class:"flex shadow py-2 px-3 rounded-lg mb-4 text-green-900 font-semibold lg:mx-7 mx-4",key:i},[J,e("a",{href:l.file,download:""},f(l.title),9,L)]))),128))])])]),c(N)])}}};export{M as default};
