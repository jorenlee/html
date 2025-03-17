import{y as V,r as g,P as v,Q as S,g as F,R as E,B as W,z as I,G as X,c as Y,o as Z,O as ee,f as c}from"./CMPvSVsy.js";const w=Symbol(),O=g(!1),C=g(!1),G=g(!1),A=g(0);let b=null;const ne=()=>{const n=document.createElement("script");return n.src="https://accounts.google.com/gsi/client",n.async=!0,n.defer=!0,n},oe=()=>{C.value=!0,b=ne(),document.head.appendChild(b),b.onload=()=>{C.value=!1,O.value=!0},b.onerror=()=>{C.value=!1,G.value=!0}};W(()=>A.value,(n,t)=>{n>0&&!O.value&&!C.value&&oe()});function x(){return F(()=>{A.value++}),E(()=>{A.value--}),{scriptLoaded:v(O),scriptLoadError:v(G)}}const te=V({__name:"GoogleSignInButton",props:{oneTap:{type:Boolean},autoSelect:{type:Boolean},loginUri:{},cancelOnTapOutside:{type:Boolean},promptParentId:{},nonce:{},context:{},stateCookieDomain:{},uxMode:{},allowedParentOrigin:{},itpSupport:{type:Boolean},type:{},theme:{},size:{},text:{},shape:{},logoAlignment:{},width:{},locale:{}},emits:["success","error","intermediateIframeCloseCallback","nativeCallback","promptMomentNotification"],setup(n,{emit:t}){const o={large:40,medium:32,small:20},e=n,a=t,f=I(w),d=g(null),{scriptLoaded:s}=x();S(()=>{var l,i,m,u;s.value&&((l=window.google)==null||l.accounts.id.initialize({client_id:f,callback:r=>{if(!r.credential){a("error");return}a("success",r)},allowed_parent_origin:e.allowedParentOrigin,auto_select:e.autoSelect,cancel_on_tap_outside:e.cancelOnTapOutside,context:e.context,intermediate_iframe_close_callback:()=>{a("intermediateIframeCloseCallback")},itp_support:e.itpSupport,login_uri:e.loginUri,native_callback:r=>{a("nativeCallback",r)},nonce:e.nonce,prompt_parent_id:e.promptParentId,state_cookie_domain:e.stateCookieDomain,ux_mode:e.uxMode,use_fedcm_for_prompt:!0}),(m=window.google)==null||m.accounts.id.renderButton(d.value,{type:e.type,theme:e.theme,size:e.size,text:e.text,shape:e.shape,logo_alignment:e.logoAlignment,width:(i=e.width)==null?void 0:i.toString(),locale:e.locale}),e.oneTap&&((u=window.google)==null||u.accounts.id.prompt(r=>{a("promptMomentNotification",r)})))}),E(()=>{var l;e.oneTap&&((l=window.google)==null||l.accounts.id.cancel())});const p=X(()=>o[e.size||"large"]);return(l,i)=>(Z(),Y("div",{ref_key:"targetElement",ref:d,style:ee({display:"inline-flex",height:p.value})},null,4))}});function re(n,t,...o){var e;return((e=window.google)==null?void 0:e.accounts.oauth2.hasGrantedAllScopes(n,t,...o))||!1}function ce(n,t,...o){var e;return((e=window.google)==null?void 0:e.accounts.oauth2.hasGrantedAnyScope(n,t,...o))||!1}function se(n,t){var o;(o=window.google)==null||o.accounts.oauth2.revoke(n,()=>{t==null||t()})}function ae(n){const t="https://accounts.google.com/o/oauth2/v2/auth",o=new URLSearchParams({gsiwebsdk:"3",client_id:n.client_id,scope:n.scope,include_granted_scopes:"true",access_type:"offline",response_type:"code",prompt:"consent"});return n.hint&&o.append("hint",n.hint),n.hosted_domain&&o.append("hosted_domain",n.hosted_domain),n.redirect_uri===void 0?o.append("redirect_uri",window.origin):o.append("redirect_uri",n.redirect_uri),n.select_account===void 0?o.append("select_account","false"):o.append("select_account",`${n.select_account}`),n.enable_serial_consent===void 0?o.append("enable_serial_consent","false"):o.append("enable_serial_consent",`${n.enable_serial_consent}`),n.state&&o.append("state",n.state),`${t}?${o.toString()}`}function ue(n={}){const{scope:t="",onError:o,onSuccess:e,...a}=n,{scriptLoaded:f}=x(),d=I(w),s=g(!1),p=g(null);let l;return S(()=>{var i;if(s.value=!1,!f.value)return;const m=c(t),u=`openid email profile ${Array.isArray(m)?m.join(" "):m}`;p.value=ae({client_id:d,scope:u,...a}),l=(i=window.google)==null?void 0:i.accounts.oauth2.initCodeClient({client_id:d,scope:u,callback:r=>{if(r.error)return o==null?void 0:o(r);e==null||e(r)},...a}),s.value=!0}),{isReady:v(s),login:()=>l==null?void 0:l.requestCode(),codeRequestRedirectUrl:v(p)}}function de(n){const{disableAutomaticPrompt:t=!1,onSuccess:o,onError:e,onPromptMomentNotification:a,onNativeCallback:f,onIntermediateIframeCloseCallback:d,autoSelect:s,loginUri:p,cancelOnTapOutside:l,promptParentId:i,nonce:m,context:u,stateCookieDomain:r,allowedParentOrigin:R,itpSupport:T}=n||{},{scriptLoaded:z}=x(),U=I(w),h=g(!1),$=()=>{var k;return h.value&&((k=window.google)==null?void 0:k.accounts.id.prompt(y=>a==null?void 0:a(y)))};return S(k=>{var y,P;if(h.value=!1,!z.value)return;const L=!c(t),M=c(s),N=c(p),j=c(i),q=c(m),D=c(u),J=c(r),H=c(R),K=c(T),Q=c(l);(y=window.google)==null||y.accounts.id.initialize({client_id:U,callback:_=>{if(!_.credential){e==null||e();return}o==null||o(_)},native_callback:_=>{f==null||f(_)},intermediate_iframe_close_callback:()=>{d==null||d()},auto_select:M,allowed_parent_origin:H,context:D,itp_support:K,login_uri:N,nonce:q,prompt_parent_id:j,state_cookie_domain:J,cancel_on_tap_outside:Q,use_fedcm_for_prompt:!0}),h.value=!0,L&&((P=window.google)==null||P.accounts.id.prompt(_=>a==null?void 0:a(_))),k(()=>{var _;(_=window.google)==null||_.accounts.id.cancel()})}),{isReady:v(h),login:$}}function pe(n={}){const{scope:t="",onError:o,onSuccess:e,...a}=n,{scriptLoaded:f}=x(),d=I(w),s=g(!1);let p;return S(()=>{var l;if(s.value=!1,!f.value)return;const i=c(t),m=Array.isArray(i)?i.join(" "):i;p=(l=window.google)==null?void 0:l.accounts.oauth2.initTokenClient({client_id:d,scope:`openid email profile ${m}`,callback:u=>{if(u.error)return o==null?void 0:o(u);e==null||e(u)},...a}),s.value=!0}),{isReady:v(s),login:l=>p==null?void 0:p.requestAccessToken(l)}}function me(n,t){var o;(o=window.google)==null||o.accounts.id.revoke(n,e=>{t==null||t(e)})}function _e(n){const t=n.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(window.atob(t).split("").map(a=>`%${("00"+a.charCodeAt(0).toString(16)).slice(-2)}`).join("")),e=JSON.parse(o);return{email:e.email,email_verified:e.email_verified,hd:e.hd,family_name:e.family_name,given_name:e.given_name,name:e.name,picture:e.picture,id:e.sub,iat:e.iat,exp:e.exp}}const le="GoogleSignInPlugin",B=n=>`[${le}]: ${n}`,ge={install(n,t){if(!t)throw new Error(B("initialize plugin by passing an options object"));if(!t.clientId||t.clientId&&t.clientId.trim().length===0)throw new Error(B("clientId is required to initialize"));n.provide(w,t.clientId),n.component("GoogleSignInButton",te)}};export{te as GoogleSignInButton,le as PLUGIN_NAME,ae as buildCodeRequestRedirectUrl,_e as decodeCredential,ge as default,re as hasGrantedAllScopes,ce as hasGrantedAnyScopes,me as idRevoke,se as revokeAccessToken,ue as useCodeClient,x as useGsiScript,de as useOneTap,pe as useTokenClient};
