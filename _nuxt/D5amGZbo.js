import{u as d,r as e,i as _,o as p,c as v,d as f,t as x,f as S,a as g}from"./BBLn1a-F.js";const y={class:"lg:text-lg text-xs"},h={__name:"TotalDonationNumberOnly",async setup(A){let a,s;const c=d(),i=e(c.mainDevServer),n=e(null),r=e(0),u=e(0),m=new Intl.NumberFormat("en-US"),l=e();return n.value=([a,s]=_(()=>$fetch(i.value+"/api/investiture/list/").catch(t=>t.data)),a=await a,s(),a),r.value=n.value.map(t=>t.amount).reduce((t,o)=>t+o,0),u.value=r.value.toFixed(2),l.value=m.format(u.value),(t,o)=>(p(),v("div",y,[f(" PHP "+x(S(l))+" ",1),o[0]||(o[0]=g("span",{class:"ml-1"},"raised",-1))]))}};export{h as _};
