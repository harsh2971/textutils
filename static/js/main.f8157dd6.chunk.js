(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(15),a(1));a(16);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/"},"About"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){console.log("Onchange!"),c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"6"})),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to upper case","success")}},"Convert to uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to lower case","success")}},"Convert to lowercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){c(""),e.showAlert("Cleared","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("copied to clipboard","success")}},"Copy Text"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=r.split(/[ ]+/);c(e.join(" "))}},"Remove extraspaces")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"Your text summary "),l.a.createElement("p",null," Your text has ",0===r.trim().length?0:r.split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null," ",.008*r.split(" ").length," minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter text to preview")))}s.defaultProps={title:"set title here"};var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},e.alert.type,": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"Textutils2",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",h("Dark Mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",h("Light Mode has been enabled","success"))}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{heading:"Enter text here",showAlert:h,mode:a})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},6:function(e,t,a){e.exports=a(17)}},[[6,1,2]]]);
//# sourceMappingURL=main.f8157dd6.chunk.js.map