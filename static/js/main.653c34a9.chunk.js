(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),i=(a(12),a(13),a(14),a(1)),s=Object(n.createContext)(),m=function(e){var t=Object(n.useState)("#000"),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement(s.Provider,{value:[r,l]},e.children)},o=Object(n.createContext)(),u=function(e){var t=Object(n.useState)(60),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement(o.Provider,{value:[r,l]},e.children)},d=Object(n.createContext)(),v=function(e){var t=Object(n.useState)(10),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement(d.Provider,{value:[r,l]},e.children)},E=Object(n.createContext)(),b=function(e){var t=Object(n.useState)(!0),a=Object(i.a)(t,2),r=a[0],l=a[1];return c.a.createElement(E.Provider,{value:[r,l]},e.children)},p=(a(15),function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"center"},c.a.createElement("h1",{className:"headline"},"Cells and Colours")))}),g=function(){var e=Object(n.useContext)(s),t=Object(i.a)(e,2),a=t[0],r=(t[1],Object(n.useContext)(d)),l=Object(i.a)(r,2),m=l[0],o=(l[1],Object(n.useContext)(E)),u=Object(i.a)(o,2),v=u[0],b=(u[1],Object(n.useState)("#fff")),p=Object(i.a)(b,2),g=p[0],f=p[1];return c.a.createElement("div",{onMouseDown:function(){f(a)},style:{width:m,height:m,boxSizing:"border-box",border:v?"1px solid #ccc":"none",padding:0,backgroundColor:g}})},f=(a(16),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(o),s=Object(i.a)(l,2),m=s[0],u=(s[1],Object(n.useContext)(d)),v=Object(i.a)(u,2),b=v[0],p=(v[1],Object(n.useContext)(E)),f=Object(i.a)(p,2),N=f[0];f[1];return Object(n.useEffect)(function(){for(var e=[],t=0;t<Math.pow(m,2);t++)e.push(c.a.createElement(g,{key:"_"+Math.random().toString(36).substr(2,9)}));r(c.a.createElement("div",{className:"loading-wrapper"},c.a.createElement("div",{className:"loading"}))),setTimeout(function(){return r(e)},2)},[m,b]),c.a.createElement("div",{style:{position:"relative",width:m*b,height:m*b,display:"flex",outline:N?"1px solid #000":"none",flexFlow:"row wrap",margin:0}},a)}),N=(a(3),function(e){var t=Object(n.useContext)(d),a=Object(i.a)(t,2),r=(a[0],a[1]),l=e.hidden?"hidden":"visible";return c.a.createElement("div",{className:"size-select",style:{visibility:l},onClick:function(e){"size-text"==e.target.className&&r(parseInt(e.target.getAttribute("value"),10))}},c.a.createElement("div",{className:"size-option"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"image img-first"},"  ")),c.a.createElement("div",{className:"size-text",value:"12"}," 12 x 12 ")),c.a.createElement("div",{className:"size-option"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"image img-second"},"  ")),c.a.createElement("div",{className:"size-text",value:"10"}," 10 x 10 ")),c.a.createElement("div",{className:"size-option"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"image img-third"},"  ")),c.a.createElement("div",{className:"size-text",value:"8"}," 8 x 8 ")))}),j=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",{className:"size-wrapper",onClick:function(e){"size-wrapper"!==e.target.className&&"size-image"!==e.target.className||r(!a)}},c.a.createElement("div",{className:"size-image"})),c.a.createElement(N,{hidden:a}))},O=(a(4),function(e){var t=Object(n.useContext)(o),a=Object(i.a)(t,2),r=(a[0],a[1]),l=e.hidden?"hidden":"visible";return c.a.createElement("div",{className:"res-select",style:{visibility:l},onClick:function(e){"res-text"==e.target.className&&r(parseInt(e.target.getAttribute("value"),10))}},c.a.createElement("div",{className:"res-option"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"image image-first"},"  ")),c.a.createElement("div",{className:"res-text",value:"60"}," 60 x 60 ")),c.a.createElement("div",{className:"res-option"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"image image-second"},"  ")),c.a.createElement("div",{className:"res-text",value:"40"}," 40 x 40 ")),c.a.createElement("div",{className:"res-option"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("div",{className:"image image-third"},"  ")),c.a.createElement("div",{className:"res-text",value:"20"}," 20 x 20 ")))}),x=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("div",{className:"res-wrapper",onClick:function(e){"res-wrapper"!==e.target.className&&"res-image"!==e.target.className||r(!a)}},c.a.createElement("div",{className:"res-image"})),c.a.createElement(O,{hidden:a}))},h=(a(17),function(){var e=Object(n.useContext)(s),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"color-wrapper"},c.a.createElement("input",{type:"color",onChange:function(e){r(e.target.value)},value:a})))}),w=(a(18),function(){var e=Object(n.useContext)(E),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",onChange:function(e){r(e.target.checked)},checked:a}))}),C=function(e){return c.a.createElement("div",{className:e.className},c.a.createElement(j,null),c.a.createElement(x,null),c.a.createElement(h,null),c.a.createElement(w,null))},y=function(){return c.a.createElement(m,null,c.a.createElement(v,null,c.a.createElement(u,null,c.a.createElement(b,null,c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(C,{className:"controll"}),c.a.createElement("div",{className:"field-area"},c.a.createElement(f,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.653c34a9.chunk.js.map