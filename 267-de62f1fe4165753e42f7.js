(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1128:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(0),o=t.n(r),a=t(863),l=t.n(a),i=function(e){var n=e.url;return o.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-overlay",name:"terra-overlay",version:"3.55.0",url:n})}},1559:function(e,n,t){e.exports={"overlay-container":"OverlayDocCommon-module__overlay-container___36iLI"}},2136:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t(0)),o=u(t(196)),a=u(t(194)),l=u(t(53)),i=u(t(5)),c=u(t(1559));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=v(e);if(n){var o=v(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y(this,t)}}function y(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?f(e):n}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=i.default.bind(c.default),b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(u,e);var n,t,i,c=d(u);function u(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this)).state={show:!1},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(f(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(f(e)),e.handleOnRequestESC=e.handleOnRequestESC.bind(f(e)),e}return n=u,(t=[{key:"handleTriggerOverlay",value:function(){this.setState({show:!0,relative:!0})}},{key:"handleTriggerFullScreenOverlay",value:function(){this.setState({show:!0,relative:!1})}},{key:"handleOnRequestESC",value:function(){this.setState({show:!1})}},{key:"addOverlay",value:function(){return r.default.createElement(o.default,{isOpen:this.state.show,isRelativeToContainer:this.state.relative,onRequestClose:this.handleOnRequestESC,zIndex:"6000"},r.default.createElement("p",null,"Close by clicking the overlay or pressing the ESC key."))}},{key:"render",value:function(){return r.default.createElement(a.default,{className:O("overlay-container"),overlay:this.addOverlay()},r.default.createElement(l.default,{text:"Trigger Container Overlay",onClick:this.handleTriggerOverlay}),r.default.createElement(l.default,{text:"Trigger FullScreen Overlay",onClick:this.handleTriggerFullScreenOverlay}))}}])&&p(n.prototype,t),i&&p(n,i),u}(r.default.Component);n.default=b},2137:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t(0)),o=u(t(300)),a=u(t(194)),l=u(t(53)),i=u(t(5)),c=u(t(1559));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=v(e);if(n){var o=v(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return y(this,t)}}function y(e,n){return!n||"object"!==s(n)&&"function"!=typeof n?f(e):n}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=i.default.bind(c.default),b=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(u,e);var n,t,i,c=d(u);function u(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(e=c.call(this)).state={show:!1},e.handleTriggerOverlay=e.handleTriggerOverlay.bind(f(e)),e.handleTriggerFullScreenOverlay=e.handleTriggerFullScreenOverlay.bind(f(e)),e}return n=u,(t=[{key:"handleTriggerOverlay",value:function(){var e=this;this.setState({show:!0,isRelativeToContainer:!0}),setTimeout((function(){e.setState({show:!1})}),5e3)}},{key:"handleTriggerFullScreenOverlay",value:function(){var e=this;this.setState({show:!0,isRelativeToContainer:!1}),setTimeout((function(){e.setState({show:!1})}),5e3)}},{key:"addLoadingOverlay",value:function(){return r.default.createElement(o.default,{isOpen:this.state.show,isAnimated:!0,isRelativeToContainer:this.state.isRelativeToContainer,zIndex:"6000"})}},{key:"render",value:function(){return r.default.createElement(a.default,{className:O("overlay-container"),overlay:this.addLoadingOverlay()},r.default.createElement(l.default,{text:"Trigger Container Overlay",onClick:this.handleTriggerOverlay}),r.default.createElement(l.default,{text:"Trigger FullScreen Overlay",onClick:this.handleTriggerFullScreenOverlay}))}}])&&p(n.prototype,t),i&&p(n,i),u}(r.default.Component);n.default=b},2954:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return B}));var r=t(0),o=t.n(r),a=t(287),l=t(1128),i=t(2136),c=t.n(i);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p={};function m(e){var n=e.components,t=s(e,["components"]);return Object(a.mdx)("wrapper",u({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Overlay from 'terra-overlay';\nimport OverlayContainer from 'terra-overlay/lib/OverlayContainer';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport styles from './OverlayDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass OverlayExample extends React.Component {\n  constructor() {\n    super();\n\n    this.state = { show: false };\n    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);\n    this.handleTriggerFullScreenOverlay = this.handleTriggerFullScreenOverlay.bind(this);\n    this.handleOnRequestESC = this.handleOnRequestESC.bind(this);\n  }\n\n  handleTriggerOverlay() {\n    this.setState({ show: true, relative: true });\n  }\n\n  handleTriggerFullScreenOverlay() {\n    this.setState({ show: true, relative: false });\n  }\n\n  handleOnRequestESC() {\n    this.setState({ show: false });\n  }\n\n  addOverlay() {\n    return (\n      <Overlay isOpen={this.state.show} isRelativeToContainer={this.state.relative} onRequestClose={this.handleOnRequestESC} zIndex=\"6000\">\n        <p>Close by clicking the overlay or pressing the ESC key.</p>\n      </Overlay>\n    );\n  }\n\n  render() {\n    return (\n      <OverlayContainer className={cx('overlay-container')} overlay={this.addOverlay()}>\n        <Button text=\"Trigger Container Overlay\" onClick={this.handleTriggerOverlay} />\n        <Button text=\"Trigger FullScreen Overlay\" onClick={this.handleTriggerFullScreenOverlay} />\n      </OverlayContainer>\n    );\n  }\n}\n\nexport default OverlayExample;\n\n")))}m.isMDXComponent=!0;var d=t(862),y=t.n(d);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function v(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var O={};function b(e){var n=e.components,t=v(e,["components"]);return Object(a.mdx)("wrapper",f({},O,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",f({parentName:"pre"},{className:"language-scss"}),":local {\n  .overlay-container {\n    height: 100px;\n    width: 100%;\n  }\n}\n\n")))}b.isMDXComponent=!0;var h=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:n||"Overlay Example",description:t,example:o.a.createElement(c.a,null),exampleCssSrc:o.a.createElement(b,null),exampleSrc:o.a.createElement(m,null),isExpanded:r})},x=t(2137),g=t.n(x);function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function w(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var T={};function C(e){var n=e.components,t=w(e,["components"]);return Object(a.mdx)("wrapper",j({},T,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",j({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';\nimport OverlayContainer from 'terra-overlay/lib/OverlayContainer';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport styles from './OverlayDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass OverlayExample extends React.Component {\n  constructor() {\n    super();\n\n    this.state = { show: false };\n    this.handleTriggerOverlay = this.handleTriggerOverlay.bind(this);\n    this.handleTriggerFullScreenOverlay = this.handleTriggerFullScreenOverlay.bind(this);\n  }\n\n  handleTriggerOverlay() {\n    this.setState({ show: true, isRelativeToContainer: true });\n\n    setTimeout(() => {\n      this.setState({ show: false });\n    }, 5000);\n  }\n\n  handleTriggerFullScreenOverlay() {\n    this.setState({ show: true, isRelativeToContainer: false });\n\n    setTimeout(() => {\n      this.setState({ show: false });\n    }, 5000);\n  }\n\n  addLoadingOverlay() {\n    return (\n      <LoadingOverlay isOpen={this.state.show} isAnimated isRelativeToContainer={this.state.isRelativeToContainer} zIndex=\"6000\" />\n    );\n  }\n\n  render() {\n    return (\n      <OverlayContainer className={cx('overlay-container')} overlay={this.addLoadingOverlay()}>\n        <Button text=\"Trigger Container Overlay\" onClick={this.handleTriggerOverlay} />\n        <Button text=\"Trigger FullScreen Overlay\" onClick={this.handleTriggerFullScreenOverlay} />\n      </OverlayContainer>\n    );\n  }\n}\n\nexport default OverlayExample;\n\n")))}C.isMDXComponent=!0;var M=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(y.a,{title:n||"Loading Overlay Example",description:t,example:o.a.createElement(g.a,null),exampleCssSrc:o.a.createElement(b,null),exampleSrc:o.a.createElement(C,null),isExpanded:r})},D=t(865),S=t.n(D);function X(){return(X=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function L(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var E=function(){return Object(a.mdx)(S.a,{rows:[{name:"children",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"null",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The content to be displayed within the overlay."))}return n.isMDXComponent=!0,n({})}},{name:"isOpen",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Indicates if the overlay is open."))}return n.isMDXComponent=!0,n({})}},{name:"backgroundStyle",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",X({parentName:"pre"},{className:"language-json"}),'[\n "light",\n "dark",\n "clear"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'light'",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear'."))}return n.isMDXComponent=!0,n({})}},{name:"isScrollable",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Indicates if the overlay content is scrollable."))}return n.isMDXComponent=!0,n({})}},{name:"onRequestClose",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"undefined",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback triggered on overlay click or ESC key. Setting this enables close behavior."))}return n.isMDXComponent=!0,n({})}},{name:"isRelativeToContainer",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Indicates if the overlay is relative to the triggering container."))}return n.isMDXComponent=!0,n({})}},{name:"rootSelector",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'#root'",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the overlay when it is opened in a portal."))}return n.isMDXComponent=!0,n({})}},{name:"zIndex",type:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",X({parentName:"pre"},{className:"language-json"}),'[\n "100",\n "6000",\n "7000",\n "8000",\n "9000"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'100'",description:function(){var e={};function n(n){var t=n.components,r=L(n,["components"]);return Object(a.mdx)("wrapper",X({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are '100', '6000', '7000', '8000', or '9000'."))}return n.isMDXComponent=!0,n({})}}]})};function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function k(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var P=function(){return Object(a.mdx)(S.a,{rows:[{name:"overlay",type:function(){var e={};function n(n){var t=n.components,r=k(n,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"null",description:function(){var e={};function n(n){var t=n.components,r=k(n,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The overlay and the content to be displayed within the overlay."))}return n.isMDXComponent=!0,n({})}},{name:"children",type:function(){var e={};function n(n){var t=n.components,r=k(n,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"null",description:function(){var e={};function n(n){var t=n.components,r=k(n,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The elements that overlay should hide when overlay isOpen.\nelements which are not included in overlay will be wrapped within children for better use of accessibility."))}return n.isMDXComponent=!0,n({})}}]})};function R(){return(R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var q=function(){return Object(a.mdx)(S.a,{rows:[{name:"backgroundStyle",type:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",R({parentName:"pre"},{className:"language-json"}),'[\n "light",\n "dark",\n "clear"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"BackgroundStyles.LIGHT",description:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The visual theme to be applied to the overlay background. Accepts 'light', 'dark', and 'clear'."))}return n.isMDXComponent=!0,n({})}},{name:"isAnimated",type:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Indicates if the icon spinner should be animated."))}return n.isMDXComponent=!0,n({})}},{name:"isOpen",type:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Indicates if the overlay is open."))}return n.isMDXComponent=!0,n({})}},{name:"isRelativeToContainer",type:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"false",description:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Indicates if the overlay is relative to the triggering container."))}return n.isMDXComponent=!0,n({})}},{name:"message",type:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The message to be displayed within the overlay."))}return n.isMDXComponent=!0,n({})}},{name:"rootSelector",type:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"'#root'",description:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the overlay when it is opened in a portal."))}return n.isMDXComponent=!0,n({})}},{name:"zIndex",type:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",R({parentName:"pre"},{className:"language-json"}),'[\n "100",\n "6000",\n "7000",\n "8000",\n "9000"\n]\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,r=_(n,["components"]);return Object(a.mdx)("wrapper",R({},e,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are '100', '6000', '7000', '8000', or '9000'."))}return n.isMDXComponent=!0,n({})}}]})};function I(){return(I=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function F(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var V={};function B(e){var n=e.components,t=F(e,["components"]);return Object(a.mdx)("wrapper",I({},V,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-overlay"},"Terra Overlay"),Object(a.mdx)("p",null,"The Overlay component is a component that creates an semi-transparent overlay screen that blocks interactions with the elements underneath the display. There are two types of overlays: fullscreen and relative to its container."),Object(a.mdx)("p",null,"When creating as an overlay relative to its container, place the overlay component within the overlay wrapper and the element(s) which should be hidden by overlay within the content(children) wrapper of Overlay Container subcomponent."),Object(a.mdx)("p",null,"A Loading Overlay is a specialized Overlay subcomponent that displays an overlay with a spinner icon and loading message."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",I({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-overlay"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",I({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",I({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"react-intl"),Object(a.mdx)("td",I({parentName:"tr"},{align:null}),"^2.8.0")))),Object(a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),Object(a.mdx)("p",null,"The Overlay component must be composed inside the ",Object(a.mdx)("a",I({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"}),"Base")," component with a locale in order for it to load the correct translation strings."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("h1",{id:"overlay"},"Overlay"),Object(a.mdx)("pre",null,Object(a.mdx)("code",I({parentName:"pre"},{className:"language-jsx"}),"import Overlay from 'terra-overlay';\nimport OverlayContainer from 'terra-overlay/lib/OverlayContainer';\n")),Object(a.mdx)("h1",{id:"loadingoverlay"},"LoadingOverlay"),Object(a.mdx)("pre",null,Object(a.mdx)("code",I({parentName:"pre"},{className:"language-jsx"}),"import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';\nimport OverlayContainer from 'terra-overlay/lib/OverlayContainer';\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(h,{title:"Overlay",mdxType:"OverlayExample"}),Object(a.mdx)(M,{title:"Loading Overlay",mdxType:"LoadingOverlayExample"}),Object(a.mdx)("h2",{id:"overlay-props"},"Overlay Props"),Object(a.mdx)(E,{mdxType:"OverlayPropsTable"}),Object(a.mdx)("h2",{id:"overlay-container-props"},"Overlay Container Props"),Object(a.mdx)(P,{mdxType:"OverlayContainerPropsTable"}),Object(a.mdx)("h2",{id:"loading-overlay-props"},"Loading Overlay Props"),Object(a.mdx)(q,{mdxType:"LoadingOverlayPropsTable"}))}B.isMDXComponent=!0},866:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(22));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=function(e){var n=l({},e);return r.default.createElement(o.default,n,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;n.default=c}}]);
//# sourceMappingURL=267-de62f1fe4165753e42f7.js.map