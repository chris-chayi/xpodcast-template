"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1709],{3545:(j,C,s)=>{s.r(C),s.d(C,{ion_range:()=>M});var P=s(5861),r=s(7205),R=s(5729),z=s(6465),l=s(3756),B=s(5062),E=s(2854);const M=class{constructor(e){var t=this;(0,r.r)(this,e),this.ionChange=(0,r.e)(this,"ionChange",7),this.ionStyle=(0,r.e)(this,"ionStyle",7),this.ionFocus=(0,r.e)(this,"ionFocus",7),this.ionBlur=(0,r.e)(this,"ionBlur",7),this.ionKnobMoveStart=(0,r.e)(this,"ionKnobMoveStart",7),this.ionKnobMoveEnd=(0,r.e)(this,"ionKnobMoveEnd",7),this.didLoad=!1,this.noUpdate=!1,this.hasFocus=!1,this.inheritedAttributes={},this.contentEl=null,this.initialContentScrollY=!0,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.pinFormatter=n=>Math.round(n),this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=n=>(0,l.l)(this.min,n,this.max),this.ensureValueInBounds=n=>this.dualKnobs?{lower:this.clampBounds(n.lower),upper:this.clampBounds(n.upper)}:this.clampBounds(n),this.setupGesture=(0,P.Z)(function*(){const n=t.rangeSlider;n&&(t.gesture=(yield Promise.resolve().then(s.bind(s,3139))).createGesture({el:n,gestureName:"range",gesturePriority:100,threshold:0,onStart:i=>t.onStart(i),onMove:i=>t.onMove(i),onEnd:i=>t.onEnd(i)}),t.gesture.enable(!t.disabled))}),this.handleKeyboard=(n,i)=>{const{ensureValueInBounds:a}=this;let o=this.step;o=o>0?o:1,o/=this.max-this.min,i||(o*=-1),"A"===n?this.ratioA=(0,l.l)(0,this.ratioA+o,1):this.ratioB=(0,l.l)(0,this.ratioB+o,1),this.ionKnobMoveStart.emit({value:a(this.value)}),this.updateValue(),this.ionKnobMoveEnd.emit({value:a(this.value)})},this.onBlur=()=>{this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},this.onFocus=()=>{this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())}}debounceChanged(){this.ionChange=(0,l.h)(this.ionChange,this.debounce)}minChanged(){this.noUpdate||this.updateRatio()}maxChanged(){this.noUpdate||this.updateRatio()}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled),this.emitStyle()}valueChanged(e){this.noUpdate||this.updateRatio(),e=this.ensureValueInBounds(e),this.ionChange.emit({value:e})}componentWillLoad(){this.rangeId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-r-"+I++,this.inheritedAttributes=(0,l.i)(this.el)}componentDidLoad(){this.setupGesture(),this.didLoad=!0}connectedCallback(){this.updateRatio(),this.debounceChanged(),this.disabledChanged(),this.didLoad&&this.setupGesture(),this.contentEl=(0,z.f)(this.el)}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}getValue(){const e=this.value||0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}onStart(e){const{contentEl:t}=this;t&&(this.initialContentScrollY=(0,z.d)(t));const n=this.rect=this.rangeSlider.getBoundingClientRect(),i=e.currentX;let a=(0,l.l)(0,(i-n.left)/n.width,1);(0,B.i)(this.el)&&(a=1-a),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-a)<Math.abs(this.ratioB-a)?"A":"B",this.setFocus(this.pressedKnob),this.update(i),this.ionKnobMoveStart.emit({value:this.ensureValueInBounds(this.value)})}onMove(e){this.update(e.currentX)}onEnd(e){const{contentEl:t,initialContentScrollY:n}=this;t&&(0,z.r)(t,n),this.update(e.currentX),this.pressedKnob=void 0,this.ionKnobMoveEnd.emit({value:this.ensureValueInBounds(this.value)})}update(e){const t=this.rect;let n=(0,l.l)(0,(e-t.left)/t.width,1);(0,B.i)(this.el)&&(n=1-n),this.snaps&&(n=p(A(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}get valA(){return A(this.ratioA,this.min,this.max,this.step)}get valB(){return A(this.ratioB,this.min,this.max,this.step)}get ratioLower(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}get ratioUpper(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}updateRatio(){const e=this.getValue(),{min:t,max:n}=this;this.dualKnobs?(this.ratioA=p(e.lower,t,n),this.ratioB=p(e.upper,t,n)):this.ratioA=p(e,t,n)}updateValue(){this.noUpdate=!0;const{valA:e,valB:t}=this;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.noUpdate=!1}setFocus(e){if(this.el.shadowRoot){const t=this.el.shadowRoot.querySelector("A"===e?".range-knob-a":".range-knob-b");t&&t.focus()}}render(){const{min:e,max:t,step:n,el:i,handleKeyboard:a,pressedKnob:o,disabled:g,pin:u,ratioLower:k,ratioUpper:m,inheritedAttributes:_,rangeId:f,pinFormatter:x}=this;let{labelText:b}=(0,l.d)(i,f);null==b&&(b=_["aria-label"]);const h=(0,R.b)(this),c=100*k+"%",L=100-100*m+"%",v=(0,B.i)(this.el),w=v?"right":"left",V=d=>({[w]:d[w]}),T={[w]:c,[v?"left":"right"]:L},S=[];if(this.snaps&&this.ticks)for(let d=e;d<=t;d+=n){const y=p(d,e,t),D={ratio:y,active:y>=k&&y<=m};D[w]=100*y+"%",S.push(D)}return(0,l.e)(!0,i,this.name,JSON.stringify(this.getValue()),g),(0,r.h)(r.H,{onFocusin:this.onFocus,onFocusout:this.onBlur,id:f,class:(0,E.c)(this.color,{[h]:!0,"in-item":(0,E.h)("ion-item",i),"range-disabled":g,"range-pressed":void 0!==o,"range-has-pin":u})},(0,r.h)("slot",{name:"start"}),(0,r.h)("div",{class:"range-slider",ref:d=>this.rangeSlider=d},S.map(d=>(0,r.h)("div",{style:V(d),role:"presentation",class:{"range-tick":!0,"range-tick-active":d.active},part:d.active?"tick-active":"tick"})),(0,r.h)("div",{class:"range-bar",role:"presentation",part:"bar"}),(0,r.h)("div",{class:"range-bar range-bar-active",role:"presentation",style:T,part:"bar-active"}),K(v,{knob:"A",pressed:"A"===o,value:this.valA,ratio:this.ratioA,pin:u,pinFormatter:x,disabled:g,handleKeyboard:a,min:e,max:t,labelText:b}),this.dualKnobs&&K(v,{knob:"B",pressed:"B"===o,value:this.valB,ratio:this.ratioB,pin:u,pinFormatter:x,disabled:g,handleKeyboard:a,min:e,max:t,labelText:b})),(0,r.h)("slot",{name:"end"}))}get el(){return(0,r.i)(this)}static get watchers(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},K=(e,{knob:t,value:n,ratio:i,min:a,max:o,disabled:g,pressed:u,pin:k,handleKeyboard:m,labelText:_,pinFormatter:f})=>{const x=e?"right":"left";return(0,r.h)("div",{onKeyDown:h=>{const c=h.key;"ArrowLeft"===c||"ArrowDown"===c?(m(t,!1),h.preventDefault(),h.stopPropagation()):("ArrowRight"===c||"ArrowUp"===c)&&(m(t,!0),h.preventDefault(),h.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===t,"range-knob-b":"B"===t,"range-knob-pressed":u,"range-knob-min":n===a,"range-knob-max":n===o},style:(()=>{const h={};return h[x]=100*i+"%",h})(),role:"slider",tabindex:g?-1:0,"aria-label":_,"aria-valuemin":a,"aria-valuemax":o,"aria-disabled":g?"true":null,"aria-valuenow":n},k&&(0,r.h)("div",{class:"range-pin",role:"presentation",part:"pin"},f(n)),(0,r.h)("div",{class:"range-knob",role:"presentation",part:"knob"}))},A=(e,t,n,i)=>{let a=(n-t)*e;return i>0&&(a=Math.round(a/i)*i+t),(0,l.l)(t,a,n)},p=(e,t,n)=>(0,l.l)(0,(e-t)/(n-t),1);let I=0;M.style={ios:":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#ffffff;--knob-box-shadow:0 3px 1px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.13), 0 0 0 1px rgba(0, 0, 0, 0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,  28px,  0) scale(0.01);transform:translate3d(0,  28px,  0) scale(0.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease, -webkit-transform 120ms ease;background:transparent;color:var(--ion-text-color, #000);font-size:12px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  0,  0) scale(1);transform:translate3d(0,  0,  0) scale(1)}:host(.range-disabled){opacity:0.5}",md:':host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset;right:unset;right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}[dir=rtl] .range-knob-handle,:host-context([dir=rtl]) .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset;right:unset;right:0}[dir=rtl] .range-bar,:host-context([dir=rtl]) .range-bar{left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset;right:unset;right:calc(50% - var(--knob-size) / 2)}[dir=rtl] .range-knob,:host-context([dir=rtl]) .range-knob{left:unset}:host(.range-pressed) .range-bar-active{will-change:left, right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.26);--bar-background-active:var(--ion-color-primary, #3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary, #3880ff);--pin-color:var(--ion-color-primary-contrast, #fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb), 0.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin::before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(0.67);transform:scale(0.67);-webkit-transition-duration:120ms;transition-duration:120ms;-webkit-transition-property:background-color, border, -webkit-transform;transition-property:background-color, border, -webkit-transform;transition-property:transform, background-color, border;transition-property:transform, background-color, border, -webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translate3d(0,  0,  0) scale(0.01);transform:translate3d(0,  0,  0) scale(0.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background 120ms ease, -webkit-transform 120ms ease;transition:background 120ms ease, -webkit-transform 120ms ease;transition:transform 120ms ease, background 120ms ease;transition:transform 120ms ease, background 120ms ease, -webkit-transform 120ms ease;background:var(--pin-background);color:var(--pin-color);text-align:center}.range-pin::before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background 120ms ease;transition:background 120ms ease;background:var(--pin-background);content:"";z-index:-1}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset;right:unset;right:50%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.range-pin::before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}[dir=rtl] .range-pin::before,:host-context([dir=rtl]) .range-pin::before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,  -24px,  0) scale(1);transform:translate3d(0,  -24px,  0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-bar,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250, #bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(0.55);transform:scale(0.55);outline:5px solid #fff;background-color:var(--ion-color-step-250, #bfbfbf)}'}}}]);