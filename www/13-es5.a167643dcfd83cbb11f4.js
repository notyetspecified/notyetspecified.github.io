!function(){function t(t,e,o){return(e=r(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},o=Object.prototype,n=o.hasOwnProperty,i=Object.defineProperty||function(t,e,o){t[e]=o.value},r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function l(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(z){l=function(t,e,o){return t[e]=o}}function u(t,e,o,n){var r=e&&e.prototype instanceof b?e:b,a=Object.create(r.prototype),c=new L(n||[]);return i(a,"_invoke",{value:w(t,o,c)}),a}function d(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(z){return{type:"throw",arg:z}}}t.wrap=u;var h={};function b(){}function p(){}function g(){}var f={};l(f,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(S([])));m&&m!==o&&n.call(m,a)&&(f=m);var y=g.prototype=b.prototype=Object.create(f);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;i(this,"_invoke",{value:function(i,r){function a(){return new e((function(o,a){!function o(i,r,a,c){var s=d(t[i],t,r);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}(i,r,o,a)}))}return o=o?o.then(a,a):a()}})}function w(t,e,o){var n="suspendedStart";return function(i,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw r;return{value:void 0,done:!0}}for(o.method=i,o.arg=r;;){var a=o.delegate;if(a){var c=j(a,o);if(c){if(c===h)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var s=d(t,e,o);if("normal"===s.type){if(n=o.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:o.done}}"throw"===s.type&&(n="completed",o.method="throw",o.arg=s.arg)}}}function j(t,e){var o=e.method,n=t.iterator[o];if(void 0===n)return e.delegate=null,"throw"===o&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==o&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+o+"' method")),h;var i=d(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var r=i.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=g,i(y,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:p,configurable:!0}),p.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},k(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,o,n,i,r){void 0===r&&(r=Promise);var a=new x(u(e,o,n,i),r);return t.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(y),l(y,s,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),o=[];for(var n in e)o.push(n);return o.reverse(),function t(){for(;o.length;){var n=o.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,n){return a.type="throw",a.arg=t,e.next=o,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],a=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),s=n.call(r,"finallyLoc");if(c&&s){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),E(o),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var i=n.arg;E(o)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:S(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,o,n,i,r,a){try{var c=t[r](a),s=c.value}catch(l){return void o(l)}c.done?e(s):Promise.resolve(s).then(n,i)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function c(t){o(a,i,r,c,s,"next",t)}function s(t){o(a,i,r,c,s,"throw",t)}c(void 0)}))}}function i(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,r(n.key),n)}}function r(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{dUtr:function(o,r,a){"use strict";a.r(r),a.d(r,"ion_action_sheet",(function(){return v}));var c=a("wEJo"),s=a("E/Mt"),l=a("Zcj0"),u=a("f9PN"),d=a("74mu"),h=a("Kfhc");a("qULd"),a("KF81"),a("y08P"),a("B4Jq"),a("W6o/");var b=function(t){var e=Object(h.a)(),o=Object(h.a)(),n=Object(h.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])},p=function(t){var e=Object(h.a)(),o=Object(h.a)(),n=Object(h.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])},g=function(t){var e=Object(h.a)(),o=Object(h.a)(),n=Object(h.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])},f=function(t){var e=Object(h.a)(),o=Object(h.a)(),n=Object(h.a)();return o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)"),e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])},v=function(){function o(t){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),Object(c.o)(this,t),this.didPresent=Object(c.g)(this,"ionActionSheetDidPresent",7),this.willPresent=Object(c.g)(this,"ionActionSheetWillPresent",7),this.willDismiss=Object(c.g)(this,"ionActionSheetWillDismiss",7),this.didDismiss=Object(c.g)(this,"ionActionSheetDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){e.dismiss(void 0,u.a)},this.dispatchCancelHandler=function(t){var o=t.detail.role;if(Object(u.j)(o)){var n=e.getButtons().find((function(t){return"cancel"===t.role}));e.callButtonHandler(n)}}}var r,a,h,v,y;return r=o,(a=[{key:"present",value:function(){return Object(u.e)(this,"actionSheetEnter",b,g)}},{key:"connectedCallback",value:function(){Object(u.f)(this.el)}},{key:"dismiss",value:function(t,e){return Object(u.g)(this,t,e,"actionSheetLeave",p,f)}},{key:"onDidDismiss",value:function(){return Object(u.h)(this.el,"ionActionSheetDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(u.h)(this.el,"ionActionSheetWillDismiss")}},{key:"buttonClick",value:(y=n(e().mark((function t(o){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=o.role,!Object(u.j)(n)){t.next=5;break}t.t0=this.dismiss(void 0,n),t.next=13;break;case 5:return t.next=7,this.callButtonHandler(o);case 7:if(!t.sent){t.next=11;break}t.t1=this.dismiss(void 0,o.role),t.next=12;break;case 11:t.t1=Promise.resolve();case 12:t.t0=t.t1;case 13:return t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"callButtonHandler",value:(v=n(e().mark((function t(o){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=!o,t.t0){t.next=7;break}return t.t1=!1,t.next=5,Object(u.n)(o.handler);case 5:t.t2=t.sent,t.t0=t.t1!==t.t2;case 7:return t.abrupt("return",t.t0);case 8:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)})},{key:"getButtons",value:function(){return this.buttons.map((function(t){return"string"==typeof t?{text:t}:t}))}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentDidLoad",value:function(){var t=this,e=this.groupEl,o=this.wrapperEl;!this.gesture&&"md"!==Object(s.b)(this)&&o&&e&&Object(c.h)((function(){e.scrollHeight>e.clientHeight||(t.gesture=Object(l.a)(o,(function(t){return t.classList.contains("action-sheet-button")})),t.gesture.enable(!0))}))}},{key:"render",value:function(){var e=this,o=this.htmlAttributes,n=Object(s.b)(this),i=this.getButtons(),r=i.find((function(t){return"cancel"===t.role})),a=i.filter((function(t){return"cancel"!==t.role}));return Object(c.j)(c.c,Object.assign({role:"dialog","aria-modal":"true",tabindex:"-1"},o,{style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign(t({},n,!0),Object(d.b)(this.cssClass)),{"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),Object(c.j)("ion-backdrop",{tappable:this.backdropDismiss}),Object(c.j)("div",{tabindex:"0"}),Object(c.j)("div",{class:"action-sheet-wrapper ion-overlay-wrapper",role:"dialog",ref:function(t){return e.wrapperEl=t}},Object(c.j)("div",{class:"action-sheet-container"},Object(c.j)("div",{class:"action-sheet-group",ref:function(t){return e.groupEl=t}},void 0!==this.header&&Object(c.j)("div",{class:{"action-sheet-title":!0,"action-sheet-has-sub-title":void 0!==this.subHeader}},this.header,this.subHeader&&Object(c.j)("div",{class:"action-sheet-sub-title"},this.subHeader)),a.map((function(t){return Object(c.j)("button",{type:"button",class:m(t),onClick:function(){return e.buttonClick(t)}},Object(c.j)("span",{class:"action-sheet-button-inner"},t.icon&&Object(c.j)("ion-icon",{icon:t.icon,lazy:!1,class:"action-sheet-icon"}),t.text),"md"===n&&Object(c.j)("ion-ripple-effect",null))}))),r&&Object(c.j)("div",{class:"action-sheet-group action-sheet-group-cancel"},Object(c.j)("button",{type:"button",class:m(r),onClick:function(){return e.buttonClick(r)}},Object(c.j)("span",{class:"action-sheet-button-inner"},r.icon&&Object(c.j)("ion-icon",{icon:r.icon,lazy:!1,class:"action-sheet-icon"}),r.text),"md"===n&&Object(c.j)("ion-ripple-effect",null))))),Object(c.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(c.k)(this)}}])&&i(r.prototype,a),h&&i(r,h),Object.defineProperty(r,"prototype",{writable:!1}),o}(),m=function(e){return Object.assign(t({"action-sheet-button":!0,"ion-activatable":!0,"ion-focusable":!0},"action-sheet-"+e.role,void 0!==e.role),Object(d.b)(e.cssClass))};v.style={ios:'.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0);-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.3em;font-size:28px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}',md:'.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0);-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:0}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}'}}}])}();