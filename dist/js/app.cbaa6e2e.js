(function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],b=0,p=[];b<a.length;b++)u=a[b],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&p.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t){var n=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])(n)}const o={};o.render=c;var u=o,a={id:"element"},i=Object(r["d"])("span",null,"Element",-1);function l(e,t){return Object(r["m"])(),Object(r["c"])("div",a,[i])}const d={};d.render=l;var b=d,p=[{path:"element/:elementID",component:b,name:"Element"}],f={id:"subfeature"},s=Object(r["d"])("span",null,"Subfeature",-1);function O(e,t){var n=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])("div",f,[s,Object(r["d"])(n)])}const j={};j.render=O;var v=j,m=[{path:"subfeature/:subfeatureId",component:v,name:"Subfeature",children:p}],h={id:"feature"},y=Object(r["d"])("span",null,"Feature",-1);function w(e,t){var n=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])("div",h,[y,Object(r["d"])(n)])}const g={};g.render=w;var P=g,S=[{path:"feature/:featureId",component:P,name:"Feature",children:m}],x={id:"collection"},_=Object(r["d"])("span",null,"Collection",-1);function q(e,t){var n=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])("div",x,[_,Object(r["d"])(n)])}const I={};I.render=q;var M=I,k=[{path:"collection/:collectionId",component:M,name:"Collection",children:S}],E={id:"home"},C=Object(r["d"])("span",null,"VERDe",-1);function D(e,t){var n=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])("div",E,[C,Object(r["d"])(n)])}const F={};F.render=D;var J=F,T=[{path:"/",component:J,name:"Home",children:k}],H=n("6c02"),R=T,V=Object(H["a"])({history:Object(H["b"])("/"),routes:R}),z=V,A=n("5502"),B=Object(A["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["b"])(u).use(B).use(z).mount("#app")}});
//# sourceMappingURL=app.cbaa6e2e.js.map