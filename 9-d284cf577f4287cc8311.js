(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1883:function(e,t,o){e.exports={"clinical-lowlight-theme":"DropdownButton-module__clinical-lowlight-theme___3zyjQ","orion-fusion-theme":"DropdownButton-module__orion-fusion-theme___Kf0nd","dropdown-button":"DropdownButton-module__dropdown-button___2m88U","is-block":"DropdownButton-module__is-block___15i_n","is-compact":"DropdownButton-module__is-compact___UHqJf","dropdown-button-text":"DropdownButton-module__dropdown-button-text___2lSzJ",neutral:"DropdownButton-module__neutral___3fvx_","split-button-primary":"DropdownButton-module__split-button-primary___1EeAl","split-button-caret":"DropdownButton-module__split-button-caret___2L4vg","is-active":"DropdownButton-module__is-active___HNXuk",disabled:"DropdownButton-module__disabled___1TeHK","caret-icon":"DropdownButton-module__caret-icon___UladO",emphasis:"DropdownButton-module__emphasis___1-vFO",ghost:"DropdownButton-module__ghost___1iMTt"}},910:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Item",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"SplitButton",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"SplitButtonVariants",{enumerable:!0,get:function(){return c.Variants}}),t.Variants=t.default=void 0;var n=b(o(0)),r=b(o(3)),i=b(o(5)),a=b(o(8)),u=f(o(21)),l=b(o(1335)),s=b(o(1883)),d=b(o(1336)),c=f(o(1020));function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!==y(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(o,r,i):o[r]=e[r]}return o.default=e,t&&t.set(e,o),o}function b(e){return e&&e.__esModule?e:{default:e}}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function w(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=g(e);if(t){var r=g(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return D(this,o)}}function D(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=i.default.bind(s.default);t.Variants={NEUTRAL:"neutral",EMPHASIS:"emphasis",GHOST:"ghost"};var B={children:r.default.node.isRequired,isBlock:r.default.bool,isCompact:r.default.bool,isDisabled:r.default.bool,label:r.default.string.isRequired,variant:r.default.oneOf(["neutral","emphasis","ghost"])},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,o,r,i=v(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).handleDropdownButtonClick=t.handleDropdownButtonClick.bind(O(t)),t.handleDropdownRequestClose=t.handleDropdownRequestClose.bind(O(t)),t.handleKeyDown=t.handleKeyDown.bind(O(t)),t.handleKeyUp=t.handleKeyUp.bind(O(t)),t.setButtonNode=t.setButtonNode.bind(O(t)),t.getButtonNode=t.getButtonNode.bind(O(t)),t.setListNode=t.setListNode.bind(O(t)),t.toggleDropDown=t.toggleDropDown.bind(O(t)),t.state={isOpen:!1,isActive:!1,openedViaKeyboard:!1},t}return t=a,(o=[{key:"setListNode",value:function(e){this.dropdownList=e}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"toggleDropDown",value:function(e){this.setState((function(e){return{isOpen:!e.isOpen}})),e.currentTarget.focus()}},{key:"handleDropdownButtonClick",value:function(e){this.state.isOpen&&this.setState({openedViaKeyboard:!1}),this.toggleDropDown(e)}},{key:"handleDropdownRequestClose",value:function(e){var t="function"==typeof e?e:void 0;this.setState({isOpen:!1,openedViaKeyboard:!1,isActive:!1},t)}},{key:"handleKeyDown",value:function(e){if(e.keyCode===u.KEY_SPACE||e.keyCode===u.KEY_RETURN)this.setState({isActive:!0,openedViaKeyboard:!0}),e.preventDefault();else if(e.keyCode===u.KEY_DOWN&&this.state.isOpen&&!this.state.openedViaKeyboard)this.dropdownList.querySelectorAll("[data-terra-dropdown-list-item]")[0].focus(),e.preventDefault();else if(e.keyCode===u.KEY_UP&&this.state.isOpen&&!this.state.openedViaKeyboard){var t=this.dropdownList.querySelectorAll("[data-terra-dropdown-list-item]");t[t.length-1].focus(),e.preventDefault()}else e.keyCode===u.KEY_TAB&&this.handleDropdownRequestClose()}},{key:"handleKeyUp",value:function(e){e.keyCode!==u.KEY_SPACE&&e.keyCode!==u.KEY_RETURN||(e.preventDefault(),this.setState({isActive:!1}),this.toggleDropDown(e))}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.isBlock,r=e.isCompact,i=e.isDisabled,a=e.label,u=e.variant,s=h(e,["children","isBlock","isCompact","isDisabled","label","variant"]),d=this.context,c=this.state,p=c.isOpen,f=c.isActive,b=c.openedViaKeyboard,y=k("dropdown-button",u,{"is-active":p||f},{"is-block":o},{"is-compact":r},{"ignore-react-onclickoutside":p},d.className);return n.default.createElement(l.default,_({},s,{items:t,isOpen:p,isBlock:o,isCompact:r,isDisabled:i,requestClose:this.handleDropdownRequestClose,openedViaKeyboard:b,buttonRef:this.getButtonNode,refCallback:this.setListNode}),n.default.createElement("button",{type:"button",className:y,onClick:this.handleDropdownButtonClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,disabled:i,tabIndex:i?"-1":void 0,"aria-disabled":i,"aria-expanded":p,"aria-haspopup":"menu",ref:this.setButtonNode},n.default.createElement("span",{className:k("dropdown-button-text")},a),n.default.createElement("span",{className:k("caret-icon")})))}}])&&w(t.prototype,o),r&&w(t,r),a}(n.default.Component);C.propTypes=B,C.defaultProps={isBlock:!1,isCompact:!1,isDisabled:!1,variant:"neutral"},C.contextType=a.default;var K=C;t.default=K}}]);
//# sourceMappingURL=9-d284cf577f4287cc8311.js.map