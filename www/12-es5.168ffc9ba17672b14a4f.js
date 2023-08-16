!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new O(r||[]);return o(a,"_invoke",{value:x(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}e.wrap=l;var d={};function h(){}function p(){}function v(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==n&&r.call(g,a)&&(y=g);var w=v.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;o(this,"_invoke",{value:function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}})}function x(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:p,configurable:!0}),p.displayName=s(v,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(E.prototype),s(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function e(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function n(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{aYbf:function(e,r,o){"use strict";o.r(r),o.d(r,"startInputShims",(function(){return h}));var i=o("W6o/"),a=new WeakMap,c=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;a.has(t)!==n&&(n?s(t,e,r):l(t,e))},u=function(t){return t===t.getRootNode().activeElement},s=function(t,e,n){var r=e.parentNode,o=e.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),a.set(t,o);var i="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d(".concat(i,"px,").concat(n,"px,0) scale(0)")},l=function(t,e){var n=a.get(t);n&&(a.delete(t),n.remove()),t.style.pointerEvents="",e.style.transform=""},f="input, textarea, [no-blur], [contenteditable]",d=function(t,e){if("INPUT"===t.tagName&&!(t.parentElement&&"ION-INPUT"===t.parentElement.tagName||t.parentElement&&t.parentElement.parentElement&&"ION-SEARCHBAR"===t.parentElement.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var r=n.$ionPaddingTimer;r&&clearTimeout(r),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},h=function(e){var r=document,o=e.getNumber("keyboardHeight",290),a=e.getBoolean("scrollAssist",!0),s=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),h=e.getBoolean("scrollPadding",!0),p=Array.from(r.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,y=new WeakMap,m=function(){var e=n(t().mark((function e(r){var l,f,d,h,p,m;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(t){return Object(i.c)(r,t)}));case 2:l=r.shadowRoot||r,f=l.querySelector("input")||l.querySelector("textarea"),d=r.closest("ion-content"),h=d?null:r.closest("ion-footer"),f&&(d&&s&&!v.has(r)&&(p=function(t,e,n){if(!n||!e)return function(){};var r=function(n){u(e)&&c(t,e,n)},o=function(){return c(t,e,!1)},a=function(){return r(!0)},s=function(){return r(!1)};return Object(i.a)(n,"ionScrollStart",a),Object(i.a)(n,"ionScrollEnd",s),e.addEventListener("blur",o),function(){Object(i.b)(n,"ionScrollStart",a),Object(i.b)(n,"ionScrollEnd",s),e.addEventListener("ionBlur",o)}}(r,f,d),v.set(r,p)),(d||h)&&a&&!y.has(r)&&(m=function(e,r,o,a,s){var l,f=function(t){l=Object(i.p)(t)},d=function(f){if(l){var d,h=Object(i.p)(f);(function(t,e,n){if(e&&n){var r=e.x-n.x,o=e.y-n.y;return r*r+o*o>36}return!1})(0,l,h)||u(r)||(f.stopPropagation(),(d=n(t().mark((function e(r,o,a,u,s){var l,f,d,h,p;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a||u){e.next=2;break}return e.abrupt("return");case 2:if(l=function(t,e,n){return function(t,e,n,r){var o=t.top,i=t.bottom,a=e.top,c=a+15,u=.75*Math.min(e.bottom,r-n)-i,s=c-o,l=Math.round(u<0?-u:s>0?-s:0),f=Math.min(l,o-a),d=Math.abs(f);return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,d/.3)),scrollPadding:n,inputSafeY:4-(o-c)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,t.ownerDocument.defaultView.innerHeight)}(r,a||u,s),!(a&&Math.abs(l.scrollAmount)<4)){e.next=7;break}o.focus(),e.next=16;break;case 7:if(c(r,o,!0,l.inputSafeY),o.focus(),Object(i.r)((function(){return r.click()})),"undefined"==typeof window){e.next=16;break}if(d=function(){var e=n(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",d),t.t0=a,!t.t0){t.next=7;break}return t.next=7,a.scrollByPoint(0,l.scrollAmount,l.scrollDuration);case 7:c(r,o,!1,l.inputSafeY),o.focus();case 9:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function t(){window.removeEventListener("ionKeyboardDidShow",t),window.addEventListener("ionKeyboardDidShow",d)},!a){e.next=15;break}return e.next=12,a.getScrollElement();case 12:if(p=e.sent,!(l.scrollAmount>p.scrollHeight-p.clientHeight-p.scrollTop)){e.next=15;break}return e.abrupt("return",("password"===o.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",d),void(f=setTimeout(d,1e3))));case 15:d();case 16:case"end":return e.stop()}}),e)}))),function(t,e,n,r,o){return d.apply(this,arguments)})(e,r,o,a,s))}};return e.addEventListener("touchstart",f,!0),e.addEventListener("touchend",d,!0),function(){e.removeEventListener("touchstart",f,!0),e.removeEventListener("touchend",d,!0)}}(r,f,d,h,o),y.set(r,m)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();l&&function(){var t=!0,e=!1,n=document;Object(i.a)(n,"ionScrollStart",(function(){e=!0})),n.addEventListener("focusin",(function(){t=!0}),!0),n.addEventListener("touchend",(function(r){if(e)e=!1;else{var o=n.activeElement;if(o&&!o.matches(f)){var i=r.target;i!==o&&(i.matches(f)||i.closest(f)||(t=!1,setTimeout((function(){t||o.blur()}),50)))}}}),!1)}(),h&&function(t){var e=document;e.addEventListener("focusin",(function(e){d(e.target,t)})),e.addEventListener("focusout",(function(t){d(t.target,0)}))}(o);for(var g=0,w=p;g<w.length;g++){var b=w[g];m(b)}r.addEventListener("ionInputDidLoad",(function(t){m(t.detail)})),r.addEventListener("ionInputDidUnload",(function(t){!function(t){if(s){var e=v.get(t);e&&e(),v.delete(t)}if(a){var n=y.get(t);n&&n(),y.delete(t)}}(t.detail)}))}}}])}();