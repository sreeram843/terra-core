(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1009:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var o=t(0),r=t.n(o),l=t(863),c=t.n(l),a=function(e){var n=e.url;return r.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-table",name:"terra-table",version:"4.14.0",url:n})}},2238:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=l(t(0)),r=l(t(882));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return o.default.createElement(r.default,{summaryId:"section-table",summary:"This table displays section grouping.",numberOfColumns:3,cellPaddingStyle:"standard",bodyData:[{sectionHeader:{title:"Default Section",id:"default-id",key:"default"},rows:[{key:"row-0",cells:[{key:"cell-0",children:[o.default.createElement("div",{key:"cell-0"},"Lorem ipsum dolor")]},{key:"cell-1",children:[o.default.createElement("div",{key:"cell-1"},"Lorem ipsum dolor")]},{key:"cell-2",children:[o.default.createElement("div",{key:"child"},"Lorem ipsum dolor")]}]}]},{sectionHeader:{title:"Collapsible Section",id:"collapsible-id",key:"collapsible",onToggle:function(){}},rows:[{key:"row-0",cells:[{key:"cell-0",children:[o.default.createElement("div",{key:"cell-0"},"Lorem ipsum dolor")]},{key:"cell-1",children:[o.default.createElement("div",{key:"cell-1"},"Lorem ipsum dolor")]},{key:"cell-2",children:[o.default.createElement("div",{key:"child"},"Lorem ipsum dolor")]}]}]},{sectionHeader:{title:"Collapsed Section",id:"collapsed-id",key:"collapsed",onToggle:function(){},isCollapsed:!0},rows:[{key:"row-0",cells:[{key:"cell-0",children:[o.default.createElement("div",{key:"cell-0"},"Lorem ipsum dolor")]},{key:"cell-1",children:[o.default.createElement("div",{key:"cell-1"},"Lorem ipsum dolor")]},{key:"cell-2",children:[o.default.createElement("div",{key:"child"},"Lorem ipsum dolor")]}]}]}]})};n.default=c},2982:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return M}));var o=t(0),r=t.n(o),l=t(287),c=t(1009),a=t(2238),i=t.n(a);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d={};function s(e){var n=e.components,t=u(e,["components"]);return Object(l.mdx)("wrapper",p({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",p({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\n\nconst TableSectionExample = () => (\n  <Table\n    summaryId=\"section-table\"\n    summary=\"This table displays section grouping.\"\n    numberOfColumns={3}\n    cellPaddingStyle=\"standard\"\n    bodyData={[\n      {\n        sectionHeader: {\n          title: 'Default Section',\n          id: 'default-id',\n          key: 'default',\n        },\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              {\n                key: 'cell-0',\n                children: [\n                  <div key=\"cell-0\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-1',\n                children: [\n                  <div key=\"cell-1\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-2',\n                children: [\n                  <div key=\"child\">Lorem ipsum dolor</div>,\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        sectionHeader: {\n          title: 'Collapsible Section',\n          id: 'collapsible-id',\n          key: 'collapsible',\n          onToggle: () => {},\n        },\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              {\n                key: 'cell-0',\n                children: [\n                  <div key=\"cell-0\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-1',\n                children: [\n                  <div key=\"cell-1\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-2',\n                children: [\n                  <div key=\"child\">Lorem ipsum dolor</div>,\n                ],\n              },\n            ],\n          },\n        ],\n      },\n      {\n        sectionHeader: {\n          title: 'Collapsed Section',\n          id: 'collapsed-id',\n          key: 'collapsed',\n          onToggle: () => {},\n          isCollapsed: true,\n        },\n        rows: [\n          {\n            key: 'row-0',\n            cells: [\n              {\n                key: 'cell-0',\n                children: [\n                  <div key=\"cell-0\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-1',\n                children: [\n                  <div key=\"cell-1\">Lorem ipsum dolor</div>,\n                ],\n              },\n              {\n                key: 'cell-2',\n                children: [\n                  <div key=\"child\">Lorem ipsum dolor</div>,\n                ],\n              },\n            ],\n          },\n        ],\n      },\n    ]}\n  />\n);\n\nexport default TableSectionExample;\n\n")))}s.isMDXComponent=!0;var m=t(862),f=t.n(m),y=function(e){var n=e.title,t=e.description,o=e.isExpanded;return r.a.createElement(f.a,{title:n||"Section Example",description:t,example:r.a.createElement(i.a,null),exampleSrc:r.a.createElement(s,null),isExpanded:o})},b=t(865),v=t.n(b);function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function x(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var O=function(){return Object(l.mdx)(v.a,{rows:[{name:"rows",type:function(){var e={};function n(n){var t=n.components,o=x(n,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"arrayOf"),Object(l.mdx)("pre",null,Object(l.mdx)("code",h({parentName:"pre"},{className:"language-json"}),'{\n "name": "custom",\n "raw": "rowShape"\n}\n')))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=x(n,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The children list items passed to the component."))}return n.isMDXComponent=!0,n({})}},{name:"sectionHeader",type:function(){var e={};function n(n){var t=n.components,o=x(n,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"custom"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=x(n,["components"]);return Object(l.mdx)("wrapper",h({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The section header of the provided rows."))}return n.isMDXComponent=!0,n({})}}]})};function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function w(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=function(){return Object(l.mdx)(v.a,{rows:[{name:"key",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The react key to apply to the section header."))}return n.isMDXComponent=!0,n({})}},{name:"id",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The id to apply to the header in order to provide structure for assistive technologies."))}return n.isMDXComponent=!0,n({})}},{name:"isCollapsed",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the section is collapsed."))}return n.isMDXComponent=!0,n({})}},{name:"isCollapsible",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the section can be collapsed."))}return n.isMDXComponent=!0,n({})}},{name:"metaData",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The associated metaData to be provided in the onToggle(event, metaData) callback."))}return n.isMDXComponent=!0,n({})}},{name:"onToggle",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback for when the appropriate click or key action is performed to expand or collapse the section.\nCallback contains the javascript event and prop metadata, e.g. onToggle(event, metaData)\nIf present, will enable the interaction of the header."))}return n.isMDXComponent=!0,n({})}},{name:"refCallback",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"func"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Function callback pass-through for the ref of the section header."))}return n.isMDXComponent=!0,n({})}},{name:"title",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return n.isMDXComponent=!0,n({})},required:!0,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Title text to be placed within the section header."))}return n.isMDXComponent=!0,n({})}},{name:"attrs",type:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return n.isMDXComponent=!0,n({})},required:!1,defaultValue:"none",description:function(){var e={};function n(n){var t=n.components,o=w(n,["components"]);return Object(l.mdx)("wrapper",j({},e,o,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Additional attributes to be passed to the section header."))}return n.isMDXComponent=!0,n({})}}]})};function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function D(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var T={};function M(e){var n=e.components,t=D(e,["components"]);return Object(l.mdx)("wrapper",k({},T,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)(c.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-table---section"},"Terra Table - Section"),Object(l.mdx)("p",null,"The Terra Table Section is a sub component that creates a section header based on the given props and groups the child rows beneath it. The section has the ability to toggle the display of its child rows given onToggle and isCollapsed props. For a section to be collapsed both isCollapsible and isCollapsed must be true. Each section handles its collapsible and collapsed state."),Object(l.mdx)("h1",{id:"examples"},"Examples"),Object(l.mdx)(y,{mdxType:"SectionExample"}),Object(l.mdx)("h2",{id:"table-section-props"},"Table Section Props"),Object(l.mdx)(O,{mdxType:"SectionProps"}),Object(l.mdx)("h2",{id:"table-section-header-props"},"Table Section Header Props"),Object(l.mdx)(g,{mdxType:"SectionHeaderProps"}))}M.isMDXComponent=!0},866:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=l(t(0)),r=l(t(22));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var a=function(e){var n=c({},e);return o.default.createElement(r.default,n,o.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};a.displayName="IconChevronLeft",a.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=a;n.default=i}}]);
//# sourceMappingURL=470-544d2195b1405aadc2e1.js.map