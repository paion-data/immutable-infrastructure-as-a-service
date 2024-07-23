"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6549],{4875:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(3860),a=s(7910);const t={sidebar_position:1,title:"General Deployment"},r="Deploying Sonatype Nexus Repository",o={id:"sonatype-nexus-repository/index",title:"General Deployment",description:"hashicorp-aws deploys [Sonatype Nexus Repository] in the following way:",source:"@site/docs/sonatype-nexus-repository/index.md",sourceDirName:"sonatype-nexus-repository",slug:"/sonatype-nexus-repository/",permalink:"/zh-cn/docs/sonatype-nexus-repository/",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/sonatype-nexus-repository/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"General Deployment"},sidebar:"docSidebar",previous:{title:"Sonatype Nexus Repository",permalink:"/zh-cn/docs/category/sonatype-nexus-repository"},next:{title:"Deployment via Screwdriver CD",permalink:"/zh-cn/docs/sonatype-nexus-repository/screwdriver-cd-deployment"}},l={},c=[{value:"General Deployments",id:"general-deployments",level:2},{value:"Defining Packer Variables",id:"defining-packer-variables",level:3},{value:"Building AMI Image",id:"building-ami-image",level:3},{value:"Defining Terraform Variables",id:"defining-terraform-variables",level:3},{value:"Deploying to EC2",id:"deploying-to-ec2",level:3},{value:"Deployment via Screwdriver CD",id:"deployment-via-screwdriver-cd",level:2},{value:"Deployment via HACP",id:"deployment-via-hacp",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deploying-sonatype-nexus-repository",children:"Deploying Sonatype Nexus Repository"}),"\n",(0,i.jsxs)(n.p,{children:["hashicorp-aws deploys ",(0,i.jsx)(n.a,{href:"https://github.com/QubitPi/docker-nexus3",children:"Sonatype Nexus Repository"})," in the following way:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Deploys ",(0,i.jsx)(n.a,{href:"https://github.com/QubitPi/docker-nexus3",children:"Sonatype Nexus Repository"})," in ",(0,i.jsx)(n.strong,{children:"HTTP"})," mode"]}),"\n",(0,i.jsxs)(n.li,{children:["Deploys a reverse proxy Nginx in front of the ",(0,i.jsx)(n.a,{href:"https://github.com/QubitPi/docker-nexus3",children:"Sonatype Nexus Repository"})," in the same EC2 to redirect all HTTPS\nrequest to its ",(0,i.jsx)(n.a,{href:"https://help.sonatype.com/en/network-configuration.html#network-configuration-in-nexus-repository-2",children:"8081"})," HTTP port"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general-deployments",children:"General Deployments"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Please complete the ",(0,i.jsx)(n.a,{href:"../setup#setup",children:"general setup"})," before proceeding."]})}),"\n",(0,i.jsx)(n.h3,{id:"defining-packer-variables",children:"Defining Packer Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.a,{href:"https://packer.qubitpi.org/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable values file"}),' named "aws-kong.auto.pkrvars.hcl" under\n',(0,i.jsx)(n.strong,{children:"hashicorp-aws/hashicorp/sonatype-nexus-repository/images/aws"})," directory with the following contents:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",metastring:'title="hashicorp-aws/hashicorp/sonatype-nexus-repository/images/aws/aws.auto.pkrvars.hcl"',children:'ami_region                       = "us-west-2"\nami_name                         = "my-nexus-ami"\ninstance_type                    = "t2.small"\nsonatype_nexus_repository_domain = "nexus.mycompany.com"\nssl_cert_base64                  = "YXNkZnNnaHRkeWhyZXJ3ZGZydGV3ZHNmZ3RoeTY0cmV3ZGZyZWd0cmV3d2ZyZw=="\nssl_cert_key_base64              = "MzI0NXRnZjk4dmJoIGNsO2VbNDM1MHRdzszNDM1b2l0cmo="\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ami_region"})," is the ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"image region"})," where Nexus ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," will be published to. The\npublished image will be ",(0,i.jsx)(n.em,{children:"private"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ami_name"})," is the name of the resulting AMI that will appear when managing AMIs in the AWS console or via APIs. This\ncan be the same across builds, because hashicorp-aws will deregister the old AMI with the same name and replace it\nwith the current built one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"instance_type"})," The ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," to use while ",(0,i.jsx)(n.em,{children:"building"})," the AMI"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sonatype_nexus_repository_domain"})," is the SSL-enabled domain that will serve the deployed HTTP Nexus instance"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ssl_cert_base64"})," is a ",(0,i.jsx)(n.strong,{children:"base64 encoded"})," string of the content of\n",(0,i.jsx)(n.a,{href:"../setup#optional-setup-ssl",children:"SSL certificate file"})," for the SSL-enabled domain, i.e. ",(0,i.jsx)(n.code,{children:"nexus.mycompany.com"})," given\nthe ",(0,i.jsx)(n.code,{children:"sonatype_nexus_repository_domain"})," is ",(0,i.jsx)(n.code,{children:"nexus.mycompany.com"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ssl_cert_key_base64"})," is a ",(0,i.jsx)(n.strong,{children:"base64 encoded"})," string of the content of\n",(0,i.jsx)(n.a,{href:"../setup#optional-setup-ssl",children:"SSL certificate file"})," for the SSL-enabled domain, i.e. ",(0,i.jsx)(n.code,{children:"nexus.mycompany.com"})," given\nthe kong-api-gateway-domain is ",(0,i.jsx)(n.code,{children:"nexus.mycompany.com"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"building-ami-image",children:"Building AMI Image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd hashicorp-aws\n\ncp hashicorp/common/images/aws/aws-builder.pkr.hcl hashicorp/sonatype-nexus-repository/images/aws\ncp hashicorp/common/images/aws/aws-packer.pkr.hcl hashicorp/sonatype-nexus-repository/images/aws\n\ncd hashicorp/sonatype-nexus-repository/images/aws\npacker init .\npacker validate .\npacker build .\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"EBS volumes during build time will [automatically be removed][HashiCorp Packer delete_on_termination]"})}),"\n",(0,i.jsx)(n.p,{children:"This will take a while and to save time, we can leave it here and proceed immediately to the next step."}),"\n",(0,i.jsx)(n.h3,{id:"defining-terraform-variables",children:"Defining Terraform Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.a,{href:"https://terraform.qubitpi.org/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"}),' named "aws.auto.tfvars" under\n',(0,i.jsx)(n.strong,{children:"hashicorp-aws/hashicorp/sonatype-nexus-repository/instances/aws"})," directory with the following contents:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-hcl",metastring:'title="hashicorp-aws/hashicorp/sonatype-nexus-repository/instances/aws/aws.auto.tfvars"',children:'aws_ec2_region   = "us-west-2"\nami_name         = "my-nexus-ami"\ninstance_type    = "t2.medium"\ninstance_name    = "My Nexus"\nsecurity_groups  = ["My Nexus Security Group A", "My Nexus Security Group B", "My Nexus Security Group C"]\nroute_53_zone_id = "MBS8YLKZML18VV2E8M8OK"\ndomain           = "nexus.mycompany.com"\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"aws_ec2_region"})," is the ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})," where Kong will be deployed into"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ami_name"})," is the name of the published AMI; ",(0,i.jsxs)(n.strong,{children:["it must be the same as the ",(0,i.jsx)(n.code,{children:"ami_name"})," in\n",(0,i.jsx)(n.a,{href:"#defining-packer-variables",children:"Packer variable file"})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"instance_type"})," is the ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," used for deployed Nexus"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"security_groups"})," is the list of ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,i.jsx)(n.em,{children:"names"})," to associate with (yes, not ID, but name...)"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The standard HTTPS port 443 need to be open by configuring the inbound rules"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"sonatype_nexus_repository_domain"})," is the SSL-enabled domain that will serve the Nexus"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"route_53_zone_id"})," is the AWS Route 53 hosted Zone ID that hosts the domain ",(0,i.jsx)(n.code,{children:"nexus.mycompany.com"})]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"To find the zone ID in AWS Route 53, we can:"}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Sign in to the AWS Management Console"}),"\n",(0,i.jsxs)(n.li,{children:["Open the Route 53 console at ",(0,i.jsx)(n.a,{href:"https://console.aws.amazon.com/route53/",children:"https://console.aws.amazon.com/route53/"})]}),"\n",(0,i.jsx)(n.li,{children:"Select Hosted zones in the navigation pane"}),"\n",(0,i.jsx)(n.li,{children:"Find the requested ID in the top level Hosted Zones summary in the Route 53 section"}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"deploying-to-ec2",children:"Deploying to EC2"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Depending on the ",(0,i.jsx)(n.a,{href:"#defining-packer-variables",children:"AMI"})," and ",(0,i.jsx)(n.a,{href:"#defining-terraform-variables",children:"EC2"})," configs, ",(0,i.jsx)(n.strong,{children:"please be aware AWS credit charges shall incur after the following\ncommands execute"})]})}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.a,{href:"#building-ami-image",children:"AMI image finishes building"}),", we can go ahead to deploy that image as an EC2 instance:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ../../instances/aws\n\ncp ../../../common/instances/aws/aws-ec2.tf .\ncp ../../../common/instances/aws/aws-ssl.tf .\ncp ../../../common/instances/aws/aws-terraform.tf .\n\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})}),"\n",(0,i.jsx)(n.h2,{id:"deployment-via-screwdriver-cd",children:"Deployment via Screwdriver CD"}),"\n",(0,i.jsxs)(n.p,{children:["hashicorp-aws supports deployment using ",(0,i.jsx)(n.a,{href:"screwdriver-cd-deployment",children:"Screwdriver CD"}),". Please check it out. ",(0,i.jsx)("img",{src:"https://github.com/QubitPi/QubitPi/blob/master/img/8%E5%A5%BD.gif?raw=true",height:"40px"})]}),"\n",(0,i.jsx)(n.h2,{id:"deployment-via-hacp",children:"Deployment via HACP"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Please try our HACP platform to deploy a Nexus instance. It gives us one-click experience that helps us stand up a\nsoftware artifactory in a minute."})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7910:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var i=s(1733);const a={},t=i.createContext(a);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);