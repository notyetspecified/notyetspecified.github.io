"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8866],{8866:(M,p,i)=>{i.r(p),i.d(p,{ion_toggle:()=>j});var m=i(5861),o=i(9725),u=i(9013),c=i(6216),b=i(2400),x=i(9951),d=i(4162),r=i(4459),l=i(1076),s=i(8653);i(1836),i(1848);const j=class{constructor(t){var a=this;(0,o.r)(this,t),this.ionChange=(0,o.d)(this,"ionChange",7),this.ionFocus=(0,o.d)(this,"ionFocus",7),this.ionBlur=(0,o.d)(this,"ionBlur",7),this.ionStyle=(0,o.d)(this,"ionStyle",7),this.inputId="ion-tg-"+B++,this.lastDrag=0,this.inheritedAttributes={},this.didLoad=!1,this.hasLoggedDeprecationWarning=!1,this.setupGesture=(0,m.Z)(function*(){const{toggleTrack:e}=a;e&&(a.gesture=(yield Promise.resolve().then(i.bind(i,6535))).createGesture({el:e,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>a.onStart(),onMove:n=>a.onMove(n),onEnd:n=>a.onEnd(n)}),a.disabledChanged())}),this.onClick=e=>{this.disabled||(e.preventDefault(),this.lastDrag+300<Date.now()&&this.toggleChecked())},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.getSwitchLabelIcon=(e,n)=>"md"===e?n?l.f:l.r:n?l.r:l.g,this.activated=!1,this.color=void 0,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.enableOnOffLabels=s.c.get("toggleOnOffLabels"),this.labelPlacement="start",this.legacy=void 0,this.justify="space-between",this.alignment="center"}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}toggleChecked(){const{checked:t,value:a}=this,e=!t;this.checked=e,this.ionChange.emit({checked:e,value:a})}connectedCallback(){var t=this;return(0,m.Z)(function*(){t.legacyFormController=(0,u.c)(t.el),t.didLoad&&t.setupGesture()})()}componentDidLoad(){this.setupGesture(),this.didLoad=!0}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle(),this.legacyFormController.hasLegacyControl()||(this.inheritedAttributes=Object.assign({},(0,c.i)(this.el)))}emitStyle(){this.legacyFormController.hasLegacyControl()&&this.ionStyle.emit({"interactive-disabled":this.disabled,legacy:!!this.legacy})}onStart(){this.activated=!0,this.setFocus()}onMove(t){I((0,d.i)(this.el),this.checked,t.deltaX,-10)&&(this.toggleChecked(),(0,x.c)())}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.focusEl&&this.focusEl.focus()}renderOnOffSwitchLabels(t,a){const e=this.getSwitchLabelIcon(t,a);return(0,o.h)("ion-icon",{class:{"toggle-switch-icon":!0,"toggle-switch-icon-checked":a},icon:e,"aria-hidden":"true"})}renderToggleControl(){const t=(0,s.b)(this),{enableOnOffLabels:a,checked:e}=this;return(0,o.h)("div",{class:"toggle-icon",part:"track",ref:n=>this.toggleTrack=n},a&&"ios"===t&&[this.renderOnOffSwitchLabels(t,!0),this.renderOnOffSwitchLabels(t,!1)],(0,o.h)("div",{class:"toggle-icon-wrapper"},(0,o.h)("div",{class:"toggle-inner",part:"handle"},a&&"md"===t&&this.renderOnOffSwitchLabels(t,e))))}get hasLabel(){return""!==this.el.textContent}render(){const{legacyFormController:t}=this;return t.hasLegacyControl()?this.renderLegacyToggle():this.renderToggle()}renderToggle(){const{activated:t,color:a,checked:e,disabled:n,el:g,justify:h,labelPlacement:v,inputId:y,name:_,alignment:E}=this,C=(0,s.b)(this),O=this.getValue(),D=(0,d.i)(g)?"rtl":"ltr";return(0,c.d)(!0,g,_,e?O:"",n),(0,o.h)(o.H,{onClick:this.onClick,class:(0,r.c)(a,{[C]:!0,"in-item":(0,r.h)("ion-item",g),"toggle-activated":t,"toggle-checked":e,"toggle-disabled":n,[`toggle-justify-${h}`]:!0,[`toggle-alignment-${E}`]:!0,[`toggle-label-placement-${v}`]:!0,[`toggle-${D}`]:!0})},(0,o.h)("label",{class:"toggle-wrapper"},(0,o.h)("input",Object.assign({type:"checkbox",role:"switch","aria-checked":`${e}`,checked:e,disabled:n,id:y,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:L=>this.focusEl=L},this.inheritedAttributes)),(0,o.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!this.hasLabel},part:"label"},(0,o.h)("slot",null)),(0,o.h)("div",{class:"native-wrapper"},this.renderToggleControl())))}renderLegacyToggle(){this.hasLoggedDeprecationWarning||((0,b.p)('ion-toggle now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-toggle>Email</ion-toggle>\nExample with aria-label: <ion-toggle aria-label="Email"></ion-toggle>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,b.p)('ion-toggle is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new toggle syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{activated:t,color:a,checked:e,disabled:n,el:g,inputId:h,name:v}=this,y=(0,s.b)(this),{label:_,labelId:E,labelText:C}=(0,c.e)(g,h),O=this.getValue(),D=(0,d.i)(g)?"rtl":"ltr";return(0,c.d)(!0,g,v,e?O:"",n),(0,o.h)(o.H,{onClick:this.onClick,"aria-labelledby":_?E:null,"aria-checked":`${e}`,"aria-hidden":n?"true":null,role:"switch",class:(0,r.c)(a,{[y]:!0,"in-item":(0,r.h)("ion-item",g),"toggle-activated":t,"toggle-checked":e,"toggle-disabled":n,"legacy-toggle":!0,interactive:!0,[`toggle-${D}`]:!0})},this.renderToggleControl(),(0,o.h)("label",{htmlFor:h},C),(0,o.h)("input",{type:"checkbox",role:"switch","aria-checked":`${e}`,disabled:n,id:h,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:L=>this.focusEl=L}))}get el(){return(0,o.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}},I=(t,a,e,n)=>a?!t&&n>e||t&&-n<e:!t&&-n<e||t&&n>e;let B=0;j.style={ios:":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{-ms-flex-align:start;align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{-ms-flex-align:center;align-items:center}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--track-background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms}:host(.legacy-toggle){width:51px;height:32px;contain:strict;overflow:hidden}.native-wrapper .toggle-icon{width:51px;height:32px;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 300ms, color 300ms;transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:6px;padding-bottom:5px}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:6px;padding-bottom:5px}",md:":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle:dir(rtl)) label{left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.toggle-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.toggle-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-alignment-start) .toggle-wrapper{-ms-flex-align:start;align-items:start}:host(.toggle-alignment-center) .toggle-wrapper{-ms-flex-align:center;align-items:center}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}:host(.toggle-label-placement-stacked) .toggle-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.toggle-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.toggle-label-placement-stacked.toggle-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).toggle-label-placement-stacked.toggle-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.toggle-label-placement-stacked.toggle-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--track-background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1)}:host(.legacy-toggle){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}.native-wrapper .toggle-icon{width:36px;height:14px}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{-webkit-transition:background-color 160ms;transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}:host(.toggle-disabled){opacity:0.38}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:12px;padding-bottom:12px;cursor:pointer}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:12px;padding-bottom:12px}"}},4459:(M,p,i)=>{i.d(p,{c:()=>u,g:()=>b,h:()=>o,o:()=>d});var m=i(5861);const o=(r,l)=>null!==l.closest(r),u=(r,l)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},l):l,b=r=>{const l={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(r).forEach(s=>l[s]=!0),l},x=/^[a-z][a-z0-9+\-.]*:/,d=function(){var r=(0,m.Z)(function*(l,s,w,k){if(null!=l&&"#"!==l[0]&&!x.test(l)){const f=document.querySelector("ion-router");if(f)return s?.preventDefault(),f.push(l,w,k)}return!1});return function(s,w,k,f){return r.apply(this,arguments)}}()}}]);