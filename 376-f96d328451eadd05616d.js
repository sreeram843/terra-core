(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{1042:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(0),n=r.n(a),o=r(863),d=r.n(o),l=function(e){var t=e.url;return n.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-input",name:"terra-form-input",version:"4.2.0",url:t})}},2396:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));r(0);var a=r(287),n=r(1042);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l={};function i(e){var t=e.components,r=d(e,["components"]);return Object(a.mdx)("wrapper",o({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(n.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-input-upgrade-guide"},"Terra Form Input Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(a.mdx)("h3",{id:"props"},"Props"),Object(a.mdx)("h4",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Removed ",Object(a.mdx)("inlineCode",{parentName:"li"},"placeholder")," prop from ",Object(a.mdx)("inlineCode",{parentName:"li"},"Input")," and  ",Object(a.mdx)("inlineCode",{parentName:"li"},"InputField"),".")),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"removed-1"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-font-style"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-disabled-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-disabled-font-style")),Object(a.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),Object(a.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Input and InputField must be reviewed and updated to ensure no ",Object(a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop is passed to it. This is done to follow WCAG (",Object(a.mdx)("a",o({parentName:"p"},{href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"}),"for more info"),")."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"Input")," component will not be supporting ",Object(a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",Object(a.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". If consumers want to provide a detailed text guidance they can upgrade to ",Object(a.mdx)("inlineCode",{parentName:"p"},"InputField"),".")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"InputField")," component will not be supporting ",Object(a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",Object(a.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". But consumers may utilize the ",Object(a.mdx)("inlineCode",{parentName:"p"},"help")," text field properties to provide similar guidance to the user using ",Object(a.mdx)("inlineCode",{parentName:"p"},"help")," prop."))),Object(a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(a.mdx)("h3",{id:"props-1"},"Props"),Object(a.mdx)("h4",{id:"updated"},"Updated"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",Object(a.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"label")," prop's type changed from node to string.")),Object(a.mdx)("h5",{id:"steps-to-upgrade-1"},"Steps to Upgrade"),Object(a.mdx)("p",null,"To upgrade from 2.0 to 3.0 each existing Input must be reviewed and updated to ensure only a string is being passed to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"label")," prop. Solutions passing node data types need to be reworked to provide only a string."),Object(a.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties-1"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"renamed"},"Renamed"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",o({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",o({parentName:"tr"},{align:null}),"New"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-animation-background"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-background-start"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-keyboard-animation-size"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-keyboard-box-shadow-ltr"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-ltr-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-keyboard-box-shadow-rtl"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-focus-rtl-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-focus-animation-background"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-focus-keyboard-animation-size"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-focus-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-focus-keyboard-box-shadow-ltr"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-focus-ltr-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-focus-keyboard-box-shadow-rtl"),Object(a.mdx)("td",o({parentName:"tr"},{align:null}),"--terra-form-input-error-focus-rtl-box-shadow")))),Object(a.mdx)("h4",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-hover-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-hover-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-focus-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-error-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-input-error-hover-background-color")))}i.isMDXComponent=!0},863:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(r(0)),n=l(r(3)),o=l(r(5)),d=l(r(864));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(d.default),m={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},p=function(e){var t=e.src,r=e.name,n=e.url,o=e.version,d=a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(o))),l=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},d,l)};p.propTypes=m;var c=p;t.default=c},864:function(e,t,r){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=376-f96d328451eadd05616d.js.map