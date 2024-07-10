"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[978],{4853:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var n=r(3860),t=r(7910);const s={sidebar_position:2,title:"Screwdriver CD"},a="Screwdriver CD",d={id:"adaptors/screwdriver-cd",title:"Screwdriver CD",description:"It is assumed a functioning Screwdriver CD instance is ready. If not, please follow our",source:"@site/docs/adaptors/screwdriver-cd.md",sourceDirName:"adaptors",slug:"/adaptors/screwdriver-cd",permalink:"/zh-cn/docs/adaptors/screwdriver-cd",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/adaptors/screwdriver-cd.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Screwdriver CD"},sidebar:"docSidebar",previous:{title:"Adaptors",permalink:"/zh-cn/docs/adaptors/"}},c={},o=[{value:"Installing Templates and Commands",id:"installing-templates-and-commands",level:2},{value:"1. Creating a Screwdriver Pipeline",id:"1-creating-a-screwdriver-pipeline",level:3},{value:"2. Running the Pipeline",id:"2-running-the-pipeline",level:3}];function l(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"screwdriver-cd",children:"Screwdriver CD"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["It is assumed a functioning Screwdriver CD instance is ready. If not, please follow our\n",(0,n.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/cluster-management/docker-compose#running-docker-compose-in-aws-ec2-production-deployment",children:"dedicated guide on deploying a Screwdriver instance in production"})," ",(0,n.jsx)("img",{src:"https://github.com/QubitPi/QubitPi/blob/master/img/%E5%BF%83%E6%B5%B7/%E5%BF%83%E6%B5%B7-17.png?raw=true",height:"50px"})]})}),"\n",(0,n.jsx)(i.h2,{id:"installing-templates-and-commands",children:"Installing Templates and Commands"}),"\n",(0,n.jsxs)(i.p,{children:["hashicorp-aws integrates with Screwdriver CD using ",(0,n.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/templates/job-templates",children:"templates"})," and\n",(0,n.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/commands",children:"commands"})]}),"\n",(0,n.jsxs)(i.p,{children:["The template and the commands can be automatically installed using the regular ",(0,n.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml",children:"screwdriver.yaml"})," config file by\nfollowing the steps below:"]}),"\n",(0,n.jsx)(i.h3,{id:"1-creating-a-screwdriver-pipeline",children:"1. Creating a Screwdriver Pipeline"}),"\n",(0,n.jsxs)(i.p,{children:["Create a Screwdriver pipeline with the repository link being ",(0,n.jsx)(i.code,{children:"https://github.com/QubitPi/hashicorp-aws.git"}),":"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.img,{alt:"Error loading create-pipeline-1.png",src:r(9291).Z+"",width:"2560",height:"174"}),"\n",(0,n.jsx)(i.img,{alt:"Error loading create-pipeline-2.png",src:r(7209).Z+"",width:"2560",height:"563"})]}),"\n",(0,n.jsx)(i.h3,{id:"2-running-the-pipeline",children:"2. Running the Pipeline"}),"\n",(0,n.jsxs)(i.p,{children:["Trigger a pipeline run, which will install the templates and commands automatically. Wait the pipeline to finish\nrunning. The installed template and commands can be found in ",(0,n.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/templates/job-templates#finding-templates",children:"Templates page"})," and\n",(0,n.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/commands#finding-commands",children:"Commands page"}),", respectively"]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},9291:(e,i,r)=>{r.d(i,{Z:()=>n});const n=r.p+"assets/images/create-pipeline-1-67b0b2211db6e42491d052a6fe829ddb.png"},7209:(e,i,r)=>{r.d(i,{Z:()=>n});const n=r.p+"assets/images/create-pipeline-2-2d512b94ba64992df58c5a944959d495.png"},7910:(e,i,r)=>{r.d(i,{Z:()=>d,a:()=>a});var n=r(1733);const t={},s=n.createContext(t);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);