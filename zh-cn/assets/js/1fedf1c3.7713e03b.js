"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[140],{8201:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=i(4848),r=i(8453);const s={sidebar_position:4,title:"\u914d\u7f6e"},o=void 0,c={id:"configuration",title:"\u914d\u7f6e",description:"[//]: # (Copyright 2024 Paion Data)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/zh-cn/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u914d\u7f6e"},sidebar:"docSidebar",previous:{title:"\u5f00\u53d1",permalink:"/zh-cn/docs/development"},next:{title:"Elide Library",permalink:"/zh-cn/docs/category/elide-library"}},l={},d=[{value:"\u4e3b\u8981\u914d\u7f6e",id:"\u4e3b\u8981\u914d\u7f6e",level:2},{value:"(Elide) JPA DataStore",id:"elide-jpa-datastore",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u6b64\u9875\u9762\u4e2d\u7684\u914d\u7f6e\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u987a\u5e8f\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u6765\u6e90\u8fdb\u884c\u8bbe\u7f6e\uff0c\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/env.html",children:"\u64cd\u4f5c\u7cfb\u7edf\u7684\u73af\u5883\u53d8\u91cf"}),"\uff1b\u4f8b\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:'export DB_URL="jdbc:mysql://db/elide?serverTimezone=UTC"'})," \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html",children:"Java \u7cfb\u7edf\u5c5e\u6027"}),"\uff1b\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:'System.setProperty("DB_URL", "jdbc:mysql://db/elide?serverTimezone=UTC")'})," \u8bbe\u7f6e Java \u7cfb\u7edf\u5c5e\u6027"]}),"\n",(0,t.jsxs)(n.li,{children:["\u653e\u7f6e\u5728 CLASSPATH \u4e0b\u7684 ",(0,t.jsx)(n.strong,{children:".properties"})," \u6587\u4ef6\u3002\u6b64\u6587\u4ef6\u53ef\u4ee5\u653e\u5728 ",(0,t.jsx)(n.code,{children:"src/main/resources"})," \u6e90\u76ee\u5f55\u4e0b\uff0c\u5185\u5bb9\u53ef\u4ee5\u662f ",(0,t.jsx)(n.code,{children:"DB_URL=jdbc:mysql://db/elide?serverTimezone=UTC"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3b\u8981\u914d\u7f6e",children:"\u4e3b\u8981\u914d\u7f6e"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u914d\u7f6e\u53ef\u4ee5\u653e\u7f6e\u5728\u540d\u4e3a ",(0,t.jsx)(n.strong,{children:"application.properties"})," \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MODEL_PACKAGE_NAME"}),": \u5305\u542b\u4e86\u6240\u6709 Elide JPA data model \u7684\u5b8c\u5168\u9650\u5b9a Java \u5305\u8def\u5f84\u540d"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"elide-jpa-datastore",children:"(Elide) JPA DataStore"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u914d\u7f6e\u53ef\u4ee5\u653e\u7f6e\u5728\u540d\u4e3a ",(0,t.jsx)(n.strong,{children:"jpadatastore.properties"})," \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DB_USER"}),": \u6301\u4e45\u5316\u6570\u636e\u5e93\u7528\u6237\u540d\uff08\u9700\u8981\u5177\u6709\u8bfb\u5199\u6743\u9650\uff09\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DB_PASSWORD"}),": \u6301\u4e45\u5316\u6570\u636e\u5e93\u7528\u6237\u5bc6\u7801\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DB_URL"}),': \u6301\u4e45\u5316\u6570\u636e\u5e93 URL\uff0c\u6bd4\u5982 "jdbc:mysql://localhost/elide?serverTimezone=UTC"\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DB_DRIVER"}),': SQL \u6570\u636e\u5e93\u9a71\u52a8\u7c7b\u540d\uff0c\u4f8b\u5982 "com.mysql.jdbc.Driver"\u3002']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DB_DIALECT"}),': SQL \u6570\u636e\u5e93\u8bed\u6cd5\u7c7b\u540d\uff0c\u4f8b\u5982 "org.hibernate.dialect.MySQLDialect"\u3002']}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);