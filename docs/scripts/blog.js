!function(e){function t(t){for(var r,c,i=t[0],l=t[1],a=t[2],s=0,p=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);p.length;)p.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var f=l;u.push([6,0]),n()}({31:function(e,t){},6:function(e,t,n){"use strict";n(0),n(1),n(7),n(8),n(12),n(31)},7:function(e,t,n){"use strict";var r=document.querySelector(".input-block__dandruff"),o=document.querySelector(".input-block__btn"),u=document.querySelectorAll(".input-animation"),c=document.querySelector(".input-block__input");r&&(r.addEventListener("click",(function(){u.forEach((function(e){e.classList.add("open")}))})),o.addEventListener("click",(function(){u.forEach((function(e){e.classList.remove("open")}))})),o.addEventListener("click",(function(){c.value=""})))},8:function(e,t,n){"use strict";for(var r=document.querySelectorAll(".publication-footer__like-btn"),o=document.querySelectorAll(".publication-footer__likes-count"),u=document.querySelectorAll(".publication-footer__svg"),c=function(e){r[e].addEventListener("click",(function(){u[e].classList.toggle("like"),o[e].classList.toggle("like")}))},i=0;i<r.length;i++)c(i)}});