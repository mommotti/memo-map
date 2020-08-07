(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),l=(n(25),n(1)),o=n(6),s=n.n(o),u=n(8),m=n(5),p=n(11),d="localhost"===window.location.hostname?"http://localhost:5000":"https://memo-map-mf.herokuapp.com";function h(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/api/logs"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(s.a.mark((function e(t){var n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.apiKey,delete t.apiKey,e.next=4,fetch("".concat(d,"/api/logs"),{method:"POST",headers:{"content-type":"application/json","X-API-KEY":n},body:JSON.stringify(t)});case 4:if(!(a=e.sent).headers.get("content-type").includes("text/html")){e.next=12;break}return e.next=8,a.text();case 8:c=e.sent,r={message:c},e.next=15;break;case 12:return e.next=14,a.json();case 14:r=e.sent;case 15:if(!a.ok){e.next=17;break}return e.abrupt("return",r);case 17:throw(i=new Error(r.message)).response=r,i;case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(19),v=function(e){var t=e.location,n=e.onClose,c=Object(a.useState)(!1),i=Object(m.a)(c,2),l=i[0],o=i[1],p=Object(a.useState)(""),d=Object(m.a)(p,2),h=d[0],f=d[1],E=Object(g.a)(),v=E.handleSubmit,j=E.register,k=function(){var e=Object(u.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),a.latitude=t.latitude,a.longitude=t.longitude,e.next=6,b(a);case 6:n(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),f(e.t0.message),o(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:v(k),className:"entry-form"},h?r.a.createElement("h3",{className:"error"},h):null,r.a.createElement("label",{htmlFor:"apiKey"},"API KEY"),r.a.createElement("input",{type:"password",name:"apiKey",required:!0,ref:j}),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{name:"title",required:!0,ref:j}),r.a.createElement("label",{htmlFor:"comments"},"Comments"),r.a.createElement("textarea",{name:"comments",rows:3,ref:j}),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{name:"description",ref:j}),r.a.createElement("label",{htmlFor:"image"},"Image"),r.a.createElement("input",{name:"image",ref:j}),r.a.createElement("label",{htmlFor:"visitDate"},"Visit Date"),r.a.createElement("input",{name:"visitDate",type:"date",ref:j,required:!0}),r.a.createElement("button",{disabled:l},l?"Loading...":"Create pin"))},j=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),o=Object(m.a)(i,2),d=o[0],f=o[1],b=Object(a.useState)(null),E=Object(m.a)(b,2),g=E[0],j=E[1],k=Object(a.useState)({width:"100vw",height:"100vh",latitude:40.11,longitude:-100.99,zoom:4}),w=Object(m.a)(k,2),y=w[0],O=w[1],x=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x();case 1:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement(p.c,Object.assign({},y,{mapStyle:"mapbox://styles/mapbox/dark-v10",mapboxApiAccessToken:"pk.eyJ1IjoibW9tbW90dGkiLCJhIjoiY2s4bzZiZWduMDU5ajNsbWYzODI5dDczdCJ9.XDeVCGyJTetl96idm7MPww",onViewportChange:O,onDblClick:function(e){var t=Object(m.a)(e.lngLat,2),n=t[0],a=t[1];j({latitude:a,longitude:n})}}),n.map((function(e){return r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement(p.a,{key:e._id,latitude:e.latitude,longitude:e.longitude},r.a.createElement("div",{onClick:function(){return f(Object(l.a)({},e._id,!0))}},r.a.createElement("svg",{className:"pin yellow",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.a.createElement("circle",{cx:"12",cy:"10",r:"3"})))),d[e._id]?r.a.createElement(p.b,{latitude:e.latitude,longitude:e.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return f({})},anchor:"top"},r.a.createElement("div",{className:"popup"},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.comments),r.a.createElement("small",null,"Visited on:",new Date(e.visitDate).toLocaleDateString()),e.image?r.a.createElement("img",{src:e.image,alt:e.title}):null)):null)})),g?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{latitude:g.latitude,longitude:g.longitude},r.a.createElement("div",null,r.a.createElement("svg",{className:"pin red",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.a.createElement("circle",{cx:"12",cy:"10",r:"3"})))),r.a.createElement(p.b,{latitude:g.latitude,longitude:g.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return j(null)},anchor:"top"},r.a.createElement("div",{className:"popup"},r.a.createElement(v,{onClose:function(){j(null),x()},location:g})))):null)};i.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7a9d4642.chunk.js.map