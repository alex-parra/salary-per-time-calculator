(this["webpackJsonpsalary-per-time-calculator"]=this["webpackJsonpsalary-per-time-calculator"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(1),a=t.n(o),c=t(5),i=t.n(c),u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),a(e),c(e)}))},l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(12);var f=t(2),h=(t(13),11),d=20,v=7,y=132e3,b={EUR:"https://flagcdn.com/eu.svg",GBP:"https://flagcdn.com/gb.svg",USD:"https://flagcdn.com/us.svg"},j=t(4),g={o:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EUR";return new Intl.NumberFormat(void 0,Object(j.a)(Object(j.a)({style:n?"currency":"decimal"},n?{currency:n}:null),{},{minimumFractionDigits:e,maximumFractionDigits:e,useGrouping:!0}))},f:function(e,n){return g.o(n).format(e)},uf:function(e){return e=(e=(e="".concat(e)).replace(/[^0-9.]/g,"")).replace(/\.(\.+)/g,""),Number(e)}},m=function(){},p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e="".concat(e),e=Number(e).toFixed(n),Number(e)},O=1.1815,w=.89683,x={from:function(e,n){return{to:function(t){return x[t][e](n)},all:function(){return Object.keys(x[e]).reduce((function(t,r){return t[r]=x[r][e](n),t}),{})}}},EUR:{EUR:function(e){return p(e,0)},GBP:function(e){return p(e/w,0)},USD:function(e){return p(e/O,0)}},GBP:{EUR:function(e){return p(e*w,0)},GBP:function(e){return p(e,0)},USD:function(e){return x.GBP.EUR(x.EUR.USD(e))}},USD:{EUR:function(e){return p(e*O,0)},GBP:function(e){return x.USD.EUR(x.EUR.GBP(e))},USD:function(e){return p(e,0)}}},D=(t(14),t(15),t(6)),U=t.n(D),S={ArrowUp:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e+n},ArrowDown:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e-n}},T=function(e){var n=e.value,t=e.precision,o=void 0===t?0:t,a=e.currency,c=void 0===a?"EUR":a,i=e.label,u=void 0===i?"":i,l=e.onChange,s=void 0===l?m:l,f=g.o(o,c).formatToParts(n),h=(Object.values(f).find((function(e){return"currency"===e.type}))||{}).value||"";return h=h.replace("US$","$"),Object(r.jsx)("div",{className:"input","data-symbol":h,children:Object(r.jsx)(U.a,{defaultValue:n,value:n,allowDecimals:!0,allowNegativeValue:!1,precision:o,fixedDecimalLength:o,onChange:function(e){s(e||n)},onKeyDown:function(e){if(Object.keys(S).includes(e.key)){e.preventDefault();var t=[e.shiftKey,e.altKey].filter(Boolean).length,r=Math.pow(10,t);s(S[e.key](Number(n),r))}},"aria-label":u})})},k=function(e){var n=e.label,t=e.value,o=e.precision,a=void 0===o?0:o,c=e.currency,i=void 0===c?"USD":c,u=e.onChange,l=i?"".concat(i," ").concat(n):n;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:n}),Object(r.jsx)(T,{value:t,precision:a,currency:i,onChange:u,label:l})]})},C=function(e){var n=e.perYear,t=void 0===n?0:n,r=e.yearMonths,a=void 0===r?12:r,c=e.monthDays,i=void 0===c?21:c,u=e.dayHours,l=void 0===u?8:u,s=e.callback,h=void 0===s?m:s,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:21,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,r=function(n){return p(n/e,2)},o=function(n){return p(n*e,0)},a=function(e){return p(e/n,2)},c=function(e){return p(e*n,2)},i=function(e){return p(e/t,2)},u=function(e){return p(e*t,2)},l=function(e){return a(r(e))},s=function(e){return i(l(e))},f=function(e){return o(c(e))},h=function(e){return f(u(e))};return{yearToMonth:r,yearToDay:l,yearToHour:s,monthToYear:o,monthToDay:a,dayToMonth:c,dayToYear:f,dayToHour:i,hourToYear:h}}(a,i,l),v=Object(o.useState)(d.yearToMonth(t)),y=Object(f.a)(v,2),b=y[0],j=y[1],g=Object(o.useState)(d.monthToDay(b)),O=Object(f.a)(g,2),w=O[0],x=O[1],D=Object(o.useState)(d.dayToHour(w)),U=Object(f.a)(D,2),S=U[0],T=U[1],k={year:function(e){j(d.yearToMonth(e)),x(d.yearToDay(e)),T(d.yearToHour(e)),h(e)},month:function(e){return k.year(d.monthToYear(e))},day:function(e){return k.year(d.dayToYear(e))},hour:function(e){return k.year(d.hourToYear(e))}};return Object(o.useEffect)((function(){k.year(t)}),[t,a,i,l]),[b,w,S,k]},E=function(e){var n=e.yearMonths,t=e.monthDays,o=e.dayHours,a=e.perYear,c=e.currency,i=e.onUpdate,u=void 0===i?m:i,l=C({perYear:a,yearMonths:n,monthDays:t,dayHours:o,callback:function(e){return u(c,{y:e})}}),s=Object(f.a)(l,4),h=s[0],d=s[1],v=s[2],y=s[3];return Object(r.jsxs)("div",{className:"amounts",children:[Object(r.jsx)("h2",{children:Object(r.jsx)("img",{src:b[c],width:"30px",height:"20px",alt:c})}),Object(r.jsx)(k,{label:"per Year",value:a,currency:c,onChange:y.year}),Object(r.jsx)(k,{label:"per Month",value:h,currency:c,onChange:y.month}),Object(r.jsx)(k,{label:"per Day",value:d,currency:c,onChange:y.day}),Object(r.jsx)(k,{label:"per Hour",value:v,currency:c,onChange:y.hour})]})},M=Object(o.memo)(E),N=(t(16),function(e){var n=e.yearMonths,t=e.monthDays,o=e.dayHours;return Object(r.jsxs)("div",{className:"settings",children:[Object(r.jsx)("h5",{children:"Settings"}),Object(r.jsx)(k,{label:"Months / Year",value:n.value,precision:0,currency:null,onChange:n.set}),Object(r.jsx)(k,{label:"Days / Month",value:t.value,precision:0,currency:null,onChange:t.set}),Object(r.jsx)(k,{label:"Hours / Day",value:o.value,precision:0,currency:null,onChange:o.set})]})}),R=function(){var e=Object(o.useState)(h),n=Object(f.a)(e,2),t=n[0],a=n[1],c=Object(o.useState)(d),i=Object(f.a)(c,2),u=i[0],l=i[1],s=Object(o.useState)(v),b=Object(f.a)(s,2),j=b[0],g=b[1],m=x.from("EUR",y),p=Object(o.useState)(m.all()),O=Object(f.a)(p,2),w=O[0],D=O[1],U=function(e,n){D(x.from(e,n.y).all())};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("h1",{children:["Salary Calculator ",Object(r.jsx)("small",{children:"per Time & Currency"})]}),Object(r.jsx)("div",{className:"amountsWrap",children:Object.keys(x.EUR).map((function(e){return Object(r.jsx)(M,{currency:e,perYear:w[e],yearMonths:t,monthDays:u,dayHours:j,onUpdate:U},e)}))}),Object(r.jsx)(N,{yearMonths:{value:t,set:a},monthDays:{value:u,set:l},dayHours:{value:j,set:g}})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/salary-per-time-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/salary-per-time-calculator","/service-worker.js");l?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):s(n,e)}))}}(),u()}],[[17,1,2]]]);
//# sourceMappingURL=main.26aec648.chunk.js.map