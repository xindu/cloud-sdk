(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(203)),i={id:"getting-started",title:"Getting started - SDK for JavaScript",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"Get up to spead with SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},c={id:"js/getting-started",title:"Getting started - SDK for JavaScript",description:"Get up to spead with SAP Cloud SDK for JavaScript in no time",source:"@site/docs/js/getting-started.md",permalink:"/cloud-sdk/docs/js/getting-started",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587327922,sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"Introduction - SDK for JavaScript",permalink:"/cloud-sdk/docs/js/introduction"},next:{title:"Cloud SDK API Documentation",permalink:"/cloud-sdk/docs/js/api-documentation"}},s=[{value:"Installation",id:"installation",children:[{value:"Update",id:"update",children:[]}]},{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"To install the CLI globally, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install -g @sap-cloud-sdk/cli\n")),Object(o.b)("h3",{id:"update"},"Update"),Object(o.b)("p",null,"As long as the CLI version is less than ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0"),", run the following to update to the latest version. Please keep in mind, that these updates can have breaking changes as per the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://semver.org/#spec-item-4"}),"semver spec"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install -g @sap-cloud-sdk/cli@latest\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ npm install -g @sap-cloud-sdk/cli\n$ sap-cloud-sdk COMMAND\nrunning command...\n$ sap-cloud-sdk (-v|--version|version)\n@sap-cloud-sdk/cli/0.1.8 darwin-x64 node-v13.11.0\n$ sap-cloud-sdk --help [COMMAND]\nUSAGE\n  $ sap-cloud-sdk COMMAND\n...\n")),Object(o.b)("p",null,"The CLI can initialize an nest-based project or (the more common case) add everything you need to develop for SAP Cloud Platform to an existing project no matter what backend framework you use.\nIf there are any incompatibilities, please let us know in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-cli/issues/new/choose"}),"issues"),"!"),Object(o.b)("p",null,"To get started run"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sap-cloud-sdk init\n")),Object(o.b)("p",null,"in the project folder."),Object(o.b)("p",null,"It will guide you through the initialization, create the necessary files and add necessary dependencies.\nIf you run it in an empty folder, it will ask if you want to initialize a project using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nestjs/nest-cli"}),"@nest/cli"),"."),Object(o.b)("p",null,"To deploy to and run on Cloud Foundry, you need to\n1. Make sure that your app listens to port 8080\n2. Build your app if necessary\n3. Run ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#sap-cloud-sdk-package"}),Object(o.b)("inlineCode",{parentName:"a"},"sap-cloud-sdk package")),"\n4. Push to Cloud Foundry (",Object(o.b)("inlineCode",{parentName:"p"},"cf push"),")"),Object(o.b)("p",null,"For productive use, your app should implement user authentication and authorization.\nFor SAP Cloud Foundry, this is usually done by using the approuter and xsuaa service.\nStart by running ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#sap-cloud-sdk-add-approuter"}),Object(o.b)("inlineCode",{parentName:"a"},"sap-cloud-sdk add-approuter"))," and configure the xsuaa service accordingly."))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);