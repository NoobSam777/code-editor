(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{533:function(e,t,a){},549:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(55),s=a.n(i),o=a(3),c=a(70),p='{{#accounts}}\n<div class="list-item" action="ftp-account" name="{{name}}" security="{{security}}" mode="{{mode}}" path="{{path}}"\n  username="{{username}}" password="{{password}}" hostname="{{hostname}}" port="{{port}}" id="{{id}}">\n  <span class="icon person"></span>\n  <div class="container">\n    <div class="text">\n      <span>{{name}}</span>\n    </div>\n  </div>\n  <span class="icon edit" action="edit"></span>\n  <span class="icon clearclose" action="remove"></span>\n</div>\n{{/accounts}}\n<div class="list-item" action="add-account">\n  <span class="icon add"></span>\n  <div class="container">\n    <div class="text">\n      <span>Add FTP account</span>\n    </div>\n  </div>\n</div>',d=(a(533),a(200)),u=a(5),l=a(472),m=a(110);t.default=function(){var e=JSON.parse(localStorage.ftpaccounts||"[]"),t=r()("span",{className:"icon search",attr:{action:"search"}}),a=Object(c.a)("FTP Accounts"),n=o.a.credentials,i=r.a.parse(s.a.render('<div class="main list" id="ftp-accounts">{{{list}}}</div>',{list:s.a.render(p,{accounts:f()})}));function v(t,a,r,c,d,l,m,v){(function(e,t,a,n,r,i,s){return r=r||21,i=i||"ftp",s=s||"passive",u.a.multiPrompt("FTP login",[{id:"name",placeholder:"Name (optional)",type:"text",value:n||""},{id:"username",placeholder:"Username (optional)",type:"text",value:e},{id:"password",placeholder:"Password (optional)",type:"password",value:t},{id:"hostname",placeholder:"Hostname",type:"text",required:!0,value:a},["Security type: ",{id:"ftp",placeholder:"FTP",name:"type",type:"radio",value:"ftp"===i},{id:"ftps",placeholder:"FTPS",name:"type",type:"radio",value:"ftps"===i}],["Connection mode: ",{id:"active",placeholder:"Active",name:"mode",type:"radio",value:"active"===s},{id:"passive",placeholder:"Passive",name:"mode",type:"radio",value:"passive"===s}],{id:"port",placeholder:"Port (optional)",type:"number",value:r}])})(t,a,r,c,d,m,v).then((function(t){var a=t.username,r=t.password,c=t.hostname,d=t.port,u=(t.ftp,t.ftps),m=t.active,v=(t.passive,t.name);l&&y(l),Array.isArray(e)&&e.push({username:n.encrypt(a),password:n.encrypt(r),hostname:n.encrypt(c),port:n.encrypt(d),id:l||o.a.uuid(),security:u?"ftps":"ftp",mode:m?"active":"passive",name:v}),localStorage.setItem("ftpaccounts",JSON.stringify(e)),i.innerHTML=s.a.render(p,{accounts:f()})}))}function f(){var t=[];return Array.isArray(e)&&e.map((function(e){var a=e.name,r=e.username,i=e.password,s=e.hostname,o=e.port,c=e.id,p=e.security,d=e.mode;return r=n.decrypt(r),i=n.decrypt(i),s=n.decrypt(s),o=n.decrypt(o),t.push({username:r,password:i,hostname:s,port:o,name:a||"".concat(r,"@").concat(s),id:c,security:p,mode:d}),e})),t}function y(t){Array.isArray(e)&&(e=e.filter((function(e){return e.id!==t}))),i.innerHTML=s.a.render(p,{accounts:f()}),localStorage.setItem("ftpaccounts",JSON.stringify(e))}i.addEventListener("click",(function(e){var t=e.target;if(!(t instanceof HTMLElement))return;var a=t.getAttribute("action");if(!a)return;if("add-account"===a)v();else if("remove"===a){var n=t.parentElement;if(!n)return;var r=n.id;if(!r)return;y(r)}else if("ftp-account"===a||"edit"===a){"edit"===a&&(t=t.parentElement);var i=t.getAttribute("username"),s=t.getAttribute("password"),o=t.getAttribute("hostname"),c=t.getAttribute("port"),p=t.getAttribute("name"),d=t.getAttribute("security"),u=t.getAttribute("mode"),f=t.id;if("edit"===a)v(i,s,o,p,c,f,d,u);else{var h=Object(l.a)(i,s,o,c);Object(m.a)(h.origin,{saveState:!1,reloadOnResume:!1,name:p}),actionStack.pop()}}})),a.querySelector("header").append(t),t.onclick=function(){Object(d.a)(a.querySelector(".list"))},a.append(i),app.appendChild(a),actionStack.push({id:"repos",action:a.hide}),a.onhide=function(){actionStack.remove("repos")}}}}]);