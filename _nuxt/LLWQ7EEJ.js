import{C as A,b as k,s as Y,t as p,d as I,L as j,i as U,f as z,v as q,a as D,p as M,h as Z,q as B}from"./BmE3vU-f.js";import"./ZQ3rTH4t.js";import"./Cpj98o6Y.js";const _=1,F=2,J=3,H=4,L=5,K=35,ee=36,te=37,ne=11,Oe=13;function ae(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function re(e){return e==9||e==10||e==13||e==32}let X=null,Q=null,E=0;function b(e,t){let O=e.pos+t;if(Q==e&&E==O)return X;for(;re(e.peek(t));)t++;let n="";for(;;){let a=e.peek(t);if(!ae(a))break;n+=String.fromCharCode(a),t++}return Q=e,E=O,X=n||null}function x(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let O=0;O<e.length;O++)this.hash+=(this.hash<<4)+e.charCodeAt(O)+(e.charCodeAt(O)<<8)}const le=new A({start:null,shift(e,t,O,n){return t==_?new x(b(n,1)||"",e):e},reduce(e,t){return t==ne&&e?e.parent:e},reuse(e,t,O,n){let a=t.type.id;return a==_||a==Oe?new x(b(n,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),oe=new k((e,t)=>{if(e.next==60){if(e.advance(),e.next==47){e.advance();let O=b(e,0);if(!O)return e.acceptToken(L);if(t.context&&O==t.context.name)return e.acceptToken(F);for(let n=t.context;n;n=n.parent)if(n.name==O)return e.acceptToken(J,-2);e.acceptToken(H)}else if(e.next!=33&&e.next!=63)return e.acceptToken(_)}},{contextual:!0});function w(e,t){return new k(O=>{let n=0,a=t.charCodeAt(0);e:for(;!(O.next<0);O.advance(),n++)if(O.next==a){for(let l=1;l<t.length;l++)if(O.peek(l)!=t.charCodeAt(l))continue e;break}n&&O.acceptToken(e)})}const se=w(K,"-->"),ie=w(ee,"?>"),ye=w(te,"]]>"),ge=Y({Text:p.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":p.angleBracket,TagName:p.tagName,"MismatchedCloseTag/TagName":[p.tagName,p.invalid],AttributeName:p.attributeName,AttributeValue:p.attributeValue,Is:p.definitionOperator,"EntityReference CharacterReference":p.character,Comment:p.blockComment,ProcessingInst:p.processingInstruction,DoctypeDecl:p.documentMeta,Cdata:p.special(p.string)}),me=I.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:le,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"],["isolate",-6,13,18,19,21,22,24,""]],propSources:[ge],skippedNodes:[0],repeatNodeCount:8,tokenData:"Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[oe,se,ie,ye,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function h(e,t){let O=t&&t.getChild("TagName");return O?e.sliceString(O.from,O.to):""}function V(e,t){let O=t&&t.firstChild;return!O||O.name!="OpenTag"?"":h(e,O)}function $e(e,t,O){let n=t&&t.getChildren("Attribute").find(l=>l.from<=O&&l.to>=O),a=n&&n.getChild("AttributeName");return a?e.sliceString(a.from,a.to):""}function v(e){for(let t=e&&e.parent;t;t=t.parent)if(t.name=="Element")return t;return null}function ce(e,t){var O;let n=Z(e).resolveInner(t,-1),a=null;for(let l=n;!a&&l.parent;l=l.parent)(l.name=="OpenTag"||l.name=="CloseTag"||l.name=="SelfClosingTag"||l.name=="MismatchedCloseTag")&&(a=l);if(a&&(a.to>t||a.lastChild.type.isError)){let l=a.parent;if(n.name=="TagName")return a.name=="CloseTag"||a.name=="MismatchedCloseTag"?{type:"closeTag",from:n.from,context:l}:{type:"openTag",from:n.from,context:v(l)};if(n.name=="AttributeName")return{type:"attrName",from:n.from,context:a};if(n.name=="AttributeValue")return{type:"attrValue",from:n.from,context:a};let s=n==a||n.name=="Attribute"?n.childBefore(t):n;return(s==null?void 0:s.name)=="StartTag"?{type:"openTag",from:t,context:v(l)}:(s==null?void 0:s.name)=="StartCloseTag"&&s.to<=t?{type:"closeTag",from:t,context:l}:(s==null?void 0:s.name)=="Is"?{type:"attrValue",from:t,context:a}:s?{type:"attrName",from:t,context:a}:null}else if(n.name=="StartCloseTag")return{type:"closeTag",from:t,context:n.parent};for(;n.parent&&n.to==t&&!(!((O=n.lastChild)===null||O===void 0)&&O.type.isError);)n=n.parent;return n.name=="Element"||n.name=="Text"||n.name=="Document"?{type:"tag",from:t,context:n.name=="Element"?n:v(n)}:null}class ue{constructor(t,O,n){this.attrs=O,this.attrValues=n,this.children=[],this.name=t.name,this.completion=Object.assign(Object.assign({type:"type"},t.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=t.textContent?t.textContent.map(a=>({label:a,type:"text"})):[]}}const P=/^[:\-\.\w\u00b7-\uffff]*$/;function R(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function G(e){return typeof e=="string"?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function pe(e,t){let O=[],n=[],a=Object.create(null);for(let r of t){let m=R(r);O.push(m),r.global&&n.push(m),r.values&&(a[r.name]=r.values.map(G))}let l=[],s=[],S=Object.create(null);for(let r of e){let m=n,y=a;r.attributes&&(m=m.concat(r.attributes.map(o=>typeof o=="string"?O.find(f=>f.label==o)||{label:o,type:"property"}:(o.values&&(y==a&&(y=Object.create(y)),y[o.name]=o.values.map(G)),R(o)))));let u=new ue(r,m,y);S[u.name]=u,l.push(u),r.top&&s.push(u)}s.length||(s=l);for(let r=0;r<l.length;r++){let m=e[r],y=l[r];if(m.children)for(let u of m.children)S[u]&&y.children.push(S[u]);else y.children=l}return r=>{var m;let{doc:y}=r.state,u=ce(r.state,r.pos);if(!u||u.type=="tag"&&!r.explicit)return null;let{type:o,from:f,context:$}=u;if(o=="openTag"){let i=s,g=V(y,$);if(g){let c=S[g];i=(c==null?void 0:c.children)||l}return{from:f,options:i.map(c=>c.completion),validFor:P}}else if(o=="closeTag"){let i=V(y,$);return i?{from:f,to:r.pos+(y.sliceString(r.pos,r.pos+1)==">"?1:0),options:[((m=S[i])===null||m===void 0?void 0:m.closeNameCompletion)||{label:i+">",type:"type"}],validFor:P}:null}else if(o=="attrName"){let i=S[h(y,$)];return{from:f,options:(i==null?void 0:i.attrs)||n,validFor:P}}else if(o=="attrValue"){let i=$e(y,$,f);if(!i)return null;let g=S[h(y,$)],c=((g==null?void 0:g.attrValues)||a)[i];return!c||!c.length?null:{from:f,to:r.pos+(y.sliceString(r.pos,r.pos+1)=='"'?1:0),options:c,validFor:/^"[^"]*"?$/}}else if(o=="tag"){let i=V(y,$),g=S[i],c=[],d=$&&$.lastChild;i&&(!d||d.name!="CloseTag"||h(y,d)!=i)&&c.push(g?g.closeCompletion:{label:"</"+i+">",type:"type",boost:2});let C=c.concat(((g==null?void 0:g.children)||($?l:s)).map(T=>T.openCompletion));if($&&(g!=null&&g.text.length)){let T=$.firstChild;T.to>r.pos-20&&!/\S/.test(r.state.sliceDoc(T.to,r.pos))&&(C=C.concat(g.text))}return{from:f,options:C,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}else return null}}const W=j.define({name:"xml",parser:me.configure({props:[U.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit}}),z.add({Element(e){let t=e.firstChild,O=e.lastChild;return!t||t.name!="OpenTag"?null:{from:t.to,to:O.name=="CloseTag"?O.from:e.to}}}),q.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function he(e={}){let t=[W.data.of({autocomplete:pe(e.elements||[],e.attributes||[])})];return e.autoCloseTags!==!1&&t.push(Se),new D(W,t)}function N(e,t,O=e.length){if(!t)return"";let n=t.firstChild,a=n&&n.getChild("TagName");return a?e.sliceString(a.from,Math.min(a.to,O)):""}const Se=M.inputHandler.of((e,t,O,n,a)=>{if(e.composing||e.state.readOnly||t!=O||n!=">"&&n!="/"||!W.isActiveAt(e.state,t,-1))return!1;let l=a(),{state:s}=l,S=s.changeByRange(r=>{var m,y,u;let{head:o}=r,f=s.doc.sliceString(o-1,o)==n,$=Z(s).resolveInner(o,-1),i;if(f&&n==">"&&$.name=="EndTag"){let g=$.parent;if(((y=(m=g.parent)===null||m===void 0?void 0:m.lastChild)===null||y===void 0?void 0:y.name)!="CloseTag"&&(i=N(s.doc,g.parent,o))){let c=o+(s.doc.sliceString(o,o+1)===">"?1:0),d=`</${i}>`;return{range:r,changes:{from:o,to:c,insert:d}}}}else if(f&&n=="/"&&$.name=="StartCloseTag"){let g=$.parent;if($.from==o-2&&((u=g.lastChild)===null||u===void 0?void 0:u.name)!="CloseTag"&&(i=N(s.doc,g,o))){let c=o+(s.doc.sliceString(o,o+1)===">"?1:0),d=`${i}>`;return{range:B.cursor(o+d.length,-1),changes:{from:o,to:c,insert:d}}}}return{range:r}});return S.changes.empty?!1:(e.dispatch([l,s.update(S,{userEvent:"input.complete",scrollIntoView:!0})]),!0)});export{Se as autoCloseTags,pe as completeFromSchema,he as xml,W as xmlLanguage};
