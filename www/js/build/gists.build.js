(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{535:function(n,e,t){},539:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t.n(a),s=t(55),c=t.n(s),o=t(3),r=t(432),l=t(70),d=(t(535),t(199)),p=t(17),u=t(5),g=t(192);var f=function(n){t.e(6).then(t.bind(null,550)).then((function(e){(0,e.default)(n)}))},v=t(15),m=t(200);e.default=function(n){var e=i()("span",{className:"icon search",attr:{action:"search"}}),t=i()("span",{className:"icon more_vert",attr:{action:"toggle-menu"}}),a=Object(l.a)("Gists"),s=o.a.credentials,h=null,b=g.a.GitHub(),w=b.getUser(),S=cordova.file.externalDataDirectory+".gists",k=Object(d.a)(c.a.render('<li action="create">\n  <span class="text">new gist</span>\n  <span class="icon add"></span>\n</li>\n<li action="reload">\n  <span class="text">{{reload}}</span>\n  <span class="icon refresh"></span>\n</li>',strings),{top:"8px",right:"8px",toggle:t,transformOrigin:"top right"});function y(e){var t=a.querySelector("#gists");t&&t.remove(),(h=n?n(e):e).map((function(n){var e=Object.values(n.files),t=e.length>0?e[0].filename:n.id;n.private=!n.public,n.name=t,n.files_count=e.length}));var s=i.a.parse(c.a.render('<div class="main list" empty-msg="{{msg}}" id="gists">{{#gists}}\n  <div class="list-item" action="gist" data-url="{{html_url}}" owner="{{owner.login}}" name="{{name}}" id="{{id}}">\n    <span class="octicon main-icon" {{#private}}private{{/private}}></span>\n    <div class="container">\n      <div class="text">\n        <span>{{name}}</span>\n      </div>\n      <small class="value">\n        <div class="group">\n          <span class="octicon octicon-file-code"></span>\n          <span class="text">{{files_count}}</span>\n        </div>\n        <div class="group">\n          <span class="octicon octicon-comment"></span>\n          <span class="text">{{comments}}</span>\n        </div>\n      </small>\n    </div>\n    <span class="icon open_in_browser" action="open"></span>\n  </div>\n  {{/gists}}</div>',{gists:h,msg:strings["empty folder message"]}));s.addEventListener("click",x),a.append(s),a.isConnected||(app.appendChild(a),actionStack.push({id:"repos",action:a.hide}),a.onhide=function(){actionStack.remove("repos")})}function x(n){var e,t,a,i=n.target,s=i.getAttribute("action");switch(["reload","create"].includes(s)&&k.hide(),s){case"gist":t=i.id,(a=gistRecord.get(t))?f(a):(u.a.loaderShow("",strings.loading+"..."),b.getGist(t).read().then((function(n){var e=n.data;a=gistRecord.add(e),f(a)})).catch((function(n){n&&u.a.alert(strings.error,n.toString())})).finally((function(){u.a.loaderHide()})));break;case"open":window.open(i.parentElement.getAttribute("data-url"),"_system");break;case"reload":_(),gistRecord.reset();break;case"share":break;case"create":e={id:parseInt(Math.random()*(new Date).getTime()).toString(16),files:{},public:!1},u.a.select("",["public","private"],{default:"priavate"}).then((function(n){return"public"===n&&(e.public=!0),u.a.prompt(strings["enter file name"],strings["new file"],"text",{match:v.a.FILE_NAME_REGEX,required:!0})})).then((function(n){var t={filename:n,content:""};e.files[n]=t;var a=gistRecord.add(e,!0);editorManager.addNewFile(n,{type:"gist",text:t.content,isUnsaved:!1,record:a,render:!0}),actionStack.pop(),actionStack.pop()}))}}function _(){u.a.loaderShow("Gists",strings.loading+"..."),w.listGists().then((function(n){var e=n.data,t=s.encrypt(JSON.stringify(e));p.a.writeFile(S,t,!0,!1).catch((function(n){plugins.toast.showShortBottom(strings.error),console.log(n)})),y(e)})).catch((function(n){n.response?Object(r.a)():console.log(n)})).finally((function(){u.a.loaderHide()}))}k.addEventListener("click",x),a.querySelector("header").append(e,t),e.onclick=function(){Object(m.a)(a.querySelector(".list"))},p.a.readFile(S).then((function(n){var e=new TextDecoder("utf-8"),t=s.decrypt(e.decode(n.data));y(JSON.parse(t))})).catch((function(n){u.a.loaderShow("GitHub",strings.loading+"..."),_()}))}}}]);