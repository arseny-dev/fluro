(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/Logo.6d490baa.png"},38:function(e,a,t){e.exports=t.p+"static/media/servicearea.3aa51973.png"},42:function(e,a,t){e.exports=t(82)},47:function(e,a,t){},48:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),r=t.n(c),s=(t(47),t(10)),i=t(11),m=t(13),o=t(12),u=t(14),d=t(32),h=t.n(d),f=(t(48),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={collapse:!1,isWideEnough:!1},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"toolbar"},l.a.createElement("nav",{className:"toolbar_navigation"},l.a.createElement("div",{className:"toolbar_logo"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:h.a,alt:"Fluro"}))),l.a.createElement("div",{className:"toolbar_navigation_items"},"Fluro Fire service and maintenance")))}}]),a}(l.a.Component)),b=t(3),E=(t(56),function(){return l.a.createElement("div",{className:"aboutpanel"},l.a.createElement("div",{className:"aboutfont"},"ABOUT US"),l.a.createElement(b.g,{className:"rowtop"},l.a.createElement(b.d,{md:"4"},l.a.createElement(b.e,{icon:"history",size:"3x",className:"red-text"}),l.a.createElement("h5",{className:"font-weight-bold my-4"},"+7 Yesrs"),l.a.createElement("p",{className:"mb-md-0 mb-5"},"Fluro fire has been in the fire industry for over 7 years")),l.a.createElement(b.d,{md:"4"},l.a.createElement(b.e,{fab:!0,icon:"first-order",size:"3x",className:"cyan-text"}),l.a.createElement("h5",{className:"font-weight-bold my-4"},"Goal"),l.a.createElement("p",{className:"mb-md-0 mb-5"},"Our goal is to help you achieve a safe work place environment")),l.a.createElement(b.d,{md:"4"},l.a.createElement(b.e,{far:!0,icon:"building",size:"3x",className:"orange-text"}),l.a.createElement("h5",{className:"font-weight-bold my-4"},"Maintenance"),l.a.createElement("p",{className:"mb-md-0 mb-5"},"Maintenance is also a service we can provide. A well maintained fire system in your building ensures a reduction of false alarms"))))}),g=(t(57),t(38)),v=t.n(g),p=function(){return l.a.createElement("div",{className:"mapstyle"},l.a.createElement("img",{src:v.a,alt:"ServiceArea"}))},N=t(21),y=t.n(N),j=t(39),x=t(40),w=t(15),O=t(41),C=t.n(O),k=(t(76),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).handleChange=function(a){e.setState(Object(x.a)({},a.target.name,a.target.value))},e.state={name:"",email:"",subject:"",message:""},e.handleChange=e.handleChange.bind(Object(w.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(w.a)(e)),e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleSubmit",value:function(){var e=Object(j.a)(y.a.mark(function e(a){var t,n,l,c,r,s,i;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t=this.state,n=t.name,l=t.email,c=t.subject,r=t.message,s=!0,""===n?(alert("Please input your full name!!!"),s=!1):""!==n&&(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(l)||(alert("Please input valid email!!!"),s=!1)),!0===s&&(i={email:l,name:n,subject:c,message:r},C.a.post("http://localhost:3030/api/form",i).then(function(){return alert("Email sent")}).catch(function(e){console.error(e)}));case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"contact_main"},l.a.createElement(b.b,null,l.a.createElement(b.c,null,l.a.createElement("div",{className:"form-header blue accent-1"},l.a.createElement("h5",{className:"mt-2"},l.a.createElement(b.e,{icon:"envelope"})," Request for service:")),l.a.createElement("div",{className:"md-form"},l.a.createElement(b.f,{icon:"user",label:"Your name",iconClass:"grey-text",name:"name",type:"text",id:"form-name",size:"sm",onChange:this.handleChange})),l.a.createElement("div",{className:"md-form"},l.a.createElement(b.f,{icon:"envelope",size:"sm",label:"Your email",iconClass:"grey-text",name:"email",type:"text",id:"form-email",onChange:this.handleChange})),l.a.createElement("div",{className:"md-form"},l.a.createElement(b.f,{icon:"tag",label:"Subject",iconClass:"grey-text",name:"subject",size:"sm",type:"text",id:"form-subject",onChange:this.handleChange})),l.a.createElement("div",{className:"md-form"},l.a.createElement(b.f,{icon:"pencil-alt",label:"Your Message",iconClass:"grey-text",size:"sm",name:"message",type:"textarea",id:"form-text",onChange:this.handleChange})),l.a.createElement("div",{className:"text-center"},l.a.createElement(b.a,{onClick:this.handleSubmit,color:"light-blue"},"Send")))))}}]),a}(n.Component)),z=(t(77),function(){return l.a.createElement("div",{className:"aboutpanel1"},l.a.createElement(b.g,{className:"setheight"},l.a.createElement(b.d,{xl:"3",className:"setheight"},l.a.createElement(p,null)),l.a.createElement(b.d,{lg:"12",xl:"6",className:"setheight"},l.a.createElement("div",{className:"setfont"},"Our goal is to help you achieve a safe work place environment")),l.a.createElement(b.d,{xl:"3",className:"setheight"},l.a.createElement(k,null))))}),S=(t(78),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"project"},l.a.createElement(f,null),l.a.createElement(z,null),l.a.createElement(E,null))}}]),a}(n.Component));var A=function(){return l.a.createElement(S,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(79),t(80),t(81);r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.dbda7dde.chunk.js.map