import{u as d,r as e,E as _,o as p,c as v,d as x,t as f,n as S,a as g}from"./CHOFwWJE.js";const y={class:"lg:text-lg text-xs"},h={__name:"TotalDonationNumberOnly",async setup(A){let a,n;const c=d(),m=e(c.mainDevServer),s=e(null),r=e(0),u=e(0),i=new Intl.NumberFormat("en-US"),l=e();return s.value=([a,n]=_(()=>$fetch(m.value+"/api/investiture/list/").catch(t=>t.data)),a=await a,n(),a),r.value=s.value.map(t=>t.amount).reduce((t,o)=>t+o,0),u.value=r.value.toFixed(2),l.value=i.format(u.value),(t,o)=>(p(),v("div",y,[x(" PHP "+f(S(l))+" ",1),o[0]||(o[0]=g("span",{class:"ml-1"},"raised",-1))]))}};export{h as _};
