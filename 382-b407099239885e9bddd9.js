(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1044:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(0),o=r.n(a),n=r(863),d=r.n(n),m=function(e){var t=e.url;return o.a.createElement(d.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea",name:"terra-form-textarea",version:"5.2.0",url:t})}},2399:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return l}));r(0);var a=r(287),o=r(1044);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m={};function l(e){var t=e.components,r=d(e,["components"]);return Object(a.mdx)("wrapper",n({},m,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(o.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-textarea-upgrade-guide"},"Terra Form Textarea Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-version-4-to-version-5"},"Changes from version 4 to version 5"),Object(a.mdx)("h3",{id:"props"},"Props"),Object(a.mdx)("h4",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Removed ",Object(a.mdx)("inlineCode",{parentName:"li"},"placeholder")," prop from ",Object(a.mdx)("inlineCode",{parentName:"li"},"Textarea")," and  ",Object(a.mdx)("inlineCode",{parentName:"li"},"TextareaField"),".")),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"removed-1"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-font-style"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-disabled-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-disabled-font-style")),Object(a.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),Object(a.mdx)("p",null,"To upgrade from 4.0 to 5.0 each existing Textarea and TextareaField must be reviewed and updated to ensure no ",Object(a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop is passed to it. This is done to follow WCAG (",Object(a.mdx)("a",n({parentName:"p"},{href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"}),"for more info"),")."),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"Textarea")," component will not be supporting ",Object(a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",Object(a.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". If consumers want to provide a detailed text guidance they can upgrade to ",Object(a.mdx)("inlineCode",{parentName:"p"},"TextareaField"),".")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("p",{parentName:"li"},Object(a.mdx)("inlineCode",{parentName:"p"},"TextareaField")," component will not be supporting ",Object(a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",Object(a.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". But consumers may utilize the ",Object(a.mdx)("inlineCode",{parentName:"p"},"help")," text field properties to provide similar guidance to the user using ",Object(a.mdx)("inlineCode",{parentName:"p"},"help")," prop."))),Object(a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(a.mdx)("h3",{id:"props-1"},"Props"),Object(a.mdx)("h4",{id:"updated"},"Updated"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",Object(a.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"label")," prop's type changed from node to string.")),Object(a.mdx)("h5",{id:"steps-to-upgrade-1"},"Steps to Upgrade"),Object(a.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Textarea must be reviewed and updated to ensure only a string is being passed to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"label")," props. Solutions passing node data types need to be reworked to provide only a string."),Object(a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties-1"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"renamed"},"Renamed"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",n({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",n({parentName:"tr"},{align:null}),"New"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-animation-background"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-background-start"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-keyboard-animation-size"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-keyboard-border-color"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-keyboard-border-style"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-border-style")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-keyboard-border-width"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-keyboard-opacity"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-opacity")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-keyboard-box-shadow-ltr"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-ltr-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-keyboard-box-shadow-rtl"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-focus-rtl-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-animation-background"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-keyboard-animation-size"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-background-size")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-keyboard-border-color"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-keyboard-border-style"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-border-style")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-keyboard-border-width"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-keyboard-opacity"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-opacity")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-keyboard-box-shadow-ltr"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-ltr-box-shadow")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-keyboard-box-shadow-rtl"),Object(a.mdx)("td",n({parentName:"tr"},{align:null}),"--terra-form-textarea-error-focus-rtl-box-shadow")))),Object(a.mdx)("h4",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-hover-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-hover-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-focus-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-focus-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-hover-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-hover-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-focus-background-color"),Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-focus-color")),Object(a.mdx)("h4",{id:"removed-2"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-textarea-cursor")))}l.isMDXComponent=!0},863:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(r(0)),o=m(r(3)),n=m(r(5)),d=m(r(864));function m(e){return e&&e.__esModule?e:{default:e}}var l=n.default.bind(d.default),c={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},i=function(e){var t=e.src,r=e.name,o=e.url,n=e.version,d=a.default.createElement("a",{className:l("badge"),href:o||"https://www.npmjs.org/package/".concat(r,"/v/").concat(n)},a.default.createElement("span",{className:l("badge-name")},o?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(n))),m=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},d,m)};i.propTypes=c;var b=i;t.default=b},864:function(e,t,r){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=382-b407099239885e9bddd9.js.map