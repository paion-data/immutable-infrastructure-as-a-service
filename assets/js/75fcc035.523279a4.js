"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[1163],{9420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var l=t(4848),i=t(8453),r=t(1470),s=t(9365);const a={slug:"yml-and-md-style-checks",title:"Performing Style Check on YAML & Markdown Files and Link Check",authors:["jiaqi"],tags:["CI/CD","GitHub","Code Style"]},o=void 0,c={permalink:"/blog/yml-and-md-style-checks",editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/blog/2024-04-08-yml-md-style-and-link-checks.mdx",source:"@site/blog/2024-04-08-yml-md-style-and-link-checks.mdx",title:"Performing Style Check on YAML & Markdown Files and Link Check",description:"Inspired by Sous Chefs, hashicorp-aws",date:"2024-04-08T00:00:00.000Z",formattedDate:"April 8, 2024",tags:[{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"GitHub",permalink:"/blog/tags/git-hub"},{label:"Code Style",permalink:"/blog/tags/code-style"}],readingTime:2.51,hasTruncateMarker:!1,authors:[{name:"Jiaqi Liu",title:"Maintainer of hashicorp-aws",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"yml-and-md-style-checks",title:"Performing Style Check on YAML & Markdown Files and Link Check",authors:["jiaqi"],tags:["CI/CD","GitHub","Code Style"]},unlisted:!1,prevItem:{title:"UI Code Style",permalink:"/blog/ui-code-style"},nextItem:{title:"Reusable GitHub Action - Posting GitHub Secrets",permalink:"/blog/github-secret-action"}},u={authorsImageUrls:[void 0]},d=[{value:"(Optional) Overriding Default Configurations",id:"optional-overriding-default-configurations",level:2},{value:"YAML File Style Check",id:"yaml-file-style-check",level:3},{value:"Markdown File Style Check",id:"markdown-file-style-check",level:3},{value:"Broken Link Check",id:"broken-link-check",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Inspired by ",(0,l.jsx)(n.a,{href:"https://github.com/sous-chefs/.github/blob/main/.github/workflows/lint-unit.yml",children:"Sous Chefs"}),", hashicorp-aws\noffers a ",(0,l.jsx)(n.a,{href:"https://docs.github.com/en/actions/using-workflows/reusing-workflows",children:"reusable workflow"})," that performs the\nfollowing code style checks:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/actionshub/yamllint",children:"YAML file style check"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/actionshub/markdownlint",children:"Markdown file style check"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/lycheeverse/lychee-action",children:"Broken link check"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Example Usage:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\njobs:\n  yml-md-style-and-link-checks:\n    uses: QubitPi/hashicorp-aws/.github/workflows/yml-md-style-and-link-checks.yml@master\n'})}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["The example above is all we need to run the 3 checks. The workflow has default configurations, which can be\n",(0,l.jsx)(n.a,{href:"#optional-overriding-default-configurations",children:"overridden"})]}),(0,l.jsx)(n.p,{children:"The configurations of the composing checks can be configured regularly by following their respective GitHub Actions\ndocumentations. The following sections discusses the configuration by example."})]}),"\n",(0,l.jsx)(n.h2,{id:"optional-overriding-default-configurations",children:"(Optional) Overriding Default Configurations"}),"\n",(0,l.jsx)(n.h3,{id:"yaml-file-style-check",children:"YAML File Style Check"}),"\n",(0,l.jsx)(n.p,{children:"The default YAML style configurations is"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"---\nextends: default\nrules:\n  line-length:\n    max: 256\n    level: warning\n  document-start: disable\n  braces:\n    forbid: false\n    min-spaces-inside: 0\n    max-spaces-inside: 1\n    min-spaces-inside-empty: -1\n    max-spaces-inside-empty: -1\n"})}),"\n",(0,l.jsxs)(n.p,{children:["To override the default configuration, create a file named ",(0,l.jsx)(n.strong,{children:".yamllint"})," at the root of the downstream project and\nconfigure the workflow with ",(0,l.jsx)(n.code,{children:"use-custom-yamllint-config-file"})," option set to ",(0,l.jsx)(n.code,{children:"true"}),". For example"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\njobs:\n  yml-md-style-and-link-checks:\n    uses: QubitPi/hashicorp-aws/.github/workflows/yml-md-style-and-link-checks.yml@master\n    with:\n      use-custom-yamllint-config-file: true\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["More configuration options can be found at ",(0,l.jsx)(n.a,{href:"https://yamllint.readthedocs.io/en/stable/",children:"yamllint documentation"})]})}),"\n",(0,l.jsx)(n.h3,{id:"markdown-file-style-check",children:"Markdown File Style Check"}),"\n",(0,l.jsx)(n.p,{children:"The configurations of markdown file style check are splitted into 2 config files whose default configurations\nare"}),"\n","\n","\n",(0,l.jsxs)(r.A,{children:[(0,l.jsxs)(s.A,{value:".mdlrc",label:".mdlrc",default:!0,children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'rules "~MD002", "~MD003", "~MD005", "~MD007", "~MD013", "~MD022", "~MD024", "~MD029", "~MD033", "~MD034", "~MD036", "~MD041"\nstyle "#{File.dirname(__FILE__)}/markdownlint.rb"\n'})}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["In the example above, the first line above ",(0,l.jsx)(n.em,{children:"excludes"}),"\n",(0,l.jsx)(n.a,{href:"https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md",children:"specified rules"}),". The second line specifies the\nrule configuration file (",(0,l.jsx)(n.code,{children:"markdownlint.rb"}),"). For more native config options, please refer to\n",(0,l.jsx)(n.a,{href:"https://github.com/markdownlint/markdownlint/blob/main/docs/configuration.md",children:"its documentations"})]})})]}),(0,l.jsxs)(s.A,{value:"markdownlint.rb",label:"markdownlint.rb",children:[(0,l.jsxs)(n.p,{children:["We may need to adjust certain settings of some single rule by having another file named ",(0,l.jsx)(n.code,{children:"markdownlint.rb"}),":"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ruby",children:"all\nrule 'MD003', style: :setext_with_atx\nrule 'MD004', style: :sublist\nrule 'MD013', line_length: 120\nrule 'MD029', style: :ordered\n"})}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["More info about rule config can be found in\n",(0,l.jsx)(n.a,{href:"https://github.com/markdownlint/markdownlint/blob/main/docs/creating_rules.md",children:"its documentation"})," and\n",(0,l.jsx)(n.a,{href:"https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md",children:"its comprehensive rule list"})]})})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Create files named ",(0,l.jsx)(n.code,{children:".mdlrc"})," and ",(0,l.jsx)(n.code,{children:"markdownlint.rb"})," at the root of the project and add ",(0,l.jsx)(n.code,{children:"use-custom-mdlrc-config-file"})," and\n",(0,l.jsx)(n.code,{children:"use-custom-markdownlint-config-file"})," options to the workflow file like so:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\njobs:\n  yml-md-style-and-link-checks:\n    uses: QubitPi/hashicorp-aws/.github/workflows/yml-md-style-and-link-checks.yml@master\n    with:\n      use-custom-mdlrc-config-file: true\n      use-custom-markdownlint-config-file: true\n'})}),"\n",(0,l.jsx)(n.h3,{id:"broken-link-check",children:"Broken Link Check"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.a,{href:"https://github.com/lycheeverse/lychee-action",children:"Broken link check"})," pretty much configures everything for us, so we don't need to configure anything unless we\nneed to exclude\n",(0,l.jsx)(n.a,{href:"https://github.com/lycheeverse/lychee-action#excluding-links-from-getting-checked",children:"links"})," or\n",(0,l.jsx)(n.a,{href:"https://github.com/lycheeverse/lychee-action",children:"file"})," by regular expression. hashicorp-aws defaults to exclude all\nrelative file links with the following default:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ignore",metastring:'title=".lycheeignore"',children:"file:///*\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["The ignore rule in the example above skips checks of all relative links among files. This is common in\n",(0,l.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/links",children:"Docusaurus"}),"-based documentation"]})}),"\n",(0,l.jsxs)(n.p,{children:["If we don't need such default, we would simply create a ",(0,l.jsx)(n.code,{children:".lycheeignore"})," file at our project root and setting\n",(0,l.jsx)(n.code,{children:"use-custom-lycheeignore-file"})," to ",(0,l.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:'name: CI/CD\n\n"on":\n  pull_request:\n  push:\n    branches:\n      - master\n\njobs:\n  yml-md-style-and-link-checks:\n    uses: QubitPi/hashicorp-aws/.github/workflows/yml-md-style-and-link-checks.yml@master\n    with:\n      use-custom-lycheeignore-file: true\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var l=t(53);const i={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(i.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var l=t(6540),i=t(53),r=t(3104),s=t(6347),a=t(205),o=t(7485),c=t(1682),u=t(9466);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:i}}=e;return{value:n,label:t,attributes:l,default:i}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[c,d]=f({queryString:t,groupId:i}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,u.Dv)(t);return[i,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),g=(()=>{const e=c??p;return m({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(4848);function y(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),i=a[t].value;i!==l&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=p(e);return(0,k.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,k.jsx)(y,{...e,...n}),(0,k.jsx)(x,{...e,...n})]})}function j(e){const n=(0,b.A)();return(0,k.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var l=t(6540);const i={},r=l.createContext(i);function s(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);