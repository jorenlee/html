import{f as d,r as e,m as _,o as p,c as v,d as f,t as x,e as S,a as g}from"./CEzHvR6K.js";const y={class:"lg:text-lg text-xs"},h={__name:"TotalDonationNumberOnly",async setup(A){let a,s;const c=d(),m=e(c.mainDevServer),n=e(null),r=e(0),l=e(0),i=new Intl.NumberFormat("en-US"),u=e();return n.value=([a,s]=_(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),a=await a,s(),a),r.value=n.value.map(t=>t.amount).reduce((t,o)=>t+o,0),l.value=r.value.toFixed(2),u.value=i.format(l.value),(t,o)=>(p(),v("div",y,[f(" PHP "+x(S(u))+" ",1),o[0]||(o[0]=g("span",{class:"ml-1"},"raised",-1))]))}};export{h as _};