(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),o=(a(0),a(203)),i={id:"getting-started",title:"Getting started - SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting started",description:"Get up to spead with SAP Cloud SDK for Java in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},c={id:"java/getting-started",title:"Getting started - SDK for Java",description:"Get up to spead with SAP Cloud SDK for Java in no time",source:"@site/docs/java/getting-started.md",permalink:"/cloud-sdk/docs/java/getting-started",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587327922,sidebar_label:"Getting started",sidebar:"someSidebar",previous:{title:"Introduction - SDK for Java",permalink:"/cloud-sdk/docs/java/introduction"},next:{title:"OData V4 client for Java",permalink:"/cloud-sdk/docs/java/odata/version4/generate-odata-v4-client-with-cloud-sdk-for-java-how-to"}},p=[{value:"Generating a project from a maven Archetype",id:"generating-a-project-from-a-maven-archetype",children:[]},{value:"Next steps",id:"next-steps",children:[]}],l={rightToc:p};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"generating-a-project-from-a-maven-archetype"},"Generating a project from a maven Archetype"),Object(o.b)("p",null,"To generate you project from ",Object(o.b)("inlineCode",{parentName:"p"},"maven")," archetype you have to provide:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"groupId")," - usually serves as your organization identifier, i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"foo.bar.cloud.app")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"artifactId")," - it's your application's name, i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"mydreamapp")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"version")," - we recommend keeping ",Object(o.b)("inlineCode",{parentName:"li"},"1.0-SNAPSHOT")," if you're just starting"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"package")," - by default this equals to ",Object(o.b)("inlineCode",{parentName:"li"},"groupId"),". Change it only if you know what you're doing")),Object(o.b)("p",null,"Now run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes" "-DarchetypeArtifactId=scp-cf-tomee" "-DarchetypeVersion=RELEASE"\n')),Object(o.b)("p",null,"After providing all the interactive values to the CLI it will generate you first Cloud SDK application"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"[INFO] Scanning for projects...\n[INFO]\n[INFO] ------------------< org.apache.maven:standalone-pom >-------------------\n[INFO] Building Maven Stub Project (No POM) 1\n[INFO] --------------------------------[ pom ]---------------------------------\n[INFO]\n[INFO] >>> maven-archetype-plugin:3.1.2:generate (default-cli) > generate-sources @ standalone-pom >>>\n[INFO]\n[INFO] <<< maven-archetype-plugin:3.1.2:generate (default-cli) < generate-sources @ standalone-pom <<<\n[INFO]\n[INFO]\n[INFO] --- maven-archetype-plugin:3.1.2:generate (default-cli) @ standalone-pom ---\n[INFO] Generating project in Interactive mode\n[INFO] Archetype repository not defined. Using the one from [com.sap.cloud.sdk.archetypes:scp-cf-tomee:3.0.0 -> http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.milestones] found in catalog remote\nDownloading from scp-cf-tomee-repo: http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.milestones/com/sap/cloud/sdk/archetypes/scp-cf-tomee/maven-metadata.xml\nDownloaded from scp-cf-tomee-repo: http://nexus.wdf.sap.corp:8081/nexus/content/groups/build.milestones/com/sap/cloud/sdk/archetypes/scp-cf-tomee/maven-metadata.xml (1.9 kB at 6.7 kB/s)\nDefine value for property 'groupId': foo.bar.cloud.app\nDefine value for property 'artifactId' (should match expression '[^_]+'): mydreamapp\n[INFO] Using property: artifactId = mydreamapp\nDefine value for property 'version' 1.0-SNAPSHOT: :\nDefine value for property 'package' foo.bar.cloud.app: :\n[INFO] Using property: gitignore = .gitignore\n[INFO] Using property: skipUsageAnalytics = false\nConfirm properties configuration:\ngroupId: foo.bar.cloud.app\nartifactId: mydreamapp\nartifactId: mydreamapp\nversion: 1.0-SNAPSHOT\npackage: foo.bar.cloud.app\ngitignore: .gitignore\nskipUsageAnalytics: false\n Y: :\n[INFO] ----------------------------------------------------------------------------\n[INFO] Using following parameters for creating project from Archetype: scp-cf-tomee:RELEASE\n[INFO] ----------------------------------------------------------------------------\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: packageInPathFormat, Value: foo/bar/cloud/app\n[INFO] Parameter: package, Value: foo.bar.cloud.app\n[INFO] Parameter: version, Value: 1.0-SNAPSHOT\n[INFO] Parameter: groupId, Value: foo.bar.cloud.app\n[INFO] Parameter: skipUsageAnalytics, Value: false\n[INFO] Parameter: gitignore, Value: .gitignore\n[INFO] Parameter: artifactId, Value: mydreamapp\n[INFO] Project created from Archetype in dir: /home/i531196/dev/temp/mydreamapp\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time:  02:28 min\n[INFO] Finished at: 2020-04-19T19:25:33+02:00\n[INFO] ------------------------------------------------------------------------\n")),Object(o.b)("p",null,"Change to you ",Object(o.b)("inlineCode",{parentName:"p"},"mydreamapp")," root directory by:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd mydreamapp/\n\nls\napplication  cx-server  integration-tests  Jenkinsfile  manifest.yml  pom.xml  unit-tests\n\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Congratulations! You've just configured your application with Cloud SDK for Java.")),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"how-to/recommended-ide"}),"Configure you IDE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"how-to/cf-cli"}),"Get and bind SAP Cloud Foundry CLI")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"}),"Check tutorials for Cloud SDK for Java")),Object(o.b)("li",{parentName:"ul"},"Check our ",Object(o.b)("inlineCode",{parentName:"li"},"How To")," section from the menu"),Object(o.b)("li",{parentName:"ul"},"Review ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"api-documentation"}),"JavaDoc")),Object(o.b)("li",{parentName:"ul"},"Check ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../overview/what-is-new"}),"what's new")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.sap.com/doc/6c02295dfa8f47cf9c08a19f2e172901/1.0/en-US/index.html"}),"release notes"))))}s.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?r.a.createElement(b,c({ref:t},l,{components:a})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);