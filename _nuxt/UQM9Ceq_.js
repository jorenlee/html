import{_ as ft}from"./BBT5ZubQ.js";import{_ as ht}from"./CyzbSkMO.js";import{_ as _t}from"./D6LYvd4K.js";import{_ as wt}from"./a_twdlxE.js";import{u as bt,r as l,s as g,g as St,c as u,b as L,a as e,i as Z,t as s,k as d,d as V,F as At,l as yt,at as Ft,o as i,n as Lt}from"./rusb7RfM.js";import{_ as Pt}from"./DlAUqK2U.js";import"./CgkbkD69.js";import"./C5S46NFB.js";const It={class:"relative font-montserrat"},kt={class:"mb-7"},Tt={class:"relative"},Nt={class:"lg:h-4/6 block lg:pb-10 bg-white"},Rt={class:"lg:shadow-lg w-11/12 mx-auto"},Ht={class:"px-3 lg:mt-5 mb-5 shadow-md lg:w-fit mx-auto text-center py-3"},Bt={class:"lg:text-3xl text-base font-bold tracking-widest"},Ct={class:"px-2 lg:flex gap-10"},Dt={class:"lg:flex items-center w-full shadow"},$t={class:"w-full"},Ut={class:"lg:py-10 pt-3 lg:pb-10 pb-7 lg:px-5 px-3 w-full lg:text-sm text-xs"},Vt={class:"lg:flex w-full items-center lg:mb-7 mb-3"},zt={class:"border shadow-lg flex w-full items-center"},Gt={class:"bg-green-400 lg:h-10 h-5 flex items-center text-center whitespace-nowrap border-green-300 lg:w-[120px] lg:text-sm text-[10px] lg:px-3 px-1 text-gray-600"},Mt={class:"flex w-full items-center"},Et={class:"lg:ml-2 ml-auto font-bold whitespace-nowrap px-1 w-fit"},jt={class:"lg:flex w-full items-center lg:mb-7 mb-3"},qt={class:"border shadow-lg flex w-full items-center"},Jt={class:"bg-green-500 lg:h-10 h-5 flex items-center text-center whitespace-nowrap border-green-300 lg:w-[120px] lg:text-sm text-[10px] lg:px-3 px-1 text-gray-700"},Kt={class:"flex w-full items-center"},Ot={class:"lg:ml-2 ml-auto font-bold whitespace-nowrap px-1 w-fit"},Qt={class:"lg:flex w-full items-center lg:mb-7 mb-3"},Wt={class:"border shadow-lg flex w-full items-center"},Xt={class:"bg-green-600 lg:h-10 h-5 flex items-center text-center whitespace-nowrap border-green-300 lg:w-[120px] lg:text-sm text-[10px] lg:px-3 px-1 text-white"},Yt={class:"flex w-full items-center"},Zt={class:"lg:ml-2 ml-auto font-bold whitespace-nowrap px-1 w-fit"},te={class:"lg:flex w-full items-center lg:mb-7 mb-3"},ee={class:"border shadow-lg flex w-full items-center"},ae={class:"bg-green-800 lg:h-10 h-5 flex items-center text-center whitespace-nowrap border-green-300 lg:w-[120px] lg:text-sm text-[10px] lg:px-3 px-1 text-white"},le={class:"flex w-full items-center"},se={class:"lg:ml-2 ml-auto font-bold whitespace-nowrap px-1 w-fit"},oe={class:"lg:flex w-full items-center lg:mb-7 mb-3"},ne={class:"border shadow-lg flex w-full items-center"},ce={class:"bg-green-950 lg:h-10 h-5 flex items-center text-center whitespace-nowrap border-green-300 lg:w-[120px] lg:text-sm text-[10px] lg:px-3 px-1 text-white"},re={class:"flex w-full items-center"},ue={class:"lg:ml-2 ml-auto font-bold whitespace-nowrap px-1 w-fit"},ie={class:"w-full shadow flex items-center"},de={class:"w-full"},me={class:"w-fit mx-auto mt-7 mb-5"},xe={class:"lg:flex mb-3"},pe={key:0,class:"w-[180px] lg:text-sm text-xs text-gray-100 px-2 bg-[#0d441a] font-bold"},ve={key:1,class:"lg:text-sm text-xs lg:ml-3 ml-2 flex"},ge={class:"w-[120px]"},fe={class:"lg:flex mb-3"},he={key:0,class:"w-[180px] lg:text-sm text-xs text-gray-100 px-2 bg-[#128db6] font-bold"},_e={key:1,class:"lg:text-sm text-xs lg:ml-3 ml-2 flex"},we={class:"w-[120px]"},be={class:"lg:flex mb-3"},Se={key:0,class:"w-[180px] lg:text-sm text-xs text-gray-100 px-2 bg-[#ffa500] font-bold"},Ae={key:1,class:"lg:text-sm text-xs lg:ml-3 ml-2 flex"},ye={class:"w-[120px]"},Fe={class:"lg:flex mb-3"},Le={key:0,class:"w-[180px] lg:text-sm text-xs font-bold text-gray-700 lg:text-left text-center"},Pe={class:"lg:w-11/12 mx-auto lg:py-10 py-5 lg:text-sm text-xs"},Ie={class:"w-full shadow-lg"},ke={key:0},Te={class:"lg:w-44 w-32 text-center"},Ne={class:"lg:w-full w-8/12 lg:text-center capitalize"},Re={class:"w-full text-center"},He={class:"w-full text-center px-1 md:whitespace-nowrap"},Be={href:"/donation/box"},Ce={__name:"index",async setup(De){let o,r;Ft(t=>({"3651c2dc":P.value,"009fc1bc":I.value,"07612632":R.value,"07612633":H.value,"07612634":B.value,"07612635":C.value,"7ee7dd54":D.value}));const tt=bt(),m=l(tt.mainDevServer),n=l(null),x=l(null),p=l(null),v=l(null),P=l(""),I=l(""),z=l(""),k=l(0),T=l(0),N=l(0),f=l(),G=l(null),h=l(),_=l(),w=l(),R=l(),H=l(),B=l(),C=l(),D=l(),b=l(0),M=l(0),et=new Intl.NumberFormat("en-US"),at=l();n.value=([o,r]=g(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),o=await o,r(),o),G.value=n.value.filter(function(t){return t.donate_to==="Strategic Intent 1.0"}),b.value=G.value.map(t=>t.amount).reduce((t,a)=>t+a,0),M.value=b.value.toFixed(2),at.value=et.format(M.value);const E=l(null),S=l(0),j=l(0),lt=new Intl.NumberFormat("en-US"),st=l();n.value=([o,r]=g(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),o=await o,r(),o),E.value=n.value.filter(function(t){return t.donate_to==="Strategic Intent 2.0"}),S.value=E.value.map(t=>t.amount).reduce((t,a)=>t+a,0),j.value=S.value.toFixed(2),st.value=lt.format(j.value);const q=l(null),A=l(0),J=l(0),ot=new Intl.NumberFormat("en-US"),nt=l();n.value=([o,r]=g(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),o=await o,r(),o),q.value=n.value.filter(function(t){return t.donate_to==="Strategic Intent 3.0"}),A.value=q.value.map(t=>t.amount).reduce((t,a)=>t+a,0),J.value=A.value.toFixed(2),nt.value=ot.format(J.value);const K=l(null),y=l(0),O=l(0),ct=new Intl.NumberFormat("en-US"),rt=l();n.value=([o,r]=g(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),o=await o,r(),o),K.value=n.value.filter(function(t){return t.donate_to==="Strategic Intent 4.0"}),y.value=K.value.map(t=>t.amount).reduce((t,a)=>t+a,0),O.value=y.value.toFixed(2),rt.value=ct.format(O.value);const Q=l(null),F=l(0),W=l(0),ut=new Intl.NumberFormat("en-US"),it=l();n.value=([o,r]=g(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),o=await o,r(),o),Q.value=n.value.filter(function(t){return t.donate_to==="All Strategic Intents"}),F.value=Q.value.map(t=>t.amount).reduce((t,a)=>t+a,0),W.value=F.value.toFixed(2),it.value=ut.format(W.value);const c=l(0),X=l(0),dt=new Intl.NumberFormat("en-US"),Y=l();n.value=([o,r]=g(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),o=await o,r(),o),c.value=n.value.map(t=>t.amount).reduce((t,a)=>t+a,0),X.value=c.value.toFixed(2),Y.value=dt.format(X.value),St(async()=>{n.value=await $fetch(m.value+"/api/investiture/list/").catch(t=>t.data),f.value=n.value.sort((t,a)=>a.amount-t.amount),console.log(f.value),R.value=(b.value/c.value*100).toFixed(2)+"%",H.value=(S.value/c.value*100).toFixed(2)+"%",B.value=(A.value/c.value*100).toFixed(2)+"%",C.value=(y.value/c.value*100).toFixed(2)+"%",D.value=(F.value/c.value*100).toFixed(2)+"%",mt()});const mt=()=>{x.value=n.value.filter(function(t){return t.payment_method==="cash"}),p.value=n.value.filter(function(t){return t.payment_method==="pledge"}),v.value=n.value.filter(function(t){return t.payment_method==="bank transfer"}),console.log(x.value.length),console.log(p.value.length),console.log(v.value.length),h.value=x.value.map(t=>t.amount).reduce((t,a)=>t+a,0),_.value=p.value.map(t=>t.amount).reduce((t,a)=>t+a,0),w.value=v.value.map(t=>t.amount).reduce((t,a)=>t+a,0),k.value=h.value/c.value*100,T.value=_.value/c.value*100,N.value=w.value/c.value*100,P.value=k.value.toFixed(2)+"%",I.value=T.value.toFixed(2)+"%",z.value=N.value.toFixed(2)+"%",console.log(k.value),console.log(T.value),console.log(N.value),console.log(P.value),console.log(I.value),console.log(z.value)};return(t,a)=>{const xt=ft,pt=ht,vt=_t,gt=wt;return i(),u("div",It,[L(xt),e("div",kt,[e("div",Tt,[L(pt),a[0]||(a[0]=Z('<img src="https://raw.githubusercontent.com/jorenlee/lsu-public-images/main/images/images/banners/green-tones-gradient-background_23-2148374436.png" class="align-top w-full h-36 object-none lg:hidden block" data-v-bdcdbc36><div class="pt-10 absolute top-1/2 transform -translate-y-1/2 w-full" data-v-bdcdbc36><h1 class="font-bold uppercase text-white lg:text-2xl text-lg w-11/12 mx-auto" data-v-bdcdbc36> Dashboard </h1></div><div class="pt-2.5 pb-3 shadow-lg" data-v-bdcdbc36><ul class="flex lasalle-green-text capitalize w-11/12 mx-auto text-xs" data-v-bdcdbc36><li data-v-bdcdbc36><a href="/" class="mr-1" data-v-bdcdbc36> Home </a></li><li data-v-bdcdbc36><i class="fas fa-caret-right mr-1" data-v-bdcdbc36></i><a href="/donation" class="mr-1" data-v-bdcdbc36> Donation </a></li><li data-v-bdcdbc36><i class="fas fa-caret-right mr-1" data-v-bdcdbc36></i><a href="/donation/dashboard" class="mr-1" data-v-bdcdbc36> Dashboard </a></li></ul></div>',3))])]),e("div",Nt,[e("div",Rt,[e("div",Ht,[a[1]||(a[1]=e("h2",{class:"font-bold text-green-800 mb-3"},"Total Amount Raised",-1)),e("p",Bt," PHP "+s(Y.value),1)]),e("div",Ct,[e("div",Dt,[e("div",$t,[a[12]||(a[12]=e("h2",{class:"text-center mt-4 font-bold uppercase lg:text-sm text-xs lg:py-0 pt-4"},"Donations per Strategic Intent",-1)),e("ul",Ut,[e("li",Vt,[a[3]||(a[3]=e("span",{class:"w-[60px] whitespace-nowrap text-right lg:text-sm text-xs mr-3 font-bold"},"S.I. 1:",-1)),e("span",zt,[e("span",Gt," PHP "+s(b.value),1),e("span",Mt,[a[2]||(a[2]=e("span",{class:"bg-green-400 lg:h-10 h-5 flex items-center text-center whitespace-nowrap px-3 text-gray-600 percentTotalAmountS1"},null,-1)),e("span",Et,s(R.value),1)])])]),e("li",jt,[a[5]||(a[5]=e("span",{class:"w-[60px] whitespace-nowrap text-right lg:text-sm text-xs mr-3 font-bold"},"S.I. 2:",-1)),e("span",qt,[e("span",Jt," PHP "+s(S.value),1),e("span",Kt,[a[4]||(a[4]=e("span",{class:"bg-green-500 lg:h-10 h-5 flex items-center text-center whitespace-nowrap px-3 text-gray-700 percentTotalAmountS2"},null,-1)),e("span",Ot,s(H.value),1)])])]),e("li",Qt,[a[7]||(a[7]=e("span",{class:"w-[60px] whitespace-nowrap text-right lg:text-sm text-xs mr-3 font-bold"},"S.I. 3:",-1)),e("span",Wt,[e("span",Xt," PHP "+s(A.value),1),e("span",Yt,[a[6]||(a[6]=e("span",{class:"bg-green-600 lg:h-10 h-5 flex items-center text-center whitespace-nowrap px-3 text-white percentTotalAmountS3"},null,-1)),e("span",Zt,s(B.value),1)])])]),e("li",te,[a[9]||(a[9]=e("span",{class:"w-[60px] whitespace-nowrap text-right lg:text-sm text-xs mr-3 font-bold"},"S.I. 4:",-1)),e("span",ee,[e("span",ae," PHP "+s(y.value),1),e("span",le,[a[8]||(a[8]=e("span",{class:"bg-green-800 lg:h-10 h-5 flex items-center text-center whitespace-nowrap px-3 text-white percentTotalAmountS4"},null,-1)),e("span",se,s(C.value),1)])])]),e("li",oe,[a[11]||(a[11]=e("span",{class:"w-[60px] whitespace-nowrap text-right lg:text-sm text-xs mr-3 font-bold"},"General:",-1)),e("span",ne,[e("span",ce," PHP "+s(F.value),1),e("span",re,[a[10]||(a[10]=e("span",{class:"bg-green-950 lg:h-10 h-5 flex items-center text-center whitespace-nowrap px-3 text-white percentTotalAmountGeneral"},null,-1)),e("span",ue,s(D.value),1)])])])])])]),e("div",ie,[e("div",de,[a[13]||(a[13]=e("h2",{class:"text-center mt-5 font-bold uppercase lg:text-sm text-xs"},"Donations per Payment Mode",-1)),a[14]||(a[14]=e("div",{class:"w-fit mx-auto lg:mt-7 mt-5"},[e("div",{class:"piechart border-3 border-black"})],-1)),e("div",me,[e("div",xe,[x.value?(i(),u("div",pe," Cash ("+s(x.value.length)+") ",1)):d("",!0),x.value?(i(),u("div",ve,[e("span",ge,"PHP "+s(h.value),1),V(" : "+s((h.value/c.value*100).toFixed(2))+" %",1)])):d("",!0)]),e("div",fe,[p.value?(i(),u("div",he," Pledge ("+s(p.value.length)+") ",1)):d("",!0),p.value?(i(),u("div",_e,[e("span",we,"PHP "+s(_.value),1),V(" : "+s((_.value/c.value*100).toFixed(2))+" %",1)])):d("",!0)]),e("div",be,[v.value?(i(),u("div",Se," Bank Transfer ("+s(v.value.length)+") ",1)):d("",!0),v.value?(i(),u("div",Ae,[e("span",ye,"PHP "+s(w.value),1),V(" : "+s((w.value/c.value*100).toFixed(2))+" % ",1)])):d("",!0)]),e("div",Fe,[n.value?(i(),u("div",Le," Number of Donors ("+s(n.value.length)+") ",1)):d("",!0)])])])])]),e("div",Pe,[a[16]||(a[16]=e("h2",{class:"text-center bg-green-800 text-white uppercase py-2"},"Top Donors",-1)),e("div",Ie,[e("ul",null,[a[15]||(a[15]=Z('<li class="flex items-center p-1 bg-gray-300 font-bold text-green-800" data-v-bdcdbc36><span class="lg:w-44 w-32 text-center" data-v-bdcdbc36>Top</span><span class="lg:w-full w-8/12 lg:text-center" data-v-bdcdbc36>Name</span><span class="w-full text-center" data-v-bdcdbc36>Amount</span><span class="w-full text-center px-1" data-v-bdcdbc36>Strategic Intent</span></li>',1)),f.value?(i(),u("div",ke,[(i(!0),u(At,null,yt(f.value.slice(0,5),($,U)=>(i(),u("li",{key:U,class:Lt(["flex items-center border-b p-1",U%2===1?"bg-gray-50":""])},[e("span",Te,s(U+1),1),e("span",Ne,s($.name.slice(0,3))+"*****",1),e("span",Re,s($.amount),1),e("span",He,s($.donate_to),1)],2))),128))])):d("",!0)])])])])]),e("a",Be,[L(vt)]),L(gt)])}}},qe=Pt(Ce,[["__scopeId","data-v-bdcdbc36"]]);export{qe as default};
