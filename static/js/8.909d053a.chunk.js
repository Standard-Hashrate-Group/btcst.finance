(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{1227:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(22),i=a(40),l=a(167),c=a(111),s=a(84);t.a=function(e){var t=Object(i.a)().accent;return r.a.createElement(c.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},r.a.createElement(s.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(l.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1228:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a(22),l=a(40);t.a=function(e){var t=Object(l.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?i.g.tiny:i.g.small,marginBottom:e.small?i.g.tiny:i.g.small+i.g.tiny}})}},1229:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(38),i=a(55),l=a(4),c=a(50),s=a(168),d=a(22),u=a(246),m=a(8),b=a.n(m),f=a(10),g=function(e){return r.a.createElement(l.a,b()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===f.a.OS?d.g.large:d.g.normal},e.style]}))},p=a(111),y=a(103),h=a(53),x=a(40),O=function(e){var t=Object(n.useContext)(h.a).darkMode,a=Object(x.a)(),o=a.background,i=a.textLight;return r.a.createElement(y.d,b()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:o,borderWidth:1,borderColor:t?"white":i}}))},v=function(){var e=Object(n.useContext)(h.a).darkMode,t=Object(x.a)(),a=t.background,o=t.textLight,i=Object(u.a)("http://twitter.com/BTCST2020","","_blank"),l=Object(u.a)("https://github.com/Standard-Hashrate-Group","","_blank"),c=Object(u.a)("https://btcst.medium.com/","","_blank"),s=Object(u.a)("https://t.me/BTCSTCommunity","","_blank"),d=Object(u.a)("https://discord.com/channels/791170396316893255/791170396765945886","","_blank");return r.a.createElement(p.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(O,{type:"github-alt",onPress:l}),r.a.createElement(O,{type:"twitter",onPress:i}),r.a.createElement(O,{type:"medium",onPress:c}),r.a.createElement(O,{type:"telegram",onPress:s}),r.a.createElement(y.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:a,reverseColor:e?"white":"#7289da",style:{backgroundColor:a},containerStyle:{borderWidth:1,borderColor:e?"white":o},onPress:d}))},j=a(84),k={us:a(424),uk:a(425),cn:a(426),kr:a(427)},E=function(e){var t=e.name,a=e.locale,n=Object(c.g)(),l=Object(c.h)();return r.a.createElement(i.a,{onPress:function(){n.push(l.pathname+"?locale="+a)},style:{marginHorizontal:4}},r.a.createElement(o.a,{source:k[t],style:{width:30,height:20}}))};t.a=function(){var e=Object(u.a)("https://certik.foundation/","","_blank");return r.a.createElement(g,{noTopMargin:!0},r.a.createElement(l.a,{style:{width:"100%",padding:d.g.normal,alignItems:"center"}},r.a.createElement(i.a,{onPress:e},r.a.createElement(o.a,{source:a(726),style:{width:168,height:40,marginTop:d.g.tiny}})),r.a.createElement(v,null),r.a.createElement(j.a,{note:!0,style:{marginTop:d.g.tiny}},"Built with \u2764\ufe0f by Standard Hashrate (v",s.a.manifest.version,")"),r.a.createElement(p.a,{style:{marginTop:d.g.small}},r.a.createElement(E,{name:"uk",locale:"en"}),r.a.createElement(E,{name:"cn",locale:"zh"}))))}},1230:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(0),i=a.n(o),l=a(10),c=a(103),s=a(40);t.a=function(e){var t=Object(s.a)(),a=t.textDark,n=t.textMedium,d=t.textLight,u=e.size||"normal",m=e.color||a,b="small"===u?16:"large"===u?24:20,f=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var a=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&a.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||a.push(e.error)})),a.length>0&&(null==e.onError||e.onError(a.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return i.a.createElement(c.c,r()({},e,{inputStyle:[{fontSize:b,fontFamily:"regular",paddingBottom:4,color:m,marginTop:0,minHeight:32},"web"===l.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:n},e.labelStyle],placeholderTextColor:e.placeholderTextColor||d,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:f}))}},1231:function(e,t,a){"use strict";var n=a(8),r=a.n(n),o=a(9),i=a.n(o),l=a(0),c=a.n(l),s=a(4),d=a(22),u=a(53),m=a(40),b=a(423);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=Object(l.useContext)(u.a).darkMode,a=Object(m.a)(),n=a.backgroundLight,o=a.borderDark,i=Object(b.a)().border;return c.a.createElement(s.a,r()({},e,{style:[g(g({},i({color:t?o:n})),{},{backgroundColor:n,marginTop:d.g.normal+d.g.small,padding:d.g.small+d.g.tiny}),e.style]}))}},1232:function(e,t,a){"use strict";var n=a(9),r=a.n(n),o=a(0),i=a.n(o),l=a(10),c=a(4),s=a(56),d=a(22),u=a(40),m=a(423),b=a(43),f=a(167),g=a(1227),p=a(1230);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){var t=Object(u.a)().accent,a=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(b.i)(e.token)){var a=Object(b.l)(16);t=t.gt(a)?t.sub(a):s.ethers.constants.Zero}e.updateAmount(Object(b.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return i.a.createElement(c.a,{style:{position:"absolute",right:12,bottom:"web"===l.a.OS?12:24}},i.a.createElement(f.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(d.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:a,buttonStyle:{paddingHorizontal:d.g.tiny}}))};t.a=function(e){var t,a,n=Object(m.a)().border,r=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(b.k)(t,e.token.decimals),e.onAmountChanged(t)}catch(a){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return i.a.createElement(c.a,null,e.title&&i.a.createElement(g.a,{text:e.title}),i.a.createElement(c.a,null,i.a.createElement(p.a,{label:e.label,value:e.amount,onChangeText:r,placeholder:"0.0",keyboardType:"decimal-pad",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:d.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:h(h({},n()),{},{paddingHorizontal:d.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(a=t.balance)?void 0:a.gt(0))&&!e.hideMaxButton&&i.a.createElement(x,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1242:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(22),i=a(40),l=a(246),c=a(111),s=a(84);t.a=function(e){var t=Object(i.a)(),a=t.textMedium,n=t.textLight,d=t.placeholder,u=Object(l.a)(e.url||"","","_blank"),m=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):"Fetching\u2026";return r.a.createElement(c.a,{style:{justifyContent:"space-between",marginTop:4}},r.a.createElement(s.a,{note:!o.d,fontWeight:"bold",style:{color:e.disabled?d:a}},e.label),r.a.createElement(s.a,{note:!o.d,onPress:e.url?u:void 0,style:{color:e.disabled?d:e.text?a:n,textDecorationLine:e.url?"underline":"none"}},m))}},1255:function(e,t,a){"use strict";var n=a(20),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a(52),s=a(1227);t.a=function(e){var t=Object(c.a)(),a=Object(o.useState)(!0),n=r()(a,2),d=n[0],u=n[1],m=e.expanded&&d,b=m?void 0:t("change");return i.a.createElement(l.a,{style:e.style},i.a.createElement(s.a,{text:e.title,buttonText:b,onPressButton:function(){u(!0),null==e.onExpand||e.onExpand()}}),i.a.createElement(l.a,{style:{display:m?"flex":"none"}},e.children))}},1365:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(248),i=a(10),l=a(4),c=a(431),s=a(428),d=a(429),u=a(1255),m=a(111),b=a(1231),f=a(1227),g=a(434),p=a(1242),y=a(84),h=a(150),x=a(1229),O=a(22),v=a(52),j=a(430),k=a(8),E=a.n(k),S=a(3),w=a.n(S),T=a(20),C=a.n(T),P=a(56),N=a(247),B=a.n(N),F=a(76),L=a(432),A=a(43),M=a(29),U=P.BigNumber.from(1e8).pow(P.BigNumber.from(4)),I=function(){var e=Object(n.useContext)(F.a),t=e.provider,a=e.signer,r=e.address,o=Object(n.useState)(),i=C()(o,2),l=i[0],c=i[1],s=Object(n.useState)(!0),d=C()(s,2),u=d[0],m=d[1],b=Object(n.useState)(),f=C()(b,2),g=f[0],p=f[1],y=Object(n.useState)(!0),h=C()(y,2),x=h[0],O=h[1],v=Object(n.useState)(),j=C()(v,2),k=j[0],S=j[1],T=Object(n.useState)(!0),N=C()(T,2),I=N[0],D=N[1],H=Object(n.useState)(),z=C()(H,2),W=z[0],R=z[1],K=Object(n.useState)(!0),_=C()(K,2),X=_[0],J=_[1],V=Object(n.useState)(),Z=C()(V,2),$=Z[0],q=Z[1],G=Object(n.useState)(!0),Y=C()(G,2),Q=Y[0],ee=Y[1],te=Object(n.useState)(),ae=C()(te,2),ne=ae[0],re=ae[1],oe=Object(n.useState)(!0),ie=C()(oe,2),le=ie[0],ce=ie[1],se=Object(n.useState)(!0),de=C()(se,2),ue=de[0],me=de[1],be=Object(n.useState)(),fe=C()(be,2),ge=fe[0],pe=fe[1],ye=Object(n.useState)(""),he=C()(ye,2),xe=he[0],Oe=he[1],ve=Object(n.useState)(),je=C()(ve,2),ke=je[0],Ee=je[1],Se=Object(n.useState)(),we=C()(Se,2),Te=we[0],Ce=we[1],Pe=Object(n.useState)(),Ne=C()(Pe,2),Be=Ne[0],Fe=Ne[1],Le=Object(n.useState)(!0),Ae=C()(Le,2),Me=Ae[0],Ue=Ae[1],Ie=Object(n.useState)(),De=C()(Ie,2),He=De[0],ze=De[1],We=Object(n.useState)(),Re=C()(We,2),Ke=Re[0],_e=Re[1],Xe=Object(n.useState)(),Je=C()(Xe,2),Ve=Je[0],Ze=Je[1],$e=Object(n.useState)(!1),qe=C()($e,2),Ge=qe[0],Ye=qe[1],Qe=Object(n.useState)(0),et=C()(Qe,2),tt=et[0],at=et[1],nt={name:"Standard BTC Hashrate Token",address:M.d,decimals:17,symbol:"BTCST",logoURI:"",balance:P.ethers.BigNumber.from(0)};function rt(e,t,a){if(e<t)throw new Error("time < farm started time");var n=Math.round(e-t),r=t+Math.round(n/a)*a;return r<e?r+a:r}return Object(n.useEffect)((function(){Ee(nt),c(void 0),m(!0),q(void 0),ee(!0),re(void 0),ce(!0),O(!0),D(!0),J(!0),me(!0),Oe(""),Ue(!0),ze(void 0),_e(void 0)}),[r]),B()((function(){var e;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||!a){n.next=9;break}return n.prev=1,n.next=4,w.a.awrap(Object(L.o)(t));case 4:e=n.sent,ze({started:e.started.toNumber(),stakePeriod:e.stakePeriod.toNumber(),desc:e.desc}),_e(rt(Date.now()/1e3,e.started,e.stakePeriod));case 7:return n.prev=7,n.finish(7);case 9:case"end":return n.stop()}}),null,null,[[1,,7,9]],Promise)}),[t,a]),B()((function(){var e,n,r,o,i,l,c,s,d,u;return w.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(!(t&&a&&He&&Ke)){m.next=46;break}Ue(!0),console.log("farminfo",He),m.prev=3,e=[],n=Date.now()/1e3,Ve&&Ve<n&&Ve>He.started&&(n=Ve-He.stakePeriod),r=0;case 8:if(!(r<5)){m.next=18;break}if(!((o=n-r*He.stakePeriod)<=He.started)){m.next=13;break}return m.abrupt("break",18);case 13:i=rt(o,He.started,He.stakePeriod),e.push(i);case 15:r++,m.next=8;break;case 18:return m.next=20,w.a.awrap(Promise.all(e.map((function(e){try{return Object(L.q)(e,t)}catch(a){return""}}))));case 20:l=m.sent,c=0;case 22:if(!(c<e.length)){m.next=35;break}return l[c]=E()({},l[c],{timeKey:e[c]}),m.next=26,w.a.awrap(Object(L.a)(e[c],M.a,t));case 26:s=m.sent,d=s.rAmount,u=s.rAccumulateAmount,s.rAmount&&(d=s.rAmount.div(U)),s.rAccumulateAmount&&(u=s.rAccumulateAmount.div(U)),l[c]={rewardLastSubmiter:l[c].rewardLastSubmiter,rewardAmount:d,rewardAccumulateAmount:u,totalStaked:l[c].totalStaked,stakedLowestWaterMark:l[c].stakedLowestWaterMark,totalStakedInSlot:l[c].totalStakedInSlot,stakedAddresses:l[c].stakedAddresses,timeKey:e[c]};case 32:c++,m.next=22;break;case 35:Te&&Te.length>0&&(l=Te.concat(l)),e.length>0&&Ze(e[e.length-1]),Ce(l),m.next=43;break;case 40:m.prev=40,m.t0=m.catch(3),console.log(m.t0);case 43:return m.prev=43,Ue(!1),m.finish(43);case 46:case"end":return m.stop()}}),null,null,[[3,40,43,46]],Promise)}),[t,a,He,Ke]),B()((function(){var e;return w.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return Ye(!0),t.prev=1,t.next=4,w.a.awrap(Object(L.g)());case 4:e=t.sent,at(e);case 6:return t.prev=6,Ye(!1),t.finish(6);case 9:case"end":return t.stop()}}),null,null,[[1,,6,9]],Promise)}),[]),B()((function(){var e;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(me(!0),!t||!a){n.next=10;break}return n.prev=2,n.next=5,w.a.awrap(Object(L.d)());case 5:0==(e=n.sent).code&&e.dayList&&pe(e.dayList);case 7:return n.prev=7,me(!1),n.finish(7);case 10:case"end":return n.stop()}}),null,null,[[2,,7,10]],Promise)}),[t,a]),B()((function(){var e;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||!a){n.next=14;break}return m(!0),n.next=4,w.a.awrap(Object(L.f)(t));case 4:return e=n.sent,n.prev=5,n.t0=c,n.next=9,w.a.awrap(e);case 9:n.t1=n.sent,(0,n.t0)(n.t1);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,a]),B()((function(){var e,n;return w.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t||!a){r.next=24;break}return O(!0),D(!0),r.next=5,w.a.awrap(Object(L.m)(t));case 5:return e=r.sent,r.next=8,w.a.awrap(Object(L.k)(t));case 8:return n=r.sent,r.prev=9,r.t0=p,r.next=13,w.a.awrap(e);case 13:return r.t1=r.sent,(0,r.t0)(r.t1),r.t2=S,r.next=18,w.a.awrap(n);case 18:r.t3=r.sent,(0,r.t2)(r.t3);case 20:return r.prev=20,O(!1),D(!1),r.finish(20);case 24:case"end":return r.stop()}}),null,null,[[9,,20,24]],Promise)}),[t,a]),B()((function(){var e,n;return w.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t||!a){r.next=24;break}return O(!0),D(!0),r.next=5,w.a.awrap(Object(L.m)(t));case 5:return e=r.sent,r.next=8,w.a.awrap(Object(L.k)(t));case 8:return n=r.sent,r.prev=9,r.t0=p,r.next=13,w.a.awrap(e);case 13:return r.t1=r.sent,(0,r.t0)(r.t1),r.t2=S,r.next=18,w.a.awrap(n);case 18:r.t3=r.sent,(0,r.t2)(r.t3);case 20:return r.prev=20,O(!1),D(!1),r.finish(20);case 24:case"end":return r.stop()}}),null,null,[[9,,20,24]],Promise)}),[t,a]),B()((function(){var e;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||!a){n.next=12;break}return ee(!0),n.prev=2,e=Object(A.h)("ERC20",M.a,a),n.t0=q,n.next=7,w.a.awrap(e.balanceOf(M.e));case 7:n.t1=n.sent,(0,n.t0)(n.t1);case 9:return n.prev=9,ee(!1),n.finish(9);case 12:case"end":return n.stop()}}),null,null,[[2,,9,12]],Promise)}),[t,a]),B()((function(){var e;return w.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||!a){n.next=14;break}return J(!0),n.next=4,w.a.awrap(Object(L.e)(t));case 4:return e=n.sent,n.prev=5,n.t0=R,n.next=9,w.a.awrap(e);case 9:n.t1=n.sent,(0,n.t0)(n.t1);case 11:return n.prev=11,J(!1),n.finish(11);case 14:case"end":return n.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,a]),{totalMinedBTC:l,loadingTotalMined:u,btcInpool:$,loadingBTCInpool:Q,totalStokenSupply:g,loadingTotalStokenSupply:x,totalStokenLocked:k,loadingTotalStokenLocked:I,totalStakedBTCST:W,loadingTotalStaked:X,dayMiningList:ge,loadingMiningStatList:ue,yourMiningPower:ne,loadingYourMiningPower:le,stoken:ke,amount:xe,setAmount:Oe,loadingDailyRecord:Me,selectedRecord:Be,setSelectedRecord:Fe,records:Te,btcstPrice:tt,getPriceLoading:Ge}},D=a(1232),H=a(1228),z=function(e){var t,a,n,o,i,l=e.state,c=Object(v.a)(),s=l.totalMinedBTC,d=l.loadingTotalMined,u=l.totalStokenSupply,m=l.totalStokenLocked,f=l.totalStakedBTCST,g=l.btcInpool,y=l.loadingMiningStatList||l.loadingTotalStaked||l.getPriceLoading,x=l.stoken;if(void 0!=(y||void 0==f?void 0:P.FixedNumber.fromString(Object(A.d)(f.div(P.BigNumber.from(10)),18,8)+"").mulUnsafe(P.FixedNumber.from(l.dayMiningList[0].eachHaveCoin)))&&void 0!=u&&void 0!=f){var j=P.FixedNumber.fromString(Object(A.d)(f.div(P.BigNumber.from(10)),18,8)+""),k=j,E=P.FixedNumber.from(f).divUnsafe(P.FixedNumber.from(u)).subUnsafe(P.FixedNumber.from("0.6"));i=P.FixedNumber.from("1.0"),E.toUnsafeFloat()<0&&(!1,i=(k=P.FixedNumber.from("0.6").mulUnsafe(P.FixedNumber.fromString(Object(A.d)(u.div(P.BigNumber.from(10)),18,8)+""))).divUnsafe(j));var S=P.FixedNumber.from(l.dayMiningList[0].eachHaveCoin),w=P.FixedNumber.from(l.dayMiningList[0].price);console.log("calculate netreward using pric:"+w+" daily btc per TH:"+S+" hashrate:"+k);var T=Object(A.a)(k,S,w),C=T.btc;t=T.usd,n=(a=C).divUnsafe(j).divUnsafe(P.FixedNumber.from(10)),o=t.divUnsafe(j).divUnsafe(P.FixedNumber.from(10))}return r.a.createElement(b.a,null,r.a.createElement(h.a,{text:c("total-mined"),style:{flex:1,fontSize:28,textAlign:"center"}}),r.a.createElement(h.a,{text:d||void 0==s?c("fetching"):Object(A.d)(s,18,8),fontWeight:"light",disabled:d,style:{fontSize:O.d?32:24,textAlign:"center"}}),r.a.createElement(p.a,{label:c("total-btc-still-in-pool"),text:l.loadingBTCInpool||void 0==u?c("fetching"):Object(A.d)(g,18,8),suffix:"",disabled:l.loadingBTCInpool}),r.a.createElement(p.a,{label:c("stoken-total-supply"),text:l.loadingTotalStokenSupply||void 0==u?c("fetching"):Object(A.d)(u,null==x?void 0:x.decimals,2),suffix:"",disabled:l.loadingTotalStokenSupply}),r.a.createElement(p.a,{label:c("stoken-total-locked"),text:l.loadingTotalStokenLocked||void 0==u?c("fetching"):Object(A.d)(m,null==x?void 0:x.decimals,2),suffix:"",disabled:l.loadingTotalStokenLocked}),r.a.createElement(p.a,{label:c("total-staked-btcst"),text:l.loadingTotalStaked||void 0==f?c("fetching"):Object(A.d)(f,null==x?void 0:x.decimals,2),suffix:l.loadingTotalStaked||void 0==f?"":"="+Object(A.d)(f.div(P.BigNumber.from(10)),18,2)+" TH/s",disabled:l.loadingTotalStaked}),r.a.createElement(p.a,{label:c("current-eta-daily-reward"),text:y||void 0==a?c("fetching"):Object(A.d)(a,18,8)+" BTC",suffix:y||void 0==t?c("fetching"):" \u2248 $ "+Object(A.d)(t,18,2),disabled:y}),r.a.createElement(p.a,{label:c("current-eta-daily-boost"),text:y||void 0==i?c("fetching"):Object(A.d)(i,18,2)+" X",suffix:"",disabled:y}),r.a.createElement(p.a,{label:c("current-eta-daily-reward-per-token-btc"),text:y||void 0==n?c("fetching"):Object(A.d)(n,19,8)+" BTC",suffix:"",disabled:y}),r.a.createElement(p.a,{label:c("current-eta-daily-reward-per-token-usd"),text:y||void 0==o?c("fetching"):"$ "+Object(A.d)(o,19,4),suffix:"",disabled:y}),r.a.createElement(p.a,{label:c("apy"),text:y||void 0==o?c("fetching"):0===l.btcstPrice?"-":Object(A.c)(o,P.FixedNumber.fromString(String(l.btcstPrice)))+"%",suffix:"",disabled:y}))},W=function(e){var t,a,n,o=e.state,i=Object(v.a)(),c=o.totalStokenSupply,s=o.totalStakedBTCST,d=void 0==o.amount||""==o.amount||P.FixedNumber.from(o.amount).isZero()||o.loadingMiningStatList;if(!d&&void 0!=c&&void 0!=s){var u=P.FixedNumber.fromString(o.amount).divUnsafe(P.FixedNumber.from(10)),m=!0,g=P.FixedNumber.from(Object(A.d)(s,18,8)+"").addUnsafe(P.FixedNumber.from(o.amount)),h=g.divUnsafe(P.FixedNumber.from(Object(A.d)(c,18,8)+"")).subUnsafe(P.FixedNumber.from("0.6"));n=P.FixedNumber.from("1.0"),h.toUnsafeFloat()<0&&(u=P.FixedNumber.from("0.6").mulUnsafe(P.FixedNumber.fromString(Object(A.d)(c.div(P.BigNumber.from(10)),18,8)+"")),m=!1,console.log("compare:"+g+" hashrate:"+u),n=u.mulUnsafe(P.FixedNumber.from(10)).divUnsafe(g));var x=P.FixedNumber.from(o.dayMiningList[0].eachHaveCoin),j=P.FixedNumber.from(o.dayMiningList[0].price),k=Object(A.a)(u,x,j),E=k.btc,S=k.usd;m?(a=E,t=S):(a=E.divUnsafe(g).mulUnsafe(P.FixedNumber.from(o.amount)),t=S.divUnsafe(g).mulUnsafe(P.FixedNumber.from(o.amount)))}return r.a.createElement(l.a,{style:{marginTop:O.g.large}},r.a.createElement(f.a,{text:i("stake-amount-to-estimates"),style:{marginBottom:0}}),r.a.createElement(y.a,{light:!0,style:{marginTop:0,marginBottom:O.g.tiny}},i("estimate-desc")),r.a.createElement(D.a,{token:o.stoken,amount:o.amount,onAmountChanged:o.setAmount,autoFocus:O.d}),r.a.createElement(b.a,{style:{marginTop:O.g.tiny}},r.a.createElement(p.a,{label:i("estimated-reward-in-btc"),text:d?i("n/a"):Object(A.d)(a,19,8),suffix:"BTC",disabled:d}),r.a.createElement(p.a,{label:i("estimated-reward-in-usd"),text:d?i("n/a"):Object(A.d)(t,19,4),suffix:"USD",disabled:d}),r.a.createElement(p.a,{label:i("estimated-boost-times"),text:d?i("n/a"):Object(A.d)(n,18,2),suffix:"X",disabled:d})))},R=function(){var e=I(),t=Object(v.a)();return r.a.createElement(l.a,{style:{marginTop:O.g.large}},r.a.createElement(u.a,{title:t("pool-daily-mined-history"),expanded:!0,onExpand:function(){}},r.a.createElement(K,{loadingDailyRecord:e.loadingDailyRecord,records:e.records,recordItem:X})))},K=function(e){var t=Object(v.a)(),a=Object(n.useCallback)((function(t){var a=t.item;return r.a.createElement(e.recordItem,{key:a.timeKey,record:a})}),[]),i=Object(n.useMemo)((function(){return(e.records||[]).sort((function(e,t){return(t.timeKey||0)-(e.timeKey||0)}))}),[e.records]);return e.loadingDailyRecord||!e.records?r.a.createElement(g.a,null):0===i.length?r.a.createElement(_,null):r.a.createElement(l.a,null,r.a.createElement(m.a,{style:{alignItems:"center",paddingHorizontal:O.g.tiny,paddingVertical:4}},r.a.createElement(l.a,{style:{flex:1,alignItems:"flex-start"}},r.a.createElement(y.a,{caption:!0,numberOfLines:1,fontWeight:"light"},t("deposited-rewards"))),r.a.createElement(l.a,null,r.a.createElement(y.a,{caption:!0,numberOfLines:1,style:{marginLeft:O.g.small}},t("staked-btcsts"))),r.a.createElement(l.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(y.a,{caption:!0,fontWeight:"light"},t("date")))),r.a.createElement(o.a,{keyExtractor:function(e){return e.timeKey.toString()},data:i,renderItem:a,ItemSeparatorComponent:function(){return r.a.createElement(H.a,{small:!0})}}))},_=function(){var e=Object(v.a)();return r.a.createElement(l.a,{style:{margin:O.g.normal}},r.a.createElement(y.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},e("empty-staking-records")))},X=function(e){var t=e.record,a=t.rewardAmount,n=t.stakedLowestWaterMark;return r.a.createElement(m.a,{style:{alignItems:"center",paddingHorizontal:O.g.tiny,paddingVertical:4}},r.a.createElement(l.a,{style:{flex:1,alignItems:"flex-start"}},r.a.createElement(y.a,{caption:!0,numberOfLines:1,fontWeight:"light",disabled:!1},a.gt(P.BigNumber.from(0))?Object(A.d)(a||0):"N/A")),r.a.createElement(l.a,null,r.a.createElement(y.a,{caption:!0,numberOfLines:1,style:{marginLeft:O.g.small},disabled:!1},n.gt(P.BigNumber.from(0))?Object(A.d)(n||0,17,1):"N/A")),r.a.createElement(l.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(y.a,{caption:!0,fontWeight:"light",disabled:!1},Object(A.f)(t.timeKey))))};t.default=function(){var e=Object(v.a)(),t=I();return r.a.createElement(j.a,null,r.a.createElement(s.a,null,r.a.createElement(c.a,null),r.a.createElement(d.a,null,r.a.createElement(h.a,{text:e("farm-stats")}),r.a.createElement(y.a,{light:!0},e("pool-history-desc")),r.a.createElement(z,{state:t}),r.a.createElement(W,{state:t}),r.a.createElement(R,null)),"web"===i.a.OS&&r.a.createElement(x.a,null)))}}}]);
//# sourceMappingURL=8.909d053a.chunk.js.map