(window.webpackJsonp=window.webpackJsonp||[]).push([[460],{1007:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.restoreFocusStyles=t.removeFocusStyles=void 0;t.restoreFocusStyles=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","true")};t.removeFocusStyles=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","false")}},1008:function(e,t,l){e.exports={"clinical-lowlight-theme":"Switch-module__clinical-lowlight-theme___X4YX8","orion-fusion-theme":"Switch-module__orion-fusion-theme___24Q9g",switch:"Switch-module__switch___2RmTk","is-block":"Switch-module__is-block___vJ1Tw","label-container":"Switch-module__label-container___2vYDa","label-text":"Switch-module__label-text___2Zou1","status-label-text":"Switch-module__status-label-text___1X_MG",tray:"Switch-module__tray___1elMp",slider:"Switch-module__slider___21Gbx","is-selected":"Switch-module__is-selected___QdocY","is-disabled":"Switch-module__is-disabled___2WWX7","is-enabled":"Switch-module__is-enabled___2nZLU"}},2856:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(l(0)),a=o(l(958));function o(e){return e&&e.__esModule?e:{default:e}}var n=function(){return r.default.createElement(a.default,{id:"disabledSwitch",isChecked:!0,labelText:"Label",isDisabled:!0})};t.default=n},958:function(e,t,l){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=b();if(t&&t.has(e))return t.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var n=a?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(l,o,n):l[o]=e[o]}l.default=e,t&&t.set(e,l);return l}(l(0)),o=_(l(3)),n=_(l(11)),i=_(l(5)),s=_(l(8)),u=l(9),c=l(21),d=l(1007),f=_(l(1008));function _(e){return e&&e.__esModule?e:{default:e}}function b(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return b=function(){return e},e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)l=o[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=i.default.bind(f.default),p=Object.freeze({ON:a.default.createElement(u.FormattedMessage,{id:"Terra.switch.switchstatuslabel.on"}),OFF:a.default.createElement(u.FormattedMessage,{id:"Terra.switch.switchstatuslabel.off"})}),w={isChecked:o.default.bool,isDisabled:o.default.bool,labelText:o.default.string.isRequired,isBlock:o.default.bool,onChange:o.default.func},v={isChecked:!1,isDisabled:!1,isBlock:!1,onChange:void 0},S=function(e){var t,l=e.isChecked,r=e.isDisabled,o=e.isBlock,i=e.onChange,u=e.labelText,f=y(e,["isChecked","isDisabled","isBlock","onChange","labelText"]),_=a.default.useContext(s.default),b=(0,a.useRef)(),w=(0,a.useCallback)((function(e){b.current.focus(),i&&i(!l,e)}),[l,i]),v=l?p.ON:p.OFF,S=(0,n.default)(m("switch",{"is-enabled":!r},{"is-disabled":r},{"is-selected":l},{"is-block":o},_.className),f.className),O=m(["label-container",{"is-block":o}]);return t=r?{"aria-disabled":!0}:{tabIndex:"0",onBlur:function(){(0,d.restoreFocusStyles)(b.current)},onClick:w,onMouseDown:function(e){e.preventDefault(),(0,d.removeFocusStyles)(b.current)},onKeyDown:function(e){e.nativeEvent.keyCode!==c.KEY_RETURN&&e.nativeEvent.keyCode!==c.KEY_SPACE||(e.preventDefault(),(0,d.restoreFocusStyles)(b.current),i&&i(!l,e))}},a.default.createElement("div",h({},f,t,{"aria-label":u,"aria-checked":l,role:"switch",className:S,"data-terra-switch-show-focus-styles":!0,ref:b}),a.default.createElement("div",{"aria-hidden":!0,className:O},a.default.createElement("div",{className:m("label-text")},u),a.default.createElement("div",{className:m("status-label-text")},v)),a.default.createElement("div",{"aria-hidden":!0,className:m("tray")},a.default.createElement("div",{className:m("slider")})))};S.propTypes=w,S.defaultProps=v;var O=S;t.default=O}}]);
//# sourceMappingURL=460-324a95a41c8c8b678851.js.map