"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[8573],{2125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(3860),s=t(5639);const r={slug:"version-bump",title:"Bumping Semantic Version by GitHub Tag",authors:["jiaqi"],tags:["CI/CD","GitHub","Frontend"]},o=void 0,a={permalink:"/blog/version-bump",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2024-04-19-version-bump/index.md",source:"@site/blog/2024-04-19-version-bump/index.md",title:"Bumping Semantic Version by GitHub Tag",description:"We offer a convenient versioning management approach for releasing software on GitHub.",date:"2024-04-19T00:00:00.000Z",formattedDate:"April 19, 2024",tags:[{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"GitHub",permalink:"/blog/tags/git-hub"},{label:"Frontend",permalink:"/blog/tags/frontend"}],readingTime:.81,hasTruncateMarker:!0,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"version-bump",title:"Bumping Semantic Version by GitHub Tag",authors:["jiaqi"],tags:["CI/CD","GitHub","Frontend"]},unlisted:!1,prevItem:{title:"Testing HashiCorp Terraform",permalink:"/blog/testing-hashicorp-terraform"},nextItem:{title:"Cypress E2E Tests",permalink:"/blog/cypress-e2e"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const n={admonition:"admonition",code:"code",em:"em",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We offer a convenient versioning management approach for releasing software on GitHub."}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["The GitHub repository must grant ",(0,i.jsx)(n.em,{children:"write"})," access to this workflow permission, i.e. navigate to ",(0,i.jsx)(n.strong,{children:"Settings"})," ->\n",(0,i.jsx)(n.strong,{children:"Actions"})," -> ",(0,i.jsx)(n.strong,{children:"General"}),"; under ",(0,i.jsx)(n.em,{children:"Workflow permissions"})," make sure ",(0,i.jsx)(n.strong,{children:"Read and write permissions"})," is checked:"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Error loading permissions.png",src:t(2308).Z+"",width:"3584",height:"2763"})})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Manually create the first tag:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'git tag -a v0.0.1 -m "v0.0.1"\ngit push origin v0.0.1\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a pull request that adds the following job to GitHub Action"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\"on\":\n  pull_request:\n  push:\n    branches:\n      - master\n\njobs:\n  push-release-tag:\n    if: github.ref == 'refs/heads/master'\n    uses: QubitPi/hashicorp-aws/.github/workflows/version-bump.yml@master\n    with:\n      user: QubitPi\n      email: jack20220723@gmail.com\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["When the pull request is merged, the version bump action will automatically create and push a new version tag of\n",(0,i.jsx)(n.code,{children:"MAJOR"}),".",(0,i.jsx)(n.code,{children:"MINOR"}),".(",(0,i.jsx)(n.code,{children:"PATCH"})," + 1)"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Bumping the ",(0,i.jsx)(n.code,{children:"MAJOR"})," or ",(0,i.jsx)(n.code,{children:"MINOR"})," version still needs to be done manually using ",(0,i.jsx)(n.code,{children:'git tag -a vx.x.x -m "vx.x.x"'})," command\ngiven the assumption that agile software development will change patch version most frequently and almost always"]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2308:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/permission-9df4c3b51745dedb36834b4434be2bc4.png"},5639:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(1733);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);