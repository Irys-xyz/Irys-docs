(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2888],{6840:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e(87484)}])},87484:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return h}});var r=e(85893),o=e(67294);e(43547),e(93814),e(29443),e(8139),e(73149),e(50762);var i=e(34155);let u=i.env.NEXT_PUBLIC_GA_ID,c=t=>{window.gtag("config",u,{page_path:t})};var a=e(4298),s=e.n(a);let f=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(u)}),(0,r.jsx)(s(),{strategy:"afterInteractive",id:"analytics-page-identifier",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(u,"', {\n              page_path: window.location.pathname,\n            });\n          ")}})]});var l=e(11163);function h(t){let{Component:n,pageProps:e}=t;return(0,o.useEffect)(()=>{localStorage.setItem("theme","dark")},[]),!function(){let t=(0,l.useRouter)();(0,o.useEffect)(()=>{let n=t=>{c(t)};return t.events.on("routeChangeComplete",n),()=>{t.events.off("routeChangeComplete",n)}},[t.events])}(),(0,r.jsxs)(r.Fragment,{children:[(0,o.createElement)(n,{...e,key:1}),(0,r.jsx)(f,{},2)]})}},73149:function(){},50762:function(){},8139:function(){},43547:function(){},29443:function(){},93814:function(){},11163:function(t,n,e){t.exports=e(96885)},4298:function(t,n,e){t.exports=e(85442)},34155:function(t){var n,e,r,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{e="function"==typeof clearTimeout?clearTimeout:u}catch(t){e=u}}();var a=[],s=!1,f=-1;function l(){s&&r&&(s=!1,r.length?a=r.concat(a):f=-1,a.length&&h())}function h(){if(!s){var t=c(l);s=!0;for(var n=a.length;n;){for(r=a,a=[];++f<n;)r&&r[f].run();f=-1,n=a.length}r=null,s=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===u||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}(t)}}function g(t,n){this.fun=t,this.array=n}function p(){}o.nextTick=function(t){var n=Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];a.push(new g(t,n)),1!==a.length||s||c(h)},g.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(t){var n=function(n){return t(t.s=n)};t.O(0,[9774,179],function(){return n(6840),n(96885)}),_N_E=t.O()}]);