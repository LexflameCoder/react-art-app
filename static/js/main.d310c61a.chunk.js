(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(16)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),o=(n(10),n(11),n(12),n(1)),u=Object(a.createContext)(),i=function(e){var t=Object(a.useState)("#000"),n=Object(o.a)(t,2),r=n[0],l=n[1];return c.a.createElement(u.Provider,{value:[r,l]},e.children)},s=Object(a.createContext)(),m=function(e){var t=Object(a.useState)(60),n=Object(o.a)(t,2),r=n[0],l=n[1];return c.a.createElement(s.Provider,{value:[r,l]},e.children)},d=Object(a.createContext)(),v=function(e){var t=Object(a.useState)(10),n=Object(o.a)(t,2),r=n[0],l=n[1];return c.a.createElement(d.Provider,{value:[r,l]},e.children)},b=Object(a.createContext)(),E=function(e){var t=Object(a.useState)(!0),n=Object(o.a)(t,2),r=n[0],l=n[1];return c.a.createElement(b.Provider,{value:[r,l]},e.children)},f=(n(13),function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"center"},c.a.createElement("h1",{className:"headline"},"Cells and Colours")))}),h=function(){var e=Object(a.useContext)(u),t=Object(o.a)(e,2),n=t[0],r=(t[1],Object(a.useContext)(d)),l=Object(o.a)(r,2),i=l[0],s=(l[1],Object(a.useContext)(b)),m=Object(o.a)(s,2),v=m[0],E=(m[1],Object(a.useState)("#fff")),f=Object(o.a)(E,2),h=f[0],j=f[1];return c.a.createElement("div",{onClick:function(){j(n)},style:{width:i,height:i,boxSizing:"border-box",border:v?"1px solid #ccc":"none",padding:0,backgroundColor:h}})},j=(n(14),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useContext)(s),u=Object(o.a)(l,2),i=u[0],m=(u[1],Object(a.useContext)(d)),v=Object(o.a)(m,2),E=v[0],f=(v[1],Object(a.useContext)(b)),j=Object(o.a)(f,2),O=j[0];j[1];return Object(a.useEffect)(function(){for(var e=[],t=0;t<Math.pow(i,2);t++)e.push(c.a.createElement(h,{key:"_"+Math.random().toString(36).substr(2,9)}));r(c.a.createElement("div",{className:"loading-wrapper"},c.a.createElement("div",{className:"loading"}))),setTimeout(function(){return r(e)},2)},[i,E]),c.a.createElement("div",{style:{position:"relative",width:i*E,height:i*E,display:"flex",outline:O?"1px solid #000":"none",flexFlow:"row wrap",margin:0}},n)}),O=function(){var e=Object(a.useContext)(d),t=Object(o.a)(e,2),n=(t[0],t[1]);return c.a.createElement("div",null,"Select the width & height of each cell",c.a.createElement("select",{onChange:function(e){n(parseInt(e.target.value,10))}},c.a.createElement("option",{value:"12"},"12 x 12"),c.a.createElement("option",{value:"10",selected:!0},"10 x 10"),c.a.createElement("option",{value:"8"},"8 x 8")))},p=function(){var e=Object(a.useContext)(s),t=Object(o.a)(e,2),n=(t[0],t[1]);return c.a.createElement("div",null,"Select grid resolution",c.a.createElement("select",{onChange:function(e){n(parseInt(e.target.value),10)}},c.a.createElement("option",{value:"60",selected:!0},"60 x 60"),c.a.createElement("option",{value:"40"},"40 x 40"),c.a.createElement("option",{value:"30"},"30 x 30")))},x=function(){var e=Object(a.useContext)(u),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,"Choose your colour",c.a.createElement("input",{type:"color",onChange:function(e){r(e.target.value)},value:n,style:{width:"35px"}}))},g=(n(15),function(){var e=Object(a.useContext)(b),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",null,c.a.createElement("div",null,"Turn off/on grid"),c.a.createElement("input",{type:"checkbox",onChange:function(e){r(e.target.checked)},checked:n}))}),C=function(e){return c.a.createElement("div",{className:e.className},c.a.createElement(O,null),c.a.createElement(p,null),c.a.createElement(x,null),c.a.createElement(g,null))},w=function(){return c.a.createElement(i,null,c.a.createElement(v,null,c.a.createElement(m,null,c.a.createElement(E,null,c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement(C,{className:"controll"}),c.a.createElement("div",{className:"field-area"},c.a.createElement(j,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.d310c61a.chunk.js.map