(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,a){e.exports=a(30)},25:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=(a(25),a(1)),o=a(6),s=a.n(o),u=a(8),m=a(5),p=a(11),d="localhost"===window.location.hostname?"http://localhost:5000":"https://memo-map-mf.herokuapp.com";function f(){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/api/logs"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(s.a.mark((function e(t){var a,n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.apiKey,delete t.apiKey,e.next=4,fetch("".concat(d,"/api/logs"),{method:"POST",headers:{"content-type":"application/json","X-API-KEY":a},body:JSON.stringify(t)});case 4:if(!(n=e.sent).headers.get("content-type").includes("text/html")){e.next=12;break}return e.next=8,n.text();case 8:c=e.sent,r={message:c},e.next=15;break;case 12:return e.next=14,n.json();case 14:r=e.sent;case 15:if(!n.ok){e.next=17;break}return e.abrupt("return",r);case 17:throw(l=new Error(r.message)).response=r,l;case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(d,"/api/logs/").concat(t),{method:"DELETE"}).then((function(e){return e.text()})).then((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=a(19),j=function(e){var t=e.location,a=e.onClose,c=Object(n.useState)(!1),l=Object(m.a)(c,2),i=l[0],o=l[1],p=Object(n.useState)(""),d=Object(m.a)(p,2),f=d[0],h=d[1],E=Object(w.a)(),g=E.handleSubmit,v=E.register,j=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),n.latitude=t.latitude,n.longitude=t.longitude,e.next=6,b(n);case 6:a(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),h(e.t0.message),o(!1);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{autocomplete:"off",onSubmit:g(j),className:"entry-form"},f?r.a.createElement("h3",{className:"error"},f):null,r.a.createElement("label",{htmlFor:"apiKey"},"API KEY"),r.a.createElement("input",{type:"password",name:"apiKey",required:!0,ref:v}),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{name:"title",required:!0,ref:v}),r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",rows:3,ref:v}),r.a.createElement("label",{htmlFor:"image"},"Image ",r.a.createElement("small",null,"(url)")),r.a.createElement("input",{name:"image",ref:v}),r.a.createElement("label",{htmlFor:"visitDate"},"Visit Date"),r.a.createElement("input",{name:"visitDate",type:"date",ref:v,required:!0}),r.a.createElement("button",{disabled:i},i?"Loading...":"Create pin"))},k=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(m.a)(l,2),d=o[0],h=o[1],b=Object(n.useState)(null),E=Object(m.a)(b,2),v=E[0],w=E[1],k=Object(n.useState)({width:"100vw",height:"100vh",latitude:40.11,longitude:-100.99,zoom:4}),x=Object(m.a)(k,2),y=x[0],O=x[1],C=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C();case 1:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement(p.c,Object.assign({},y,{mapStyle:"mapbox://styles/mapbox/streets-v11",mapboxApiAccessToken:"pk.eyJ1IjoibW9tbW90dGkiLCJhIjoiY2s4bzZiZWduMDU5ajNsbWYzODI5dDczdCJ9.XDeVCGyJTetl96idm7MPww",onViewportChange:O,onDblClick:function(e){var t=Object(m.a)(e.lngLat,2),a=t[0],n=t[1];w({latitude:n,longitude:a})}}),r.a.createElement("div",{className:"header"},r.a.createElement("div",{class:"info_box"},r.a.createElement("i",{class:"fa fa-info-circle"},r.a.createElement("div",{class:"message"},"Double click/tap onto a location to add a new pin.\ud83d\udccd"))),r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement("h3",{className:"logo"},"memo-map"),r.a.createElement("span",{className:"matteo"}," by Matteo Fenu"))),a.map((function(e){return r.a.createElement(r.a.Fragment,{key:e._id},r.a.createElement(p.a,{key:e._id,latitude:e.latitude,longitude:e.longitude},r.a.createElement("div",{onClick:function(){return h(Object(i.a)({},e._id,!0))}},r.a.createElement("svg",{className:"pin red",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.a.createElement("circle",{cx:"12",cy:"10",r:"3"})))),d[e._id]?r.a.createElement(p.b,{latitude:e.latitude,longitude:e.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return h({})},anchor:"top"},r.a.createElement("div",{className:"popup"},r.a.createElement("h3",null,e.title),r.a.createElement("hr",null),r.a.createElement("p",null,e.description),r.a.createElement("hr",null),r.a.createElement("small",null,"Visited on: ",new Date(e.visitDate).toLocaleDateString()),r.a.createElement("hr",null),e.image?r.a.createElement("img",{className:"image",src:e.image,alt:e.title}):null,r.a.createElement("button",{className:"delete",onClick:Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e._id);case 2:return h({}),t.next=5,C();case 5:case"end":return t.stop()}}),t)})))},"delete pin"))):null)})),v?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{latitude:v.latitude,longitude:v.longitude},r.a.createElement("div",null,r.a.createElement("svg",{className:"pin add",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.a.createElement("circle",{cx:"12",cy:"10",r:"3"})))),r.a.createElement(p.b,{latitude:v.latitude,longitude:v.longitude,closeButton:!0,closeOnClick:!1,dynamicPosition:!0,onClose:function(){return w(null)},anchor:"top"},r.a.createElement("div",{className:"popup"},r.a.createElement(j,{onClose:function(){w(null),C()},location:v})))):null)};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e4180d06.chunk.js.map