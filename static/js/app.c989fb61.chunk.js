(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{368:function(e,t,n){"use strict";n.d(t,"a",(function(){return ke}));var r=n(1),a=n.n(r),c=n(4),o=n(112),i=n(53),u=n(537),s=n(308),l=n(290),f=n(119),p=n(7),h=n.n(p),m=n(8),d=n.n(m),v=n(9),y=n.n(v),g=n(10),E=n.n(g),C=n(5),S=n.n(C),b=n(536),x=n(3),R=n(21),T=n(2),O=o.Appearance.getColorScheme(),D=T.a.create({container:{height:"100%",justifyContent:"space-around",alignItems:"center"},textCenter:{textAlign:"center",textAlignVertical:"center",color:"dark"===O?l.a.colors.text:f.a.colors.text},formContainer:{flexDirection:"row",alignItems:"center",justifyContent:"center"},upperPart:{justifyContent:"center",alignItems:"center"}});function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var U=function(e){y()(n,e);var t=P(n);function n(){return h()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){var e=this;return a.a.createElement(x.a,{style:D.container},a.a.createElement(x.a,null,a.a.createElement(R.c,{h2:!0,style:D.textCenter},"Let's begin"),a.a.createElement(R.c,{h1:!0,style:D.textCenter},"SPRINT")),a.a.createElement(R.a,{type:"solid",title:"Start!",onPress:function(){return e.props.navigation.navigate(Z.form)}}))}}]),n}(r.Component),w=n(208),j=function(e){return{type:"UPDATE_SPRINT",payload:e}},k=function(e){return{type:"UPDATE_RELAX",payload:e}},A=n(219),B=n(108);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var I=B.b().shape({hours:B.a().required().moreThan(-1).integer().lessThan(12),minutes:B.a().required().moreThan(-1).integer().lessThan(60)}),L=function(e){y()(n,e);var t=M(n);function n(){return h()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){var e=this;return console.log(this.props),a.a.createElement(A.a,{initialValues:{hours:"",minutes:""},validateOnChange:!0,onSubmit:function(t){var n,r;e.props.sprintUpdate({credit:(n=t.hours,r=t.minutes,60*n*60*1e3+60*r*1e3)}),e.props.navigation.navigate(Z.timer)},validationSchema:I,initialErrors:{hours:"",minutes:""}},(function(e){var t=e.handleChange,n=e.handleBlur,r=e.handleSubmit,c=e.values,o=e.errors,i=e.isValid,u=e.touched;return a.a.createElement(w.a,{style:D.container,behavior:"padding"},a.a.createElement(x.a,{style:D.upperPart},a.a.createElement(R.c,{h2:!0,style:D.textCenter},"For how long are you going to sprint?"),a.a.createElement(x.a,{style:[D.formContainer]},a.a.createElement(x.a,{style:{width:"50%"}},a.a.createElement(R.b,{keyboardType:"numeric",placeholder:"hh",inputStyle:[D.textCenter,{textAlign:"right"}],onChangeText:t("hours"),onBlur:n("hours"),value:c.hours}),u.hours&&o.hours&&a.a.createElement(R.c,{style:{textAlign:"right"}},o.hours)),a.a.createElement(R.c,{style:D.textCenter},":"),a.a.createElement(x.a,{style:{width:"50%"}},a.a.createElement(R.b,{keyboardType:"numeric",placeholder:"mm",onChangeText:t("minutes"),onBlur:n("minutes"),value:c.minutes,inputStyle:[D.textCenter,{textAlign:"left"}]}),u.minutes&&o.minutes&&a.a.createElement(R.c,null,o.minutes)))),a.a.createElement(R.a,{type:"solid",title:"Start!",onPress:r,disabled:!i}))}))}}]),n}(r.Component),V={sprintUpdate:j},N=Object(i.b)((function(e){return{sprintCred:e.sprint}}),V)(L),z=n(134),H=n(0),q=n.n(H);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var W=function(e){y()(n,e);var t=_(n);function n(e){var r;h()(this,n),r=t.call(this,e);var a=new Date;return r.state={start:a,diff:0},r}return d()(n,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){var t=new Date,n={};(n=e.state.start.getTime()+e.props.sprintCredit.credit-t.getTime())<=0&&(clearInterval(e.state.interval),n="tt",e.props.relaxUpdate({credit:e.props.sprintCredit.credit/3}),e.props.sprintUpdate({credit:-1*e.props.sprintCredit.credit}),e.props.navigation.navigate(Z.end)),e.setState({diff:n})}),250);this.setState({interval:t}),z.a.addEventListener("hardwareBackPress",(function(){return!0}))}},{key:"render",value:function(){var e=this.state.diff;return"tt"!==this.state.diff&&(e=(e=new Date(this.state.diff)).getUTCHours()+":"+(e.getUTCMinutes()<10?"0"+e.getUTCMinutes():e.getUTCMinutes())+":"+(e.getUTCSeconds()<10?"0"+e.getUTCSeconds():e.getUTCSeconds())),a.a.createElement(x.a,{style:D.container},a.a.createElement(R.c,{h1:!0,style:D.textCenter}," ",e,"  "))}}]),n}(r.Component);W.propTypes={prop:q.a};var Y={sprintUpdate:j,relaxUpdate:k},F=Object(i.b)((function(e){return{sprintCredit:e.sprint}}),Y)(W);function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var X=function(e){y()(n,e);var t=J(n);function n(){return h()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){var e=this,t=new Date(this.props.relax.credit),n=""+t.getUTCHours();return n+=":"+(t.getUTCMinutes()<10?"0"+t.getUTCMinutes():t.getUTCMinutes()),n+=":"+(t.getUTCSeconds()<10?"0"+t.getUTCSeconds():t.getUTCSeconds()),a.a.createElement(x.a,{style:D.container},a.a.createElement(R.c,null,"You earned"),a.a.createElement(R.c,{h1:!0,style:D.textCenter}," ",n," "),a.a.createElement(R.c,null,"so far!"),a.a.createElement(R.a,{title:"Start again!",onPress:function(){e.props.navigation.navigate(Z.form)}}))}}]),n}(r.Component),G=Object(i.b)((function(e){return{relax:e.relax}}),{})(X);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var Q=Object(b.a)(),Z={onBoarding:"New Sprint!",form:"Sprint for...",timer:"Sprinting..",end:"Sprint finished!"},$=function(e){y()(n,e);var t=K(n);function n(){return h()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){return a.a.createElement(Q.Navigator,{screenOptions:{headerLeft:null,gestureEnabled:!1}},a.a.createElement(Q.Screen,{name:Z.onBoarding,component:U}),a.a.createElement(Q.Screen,{name:Z.form,component:N}),a.a.createElement(Q.Screen,{name:Z.timer,component:F,options:{headerShown:!1}}),a.a.createElement(Q.Screen,{name:Z.end,component:G}))}}]),n}(r.Component),ee=n(121),te=n(11),ne=n.n(te);function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ne()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{credit:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SPRINT":return ae(ae({},e),{},{credit:e.credit+t.payload.credit});default:return e}};function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){ne()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{credit:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_RELAX":return ie(ie({},e),{},{credit:e.credit+t.payload.credit});default:return e}},se=Object(ee.b)({sprint:ce,relax:ue}),le=Object(ee.c)(se),fe=n(139),pe=n(161);function he(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var me=function(e){y()(n,e);var t=he(n);function n(){return h()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){var e=this;return a.a.createElement(x.a,{style:D.container},a.a.createElement(x.a,null,a.a.createElement(R.c,{h2:!0,style:D.textCenter},"Let's"),a.a.createElement(R.c,{h1:!0,style:D.textCenter},"Relax")),a.a.createElement(R.a,{type:"solid",title:"Start!",onPress:function(){e.props.navigation.navigate(Pe.form)}}))}}]),n}(r.Component);function de(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var ve=function(e){return new Date(e).getUTCMinutes()},ye=function(e){y()(n,e);var t=de(n);function n(e){var r;return h()(this,n),(r=t.call(this,e)).validationSchema={},r.recreateValidationSchema=function(){var e;r.validationSchema=B.b().shape({hours:B.a().required().moreThan(-1).integer().lessThan((e=r.props.rest.credit,new Date(e).getUTCHours()+1)),minutes:B.a().required().moreThan(-1).integer().lessThan(ve(r.props.rest.credit)+1)})},r.recreateValidationSchema(),r}return d()(n,[{key:"render",value:function(){var e=this;return this.recreateValidationSchema(),a.a.createElement(A.a,{initialValues:{hours:"",minutes:""},validateOnChange:!0,onSubmit:function(t){var n,r;e.props.navigation.navigate(Pe.timer,{timer:(n=t.hours,r=t.minutes,60*n*60*1e3+60*r*1e3)})},validationSchema:this.validationSchema,initialErrors:{hours:"",minutes:""}},(function(e){var t=e.handleChange,n=e.handleBlur,r=e.handleSubmit,c=e.values,o=e.errors,i=e.isValid,u=e.touched;return a.a.createElement(w.a,{style:D.container,behavior:"padding"},a.a.createElement(x.a,{style:D.upperPart},a.a.createElement(R.c,{h2:!0,style:D.textCenter},"You'll be resting for..."),a.a.createElement(x.a,{style:[D.formContainer]},a.a.createElement(x.a,{style:{width:"50%"}},a.a.createElement(R.b,{keyboardType:"numeric",placeholder:"hh",inputStyle:[D.textCenter,{textAlign:"right"}],onChangeText:t("hours"),onBlur:n("hours"),value:c.hours}),u.hours&&o.hours&&a.a.createElement(R.c,{style:{textAlign:"right"}},o.hours)),a.a.createElement(R.c,{style:D.textCenter},":"),a.a.createElement(x.a,{style:{width:"50%"}},a.a.createElement(R.b,{keyboardType:"numeric",placeholder:"mm",onChangeText:t("minutes"),onBlur:n("minutes"),value:c.minutes,inputStyle:[D.textCenter,{textAlign:"left"}]}),u.minutes&&o.minutes&&a.a.createElement(R.c,null,o.minutes)))),a.a.createElement(R.a,{type:"solid",title:"Start!",onPress:r,disabled:!i}))}))}}]),n}(r.Component),ge={restUpdate:k},Ee=Object(i.b)((function(e){return{rest:e.relax}}),ge)(ye);function Ce(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var Se=function(e){y()(n,e);var t=Ce(n);function n(e){var r;h()(this,n),r=t.call(this,e);var a=new Date;return r.state={start:a,diff:0},r}return d()(n,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){var t,n,r=new Date,a={};(a=e.state.start.getTime()+(null==(t=e.props.route.params)?void 0:t.timer)-r.getTime())<=0&&(clearInterval(e.state.interval),a="tt",e.props.relaxUpdate({credit:-(null==(n=e.props.route.params)?void 0:n.timer)}),e.props.navigation.navigate(Pe.end));e.setState({diff:a})}),250);this.setState({interval:t}),z.a.addEventListener("hardwareBackPress",(function(){return!0}))}},{key:"render",value:function(){var e=this.state.diff;return"tt"!==this.state.diff&&(e=(e=new Date(this.state.diff)).getUTCHours()+":"+(e.getUTCMinutes()<10?"0"+e.getUTCMinutes():e.getUTCMinutes())+":"+(e.getUTCSeconds()<10?"0"+e.getUTCSeconds():e.getUTCSeconds())),a.a.createElement(x.a,{style:D.container},a.a.createElement(R.c,{h1:!0,style:D.textCenter}," ",e,"  "))}}]),n}(r.Component);Se.propTypes={prop:q.a};var be={relaxUpdate:k},xe=Object(i.b)((function(e){return{}}),be)(Se);function Re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var Te=function(e){y()(n,e);var t=Re(n);function n(){return h()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){var e=this,t=new Date(this.props.relax.credit),n=""+t.getUTCHours();return n+=":"+(t.getUTCMinutes()<10?"0"+t.getUTCMinutes():t.getUTCMinutes()),n+=":"+(t.getUTCSeconds()<10?"0"+t.getUTCSeconds():t.getUTCSeconds()),a.a.createElement(x.a,{style:D.container},a.a.createElement(R.c,null,"You still have"),a.a.createElement(R.c,{h1:!0,style:D.textCenter}," ",n," "),a.a.createElement(R.c,null,"to rest!"),a.a.createElement(R.a,{title:"Start again!",onPress:function(){e.props.navigation.navigate(Pe.form)}}))}}]),n}(r.Component),Oe=Object(i.b)((function(e){return{relax:e.relax}}),{})(Te);function De(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S()(e);if(t){var a=S()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E()(this,n)}}var Pe={onBoarding:"Relax time ;)",form:"Relax for...",timer:"Stop looking",end:"Boohoo ;("},Ue=Object(b.a)(),we=function(e){y()(n,e);var t=De(n);function n(){return h()(this,n),t.apply(this,arguments)}return d()(n,[{key:"render",value:function(){return a.a.createElement(Ue.Navigator,null,a.a.createElement(Ue.Screen,{name:Pe.onBoarding,component:me}),a.a.createElement(Ue.Screen,{name:Pe.form,component:Ee}),a.a.createElement(Ue.Screen,{name:Pe.timer,component:xe}),a.a.createElement(Ue.Screen,{name:Pe.end,component:Oe}))}}]),n}(r.Component),je=Object(u.a)();function ke(){var e=Object(o.useColorScheme)();return a.a.createElement(i.a,{store:le},a.a.createElement(o.AppearanceProvider,null,a.a.createElement(s.a,{theme:"dark"===e?l.a:f.a},a.a.createElement(je.Navigator,null,a.a.createElement(je.Screen,{name:"Work",component:$,options:{tabBarIcon:function(e){var t=e.color,n=e.size;return"web"===c.a.OS?a.a.createElement(pe.a,{name:"suitcase",color:t,size:n}):a.a.createElement(fe.a,{name:"suitcase",color:t,size:n})}}}),a.a.createElement(je.Screen,{name:"Relax",component:we,options:{tabBarIcon:function(e){var t=e.color,n=e.size;return a.a.createElement(pe.a,{name:"smile",color:t,size:n})}}})))))}},375:function(e,t,n){n(376),e.exports=n(524)},376:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/gtd-timer/expo-service-worker.js",{scope:"/gtd-timer/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[375,1,2]]]);
//# sourceMappingURL=app.c989fb61.chunk.js.map