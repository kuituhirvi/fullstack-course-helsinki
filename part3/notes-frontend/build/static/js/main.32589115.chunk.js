(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(39)},21:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(21),n(14)),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2019"))},s=n(3),p=n.n(s),d=function(){return p.a.get("/api/notes").then(function(t){return t.data})},E=function(t){return p.a.post("/api/notes",t).then(function(t){return t.data})},v=function(t,e){return p.a.put("".concat("/api/notes","/").concat(t),e).then(function(t){return t.data})},b=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),o=n[0],c=n[1],s=Object(a.useState)(""),p=Object(i.a)(s,2),b=p[0],g=p[1],h=Object(a.useState)(!0),O=Object(i.a)(h,2),j=O[0],S=O[1],w=Object(a.useState)(null),k=Object(i.a)(w,2),y=k[0],N=k[1];Object(a.useEffect)(function(){d().then(function(t){c(t)})},[]);var C=j?o:o.filter(function(t){return!0===t.important});return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:y}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return S(!j)}},"show ",j?"important":"all")),r.a.createElement("ul",null,C.map(function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=o.find(function(e){return e.id===t}),n=Object(u.a)({},e,{important:!e.important});v(t,n).then(function(e){c(o.map(function(n){return n.id!==t?n:e}))}).catch(function(n){N("Note: '".concat(e.content,"' was already removed from server")),setTimeout(function(){N(null)},5e3),c(o.filter(function(e){return e.id!==t}))})}(t.id)}})})),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:(new Date).toISOString(),important:Math.random()>.5,id:o.length+1};E(e).then(function(t){c(o.concat(t)),g("")})}},r.a.createElement("input",{value:b,onChange:function(t){console.log(t.target.value),g(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(f,null))};c.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.32589115.chunk.js.map