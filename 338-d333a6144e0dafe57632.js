(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{1078:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),l=a.n(r),n=a(863),o=a.n(n),m=function(e){var t=e.url;return l.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-alert",name:"terra-alert",version:"4.40.0",url:t})}},2374:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));a(0);var r=a(287),l=a(1078);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m={};function d(e){var t=e.components,a=o(e,["components"]);return Object(r.mdx)("wrapper",n({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(l.a,{mdxType:"Badge"}),Object(r.mdx)("h1",{id:"terra-alert-upgrade-guide"},"Terra Alert Upgrade Guide"),Object(r.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(r.mdx)("h3",{id:"props"},"Props"),Object(r.mdx)("h4",{id:"removed"},"Removed"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"customStatusColor")," prop. The prop was used to set the cutom alert color as inline style.")),Object(r.mdx)("h4",{id:"added"},"Added"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("inlineCode",{parentName:"li"},"customColorClass")," prop. This prop allows user to provide their own CSS and bind the className to that in CSS.")),Object(r.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(r.mdx)("h4",{id:"added-1"},"Added"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-custom-default-color")),Object(r.mdx)("h3",{id:"steps-to-uplift-to-v4"},"Steps to uplift to V4"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"import ",Object(r.mdx)("inlineCode",{parentName:"li"},"classNames/bind")," and ",Object(r.mdx)("inlineCode",{parentName:"li"},"CSS"),". "),Object(r.mdx)("li",{parentName:"ol"},"Use ",Object(r.mdx)("inlineCode",{parentName:"li"},"ClassNames.bind()")," function to bind ",Object(r.mdx)("inlineCode",{parentName:"li"},"CSS")," to the ",Object(r.mdx)("inlineCode",{parentName:"li"},"ClassName"),".")),Object(r.mdx)("h4",{id:"v3-code"},"V3 Code"),Object(r.mdx)("pre",null,Object(r.mdx)("code",n({parentName:"pre"},{className:"language-javascript"}),'import Alert from \'terra-alert\';\n\n<Alert type="custom" customStatusColor="orange" />\n')),Object(r.mdx)("h4",{id:"v4-code"},"V4 Code"),Object(r.mdx)("h5",{id:"css"},"CSS"),Object(r.mdx)("pre",null,Object(r.mdx)("code",n({parentName:"pre"},{className:"language-CSS"}),":local {\n  .my-app-alert-attention-example {\n    color: var(--terra-alert-attention-example-color, #fa0000);\n  }\n")),Object(r.mdx)("h5",{id:"javascript"},"JavaScript"),Object(r.mdx)("pre",null,Object(r.mdx)("code",n({parentName:"pre"},{className:"language-javascript"}),"import Alert from 'terra-alert';\nimport classNames from 'ClassNames/bind';\nimport styles from './CSS';\n\nconst cx = classNames.bind(styles);\n\n<Alert type=\"custom\" customColorClass={cx(['my-app-alert-attention-example'])} />\n\n")),Object(r.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(r.mdx)("h3",{id:"changes-to-css-custom-properties-1"},"Changes to CSS Custom Properties"),Object(r.mdx)("h4",{id:"removed-1"},"Removed"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-alert-shadow-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-error-shadow-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-warning-shadow-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-advisory-shadow-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-info-shadow-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-success-shadow-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-custom-shadow-color")),Object(r.mdx)("h4",{id:"added-2"},"Added"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-color"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-min-height"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-icon-margin-left"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-icon-margin-right"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-icon-margin-top"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-body-margin-left"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-body-margin-right"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-body-margin-top"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-std-margin-bottom"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-std-margin-right"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-section-padding-bottom"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-section-padding-top"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-title-display"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-title-float"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-title-margin-bottom"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-title-margin-right"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-bottom"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-left"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-right"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-actions-margin-top"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-alert-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-error-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-warning-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-advisory-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-info-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-success-box-shadow"),Object(r.mdx)("li",{parentName:"ul"},"--terra-alert-custom-box-shadow")))}d.isMDXComponent=!0},863:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(a(0)),l=m(a(3)),n=m(a(5)),o=m(a(864));function m(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,a=e.name,l=e.url,n=e.version,o=r.default.createElement("a",{className:d("badge"),href:l||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},r.default.createElement("span",{className:d("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(n))),m=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,m)};c.propTypes=i;var s=c;t.default=s},864:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=338-d333a6144e0dafe57632.js.map