(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{538:function(n,e,t){},545:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));var a=t(1),i=t.n(a),o=t(70),r=t(192),c=t(5);t(538);function d(n,e){var t=Object(o.a)(n),a=r.a.GitHub(),d=a.getRepo(e,n);c.a.loaderShow(n,strings.loading+"..."),d.getReadme("master",!1).then((function(n){if("OK"===n.statusText){var e=n.data,t=e.content;return"base64"===e.encoding&&(t=atob(t)),a.getMarkdown().render({text:t})}return Promise.reject(n)})).then((function(n){if("OK"===n.statusText){var e=n.data;t.append(i()("div",{id:"info-page",className:"main",innerHTML:e}))}else t.hide()})).catch((function(n){c.a.alert(strings.error,n.message),console.log(n),t.hide()})).finally((function(){c.a.loaderHide()})),actionStack.push({id:"info",action:t.hide}),t.onhide=function(){actionStack.remove("info")},app.appendChild(t)}}}]);