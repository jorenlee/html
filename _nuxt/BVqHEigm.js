import{_ as f}from"./BT0gkReL.js";import{_ as v}from"./D9wezYWP.js";import{g as b,r as m,h as w,c as s,b as x,a as e,F as l,s as i,f as c,x as y,o,n,t as d}from"./CGUrbvXj.js";import"./DlAUqK2U.js";import"./C5S46NFB.js";const k={class:"lg:pt-16 pt-12 mb-10"},S=y('<div class=""><div class="bg-green-900"><div class="pt-[40px] pb-[30px] w-11/12 mx-auto text-white"><h1 class="text-lg uppercase font-bold tracking-wider">Social Medias</h1></div></div><div class="shadow-lg border-b"><ul class="flex text-green-800 capitalize mx-auto text-xs w-11/12 py-2"><li><a href="/" class="mr-1"> Home </a></li><li><i class="fas fa-caret-right mr-1"></i><a href="/social-medias" class="mr-1"> Social Medias </a></li></ul></div></div><div class="w-11/12 mx-auto pt-10 font-bold text-green-800 text-center mb-3"> Facebook Pages </div>',2),F={class:"w-11/12 mx-auto gap-5 justify-center"},M=["href"],B=["src"],N={class:"flex items-center h-[40px]"},V={class:"text-green-900 font-700 text-xs font-semibold mx-auto"},z={class:"w-10/12 flex flex-wrap mx-auto mt-3.5 lg:border-t-2 border-gray-100 justify-center lg:pt-5"},C=["href"],H=["src"],$={class:"flex items-center h-[40px] justify-center mt-4"},D={class:"text-green-900 font-700 text-xs font-semibold"},E={class:"w-8/12 mx-auto gap-5 justify-center lg:border-t pt-5"},G=["href"],I=["src"],L={class:"flex items-center h-[40px]"},O={class:"text-green-900 font-700 text-xs font-semibold mx-auto"},P={class:"w-10/12 flex flex-wrap mx-auto mt-3 lg:border-t-2 border-gray-100 justify-center lg:pt-5"},U=["href"],q=["src"],A={class:"flex items-center h-[40px] justify-center mt-4"},J={class:"text-green-900 font-700 text-xs font-semibold"},Z={__name:"index",setup(K){const h=b(),u=m(h.mainServer),r=m(null);return w(async()=>{r.value=await $fetch(u.value+"/api/cits/lsu-social-media-links/list/").catch(_=>_.data)}),(_,Q)=>{const p=f,g=v;return o(),s("div",null,[x(p),e("div",k,[S,e("div",F,[(o(!0),s(l,null,i(c(r),(t,a)=>(o(),s("div",{class:"w-fit mx-auto",key:a},[e("div",{class:n(["pt-3 w-[200px] rounded-lg px-3 hover:shadow-lg",t.category==="Institution"?"":"hidden"])},[e("a",{href:t.social_media_link,target:"_blank",class:"text-center w-3/12"},[e("img",{src:t.social_media_logo_link,class:"w-[100px] h-[100px] rounded-full mb-2 mx-auto shadow-lg hover:border-4 hover:border-green-900"},null,8,B),e("div",N,[e("p",V,d(t.social_media_name),1)])],8,M)],2)]))),128))]),e("div",z,[(o(!0),s(l,null,i(c(r),(t,a)=>(o(),s("div",{class:"my-3",key:a},[e("div",{class:n(["mx-auto py-3 w-[300px] rounded-lg hover:shadow-lg px-10",t.category==="College"?"":"hidden"])},[e("a",{href:t.social_media_link,target:"_blank",class:"text-center"},[e("img",{src:t.social_media_logo_link,class:"border w-[100px] h-[100px] rounded-full mb-2 mx-auto shadow-lg hover:border-4 hover:border-green-900"},null,8,H),e("div",$,[e("p",D,d(t.social_media_name),1)])],8,C)],2)]))),128))]),e("div",E,[(o(!0),s(l,null,i(c(r),(t,a)=>(o(),s("div",{class:"w-fit mx-auto",key:a},[e("div",{class:n(["py-3 w-[200px] rounded-lg px-3 hover:shadow-lg",t.category==="Graduate Studies"?"":"hidden"])},[e("a",{href:t.social_media_link,target:"_blank",class:"text-center w-3/12"},[e("img",{src:t.social_media_logo_link,class:"w-[100px] h-[100px] rounded-full mb-2 mx-auto shadow-lg hover:border-4 hover:border-green-900"},null,8,I),e("div",L,[e("p",O,d(t.social_media_name),1)])],8,G)],2)]))),128))]),e("div",P,[(o(!0),s(l,null,i(c(r),(t,a)=>(o(),s("div",{class:"my-3",key:a},[e("div",{class:n(["mx-auto py-3 w-[300px] rounded-lg hover:shadow-lg px-10",t.category==="Other"?"":"hidden"])},[e("a",{href:t.social_media_link,target:"_blank",class:"text-center"},[e("img",{src:t.social_media_logo_link,class:"border w-[100px] h-[100px] rounded-full mb-2 mx-auto shadow-lg hover:border-4 hover:border-green-900"},null,8,q),e("div",A,[e("p",J,d(t.social_media_name),1)])],8,U)],2)]))),128))])]),x(g)])}}};export{Z as default};
