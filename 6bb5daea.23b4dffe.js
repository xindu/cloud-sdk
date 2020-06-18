(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(9),l=(n(0),n(207)),i={id:"logging-overview",title:"Logging with the SAP Cloud SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Logging Overview",description:"This document will give you an overview of the different ways to log information with your application."},r={id:"java/guides/logging-overview",title:"Logging with the SAP Cloud SDK for Java",description:"This document will give you an overview of the different ways to log information with your application.",source:"@site/docs/java/guides/logging-overview.md",permalink:"/cloud-sdk/docs/java/guides/logging-overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/java/guides/logging-overview.md",lastUpdatedBy:"Christoph Schubert",lastUpdatedAt:1588930934,sidebar_label:"Logging Overview",sidebar:"someSidebar",previous:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"},next:{title:"Tutorials for the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/guides/tutorial-overview-sdk-java"}},c=[{value:"Application Logging",id:"application-logging",children:[{value:"Write log messages in your application",id:"write-log-messages-in-your-application",children:[]},{value:"Set your Application log level",id:"set-your-application-log-level",children:[]},{value:"Further Reading",id:"further-reading",children:[]}]}],s={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This document aims to give you an overview of how you can write events of your application with the standard logging frameworks and how the SAP Cloud SDK integrates with that."),Object(l.b)("h2",{id:"application-logging"},"Application Logging"),Object(l.b)("p",null,"To better differentiate between different kinds of logging we will call the type of logs that are usually only relevant for developers to understand why the system behaves the way it did (for example during debugging) as ",Object(l.b)("em",{parentName:"p"},"Application Logging"),".\nOther types of logs might be kept due to legislative requirements (audit trails or audit logging) or be part of the terms and conditions (business logging)."),Object(l.b)("h3",{id:"write-log-messages-in-your-application"},"Write log messages in your application"),Object(l.b)("p",null,"To start writing log messages you need two dependencies:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The SLF4J API ",Object(l.b)("inlineCode",{parentName:"li"},"org.slf4j:slf4j-api")),Object(l.b)("li",{parentName:"ul"},"A logging implementation of your choice (e.g. logback ",Object(l.b)("inlineCode",{parentName:"li"},"ch.qos.logback:logback-classic"),")")),Object(l.b)("p",null,"Depending on the chosen logging implementation you might not ",Object(l.b)("em",{parentName:"p"},"need")," to specify the SLF4J API, but it's in general best practice to not rely on transitive dependencies and therefore reference the SLF4J API anyway."),Object(l.b)("p",null,"Also, if you deploy your application to SCP CloudFoundry using the SAP Java Buildpack you get the logging implementation provided at runtime by the container. This means, if you only run the application on Cloud Foundry you don't need to provide any implementation.\nHowever, if you want to locally run your application (e.g. with TomEE with ",Object(l.b)("inlineCode",{parentName:"p"},"mvn tomee:run"),") you will need a logging implementation with at least the maven scope ",Object(l.b)("inlineCode",{parentName:"p"},"runtime"),"."),Object(l.b)("h4",{id:"simple-slf4j-usage"},"Simple SLF4J usage"),Object(l.b)("p",null,"Having these prerequisites out of the way, you can now start logging:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        logger.trace("doSomething was called");\n    }\n}\n')),Object(l.b)("p",null,"What do you see in this example?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In the first line inside the class a new logger is created (once per class), with the class object as a reference. This class name will then be logged alongside the message in the logs."),Object(l.b)("li",{parentName:"ul"},"Inside the ",Object(l.b)("inlineCode",{parentName:"li"},"doSomething")," method this logger is now used to log the fact that the given method was called. The method you use for that depends on the level at which you want to see the message. Other options besides ",Object(l.b)("inlineCode",{parentName:"li"},"trace")," are ",Object(l.b)("inlineCode",{parentName:"li"},"debug"),", ",Object(l.b)("inlineCode",{parentName:"li"},"info"),", ",Object(l.b)("inlineCode",{parentName:"li"},"warn"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"error"),".")),Object(l.b)("p",null,"As you can see, no reference to the actual logging implementation can be found in the code. This is the benefit of using SLF4J as a logging facade. This allows you to change the logging implementation without any changes to your application code."),Object(l.b)("h4",{id:"more-advanced-slf4j-usage"},"More advanced SLF4J usage"),Object(l.b)("p",null,"If you are logging more and more information you might find yourself in cases where you concatenate ",Object(l.b)("inlineCode",{parentName:"p"},"String"),"s or log inside a loop. This might cause unnecessary load on your system if the runtime log level is higher than the messages you actually want to log. To make this more plastic have a look at the following example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        logger.debug("Processing the following results:")\n        for(String result : someResult) {\n            logger.debug("- " + result);\n        }\n        consumeResults(someResults)\n    }\n}\n')),Object(l.b)("p",null,"Now assume that ",Object(l.b)("inlineCode",{parentName:"p"},"someResults")," contains hundreds or thousands of entries and the log level at runtime is set to ",Object(l.b)("inlineCode",{parentName:"p"},"INFO"),". This would mean that the loop is run without actually doing anything."),Object(l.b)("p",null,"To prevent this kind of ",Object(l.b)("em",{parentName:"p"},"empty")," loops you can use guards like ",Object(l.b)("inlineCode",{parentName:"p"},"logger.isDebugEnabled()")," in the following way:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'public class DummyClass {\n    private static final Logger logger = LoggerFactory.getLogger(DummyClass.class);\n\n    public void doSomething() {\n        List<String> someResults = retrieveSomeResults();\n\n        if( logger.isDebugEnabled() ) {\n            logger.debug("Processing the following results:")\n            for(String result : someResult) {\n                logger.debug("- " + result);\n            }\n        }\n\n        consumeResults(someResults)\n    }\n}\n')),Object(l.b)("p",null,"That way the loop is only executed if actually necessary."),Object(l.b)("h3",{id:"set-your-application-log-level"},"Set your Application log level"),Object(l.b)("p",null,"If you want to configure the log level of your application you have to know which logging implementation your application uses.\nSome libraries then allow you different ways on how to configure them."),Object(l.b)("p",null,"For more detailed information on your specific setup, please refer to the documentation of your logging implementation."),Object(l.b)("p",null,"The following tries to give a quick starting point for varying setups."),Object(l.b)("h4",{id:"sap-cloud-sdk-tomee-archetype-locally"},"SAP Cloud SDK TomEE Archetype (Locally)"),Object(l.b)("p",null,"If you want to set the debug levels for your local running application (so when using the ",Object(l.b)("inlineCode",{parentName:"p"},"mvn tomee:run")," command) you have to configure the Logback library via the configuration file."),Object(l.b)("p",null,"In the directory ",Object(l.b)("inlineCode",{parentName:"p"},"src/main/resources")," of your ",Object(l.b)("inlineCode",{parentName:"p"},"application")," module you'll find the file called ",Object(l.b)("inlineCode",{parentName:"p"},"logback.xml"),".\nThis is the configuration file for the Logback library.\nTo understand how Logback detects this file have a look at ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"http://logback.qos.ch/manual/configuration.html#auto_configuration"}),"their documentation"),"."),Object(l.b)("p",null,"In this configuration file you will find a block like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),Object(l.b)("p",null,"This basically tells logback to log all messages with level ",Object(l.b)("inlineCode",{parentName:"p"},"INFO")," and higher to an appender with the reference ",Object(l.b)("inlineCode",{parentName:"p"},"STDOUT"),".\nValid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"level")," property are: ",Object(l.b)("inlineCode",{parentName:"p"},"TRACE"),", ",Object(l.b)("inlineCode",{parentName:"p"},"DEBUG"),", ",Object(l.b)("inlineCode",{parentName:"p"},"INFO"),", ",Object(l.b)("inlineCode",{parentName:"p"},"WARN"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"ERROR"),".\nSo, if you want to log all packages with level ",Object(l.b)("inlineCode",{parentName:"p"},"DEBUG"),", for example, you could set it the following way:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<root level="DEBUG">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),Object(l.b)("p",null,"However, usually you want to set the logging level for certain packages (or classes) only.\nFor this you would add the following line to your ",Object(l.b)("inlineCode",{parentName:"p"},"logback.xml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<logger name="package.to.log" level="INFO" />\n')),Object(l.b)("p",null,"So, in the case that you want to log all requests sent and responses received by the Apache HttpClient in your application locally you would have the following configuration block:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<logger name="org.apache.http" level="DEBUG" />\n<logger name="org.apache.http.wire" level="ERROR" />\n<root level="INFO">\n    <appender-ref ref="STDOUT"/>\n</root>\n')),Object(l.b)("h4",{id:"sap-cloud-sdk-tomee-archetype-cloud-foundry"},"SAP Cloud SDK TomEE Archetype (Cloud Foundry)"),Object(l.b)("p",null,"If you want to set the debug levels of your application running on Cloud Foundry (using the SAP Java Buildpack) you have to set the ",Object(l.b)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL"),".\nThis allows you to also change the log level at runtime, as we will see further down in this section."),Object(l.b)("p",null,"To set the environment variable with every start of the application it is advised to use the ",Object(l.b)("inlineCode",{parentName:"p"},"manifest.yml")," file (found in the root of your project).\nThis file would then look something like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"---\napplications:\n\n- name: <your-application>\n  some-properties: <some-values>\n  env:\n    OTHER_ENVIRONMENT_VARIABLE: 'and their values'\n    SET_LOGGING_LEVEL: '{ROOT: INFO, com.sap.cloud.sdk: INFO, package.to.log: DEBUG}'\n")),Object(l.b)("p",null,"So, in the case that you want to log all requests sent and responses received by the Apache HttpClient in your application on Cloud Foundry you would set ",Object(l.b)("inlineCode",{parentName:"p"},"SET_LOGGING_LEVEL")," to the following value:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}\n")),Object(l.b)("p",null,"As mentioned earlier, it's possible to set environment variable via the Cloud Foundry CLI.\nThe SAP Java BuildPack should then be able to pickup these changes and propagate them to your application."),Object(l.b)("p",null,"So, assuming that you have the initial configuration shown above and you want to start logging the Apache HttpClient, you would now issue the following command on your command line:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"})," cf set-env logging-documentation SET_LOGGING_LEVEL '{ROOT: INFO, com.sap.cloud.sdk: INFO, org.apache.http: DEBUG, org.apache.http.wire: ERROR}'\n")),Object(l.b)("p",null,"Don't forget to change the environment variable back to the previous state.\nIn this example case the command would be the following:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cf set-env logging-documentation SET_LOGGING_LEVEL '{ROOT: INFO, com.sap.cloud.sdk: INFO}'\n")),Object(l.b)("h3",{id:"further-reading"},"Further Reading"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'How to use SLF4J with "legacy" logging frameworks: ',Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.slf4j.org/legacy.html"}),"http://www.slf4j.org/legacy.html")),Object(l.b)("li",{parentName:"ul"},"Debug Logging of the Apache HttpClient: ",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"}),"https://hc.apache.org/httpcomponents-client-4.5.x/logging.html"))))}u.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,d=p["".concat(i,".").concat(b)]||p[b]||g[b]||l;return n?a.a.createElement(d,r(r({ref:t},s),{},{components:n})):a.a.createElement(d,r({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=b;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);