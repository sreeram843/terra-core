(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(3)),o=p(n(288)),l=p(n(295)),c=p(n(75)),i=p(n(60));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={allowClear:a.default.bool,children:a.default.node,label:a.default.string.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,isTouchAccessible:a.default.bool,labelAttrs:a.default.object,maxHeight:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},m={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var t,n=e.allowClear,a=e.children,c=e.defaultValue,i=e.disabled,p=e.error,s=e.help,m=e.hideRequired,f=e.isIncomplete,b=e.isInline,x=e.isInvalid,h=e.isLabelHidden,O=e.isTouchAccessible,y=e.label,v=e.labelAttrs,j=e.maxHeight,g=e.maxWidth,S=e.onChange,w=e.placeholder,M=e.required,D=e.selectAttrs,X=e.selectId,L=e.showOptional,T=e.value,C=d(e,["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]);return s&&p&&x?t="".concat(X,"-error ").concat(X,"-help"):(s&&(t="".concat(X,"-help")),p&&x&&(t="".concat(X,"-error"))),r.default.createElement(o.default,u({},C,{label:y,labelAttrs:v,error:p,help:s,hideRequired:m,required:M,showOptional:L,isInvalid:x,isInline:b,isLabelHidden:h,htmlFor:X,maxWidth:g}),r.default.createElement(l.default,u({},D,{ariaLabel:y,allowClear:n,"aria-describedby":t,disabled:D.disabled||i,inputId:X,isIncomplete:f,isInvalid:x,isTouchAccessible:O,defaultValue:c,maxHeight:j||D.maxHeight,onChange:S,placeholder:w,required:M,value:T}),a))};f.propTypes=s,f.defaultProps=m,f.Option=i.default,f.OptGroup=c.default;var b=f;t.default=b},2021:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(1120)),o=c(n(5)),l=c(n(870));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),p=function(){return r.default.createElement(a.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:i("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=p},2022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(1120)),o=c(n(5)),l=c(n(870));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),p=function(){return r.default.createElement(a.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:i("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=p},2023:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(1120)),o=c(n(5)),l=c(n(870));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),p=function(){return r.default.createElement(a.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:i("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=p},2960:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(0),a=n.n(r),o=n(287),l=n(881),c=n(2021),i=n.n(c);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function s(e){var t=e.components,n=u(e,["components"]);return Object(o.mdx)("wrapper",p({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}s.isMDXComponent=!0;var m=n(862),f=n.n(m),b=n(871),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Search Select Field",description:n,example:a.a.createElement(i.a,null),exampleCssSrc:a.a.createElement(b.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:r})},h=n(2022),O=n.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function g(e){var t=e.components,n=v(e,["components"]);return Object(o.mdx)("wrapper",y({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}g.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Required Search Select Field",description:n,example:a.a.createElement(O.a,null),exampleCssSrc:a.a.createElement(b.a,null),exampleSrc:a.a.createElement(g,null),isExpanded:r})},w=n(2023),M=n.n(w);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L={};function T(e){var t=e.components,n=X(e,["components"]);return Object(o.mdx)("wrapper",D({},L,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",D({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}T.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Incomplete Search Select Field",description:n,example:a.a.createElement(M.a,null),exampleCssSrc:a.a.createElement(b.a,null),exampleSrc:a.a.createElement(T,null),isExpanded:r})},E=n(865),N=n.n(E);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I=function(){return Object(o.mdx)(N.a,{rows:[{name:"allowClear",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether a clear option is available to clear the selection."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select options."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The field label."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",F({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Error message displayed when the select is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Help message to display with the select."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(o.mdx)("em",{parentName:"p"},"(usage note: ",Object(o.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return t.isMDXComponent=!0,t({})}},{name:"isTouchAccessible",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),Object(o.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxHeight",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The max height of the dropdown."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Set the max-width of a field using ",Object(o.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(o.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Placeholder text."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"selectAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the select."))}return t.isMDXComponent=!0,t({})}},{name:"selectId",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",F({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}}]})};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={};function z(e){var t=e.components,n=V(e,["components"]);return Object(o.mdx)("wrapper",P({},_,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-form-search-select-field"},"Terra Form Search Select Field"),Object(o.mdx)("p",null,"A convenience wrapper assembling a ",Object(o.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/SearchSelect.jsx"}),"terra-form-select SearchSelect")," within a ",Object(o.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"}),"terra-form-field"),"."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",P({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),"import SearchSelectField from 'terra-form-select/lib/SearchSelectField';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(x,{title:"Search Select Field Example",mdxType:"SearchSelectFieldExample"}),Object(o.mdx)(S,{title:"Required Search Select Field Example",mdxType:"RequiredSearchSelectFieldExample"}),Object(o.mdx)(C,{title:"Incomplete Search Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteSearchSelectFieldExample"}),Object(o.mdx)("h2",{id:"search-select-field-props"},"Search Select Field Props"),Object(o.mdx)(I,{mdxType:"SearchSelectFieldPropsTable"}))}z.isMDXComponent=!0},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(22));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=c;t.default=i},870:function(e,t,n){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3HVkD"}},871:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n(287);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={};function c(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}c.isMDXComponent=!0},881:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(863),l=n.n(o),c=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.14.0",url:t})}}}]);
//# sourceMappingURL=136-695be99f5e8698fb3f47.js.map