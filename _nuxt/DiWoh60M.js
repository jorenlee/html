import{a as s,E as R,l as Y,s as x,C as w,t as O,L as d,m as X,b as k,d as h,e as f,i as u,f as y,c as l,h as g,j,k as U,g as G,N as b,I as Z}from"./cOmGq7Bi.js";import"./Dgq6NX2f.js";import"./BsKHL9Zt.js";import"./BJK7jvqU.js";import"./C5S46NFB.js";import"./5JjjnmY2.js";import"./BtuGy7By.js";/* empty css        */import"./DlAUqK2U.js";const _=177,q=179,E=184,v=12,C=13,D=17,z=20,F=25,B=53,N=95,I=142,L=144,A=145,J=148,M=10,H=13,K=32,OO=9,$=47,QO=41,eO=125,aO=new R((Q,e)=>{for(let n=0,a=Q.next;(e.context&&(a<0||a==M||a==H||a==$&&Q.peek(n+1)==$)||a==QO||a==eO)&&Q.acceptToken(_),!(a!=K&&a!=OO);)a=Q.peek(++n)},{contextual:!0});let tO=new Set([N,E,z,v,D,L,A,I,J,C,B,F]);const iO=new w({start:!1,shift:(Q,e)=>e==q?Q:tO.has(e)}),XO=x({"func interface struct chan map const type var":O.definitionKeyword,"import package":O.moduleKeyword,"switch for go select return break continue goto fallthrough case if else defer":O.controlKeyword,range:O.keyword,Bool:O.bool,String:O.string,Rune:O.character,Number:O.number,Nil:O.null,VariableName:O.variableName,DefName:O.definition(O.variableName),TypeName:O.typeName,LabelName:O.labelName,FieldName:O.propertyName,"FunctionDecl/DefName":O.function(O.definition(O.variableName)),"TypeSpec/DefName":O.definition(O.typeName),"CallExpr/VariableName":O.function(O.variableName),LineComment:O.lineComment,BlockComment:O.blockComment,LogicOp:O.logicOperator,ArithOp:O.arithmeticOperator,BitOp:O.bitwiseOperator,"DerefOp .":O.derefOperator,"UpdateOp IncDecOp":O.updateOperator,CompareOp:O.compareOperator,"= :=":O.definitionOperator,"<-":O.operator,'~ "*"':O.modifier,"; ,":O.separator,"... :":O.punctuation,"( )":O.paren,"[ ]":O.squareBracket,"{ }":O.brace}),nO={__proto__:null,package:10,import:18,true:380,false:380,nil:383,struct:48,func:68,interface:78,chan:94,map:118,make:157,new:159,const:204,type:212,var:224,if:236,else:238,switch:242,case:248,default:250,for:260,range:266,go:270,select:274,return:284,break:288,continue:290,goto:292,fallthrough:296,defer:300},PO=s.deserialize({version:14,states:"!=xO#{QQOOP$SOQOOO&UQTO'#CbO&]QRO'#FlO]QQOOOOQP'#Cn'#CnOOQP'#Co'#CoO&eQQO'#C|O(kQQO'#C{O)]QRO'#GiO+tQQO'#D_OOQP'#Ge'#GeO+{QQO'#GeO.aQTO'#GaO.hQQO'#D`OOQP'#Gm'#GmO.mQRO'#GdO/hQQO'#DgOOQP'#Gd'#GdO/uQQO'#DrO2bQQO'#DsO4QQTO'#GqO,^QTO'#GaO4XQQO'#DxO4^QQO'#D{OOQO'#EQ'#EQOOQO'#ER'#EROOQO'#ES'#ESOOQO'#ET'#ETO4cQQO'#EPO5}QQO'#EPOOQP'#Ga'#GaO6UQQO'#E`O6^QQO'#EcOOQP'#G`'#G`O6cQQO'#EsOOQP'#G_'#G_O&]QRO'#FnOOQO'#Fn'#FnO9QQQO'#G^QOQQOOO&]QROOO9XQQO'#C`O9^QSO'#CdO9lQQO'#C}O9tQQO'#DSO9yQQO'#D[O:kQQO'#CsO:pQQO'#DhO:uQQO'#EeO:}QQO'#EiO;VQQO'#EoO;_QQO'#EuO<uQQO'#ExO<|QQO'#FRO4cQQO'#FWO=WQQO'#FYO=]QRO'#F_O=jQRO'#FaO=uQQO'#FaOOQP'#Fe'#FeO4cQQO'#FgP=zOWO'#C^POOO)CAz)CAzOOQO'#G]'#G]OOQO,5<W,5<WOOQO-E9j-E9jO?TQTO'#CqOOQO'#C|'#C|OOQP,59g,59gO?tQQO'#D_O@fQSO'#FuO@kQQO'#C}O@pQQO'#D[O9XQQO'#FqO@uQRO,5=TOAyQQO,59yOCVQSO,5:[O@kQQO'#C}OCaQQO'#DjOOQP,59^,59^OOQO,5<a,5<aO?tQQO'#DeOOQO,5:e,5:eOOQO-E9s-E9sOOQP,59z,59zOOQP,59|,59|OCqQSO,5:QO(kQQO,5:ROC{QQO,5:RO&]QRO'#FxOOQO'#Fx'#FxOFjQQO'#GpOFwQQO,5:^OF|QQO,5:_OHdQQO,5:`OHlQQO,5:aOHvQRO'#FyOIaQRO,5=]OIuQQO'#DzOOQP,5:d,5:dOOQO'#EV'#EVOOQO'#EW'#EWOOQO'#EX'#EXOOQO'#EZ'#EZOOQO'#E['#E[O4cQQO,5:pO4cQQO,5:pO4cQQO,5:pO4cQQO,5:pO4cQQO,5:pO4cQQO,5:wOOQP,5:x,5:xO?tQQO'#EOOOQP,5:g,5:gOOQP,5:k,5:kO9yQQO,59vO4cQQO,5:zO4cQQO,5:}OI|QRO,5;_OOQO,5<Y,5<YOOQO-E9l-E9lO]QQOOOOQP'#Cb'#CbOOQP,58z,58zOOQP'#Cf'#CfOJWQQO'#CfOJ]QSO'#CkOOQP,59O,59OOJkQQO'#DPOLZQQO,5<UOLbQQO,59iOLsQQO,5<TOMpQQO'#DUOOQP,59n,59nOOQP,59v,59vONfQQO,59vONmQQO'#CwOOQP,59_,59_O?tQQO,5:SONxQRO'#EgO! VQQO'#EhOOQP,5;P,5;PO! |QQO'#EkO!!WQQO'#EnOOQP,5;T,5;TO!!`QRO'#EqO!!mQQO'#ErOOQP,5;Z,5;ZO!!uQTO'#CbO!!|QTO,5;aO&]QRO,5;aO!#WQQO,5;jO!$yQTO,5;dO!%WQQO'#EzOOQP,5;d,5;dO&]QRO,5;dO!%cQSO,5;mO!%mQQO'#E`O!%uQQO'#EcO!%zQQO'#FTO!&UQQO'#FTOOQP,5;m,5;mO!&ZQQO,5;mO!&`QTO,5;rO!&mQQO'#F[OOQP,5;t,5;tO!&xQTO'#GqOOQP,5;y,5;yOOQP'#Et'#EtOOQP,5;{,5;{O!']QTO,5<RPOOO'#Fk'#FkP!'jOWO,58xPOOO,58x,58xO!'uQQO,59yO!'zQQO'#GgOOQP,59i,59iO(kQQO,59vOOQP,5<],5<]OOQP-E9o-E9oOOQP1G/e1G/eOOQP1G/v1G/vO!([QSO'#DlO!(lQQO'#DlO!(wQQO'#DkOOQO'#Go'#GoO!(|QQO'#GoO!)UQQO,5:UO!)ZQQO'#GnO!)fQQO,5:PPOQO'#Cq'#CqO(kQQO1G/lOOQP1G/m1G/mO(kQQO1G/mOOQO,5<d,5<dOOQO-E9v-E9vOOQP1G/x1G/xO!)kQSO1G/yOOQP'#Cy'#CyOOQP1G/z1G/zO?tQQO1G/}O!)xQSO1G/{O!*YQQO1G/|O!*gQTO,5<eOOQP-E9w-E9wOOQP,5:f,5:fO!+QQQO,5:fOOQP1G0[1G0[O!,vQTO1G0[O!.wQTO1G0[O!/OQTO1G0[O!0pQTO1G0[O!1QQTO1G0cO!1bQQO,5:jOOQP1G/b1G/bOOQP1G0f1G0fOOQP1G0i1G0iOOQP1G0y1G0yOOQP,59Q,59QO&]QRO'#FmO!1mQSO,59VOOQP,59V,59VOOQO'#DQ'#DQO?tQQO'#DQO!1{QQO'#DQOOQO'#Gh'#GhO!2SQQO'#GhO!2[QQO,59kO!2aQSO'#CqOJkQQO'#DPOOQP,5=R,5=RO@kQQO1G1pOOQP1G/w1G/wO.hQQO'#ElO!2rQRO1G1oO@kQQO1G1oO@kQQO'#DVO?tQQO'#DWOOQP'#Gk'#GkO!2}QRO'#GjOOQP'#Gj'#GjO&]QRO'#FsO!3`QQO,59pOOQP,59p,59pO!3gQRO'#CxO!3uQQO'#CxO!3|QRO'#CxO.hQQO'#CxO&]QRO'#FoO!4XQQO,59cOOQP,59c,59cO!4dQQO1G/nO4cQQO,5;RO!4iQQO,5;RO&]QRO'#FzO!4nQQO,5;SOOQP,5;S,5;SO!6aQQO'#DgO?tQQO,5;VOOQP,5;V,5;VO&]QRO'#F}O!6hQQO,5;YOOQP,5;Y,5;YO!6pQRO,5;]O4cQQO,5;]O&]QRO'#GOO!6{QQO,5;^OOQP,5;^,5;^O!7TQRO1G0{O!7`QQO1G0{O4cQQO1G1UO!8vQQO1G1UOOQP1G1O1G1OO!9OQQO'#GPO!9YQQO,5;fOOQP,5;f,5;fO4cQQO'#E{O!9eQQO'#E{O<uQQO1G1OOOQP1G1X1G1XO!9jQQO,5:zO!9jQQO,5:}O!9tQSO,5;oO!:OQQO,5;oO!:VQQO,5;oO!9OQQO'#GRO!:aQQO,5;vOOQP,5;v,5;vO!<PQQO'#F]O!<WQQO'#F]POOO-E9i-E9iPOOO1G.d1G.dO!<]QQO,5:VO!<gQQO,5=ZO!<tQQO,5=ZOOQP1G/p1G/pO!<|QQO,5=YO!=WQQO,5=YOOQP1G/k1G/kOOQP7+%W7+%WOOQP7+%X7+%XOOQP7+%e7+%eO!=cQQO7+%eO!=hQQO7+%iOOQP7+%g7+%gO!=mQQO7+%gO!=rQQO7+%hO!>PQSO7+%hOOQP7+%h7+%hO4cQQO7+%hOOQP1G0Q1G0QO!>^QQO1G0QOOQP1G0U1G0UO!>fQQO1G0UOF|QQO1G0UOOQO,5<X,5<XOOQO-E9k-E9kOOQP1G.q1G.qOOQO,59l,59lO?tQQO,59lO!?cQQO,5=SO!?jQQO,5=SOOQP1G/V1G/VO!?rQQO,59yO!?}QRO7+'[O!@YQQO'#EmO!@dQQO'#HOO!@lQQO,5;WOOQP7+'Z7+'ZO!@qQRO7+'ZOOQP,59q,59qOOQP,59r,59rOOQO'#DZ'#DZO!@]QQO'#FtO!@|QRO,59tOOQO,5<_,5<_OOQO-E9q-E9qOOQP1G/[1G/[OOQP,59d,59dOHgQQO'#FpO!3uQQO,59dO!A_QRO,59dO!AjQRO,59dOOQO,5<Z,5<ZOOQO-E9m-E9mOOQP1G.}1G.}O(kQQO7+%YOOQP1G0m1G0mO4cQQO1G0mOOQO,5<f,5<fOOQO-E9x-E9xOOQP1G0n1G0nO!AxQQO'#GdOOQP1G0q1G0qOOQO,5<i,5<iOOQO-E9{-E9{OOQP1G0t1G0tO4cQQO1G0wOOQP1G0w1G0wOOQO,5<j,5<jOOQO-E9|-E9|OOQP1G0x1G0xO!B]QQO7+&gO!BeQSO7+&gO!CsQSO7+&pO!CzQQO7+&pOOQO,5<k,5<kOOQO-E9}-E9}OOQP1G1Q1G1QO!DRQQO,5;gOOQO,5;g,5;gO!DWQSO7+&jOOQP7+&j7+&jO!DbQQO7+&pO!7`QQO1G1[O!DgQQO1G1ZOOQO1G1Z1G1ZO!DnQSO1G1ZOOQO,5<m,5<mOOQO-E:P-E:POOQP1G1b1G1bO!DxQSO'#GqO!E]QQO'#F^O!EbQQO'#F^O!EgQQO,5;wOOQO,5;w,5;wO!ElQSO1G/qOOQO1G/q1G/qO!EyQSO'#DoO!FZQQO'#DoO!FfQQO'#DnOOQO,5<c,5<cO!FkQQO1G2uOOQO-E9u-E9uOOQO,5<b,5<bO!FxQQO1G2tOOQO-E9t-E9tOOQP<<IP<<IPOOQP<<IT<<ITOOQP<<IR<<IRO!GSQSO<<ISOOQP<<IS<<ISO4cQQO<<ISO!GaQSO<<ISOOQP7+%l7+%lO!GkQQO7+%lOOQP7+%p7+%pO!GpQQO7+%pO!GuQQO7+%pOOQO1G/W1G/WOOQO,5<^,5<^O!G}QQO1G2nOOQO-E9p-E9pOOQP<<Jv<<JvO.hQQO'#F{O!@YQQO,5;XOOQO,5;X,5;XO!HUQQO,5=jO!H^QQO,5=jOOQO1G0r1G0rOOQP<<Ju<<JuOOQP,5<`,5<`OOQP-E9r-E9rOOQO,5<[,5<[OOQO-E9n-E9nO!HfQRO1G/OOOQP1G/O1G/OOOQP<<Ht<<HtOOQP7+&X7+&XO!HqQQO'#DeOOQP7+&c7+&cOOQP<<JR<<JRO!HxQRO<<JRO!ITQQO<<J[O!I]QQO<<J[OOQO1G1R1G1ROOQP<<JU<<JUO4cQQO<<J[O!IbQSO7+&vOOQO7+&u7+&uO!IlQQO7+&uO4cQQO,5;xOOQO1G1c1G1cO!<]QQO,5:YP!<]QQO'#FwP?tQQO'#FvOOQPAN>nAN>nO4cQQOAN>nO!IsQSOAN>nOOQP<<IW<<IWOOQP<<I[<<I[O!I}QQO<<I[P!>nQQO'#FrOOQO,5<g,5<gOOQO-E9y-E9yOOQO1G0s1G0sOOQO,5<h,5<hO!JVQQO1G3UOOQO-E9z-E9zOOQP7+$j7+$jO!J_QQO'#GnO!B]QQOAN?mO!JjQQOAN?vO!JqQQOAN?vO!KzQSOAN?vOOQO<<Ja<<JaO!LRQSO1G1dO!L]QSO1G/tOOQO1G/t1G/tO!LjQSOG24YOOQPG24YG24YOOQPAN>vAN>vO!LtQQOAN>vP.hQQO'#F|OOQPG25XG25XO!LyQQOG25bO!MOQQO'#FPOOQPG25bG25bO!MZQQOG25bOOQPLD)tLD)tOOQPG24bG24bO!JqQQOLD*|O!9OQQO'#GQO!McQQO,5;kOOQP,5;k,5;kO?tQQO'#FQO!MnQQO'#FQO!MsQQOLD*|OOQP!$'Nh!$'NhOOQO,5<l,5<lOOQO-E:O-E:OOOQP1G1V1G1VO!MzQQO,5;lOOQO,5;l,5;lO!NPQQO!$'NhOOQO1G1W1G1WO!JqQQO!)9DSOOQP!.K9n!.K9nO# {QTO'#CqO#!`QTO'#CqO##}QSO'#CqO#$XQSO'#CqO#&]QSO'#CqO#&gQQO'#FyO#&tQQO'#FyO#'OQQO,5=]O#'ZQQO,5=]O#'cQQO,5:pO!7`QQO,5:pOF|QQO,5:pO#'cQQO,5:pO!7`QQO,5:pOF|QQO,5:pO#'cQQO,5:pO!7`QQO,5:pOF|QQO,5:pO#'cQQO,5:pO!7`QQO,5:pOF|QQO,5:pO#'cQQO,5:pO!7`QQO,5:pOF|QQO,5:pO!7`QQO,5:wO!7`QQO,5:zO!7`QQO,5:}O#(yQSO'#CbO#)}QSO'#CbO#*bQSO'#GqO#*rQSO'#GqO#+PQRO'#GgO#+yQSO,5<eO#,ZQSO,5<eO#,hQSO1G0[O#-rQTO1G0[O#-yQSO1G0[O#.TQSO1G0[O#0{QTO1G0[O#1SQSO1G0[O#2eQSO1G0[O#2lQTO1G0[O#2sQSO1G0[O#4XQSO1G0[O#4`QTO1G0[O#4jQSO1G0[O#4wQSO1G0cO#5dQTO'#CqO#5kQTO'#CqO#6bQSO'#GqO#'cQQO'#EPO!7`QQO'#EPOF|QQO'#EPO#8]QQO'#EPO#8gQQO'#EPO#8qQQO'#EPO#8{QQO'#E`O#9TQQO'#EcO@kQQO'#C}O?tQQO,5:RO#9YQQO,59vO#:iQQO,59vO?tQQO,59vO?tQQO1G/lO?tQQO1G/mO?tQQO7+%YO?tQQO'#C{O#:pQQO'#DgO#9YQQO'#D[O#:wQQO'#D[O#:|QSO,5:QO#;WQQO,5:RO#;]QQO1G/nO?tQQO,5:SO#;bQQO'#Dh",stateData:"#;m~O$yOSPOS$zPQ~OVvOX{O[oO^YOaoOdoOh!POjcOr|Ow}O!P!OO!QnO!WaO!]!QO!phO!qhO#Y!RO#^!SO#d!TO#j!UO#m!VO#v!WO#{!XO#}!YO$S!ZO$U![O$V![O$W!]O$Y!^O$[!_O%OQO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO$v%QP~OTzO~P]O$z!`O~OVeXZeX^eX^!TXj!TXnUXneX!QeX!WeX!W!TX!|eX#ReX#TeX#UeX#WUX$weX%YeX%`eX%feX%geX%ieX%jeX%keX%leX%meX%neX%oeX%peX%qeX~O!a#hX~P$XOV!bO$w!bO~O[!wX^pX^!wXa!wXd!wXhpXh!wXrpXr!wXwpXw!wX!PpX!P!wX!QpX!Q!wX!WpX!W!wX!]pX!]!wX!p!wX!q!wX%OpX%O!wX%U!wX%V!wX%YpX%Y!wX%f!wX%g!wX%h!wX%i!wX%j!wX~O^!hOh!POr!jOw}O!P!OO!Q!kO!WaO!]!QO%O!eO%Y!fO~On!lO#W%]XV%]X^%]Xh%]Xr%]Xw%]X!P%]X!Q%]X!W%]X!]%]X#T%]X$w%]X%O%]X%Y%]Xu%]X~O[oO^YOaoOdoOh!POr!pOw}O!P!OO!WaO!]!QO!phO!qhO%O+wO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O!Q-OO~P*aOj!qO^%XX]%XXn%XX!V%XX~O!W!tOV%TXZ%TX^%TXn%TX!Q%TX!W%TX!|%TX#R%TX#T%TX#U%TX$w%TX%Y%TX%`%TX%f%TX%g%TX%i%TX%j%TX%k%TX%l%TX%m%TX%n%TX%o%TX%p%TX%q%TX]%TX!V%TXj%TXi%TX!a%TXu%TX~OZ!sO~P,^O%O!eO~O!W!tO^%WXj%WX]%WXn%WX!V%WXu%WXV%WX$w%WX%`%WX#T%WX[%WX!a%WX~Ou!{O!QnO!V!zO~P*aOV!}O[oO^YOaoOdoOh!POjcOr!pOw}O!P!OO!QnO!WaO!]!QO!phO!qhO#Y!RO#^!SO#d!TO#j!UO#m!VO#v!WO#{!XO#}!YO$S!ZO$U![O$V![O$W!]O$Y!^O$[!_O%OQO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlOi%dP~O^#QO~OZ#RO^#VOn#TO!Q#cO!W#SO#R#dO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YO%p#[O%q#]OV`X#T%eX#U%eX$w`X~O!|#`O~P2gO^#VO~O^#eO~O!QnO~P*aO[oO^YOaoOdoOh!POr!pOw}O!QnO!WaO!]!QO!phO!qhO%O+wO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O!P#hO~P4jO#T#iO#U#iO~O#W#jO~O!a#kO~OVvO[oO^YOaoOdoOh!POjcOr|Ow}O!P!OO!QnO!WaO!]!QO!phO!qhO#Y!RO#^!SO#d!TO#j!UO#m!VO#v!WO#{!XO#}!YO$S!ZO$U![O$V![O$W!]O$Y!^O$[!_O%OQO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O$v%QX~P6hO%O#oO~OZ#rO[#qO^#sO%O#oO~O^#uO%O#oO~Oj#yO~O^!hOh!POr!jOw}O!P!OO!Q#|O!WaO!]!QO%O!eO%Y!fO~Oj#}O~O!W$PO~O^$RO%O#oO~O^$UO%O#oO~O^$XO%O#oO~O[oO^YOaoOdoOh!POr!pOw}O!P!OO!Q-PO!WaO!]!QO!phO!qhO%O$ZO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~Oj$`O~P;_OV$fOjcO~P;_Oj$kO~O!QnOV$RX$w$RX~P*aO%O$oOV$TX$w$TX~O%O$oO~O${$rO$|$rO$}$tO~OZeX^!TX!W!TXj!TXn!TXh!TXr!TXw!TX{!TX!P!TX!Q!TX!]!TX%O!TX%Y!TX~O]!TX!V!TXu!TX#T!TXV!TX$w!TX%`!TX[!TX!a!TX~P>VO^!hOh!POr-TOw}O!P-_O!Q-`O!W-^O!]-eO%O!eO%Y!fO~OZ!sO~O^#uO~O!P$xO~On!lO#W%]aV%]a^%]ah%]ar%]aw%]a!P%]a!Q%]a!W%]a!]%]a#T%]a$w%]a%O%]a%Y%]au%]a~O]${O^#QO~OZ#RO^#VO!W#SO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YO%p#[O%q#]O~O]$|O!|,WO~PBROj!qOn%QO!QnOi%cP~P*aO!V%WO!|#`O~PBRO!V%YO~OV!}O[oO^YOaoOdoOh!POjcOr!pOw}O!P!OO!QnO!WaO!]!QO!phO!qhO#Y!RO#^!SO#d!TO#j!UO#m!VO#v!WO#{!XO#}!YO$S!ZO$U![O$V![O$W!]O$Y!^O$[!_O%OQO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~Oi%dX#p%dX#q%dX~PDQOi%]O~O[oO^YOaoOdoOh!POr!pOw}O!P!OO!Q-QO!WaO!]!QO!phO!qhO%O+{O%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O^%aO%O%_O~O!QnO!a%cO~P*aO!QnOn$mX#T$mX#U$mXV$mX$w$mX!a$mX~P*aOn#TO#T%ea#U%eaV%ea$w%ea!a%ea~O]%fO~PF|OV#ga$w#ga~PDTO[%sO~OZ#rO[#qO]%vO%O#oO~O^!hOh!POn%zOr-TOu%xOw}O!P-_O!Q-`O!W-^O!]-eO%O,dO%Y!fO]%[P~O^&OOh!POr!jOw}O!P!OO!Q!kO!WaO!]!QO%Y!fO^%ZXj%ZX~O%O%}O~PKfOjcO^qa]qanqa!Vqa~O^#uO!W&SO~O^!hOh!POr-TOw}O{&WO!P-_O!Q-`O!W-^O!]-eO%O,xO%Y!fO~Oi&^O~PL{O^!hOh!POr!jOw}O!Q!kO!WaO!]!QO%O!eO%Y!fO~O!P#hO~PMwOi&eO%O,yO%Y!fO~O#T&gOV#ZX$w#ZX~P?tO]&kO%O#oO~O^!hOh!POr-TOw}O!P-_O!Q-`O!]-eO%O!eO%Y!fO~O!W&lO#T&mO~P! _O]&qO%O#oO~O#T&sOV#eX$w#eX~P?tO]&vO%O#oO~OjeX~P$XOjcO!|,XO~P2gOn!lO#W&yO#W%]X~O^#VOn#TO!Q#cO!W#SO!|,XO#R#dO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YO%p#[O%q#]OV`X#T%eX#U%eX~OZ&zOj$`O$w`X~P!#cOi'OO#p'PO#q'QO~OZ#ROjcO~P!#cO#T'TO#U#iO~O#W'UO~OV'WO!QnO~P*aOV'XO~OjcO~O!|#`OV#za$w#za~PBROi'[O#p']O#q'^O~On#TO!|#`OV%eX$w%eX!a%eX~PBRO!|#`OV$Za$w$Za~PBRO${$rO$|$rO$}'`O~O]${O~O%O!eO]%ZXn%ZX!V%ZX~PKfO!|#`Oi!_Xn!_X!a!`X~PBROi!_Xn!_X!a!`X~O!a'aO~On'bOi%cX~Oi'dO~On'eO!V%bX!a%bX~O!V'gO~O]'jOn'kO!|,YO~PBROn'nO!V'mO!a'oO!|#`O~PBRO!QnO!V'qO!a'rO~P*aO!|#`On$ma#T$ma#U$maV$ma$w$ma!a$ma~PBRO]'sOu'tO~O%Y#XO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YOV!xiZ!xi^!xin!xi!Q!xi!W!xi!|!xi#R!xi#T!xi#U!xi$w!xi%`!xi%f!xi%g!xi%i!xi%p!xi%q!xi~O!V!xii!xi!a!xi~P!+YO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YOV!xiZ!xi^!xin!xi!Q!xi!W!xi#R!xi#T!xi#U!xi$w!xi%p!xi%q!xi!V!xii!xi!a!xi~O!|!xi~P!-TO!|#`O~P!-TO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YO%p#[OV!xiZ!xi^!xin!xi!Q!xi!W!xi#R!xi#T!xi#U!xi$w!xi%q!xi~O!|#`O!V!xii!xi!a!xi~P!/VO!|#`OV#Pi$w#Pi!a#Pi~PBRO]'uOn'wOu'vO~OZ#rO[#qO]'zO%O#oO~Ou'|O~P?tOn'}O]%[X~O](PO~OZeX^mX^!TXj!TX!W!TX~OjcOV$]i$w$]i~O%`(ZOV%^X$w%^Xn%^X!V%^X~Oi(`O~PL{O[(aO!W!tOVlX$wlX~On(bO~P?tO[(aOVlX$wlX~Oi(hO%O,yO%Y!fO~O!V(iO~O#T(kO~O](nO%O#oO~O[oO^YOaoOdoOh!POr!pOu-bOw}O!P!OO!QnO!V-UO!WaO!]!QO!phO!qhO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O%O+zO~P!4vO](sO%O#oO~O#T(tOV#ea$w#ea~O](xO%O#oO~O#k(yOV#ii$w#ii~O[oO^YOaoOdoOh!POr!pOw}O!P!OO!Q-PO!WaO!]!QO!phO!qhO%O+xO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O^(|O%O%_O~O#p%dP#q%dP~P/uOi)PO#p'PO#q'QO~O!a)RO~O!QnO#y)VO~P*aOV)WO!|#`O~PBROj#wa~P;_OV)WO!QnO~P*aOi)]O#p']O#q'^O~O[oO^YOaoOdoOh!POr!pOw}O!P!OO!QnO!WaO!]!QO!phO!qhO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O%O,eO~P!:lO!a)bO~Oj!qO!QnO~P*aOj!qO!QnOi%ca~P*aOn)iOi%ca~O!V%ba!a%ba~P?tOn)lO!V%ba!a%ba~O])nO~O])oO~O!V)pO~O!QnO!V)rO!a)sO~P*aO!V)rO!a)sO!|#`O~PBRO])uOn)vO~O])wOn)xO~O^!hOh!POr-TOu%xOw}O!P-_O!Q-`O!W-^O!]-eO%O,dO%Y!fO~O]%[a~P!>nOn)|O]%[a~O]${O]tXntX~OjcOV$^q$w$^q~On*PO{&WO~P?tOn*SO!V%rX~O!V*UO~OjcOV$]q$w$]q~O%`(ZOV|a$w|an|a!V|a~O[*]OVla$wla~O[*]O!W!tOVla$wla~On*PO{&WO!W*`O^%WXj%WX~P! _OjcO#j!UO~OjcO!|,XO~PBROZ*dO^#VO!W#SO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YO%p#[O%q#]O~O!|#`O~P!BoO#^*eO~P?tO!a*fO~Oj$`O!|,XO~P!BoO#W*hO~Oj#wi~P;_OV*kO!|#`O~PBROn#TO!Q#cO!|#`O!a$QX#T%eX~PBRO#T*lO~O#W*lO~O!a*mO~O!|#`Oi!_in!_i~PBRO!|#`Oi!bXn!bX!a!cX~PBROi!bXn!bX!a!cX~O!a*nO~Oj!qO!QnOi%ci~P*aO!V%bi!a%bi~P?tO!V*qO!a*rO!|#`O~PBRO!V*qO!|#`O~PBRO]*tO~O]*uO~O]*uOu*vO~O]%[i~P!>nO%O!eO!V%ra~On*|O!V%ra~O[+OOVli$wli~O%O+yO~P!4vO#k+QOV#iy$w#iy~O^+RO%O%_O~O]+SO~O!|,XOj#xq~PBROj#wq~P;_O!V+ZO!|#`O~PBRO]+[On+]O~O%O!eO!V%ri~O^#QOn'eO!V%bX~O#^+`O~P?tOj+aO~O^#VO!W#SO!|#`O%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YO%p#[O%q#]O~OZ+cO~P!JvO!|#`O!a$Qi~PBRO!|#`Oi!bin!bi~PBRO!V+dO!|#`O~PBRO]+eO~O]+fO~Oi+iO#p+jO#q+kO~O^+lO%O%_O~Oi+pO#p+jO#q+kO~O!a+rO~O#^+sO~P?tO!a+tO~O]+uO~OZeX^eX^!TXj!TX!WeX!W!TX!|eX%YeX%`eX%feX%geX%ieX%jeX%keX%leX%meX%neX%oeX%peX%qeXVeXneX!QeX#ReX#TeX#UeX$weX~O]eX]!TX!VeXieX!aeX~P!NUOjeX~P!NUOZeX^eX^!TXj!TX!WeX!W!TX!|eX%YeX%`eX%feX%geX%ieX%jeX%keX%leX%meX%neX%oeX%peX%qeXn!TX!VeX~O]eX!V!TX~P#!gOh!TXr!TXw!TX{!TX!P!TX!Q!TX!]!TX%O!TX%Y!TX~P#!gOZeX^eX^!TXj!TXneX!WeX!W!TX!|eX%YeX%`eX%feX%geX%ieX%jeX%keX%leX%meX%neX%oeX%peX%qeX~O]eXueX~P#$xO]$mXn$mXu$mX~PF|Oj$mXn$mX~P!7`On+|O]%eau%ea~On+}Oj%ea~O[oO^YOaoOdoOh!POr!pOw}O!P!OO!Q-OO!WaO!]!QO!phO!qhO%O+yO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~OZeX]!TX^UXhUXnUXn!TXrUXuUXwUX!PUX!QUX!WUX!W!TX!]UX%OUX%YUX~OnUX!QeX!aeX#TeX#WUX~P#$xOn+|O!|,YO]%eXu%eX~PBROn+}O!|,XOj%eX~PBRO^&OOV%ZXj%ZX$w%ZX]%ZXn%ZX!V%ZXu%ZX%`%ZX#T%ZX[%ZX!a%ZX~P?wO!|,YO]$man$mau$ma~PBRO!|,XOj$man$ma~PBRO%Y#XO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YOZ!xi]!xi^!xi!W!xi!|!xi%`!xi%f!xi%g!xi%i!xi%p!xi%q!xi~Oj!xi~P!+YOn!xiu!xi~P#,hO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YOZ!xi]!xi^!xi!W!xi!|!xi%p!xi%q!xi~O%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YOV!xiZ!xi^!xij!xin!xi!Q!xi!W!xi#R!xi#T!xi#U!xi$w!xi%p!xi%q!xi~O!|!xi~P#/_On!xiu!xi~P#.TO%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YOZ!xi]!xi^!xi!W!xi%p!xi%q!xi~O!|,WO~P#1^O!|,XO~P#/_O!|,YOn!xiu!xi~P#1^O%Y#XO%`#ZO%fiO%giO%i#ZO%j#YO%k#XO%l#XO%m#YO%n#YO%o#YO%p#[OZ!xi]!xi^!xi!W!xi%q!xi~O!|,WO~P#3QO!|,XOj!xi~P!/VO!|,YOn!xiu!xi~P#3QO!|,XOj#Pi~PBROV!TXZeX^mX!W!TX$w!TX~O%`!TX~P#5RO[!TXhmXnmXrmXwmX!PmX!QmX!WmX!]mX%OmX%YmX~P#5ROn#TO!Q,aO!|,XO#R#dOj`X#T%eX#U%eX~PBRO[oO^YOaoOdoOh!POr!pOw}O!P#hO!WaO!]!QO!phO!qhO%UTO%VUO%YVO%fiO%giO%hjO%ikO%jlO~O!Q-OO%O+yO~P#6{O!Q-PO%O+xO~P#6{O!Q-QO%O+{O~P#6{O#T,bO#U,bO~O#W,cO~O^!hOh!POr-TOw}O!P-_O!Q-WO!W-^O!]-eO%O!eO%Y!fO~O^!hOh!POr-TOw}O!Q-`O!W-^O!]-eO%O!eO%Y!fO~O!P-VO~P#9zO%O+wO~P!4vO!P-XO~O!V-YO!|#`O~PBRO!V-ZO~O!V-[O~O!W-dO~OP%ka%Oa~",goto:"!FW%sPP%tP%wP%zP'SP'XPPPP'`'cP'u'uP)w'u-_PPP0j0m0qP1V4b1VP7s8WP1VP8a8d8hP8p8w1VPP1V8{<`?vPPCY-_-_-_PCdCuCxPC{DQ'u'uDV'uES'u'u'u'uGUIW'uPPJR'uJUMjMjMj'u! r! r!#SP!$`!%d!&d'cP'cPP'cP!&yP!'V!'^!&yP!'a!'h!'n!'w!&yP!'z!(R!&y!(U!(fPP!&yP!(x!)UPP!&y!)Y!)c!&yP!)g!)gP!&yP!&yP!)j!)m!&v!&yP!&yPPP!&yP!&yP!)q!)q!)w!)}!*U!*[!*d!*j!*p!*w!*}!+T!+Z!.q!.x!/O!/X!/m!/s!/z!0Q!0W!0^!0d!0jPPPPPPPPP!0p!1f!1k!1{!2kPP!7P!:^P!>u!?Z!?_!@Z!@fP!@p!D_!Df!Di!DuPPPPPPPPPPPP!FSR!aPRyO!WXOScw!R!T!U!W#O#k#n#u$R$X&O&j&u&|'W'Y']'})W)|*k*w+gQ#pzU#r{#s%uQ#x|U$T!S$U&pQ$^!VQ$y!lR)U'RVROS#nQ#t{T%t#s%uR#t{qrOScw!U!V!W#O#k#n&|'W'Y)W*k+g%PoOSYacmnw!U!V!W!X!Z!_!q#O#Q#S#T#V#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&x&y&|'P'R'T'U'W'X'Y']'a'b'o'r'w(k(t)V)W)i)s*`*h*k*l*n*o*r+g+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,{,|,}-O-P-Q-^%O]OSYacmnw!U!V!W!X!Z!_!q#O#Q#S#T#V#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&x&y&|'P'R'T'U'W'X'Y']'a'b'o'r'w(k(t)V)W)i)s*`*h*k*l*n*o*r+g+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,{,|,}-O-P-Q-^#u!iW^!O!h!t!z#e#h#u#v#y#|#}$P$Q$T$W$v$x%W%Y%a%x%y&O&S&W&]&`&b&d&m'e'|'}(S([(c(i(o(|)l)|*P*Q*S*p*w*|+R+^+j+l,h-U-V-W-X-Y-Z-[-]-_-d'cbOSWYacmnw!O!U!V!W!X!Z!_!h!q!t!z#O#Q#S#T#V#^#_#`#a#b#c#e#h#i#j#k#n#u#v#y#|$P$Q$T$W$f$v$x%W%Y%a%c%x%y&O&W&]&`&g&l&m&s&x&y&|'P'R'T'U'W'X'Y']'a'b'e'o'r'w'|'}(S([(c(i(k(o(t(|)V)W)i)l)s)|*Q*`*h*k*l*n*o*p*r*w+R+g+j+l+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,h,{,|,}-O-P-Q-U-V-W-X-Y-Z-[-]-^-_-dR$O!PT&c#}&dW%`#R&z*d+cQ&Q#vS&V#y&]S&`#}&dR*Y(b'cZOSWYacmnw!O!U!V!W!X!Z!_!h!q!t!z#O#Q#S#T#V#^#_#`#a#b#c#e#h#i#j#k#n#u#v#y#|$P$Q$T$W$f$v$x%W%Y%a%c%x%y&O&W&]&`&g&l&m&s&x&y&|'P'R'T'U'W'X'Y']'a'b'e'o'r'w'|'}(S([(c(i(k(o(t(|)V)W)i)l)s)|*Q*`*h*k*l*n*o*p*r*w+R+g+j+l+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,h,{,|,}-O-P-Q-U-V-W-X-Y-Z-[-]-^-_-d%fWOSWYacmnw!O!U!V!W!X!Z!_!q!z#O#Q#S#T#V#^#_#`#a#b#c#h#i#j#k#n#v#|$f$v$x%W%Y%c&g&l&s&x&y&|'P'R'T'U'W'X'Y']'a'b'o'r'w(i(k(t)V)W)i)s*`*h*k*l*n*o*r+g+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,{,|,}-O-P-Q-^S&b#}&d!{-]!h!t#e#u#y$P$Q$T$W%a%x%y&O&W&]&`&m'e'|'}(S([(c(o(|)l)|*Q*p*w+R+j+l,h-U-V-W-X-Y-Z-[-]-_-dQ#v|S$v!j!pU&P#v$v,hZ,h#x&Q&U&V-TS%{#u&OV){'})|*wR#z}T&[#y&]]&X#y&](S([(o*QZ&Z#y&](S(o*QT([&Y(]'s_OSWYacmnw!O!U!V!W!X!Z!_!h!q!t!z#O#Q#S#T#V#^#_#`#a#b#c#e#h#i#j#k#n#u#v#y#|#}$P$Q$T$W$f$v$x%W%Y%a%c%x%y&O&S&W&]&`&b&d&g&l&m&s&x&y&|'P'R'T'U'W'X'Y']'a'b'e'o'r'w'|'}(S([(c(i(k(o(t(|)V)W)i)l)s)|*P*Q*S*`*h*k*l*n*o*p*r*w*|+R+^+g+j+l+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,h,{,|,}-O-P-Q-U-V-W-X-Y-Z-[-]-^-_-d'r_OSWYacmnw!O!U!V!W!X!Z!_!h!q!t!z#O#Q#S#T#V#^#_#`#a#b#c#e#h#i#j#k#n#u#v#y#|#}$P$Q$T$W$f$v$x%W%Y%a%c%x%y&O&S&W&]&`&b&d&g&l&m&s&x&y&|'P'R'T'U'W'X'Y']'a'b'e'o'r'w'|'}(S([(c(i(k(o(t(|)V)W)i)l)s)|*P*Q*S*`*h*k*l*n*o*p*r*w*|+R+^+g+j+l+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,h,{,|,}-O-P-Q-U-V-W-X-Y-Z-[-]-^-_-dR!w^'bbOSWYacmnw!O!U!V!W!X!Z!_!h!q!t!z#O#Q#S#T#V#^#_#`#a#b#c#e#h#i#j#k#n#u#v#y#|$P$Q$T$W$f$v$x%W%Y%a%c%x%y&O&W&]&`&g&l&m&s&x&y&|'P'R'T'U'W'X'Y']'a'b'e'o'r'w'|'}(S([(c(i(k(o(t(|)V)W)i)l)s)|*Q*`*h*k*l*n*o*p*r*w+R+g+j+l+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,h,{,|,}-O-P-Q-U-V-W-X-Y-Z-[-]-^-_-dS&a#}&dR(d&bS!u]fX!x`&_(e(oQ!r[Q%O!qQ)d'aU)f'b)i*oR+X*nR%R!qR%P!qV)h'b)i*oV)g'b)i*odtOScw#O#k#n&|'Y+gQ$h!WQ&R#wQ&w$[S'S$c$iQ(V&TQ*O(RQ*V(WQ*b(yQ*c(zR+_+Q%PfOSYacmnw!U!V!W!X!Z!_!q#O#Q#S#T#V#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&x&y&|'P'R'T'U'W'X'Y']'a'b'o'r'w(k(t)V)W)i)s*`*h*k*l*n*o*r+g+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,{,|,}-O-P-Q-^%PgOSYacmnw!U!V!W!X!Z!_!q#O#Q#S#T#V#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&x&y&|'P'R'T'U'W'X'Y']'a'b'o'r'w(k(t)V)W)i)s*`*h*k*l*n*o*r+g+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,{,|,}-O-P-Q-^!q#Weg!o!y$[$_$c$j$m$q$}%^%b%d%m'V'p(z({)S)Y)^)c)e)q)t*i*s+T+V+W+Y,f,g,i,j,w,z-aR#fh#^mOSacmnw!X!Z!_!q#O#S#T#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&y&|'P'T'U'X'Y']'a'b'o'r(k(t)i)s*`*h*l*n*o*r+g-^!W#_e!y$j$m$q$}%b%d%j%k%l%m'V'p({)Y)^)c)e)q)t*s+T+V+W+Y-aW,T!o,n,q,tj,U$[$_$c(z)S*i,g,j,o,r,u,w,z[,V%^,f,i,p,s,v`,{Y,Q,T,W,Z,^,{-Ox,|!U!V!W&x'R'W)V)W*k+},R,U,X,[,_,a,b,c,|-Pg,}#Q#V'w+|,S,V,Y,],`,}-Q#^mOSacmnw!X!Z!_!q#O#S#T#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&y&|'P'T'U'X'Y']'a'b'o'r(k(t)i)s*`*h*l*n*o*r+g-^`,{Y,Q,T,W,Z,^,{-Ox,|!U!V!W&x'R'W)V)W*k+},R,U,X,[,_,a,b,c,|-Pg,}#Q#V'w+|,S,V,Y,],`,}-Q!Y#^e!y$j$m$q$}%b%d%i%j%k%l%m'V'p({)Y)^)c)e)q)t*s+T+V+W+Y-aY,Q!o,k,n,q,tl,R$[$_$c(z)S*i,g,j,l,o,r,u,w,z_,S%^,f,i,m,p,s,v!W#_e!y$j$m$q$}%b%d%j%k%l%m'V'p({)Y)^)c)e)q)t*s+T+V+W+Y-aW,T!o,n,q,tj,U$[$_$c(z)S*i,g,j,o,r,u,w,z],V%^,f,i,p,s,v!S#ae!y$j$m$q$}%b%d%l%m'V'p({)Y)^)c)e)q)t*s+T+V+W+Y-aS,Z!o,tf,[$[$_$c(z)S*i,g,j,u,w,zX,]%^,f,i,v!Q#be!y$j$m$q$}%b%d%m'V'p({)Y)^)c)e)q)t*s+T+V+W+Y-aQ,^!od,_$[$_$c(z)S*i,g,j,w,zV,`%^,f,iprOScw!U!V!W#O#k#n&|'W'Y)W*k+gR)a']etOScw#O#k#n&|'Y+gQ$S!RT&i$R&jR$S!RQ$V!ST&o$U&pQ&U#xR&m$TS(T&S&lV*{*S*|+^R$V!SQ$Y!TT&t$X&uR$Y!TdsOScw#O#k#n&|'Y+gT$p![!]dtOScw#O#k#n&|'Y+gQ*b(yR+_+QQ$a!VQ&{$_Q)T'RR*g)ST&|$`&}Q+b+SQ+m+fR+v+uT+g+a+hR$i!WR$l!YT'Y$k'ZXuOSw#nQ$s!`R'_$sSSO#nR!dSQ%u#sR'y%uUwOS#nR#mwQ&d#}R(g&dQ(c&`R*Z(cS!mX$^R$z!mQ(O%{R)}(OQ&]#yR(_&]Q(]&YR*X(]'r^OSWYacmnw!O!U!V!W!X!Z!_!h!q!t!z#O#Q#S#T#V#^#_#`#a#b#c#e#h#i#j#k#n#u#v#y#|#}$P$Q$T$W$f$v$x%W%Y%a%c%x%y&O&S&W&]&`&b&d&g&l&m&s&x&y&|'P'R'T'U'W'X'Y']'a'b'e'o'r'w'|'}(S([(c(i(k(o(t(|)V)W)i)l)s)|*P*Q*S*`*h*k*l*n*o*p*r*w*|+R+^+g+j+l+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,h,{,|,}-O-P-Q-U-V-W-X-Y-Z-[-]-^-_-dR!v^S'f%T+PR)m'fQ'c%RR)j'cW#Oc&|'Y+gR%[#O^#Ue$[$_$c$m)^,zU%e#U,O,PQ,O,fR,P,gQ&j$RR(m&jS*Q(S(oR*y*QQ*T(TR*}*TQ&p$UR(r&pQ&u$XR(w&uQ&}$`R)O&}Q+h+aR+o+hQ'Z$kR)['ZQ!cRQ#luQ#nyQ%Z!|Q&x$]Q'R$bQ'x%tQ(^&[Q(f&cQ(l&iQ(q&oR(v&tVxOS#nWuOSw#nY!|c#O&|'Y+gR%r#kdtOScw#O#k#n&|'Y+gQ$]!UQ$b!VQ$g!WQ)X'WQ*j)WR+U*kdeOScw#O#k#n&|'Y+gQ!oYQ!ya`#gmn,{,|,}-O-P-QQ$[!UQ$_!VQ$c!WQ$j!Xd$m!Z#i#j&g&s'P'T'U(k(tQ$q!_Q$}!qQ%^#QQ%b#SQ%d#TW%h#^,Q,R,SQ%i#_Q%j#`Q%k#aQ%l#bQ%m#cQ'V$fQ'p%cQ(z&xQ({&yQ)S'RQ)Y'XQ)^']Q)c'aU)e'b)i*oQ)q'oQ)t'rQ*i)VQ*s)sQ+T*hQ+V*lQ+W*nQ+Y*rS,f#V'wS,g,b,cQ,i+|Q,j+}Q,k,TQ,l,UQ,m,VQ,n,WQ,o,XQ,p,YQ,q,ZQ,r,[Q,s,]Q,t,^Q,u,_Q,v,`Q,w,aU,z'W)W*kV-a&l*`-^#bZW!O!h!t!z#e#h#u#v#y#|$P$Q$T$W$v$x%W%Y%a%x%y&O&W&]&`&m'e'|'}(S([(c(i(o(|)l)|*Q*p*w+R+j+l,h-U-V-W-X-Y-Z-[-]-_-d%P[OSYacmnw!U!V!W!X!Z!_!q#O#Q#S#T#V#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&x&y&|'P'R'T'U'W'X'Y']'a'b'o'r'w(k(t)V)W)i)s*`*h*k*l*n*o*r+g+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,{,|,}-O-P-Q-^$zdOSacmnw!U!V!W!X!Z!_!q#O#Q#S#T#V#^#_#`#a#b#c#i#j#k#n$f%c&g&l&s&x&y&|'P'R'T'U'W'X'Y']'a'b'o'r'w(k(t)V)W)i)s*h*k*l*n*o*r+g+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,{,|,}-O-P-Q-^S!gW-]Q!nYS#{!O-_Q$u!hS%T!t+jS%X!z-UQ%n#e[%o#h#|$x-V-W-XW%w#u'})|*wU&P#v$v,h[&X#y&](S([(o*QQ&f$PQ&h$QQ&n$TQ&r$WS'h%W-YS'i%Y-ZW'l%a(|+R+lS'{%x%yQ(Q&OQ(Y&WQ(d&`Q(p&mU)k'e)l*pQ)z'|Q*[(cS*^(i-[Q+P*`R-c-dS#w|!pS$w!j-TQ&T#xQ(R&QQ(W&UR(X&VT%|#u&OhqOScw!U!V#O#k#n&|'Y+gU$Q!R$R&jU$W!T$X&uQ$e!WY%y#u&O'})|*wQ)`']V-S'W)W*kS&[#y&]S*R(S(oR*z*QY&Y#y&](S(o*QR*W(['``OSWYacmnw!O!U!V!W!X!Z!_!h!q!t!z#O#Q#S#T#V#^#_#`#a#b#c#e#h#i#j#k#n#u#v#y#|$P$Q$T$W$f$v$x%W%Y%a%c%x%y&O&W&]&`&g&m&s&x&y&|'P'R'T'U'W'X'Y']'a'b'e'o'r'w'|'}(S([(c(i(k(o(t(|)V)W)i)l)s)|*Q*`*h*k*l*n*o*p*r*w+R+g+j+l+|+},Q,R,S,T,U,V,W,X,Y,Z,[,],^,_,`,a,b,c,h,{,|,}-O-P-Q-U-V-W-X-Y-Z-[-]-^-_-dS&_#}&dW(S&S*S*|+^Q(e&bQ(o&lR*x*PS%U!t*`R+q+jR%S!qQ#PcQ(}&|Q)Z'YR+n+ghpOScw!U!V#O#k#n&|'Y+gQ$d!WQ$n!ZQ%g#VU%p#i'T,bU%q#j'U,cQ(j&gQ(u&sQ)Q'PQ)_']Q)y'wQ*_(kQ*a(tV-R'W)W*kT(U&S&l",nodeNames:"⚠ LineComment BlockComment SourceFile PackageClause package DefName ; ImportDecl import ImportSpec . String ) ( SpecList ExprStatement Number Bool Nil Rune VariableName TypedLiteral StructType struct } { StructBody FieldDecl FieldName , PointerType * FunctionType func Parameters Parameter ... InterfaceType interface InterfaceBody MethodElem UnderlyingType ~ TypeElem LogicOp ChannelType chan <- ParenthesizedType QualifiedType TypeName ParameterizedType ] [ TypeArgs ArrayType SliceType MapType map LiteralValue Element Key : Element Key ParenthesizedExpr FunctionLiteral Block Conversion SelectorExpr IndexExpr SliceExpr TypeAssertion CallExpr ParameterizedExpr Arguments CallExpr make new Arguments UnaryExp ArithOp LogicOp BitOp DerefOp BinaryExp ArithOp BitOp BitOp CompareOp LogicOp LogicOp SendStatement IncDecStatement IncDecOp Assignment = UpdateOp VarDecl := ConstDecl const ConstSpec SpecList TypeDecl type TypeSpec TypeParams TypeParam SpecList VarDecl var VarSpec SpecList LabeledStatement LabelName IfStatement if else SwitchStatement switch SwitchBlock Case case default TypeSwitchStatement SwitchBlock Case ForStatement for ForClause RangeClause range GoStatement go SelectStatement select SelectBlock Case ReceiveStatement ReturnStatement return GotoStatement break continue goto FallthroughStatement fallthrough DeferStatement defer FunctionDecl MethodDecl",maxTerm:218,context:iO,nodeProps:[["isolate",-3,2,12,20,""],["group",-18,12,17,18,19,20,21,22,66,67,69,70,71,72,73,74,77,81,86,"Expr",-20,16,68,93,94,96,99,101,105,111,115,117,120,126,129,134,136,141,143,147,149,"Statement",-12,23,31,33,38,46,49,50,51,52,56,57,58,"Type"],["openedBy",13,"(",25,"{",53,"["],["closedBy",14,")",26,"}",54,"]"]],propSources:[XO],skippedNodes:[0,1,2,153],repeatNodeCount:23,tokenData:":b~RvXY#iYZ#i]^#ipq#iqr#zrs$Xuv&Pvw&^wx&yxy(qyz(vz{({{|)T|})e}!O)j!O!P)u!P!Q+}!Q!R,y!R![-t![!]2^!]!^2k!^!_2p!_!`3]!`!a3e!c!}3x!}#O4j#P#Q4o#Q#R4t#R#S4|#S#T9X#T#o3x#o#p9q#p#q9v#q#r:W#r#s:]$g;'S3x;'S;=`4d<%lO3x~#nS$y~XY#iYZ#i]^#ipq#iU$PP%hQ!_!`$SS$XO!|S~$^W[~OY$XZr$Xrs$vs#O$X#O#P${#P;'S$X;'S;=`%y<%lO$X~${O[~~%ORO;'S$X;'S;=`%X;=`O$X~%^X[~OY$XZr$Xrs$vs#O$X#O#P${#P;'S$X;'S;=`%y;=`<%l$X<%lO$X~%|P;=`<%l$X~&UP%l~!_!`&X~&^O#U~~&cR%j~vw&l!_!`&X#Q#R&q~&qO%p~~&vP%o~!_!`&X~'OWd~OY&yZw&ywx'hx#O&y#O#P'm#P;'S&y;'S;=`(k<%lO&y~'mOd~~'pRO;'S&y;'S;=`'y;=`O&y~(OXd~OY&yZw&ywx'hx#O&y#O#P'm#P;'S&y;'S;=`(k;=`<%l&y<%lO&y~(nP;=`<%l&y~(vO^~~({O]~~)QP%Y~!_!`&X~)YQ%f~{|)`!_!`&X~)eO#R~~)jOn~~)oQ%g~}!O)`!_!`&X~)zRZS!O!P*T!Q![*`#R#S+w~*WP!O!P*Z~*`Ou~Q*eTaQ!Q![*`!g!h*t#R#S+w#X#Y*t#]#^+rQ*wS{|+T}!O+T!Q![+^#R#S+lQ+WQ!Q![+^#R#S+lQ+cRaQ!Q![+^#R#S+l#]#^+rQ+oP!Q![+^Q+wOaQQ+zP!Q![*`~,SR%k~z{,]!P!Q,b!_!`&X~,bO$z~~,gSP~OY,bZ;'S,b;'S;=`,s<%lO,b~,vP;=`<%l,bQ-O[aQ!O!P*`!Q![-t!d!e.c!g!h*t!q!r/Z!z!{/x#R#S.]#U#V.c#X#Y*t#]#^+r#c#d/Z#l#m/xQ-yUaQ!O!P*`!Q![-t!g!h*t#R#S.]#X#Y*t#]#^+rQ.`P!Q![-tQ.fR!Q!R.o!R!S.o#R#S/QQ.tSaQ!Q!R.o!R!S.o#R#S/Q#]#^+rQ/TQ!Q!R.o!R!S.oQ/^Q!Q!Y/d#R#S/rQ/iRaQ!Q!Y/d#R#S/r#]#^+rQ/uP!Q!Y/dQ/{T!O!P0[!Q![1c!c!i1c#R#S2Q#T#Z1cQ0_S!Q![0k!c!i0k#R#S1V#T#Z0kQ0pVaQ!Q![0k!c!i0k!r!s*t#R#S1V#T#Z0k#]#^+r#d#e*tQ1YR!Q![0k!c!i0k#T#Z0kQ1hWaQ!O!P0k!Q![1c!c!i1c!r!s*t#R#S2Q#T#Z1c#]#^+r#d#e*tQ2TR!Q![1c!c!i1c#T#Z1c~2cP!a~!_!`2f~2kO#W~~2pOV~~2uR!|S}!O3O!^!_3T!_!`$S~3TO!Q~~3YP%m~!_!`&X~3bP#T~!_!`$S~3jQ!|S!_!`$S!`!a3p~3uP%n~!_!`&X~3}V%O~!Q![3x!c!}3x#R#S3x#T#o3x$g;'S3x;'S;=`4d<%lO3x~4gP;=`<%l3x~4oO!W~~4tO!V~~4yP%i~!_!`&X~5RV%O~!Q![5h!c!}3x#R#S3x#T#o3x$g;'S3x;'S;=`4d<%lO3x~5o^aQ%O~!O!P*`!Q![5h!c!g3x!g!h6k!h!}3x#R#S4|#T#X3x#X#Y6k#Y#]3x#]#^8k#^#o3x$g;'S3x;'S;=`4d<%lO3x~6pX%O~{|+T}!O+T!Q![7]!c!}3x#R#S8P#T#o3x$g;'S3x;'S;=`4d<%lO3x~7dXaQ%O~!Q![7]!c!}3x#R#S8P#T#]3x#]#^8k#^#o3x$g;'S3x;'S;=`4d<%lO3x~8UV%O~!Q![7]!c!}3x#R#S3x#T#o3x$g;'S3x;'S;=`4d<%lO3x~8rVaQ%O~!Q![3x!c!}3x#R#S3x#T#o3x$g;'S3x;'S;=`4d<%lO3x~9[TO#S9X#S#T$v#T;'S9X;'S;=`9k<%lO9X~9nP;=`<%l9X~9vOj~~9{Q%`~!_!`&X#p#q:R~:WO%q~~:]Oi~~:bO{~",tokenizers:[aO,1,2,new Y("j~RQYZXz{^~^O$|~~aP!P!Qd~iO$}~~",25,181)],topRules:{SourceFile:[0,3]},dynamicPrecedences:{19:1,51:-1,55:2,69:-1,108:-1},specialized:[{term:184,get:Q=>nO[Q]||-1}],tokenPrec:5451}),oO=[X("func ${name}(${params}) ${type} {\n	${}\n}",{label:"func",detail:"declaration",type:"keyword"}),X("func (${receiver}) ${name}(${params}) ${type} {\n	${}\n}",{label:"func",detail:"method declaration",type:"keyword"}),X("var ${name} = ${value}",{label:"var",detail:"declaration",type:"keyword"}),X("type ${name} ${type}",{label:"type",detail:"declaration",type:"keyword"}),X("const ${name} = ${value}",{label:"const",detail:"declaration",type:"keyword"}),X("type ${name} = ${type}",{label:"type",detail:"alias declaration",type:"keyword"}),X("for ${init}; ${test}; ${update} {\n	${}\n}",{label:"for",detail:"loop",type:"keyword"}),X("for ${i} := range ${value} {\n	${}\n}",{label:"for",detail:"range",type:"keyword"}),X(`select {
	\${}
}`,{label:"select",detail:"statement",type:"keyword"}),X("case ${}:\n${}",{label:"case",type:"keyword"}),X("switch ${} {\n	${}\n}",{label:"switch",detail:"statement",type:"keyword"}),X("switch ${}.(${type}) {\n	${}\n}",{label:"switch",detail:"type statement",type:"keyword"}),X("if ${} {\n	${}\n}",{label:"if",detail:"block",type:"keyword"}),X(`if \${} {
	\${}
} else {
	\${}
}`,{label:"if",detail:"/ else block",type:"keyword"}),X('import ${name} "${module}"\n${}',{label:"import",detail:"declaration",type:"keyword"})],S=new b,T=new Set(["SourceFile","Block","FunctionDecl","MethodDecl","FunctionLiteral","ForStatement","SwitchStatement","TypeSwitchStatement","IfStatement"]);function o(Q,e){return(n,a)=>{O:for(let t=n.node.firstChild,c=0,i=null;;){for(;!t;){if(!c)break O;c--,t=i.nextSibling,i=i.parent}e&&t.name==e||t.name=="SpecList"?(c++,i=t,t=t.firstChild):(t.name=="DefName"&&a(t,Q),t=t.nextSibling)}return!0}}const cO={FunctionDecl:o("function"),VarDecl:o("var","VarSpec"),ConstDecl:o("constant","ConstSpec"),TypeDecl:o("type","TypeSpec"),ImportDecl:o("constant","ImportSpec"),Parameter:o("var"),__proto__:null};function m(Q,e){let n=S.get(e);if(n)return n;let a=[],t=!0;function c(i,P){let V=Q.sliceString(i.from,i.to);a.push({label:V,type:P})}return e.cursor(Z.IncludeAnonymous).iterate(i=>{if(t)t=!1;else if(i.name){let P=cO[i.name];if(P&&P(i,c)||T.has(i.name))return!1}else if(i.to-i.from>8192){for(let P of m(Q,i.node))a.push(P);return!1}}),S.set(e,a),a}const p=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,W=["String","LineComment","BlockComment","DefName","LabelName","FieldName",".","?."],rO=Q=>{let e=G(Q.state).resolveInner(Q.pos,-1);if(W.indexOf(e.name)>-1)return null;let n=e.name=="VariableName"||e.to-e.from<20&&p.test(Q.state.sliceDoc(e.from,e.to));if(!n&&!Q.explicit)return null;let a=[];for(let t=e;t;t=t.parent)T.has(t.name)&&(a=a.concat(m(Q.state.doc,t)));return{options:a,from:n?e.from:Q.pos,validFor:p}},r=d.define({name:"go",parser:PO.configure({props:[u.add({IfStatement:l({except:/^\s*({|else\b)/}),LabeledStatement:j,"SwitchBlock SelectBlock":Q=>{let e=Q.textAfter,n=/^\s*\}/.test(e),a=/^\s*(case|default)\b/.test(e);return Q.baseIndent+(n||a?0:Q.unit)},Block:g({closing:"}"}),BlockComment:()=>null,Statement:l({except:/^{/})}),y.add({"Block SwitchBlock SelectBlock LiteralValue InterfaceType StructType SpecList":U,BlockComment(Q){return{from:Q.from+2,to:Q.to-2}}})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case\b|default\b|\})$/}});let lO=Q=>({label:Q,type:"keyword"});const $O="interface struct chan map package go return break continue goto fallthrough else defer range true false nil".split(" ").map(lO);function xO(){let Q=oO.concat($O);return new k(r,[r.data.of({autocomplete:h(W,f(Q))}),r.data.of({autocomplete:rO})])}export{xO as go,r as goLanguage,rO as localCompletionSource,oO as snippets};
