"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[5062],{4823:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=t(4848),s=t(8453);const i={slug:"dockerhub-github-actions",title:"Build and Push Docker Images through GitHub Action",authors:["jiaqi"],tags:["Docker"]},a=void 0,r={permalink:"/hashicorp-aws/blog/dockerhub-github-actions",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2023-11-20-dockerhub-github-actions.md",source:"@site/blog/2023-11-20-dockerhub-github-actions.md",title:"Build and Push Docker Images through GitHub Action",description:"[//]: # (Copyright Jiaqi Liu)",date:"2023-11-20T00:00:00.000Z",formattedDate:"November 20, 2023",tags:[{label:"Docker",permalink:"/hashicorp-aws/blog/tags/docker"}],readingTime:2.03,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"dockerhub-github-actions",title:"Build and Push Docker Images through GitHub Action",authors:["jiaqi"],tags:["Docker"]},unlisted:!1,prevItem:{title:"Using OpenSSL to encrypt messages and files on Linux",permalink:"/hashicorp-aws/blog/openssl-encrypt"},nextItem:{title:"Switching Node.js Versions with NVM",permalink:"/hashicorp-aws/blog/nvm"}},c={authorsImageUrls:[void 0]},u=[{value:"Generate Docker Hub Access Token",id:"generate-docker-hub-access-token",level:2},{value:"Define CI Workflow on GitHub",id:"define-ci-workflow-on-github",level:2},{value:"Build Status Badge",id:"build-status-badge",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["On every push to GitHub, ",(0,o.jsx)(n.a,{href:"https://github.com/marketplace/actions/build-and-push-docker-images",children:"GitHub Action"})," can\nauto-trigger the docker image build and push to ",(0,o.jsx)(n.a,{href:"https://hub.docker.com",children:"Docker Hub"}),". We will be able to see that each\npush results in a usable image, which enhances the quality of a docker image a lot."]}),"\n",(0,o.jsx)(n.h2,{id:"generate-docker-hub-access-token",children:"Generate Docker Hub Access Token"}),"\n",(0,o.jsxs)(n.p,{children:["Before we start, ensure you can access ",(0,o.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"})," from any workflows you create. To do this:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Add your Docker ID as a secret to GitHub. Navigate to your GitHub repository and click ",(0,o.jsx)(n.strong,{children:"Settings"})," > ",(0,o.jsx)(n.strong,{children:"Secrets"})," >\n",(0,o.jsx)(n.strong,{children:"New secret"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Create a new secret with the name DOCKERHUB_USERNAME and your Docker ID as value."}),"\n",(0,o.jsxs)(n.li,{children:["Create a new Personal Access Token (PAT). To create a new token, go to\n",(0,o.jsx)(n.a,{href:"https://hub.docker.com/settings/security",children:"Docker Hub Settings"})," and then click ",(0,o.jsx)(n.strong,{children:"New Access Token"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"define-ci-workflow-on-github",children:"Define CI Workflow on GitHub"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"git checkout"})," the branch that contains the docker image definition, i.e. Dockerfile, and add a new YAML file to the\nfollowing path"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"<github-repo>/.github/workflows/<workflow-name>.yml\n"})}),"\n",(0,o.jsx)(n.p,{children:"The YAML file should contain the following workflow definition:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\ud83d\udccb Change the ",(0,o.jsx)(n.code,{children:"<branch-name>"})," and ",(0,o.jsx)(n.code,{children:"<docker-image-name>"})," below accordingly."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# Builds and pushes XXX image to Docker Hub\n\nname: ci\n\non:\n  push:\n    branches:\n      - '<branch-name>'\n\njobs:\n  docker:\n    runs-on: ubuntu-latest\n    steps:\n      -\n        name: Checkout\n        uses: actions/checkout@v3\n      -\n        name: Set up QEMU\n        uses: docker/setup-qemu-action@v2\n      -\n        name: Set up Docker Buildx\n        uses: docker/setup-buildx-action@v2\n      -\n        name: Login to DockerHub\n        uses: docker/login-action@v2\n        with:\n          {% raw %}\n          username: ${{ secrets.DOCKERHUB_USERNAME }}\n          password: ${{ secrets.DOCKERHUB_TOKEN }}\n          {% endraw %}\n      -\n        name: Build and push\n        uses: docker/build-push-action@v3\n        with:\n          context: .\n          push: true\n          {% raw %}\n          tags: ${{ secrets.DOCKERHUB_USERNAME }}/<docker-image-name>:latest\n          {% endraw %}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Push the YAML file onto GitHub. Every push to that branch afterwards will trigger the image build and push."}),"\n",(0,o.jsx)(n.h2,{id:"build-status-badge",children:"Build Status Badge"}),"\n",(0,o.jsxs)(n.p,{children:["To generate real-time badge on image build status, we could use an\n",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge",children:"approach"}),"\nthat GitHub supports out-of-the-box."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(6540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);