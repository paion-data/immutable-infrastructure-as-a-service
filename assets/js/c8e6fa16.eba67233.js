"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[117],{7276:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(4848),t=i(8453);const r={sidebar_position:1,title:"General Deployment",description:"Deploying Kong API Gateway via Native HashiCorp Commands"},s="Deploying Kong API Gateway",o={id:"kong-api-gateway/index",title:"General Deployment",description:"Deploying Kong API Gateway via Native HashiCorp Commands",source:"@site/docs/kong-api-gateway/index.md",sourceDirName:"kong-api-gateway",slug:"/kong-api-gateway/",permalink:"/docs/kong-api-gateway/",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/kong-api-gateway/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"General Deployment",description:"Deploying Kong API Gateway via Native HashiCorp Commands"},sidebar:"docSidebar",previous:{title:"Kong API Gateway",permalink:"/docs/category/kong-api-gateway"},next:{title:"Deployment via Screwdriver CD",permalink:"/docs/kong-api-gateway/screwdriver-cd-deployment"}},c={},l=[{value:"General Deployments",id:"general-deployments",level:2},{value:"Defining Packer Variables",id:"defining-packer-variables",level:3},{value:"Defining Terraform Variables",id:"defining-terraform-variables",level:3},{value:"Building AMI Image",id:"building-ami-image",level:3},{value:"Deploying to EC2",id:"deploying-to-ec2",level:3},{value:"Deployment via Screwdriver CD",id:"deployment-via-screwdriver-cd",level:2},{value:"Deployment via IICP",id:"deployment-via-iicp",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"deploying-kong-api-gateway",children:"Deploying Kong API Gateway"}),"\n",(0,n.jsxs)(a.p,{children:["IIaaS deploys ",(0,n.jsx)(a.a,{href:"https://github.com/paion-data/docker-kong",children:"Kong API Gateway"})," in the following way:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Deploys ",(0,n.jsx)(a.a,{href:"https://github.com/paion-data/docker-kong",children:"Kong API Gateway"})," in ",(0,n.jsx)(a.strong,{children:"HTTP"})," mode"]}),"\n",(0,n.jsxs)(a.li,{children:["Deploys a reverse proxy Nginx in front of the ",(0,n.jsx)(a.a,{href:"https://github.com/paion-data/docker-kong",children:"Kong API Gateway"})," in the same EC2 to redirect all HTTPS request to\ngateway's ",(0,n.jsx)(a.a,{href:"https://docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"corresponding"})," HTTP ports"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"The diagrams below illustrates the resulting deployment"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Error loading kong-deployment-diagram.png",src:i(8952).A+"",width:"2778",height:"728"})}),"\n",(0,n.jsx)(a.h2,{id:"general-deployments",children:"General Deployments"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["Please complete the ",(0,n.jsx)(a.a,{href:"../setup#setup",children:"general setup"})," before proceeding."]})}),"\n",(0,n.jsxs)(a.admonition,{title:"Supporting HTTPS Protocol",type:"tip",children:[(0,n.jsxs)(a.p,{children:["IIaaS uses a ",(0,n.jsx)(a.a,{href:"https://github.com/paion-data/docker-kong",children:"customized fork of docker-kong"})," to\n",(0,n.jsx)(a.a,{href:"https://github.com/QubitPi/docker-kong/pull/1",children:"fully separate the app and SSL"}),", and, therefore, the Nginx config needs\nmultiple ",(0,n.jsx)(a.a,{href:"https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/",children:"servers"}),"\nto ensure all HTTPS ports are mapped to their corresponding HTTP ports as shown in the config snippet below:"]}),(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsxs)(a.p,{children:["All relevant HTTP and HTTPS ports are listed in ",(0,n.jsx)(a.a,{href:"https://docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"Kong's documentation here"}),". In general,\nour Nginx should **listen on an HTTPS port and ",(0,n.jsx)(a.code,{children:"proxy_pass"})," to an HTTP port. For example, ports 8443 and 8444 are\n",(0,n.jsx)(a.code,{children:"proxy_pass"}),"ed to 8000 and 8001, respectively, both of which are listed in the doc."]}),(0,n.jsx)(a.p,{children:"One special case is HTTP port 8000, which is the redirect port. hashicorp-aws maps the standard SSL 443 port to 8000 so\nthat any downstream (such as UI web app) simply needs to hit the domain without specifying port number and have its\nrequest be reidrected to upstream services (such as database webservice)"}),(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Error loading kong-ports-diagram.png",src:i(932).A+"",width:"1662",height:"1064"})})]})]}),"\n",(0,n.jsx)(a.h3,{id:"defining-packer-variables",children:"Defining Packer Variables"}),"\n",(0,n.jsxs)(a.p,{children:["Create a [HashiCorp Packer variable values file] named ",(0,n.jsx)(a.strong,{children:"ali-kong.auto.pkrvars.hcl"})," under\n",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/images",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images"})})," directory with the following contents:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-hcl",metastring:'title="immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images/aws-kong.auto.pkrvars.hcl"',children:'ali_image_name          = "my-kong-ecs"\ninstance_type           = "my-kong-ami"\nregion                  = "cn-shenzhen"\nssl_cert_source         = "/path/to/ssl.crt"\nssl_cert_key_source     = "/path/to/ssl.key"\nkong_api_gateway_domain = "gateway.mycompany.com"\n'})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"ali_image_name"})," is the ",(0,n.jsx)(a.a,{href:"https://www.alibabacloud.com/product/ecs",children:"Alicloud ECS"})," image name, which can be either English or Chinese characters. It can begin\nwith an uppercase/lowercase letter or a Chinese character, and may contain numbers, ",(0,n.jsx)(a.code,{children:"_"})," or ",(0,n.jsx)(a.code,{children:"-"}),", but cannot begin with\n",(0,n.jsx)(a.code,{children:"http://"})," or ",(0,n.jsx)(a.code,{children:"https://"})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"instance_type"})," is the ",(0,n.jsx)(a.a,{href:"https://www.alibabacloud.com/help/doc-detail/25378.htm",children:"type of the machine"})," for building the ECS image."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"region"})," is the ",(0,n.jsx)(a.a,{href:"https://www.alibabacloud.com/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones",children:"Alicloud region ID"})," which hosts the ECS instance that is used to build the image."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"ssl_cert_source"})," is the absolute path or the path relative to\n",(0,n.jsx)(a.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/images",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images"})," of the ",(0,n.jsx)(a.a,{href:"../setup#ssl",children:"SSL certificate file"}),"\nfor the Kong API Gateway domain"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"ssl_cert_key_source"})," is the absolute path or the path relative to\n",(0,n.jsx)(a.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/images",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images"})," of the\n",(0,n.jsx)(a.a,{href:"../setup#ssl",children:"SSL certificate key file"})," for the Kong API Gateway domain"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.code,{children:"kong_api_gateway_domain"})," is the SSL-enabled domain that will serve the\n",(0,n.jsx)(a.a,{href:"https://docs.konghq.com/gateway/latest/production/networking/default-ports/",children:"various ports of Kong gateway"})]}),"\n",(0,n.jsx)(a.li,{}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"defining-terraform-variables",children:"Defining Terraform Variables"}),"\n",(0,n.jsxs)(a.p,{children:["Create a ",(0,n.jsx)(a.a,{href:"https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," named ",(0,n.jsx)(a.strong,{children:"ali-kong.auto.tfvars"})," under\n",(0,n.jsx)(a.strong,{children:(0,n.jsx)(a.a,{href:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/hashicorp/kong-api-gateway/instances",children:"immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/instances"})})," directory with the following contents:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-hcl",metastring:'title="immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/instances/ali-kong.auto.tfvars"',children:"image_id        =\nvswitch_id      =\ninstance_type   =\ninstance_name   =\nsecurity_groups =\n"})}),"\n",(0,n.jsx)(a.h3,{id:"building-ami-image",children:"Building AMI Image"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'cd immutable-infrastructure-as-a-service/hashicorp/kong-api-gateway/images\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})}),"\n",(0,n.jsx)(a.h3,{id:"deploying-to-ec2",children:"Deploying to EC2"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"cd ../instances\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})}),"\n",(0,n.jsx)(a.h2,{id:"deployment-via-screwdriver-cd",children:"Deployment via Screwdriver CD"}),"\n",(0,n.jsxs)(a.p,{children:["IIaaS supports deployment using ",(0,n.jsx)(a.a,{href:"screwdriver-cd-deployment",children:"Screwdriver CD"}),". Please check it out."]}),"\n",(0,n.jsx)(a.h2,{id:"deployment-via-iicp",children:"Deployment via IICP"}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsx)(a.p,{children:"Please try our IICP platform to deploy a Kong instance. It gives us one-click experience that helps us stand up an API\ngateway in a minute."})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8952:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/kong-deployment-diagram-0e603dd1e4fb96d8c09f228e1ff31894.png"},932:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/kong-ports-diagram-94dd812152799d6acdc342b76be0588a.png"},8453:(e,a,i)=>{i.d(a,{R:()=>s,x:()=>o});var n=i(6540);const t={},r=n.createContext(t);function s(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);