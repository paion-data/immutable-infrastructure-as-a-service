"use strict";(self.webpackChunkhashicorp_aws=self.webpackChunkhashicorp_aws||[]).push([[8740],{8571:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var n=i(4848),a=i(8453);const t={sidebar_position:1,title:"General Deployment"},r=void 0,l={id:"elk/index",title:"General Deployment",description:"Operations and SRE teams can use [hashicorp-aws] to safely manage ELK deployment using infrastructure as code",source:"@site/docs/elk/index.md",sourceDirName:"elk",slug:"/elk/",permalink:"/docs/elk/",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/hashicorp-aws/tree/master/docs/docs/elk/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"General Deployment"},sidebar:"tutorialSidebar",previous:{title:"ELK",permalink:"/docs/category/elk"},next:{title:"Deployment via Screwdriver CD",permalink:"/docs/elk/screwdriver-cd-deployment"}},o={},h=[{value:"General Deployments",id:"general-deployments",level:2},{value:"Defining Packer Variables",id:"defining-packer-variables",level:3},{value:"Defining Terraform Variables",id:"defining-terraform-variables",level:3},{value:"Building AMI Image",id:"building-ami-image",level:3},{value:"Deploying to EC2",id:"deploying-to-ec2",level:3},{value:"Post Setup in EC2 Instance",id:"post-setup-in-ec2-instance",level:3},{value:"Logstash",id:"logstash",level:4},{value:"Deployment via Screwdriver CD",id:"deployment-via-screwdriver-cd",level:2},{value:"Deployment via GitHub Actions",id:"deployment-via-github-actions",level:2},{value:"Deployment via HACP",id:"deployment-via-hacp",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Operations and SRE teams can use ",(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/hashicorp-aws/",children:"hashicorp-aws"})," to safely manage ELK deployment using infrastructure as code\nmethodology, which allows us to peer-reviewed infrastructure changes in an automated and controlled fashion."]}),"\n",(0,n.jsx)(s.admonition,{title:"What is the ELK Stack?",type:"info",children:(0,n.jsxs)(s.p,{children:["The ELK stack is an acronym used to describe a stack that comprises three popular projects: ",(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/elasticsearch/",children:"Elasticsearch"}),",\n",(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/logstash/",children:"Logstash"}),", and ",(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/kibana/",children:"Kibana"}),". Often referred to as Elasticsearch, the ELK stack gives us the ability to aggregate logs from\nall our systems and applications, analyze these logs, and create visualizations for application and infrastructure\nmonitoring, faster troubleshooting, security analytics, and more."]})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsxs)(s.strong,{children:["Assuming ELK is a ",(0,n.jsx)(s.em,{children:"non-frequently deployed"})," tech asset, ",(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/hashicorp-aws/",children:"hashicorp-aws"})," makes it a semi-automated deployment"]}),"."]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/hashicorp-aws/",children:"hashicorp-aws"})," deploys ELK as a ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/ec2/instance-types/t2/",children:"t2.large"})," instance. This is because all\nElasticsearch, Kibana, and Logstash are contained in it, which can cause\n",(0,n.jsx)(s.a,{href:"https://stackoverflow.com/a/50022217",children:"performance issue"})," in small instance. ",(0,n.jsx)(s.em,{children:"t2.large"}),", by experiment, is the smallest\nsize that supports smooth runtime. For that, ",(0,n.jsx)(s.strong,{children:"please be aware AWS credit charges shall incur afterward"})]})}),"\n",(0,n.jsx)(s.p,{children:"hashicorp-aws deploys ELK in the following way:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Deploys all components of ELK in ",(0,n.jsx)(s.strong,{children:"HTTP"})," mode"]}),"\n",(0,n.jsx)(s.li,{children:"Deploys a reverse proxy Nginx in front of the ELK in the same EC2 to redirect all HTTPS request to ELK's\ncorresponding HTTP ports"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The diagram below illustrates the resulting deployment"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Error loading elk-deployment-diagram.png",src:i(1081).A+"",width:"1404",height:"994"})}),"\n",(0,n.jsx)(s.h2,{id:"general-deployments",children:"General Deployments"}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Please complete the ",(0,n.jsx)(s.a,{href:"../setup#setup",children:"general setup"})," before proceeding."]})}),"\n",(0,n.jsx)(s.admonition,{title:"Supporting HTTPS Protocol",type:"tip",children:(0,n.jsxs)(s.p,{children:["We offer a ",(0,n.jsx)(s.a,{href:"../setup#optional-setup-ssl",children:"Nginx config file"})," template.\n",(0,n.jsx)(s.a,{href:"https://github.com/QubitPi/hashicorp-aws/blob/master/hashicorp/elk/images/nginx-ssl.conf",children:"This template"})," will be used\nby hashicorp-aws by default"]})}),"\n",(0,n.jsx)(s.h3,{id:"defining-packer-variables",children:"Defining Packer Variables"}),"\n",(0,n.jsxs)(s.p,{children:["Create a ",(0,n.jsx)(s.a,{href:"https://packer.qubitpi.org/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable values file"})," named ",(0,n.jsx)(s.strong,{children:"aws-elk.pkrvars.hcl"})," under\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/elk/images",children:"hashicorp-aws/hashicorp/elk/images"})})," with the following contents:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-hcl",metastring:'title="hashicorp-aws/hashicorp/elk/images/aws-elk.auto.pkrvars.hcl"',children:'ami_region             = "us-east-2"\nami_name               = "my-elk-ami"\nssl_cert_file_path     = "/path/to/ssl.crt"\nssl_cert_key_file_path = "/path/to/ssl.key"\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ami_region"})," is the ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"region"})," where ELK ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," will be published to. The published image will be\n",(0,n.jsx)(s.em,{children:"private"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ami_name"})," is the published ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AMI"})," name; it can be arbitrary"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ssl_cert_file_path"})," is the absolute path or the path relative to ",(0,n.jsx)(s.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/elk/images",children:"hashicorp-aws/hashicorp/elk/images"})," of\nthe ",(0,n.jsx)(s.a,{href:"../setup#optional-setup-ssl",children:"SSL certificate file"})," for the domain serving the ELK EC2 instance"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"ssl_cert_key_file_path"}),"  is the absolute path or the path relative to ",(0,n.jsx)(s.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/elk/images",children:"hashicorp-aws/hashicorp/elk/images"})," of the ",(0,n.jsx)(s.a,{href:"../setup#optional-setup-ssl",children:"SSL certificate key file"})," for the domain serving the ELK EC2 instance"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"defining-terraform-variables",children:"Defining Terraform Variables"}),"\n",(0,n.jsxs)(s.p,{children:["Create a ",(0,n.jsx)(s.a,{href:"https://terraform.qubitpi.org/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," named ",(0,n.jsx)(s.strong,{children:"aws-elk.tfvars"})," under\n**",(0,n.jsx)(s.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/elk/instances",children:"hashicorp-aws/hashicorp/elk/instances"}),"**with the following contents:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-hcl",metastring:'title="hashicorp-aws/hashicorp/elk/instances/aws-elk.auto.tfvars"',children:'aws_ec2_region = "us-east-2"\nami_name          = "my-elk-ami"\ninstance_name     = "My ELK instance"\nkey_pair_name     = "My AWS keypair name"\nsecurity_groups   = ["My ELK Security Group"]\nelk_domain         = "myelk.mycompany.com"\nroute_53_zone_id  = "9DQXLTNSN7ZX9P8V2KZII"\n'})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"aws_ec2_region"})," is the ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})," where ELK EC2 instance will be deployed into"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ami_name"})," is the name of the published AMI; ",(0,n.jsxs)(s.strong,{children:["it must be the same as the ",(0,n.jsx)(s.code,{children:"ami_name"})," in\n",(0,n.jsx)(s.a,{href:"#defining-packer-variables",children:"Packer variable file"})]})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"key_pair_name"})," is the name of\n",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html",children:"AWS EC2 key pair"})," bound to this ELK instance.\nWe will use this key pair to later ssh into the ELK to for ",(0,n.jsx)(s.a,{href:"#post-setup-in-ec2-instance",children:"post setup discussed below"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"security_groups"})," is the list of ",(0,n.jsx)(s.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,n.jsx)(s.em,{children:"names"})," to associate with (yes, not ID, but name...)"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"elk_domain"})," is the SSL-enabled domain that will serve various ELK endpoints, such as its API and ",(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/kibana/",children:"Kibana UI"})]}),"\n",(0,n.jsxs)(s.admonition,{type:"warning",children:[(0,n.jsxs)(s.p,{children:["hashicorp-aws will bind a ",(0,n.jsx)(s.em,{children:"private"})," IP address to this domain for the following reasons:"]}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://serverfault.com/a/967483",children:"AWS security groups works for private IP only for DNS resolving"}),". Services\nsending logs to ELK can use this domain."]}),"\n",(0,n.jsxs)(s.li,{children:["In the case of internal access, for example developers visiting Kibana UI for debugging purposes, people can still\nuse ",(0,n.jsx)(s.code,{children:"https://public-dns:port"})]}),"\n"]})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"route_53_zone_id"}),' is the AWS Route 53 hosted Zone ID that hosts the domain "myelk.mycompany.com"']}),"\n",(0,n.jsxs)(s.admonition,{type:"tip",children:[(0,n.jsx)(s.p,{children:"To find the zone ID in AWS Route 53, we can:"}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Sign in to the AWS Management Console"}),"\n",(0,n.jsxs)(s.li,{children:["Open the Route 53 console at ",(0,n.jsx)(s.a,{href:"https://console.aws.amazon.com/route53/",children:"https://console.aws.amazon.com/route53/"})]}),"\n",(0,n.jsx)(s.li,{children:"Select Hosted zones in the navigation pane"}),"\n",(0,n.jsx)(s.li,{children:"Find the requested ID in the top level Hosted Zones summary in the Route 53 section"}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"building-ami-image",children:"Building AMI Image"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:'cd hashicorp-aws/hashicorp/elk/images\npacker init .\npacker validate -var "skip_create_ami=true" .\npacker build -var "skip_create_ami=false" .\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Record the ",(0,n.jsxs)(s.strong,{children:["Elasticsearch password (for ",(0,n.jsx)(s.em,{children:"elastic"})," user)"]})," at command line prompt. For example"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"==> install-elk.amazon-ebs.elk: + sudo /usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic\n==> install-elk.amazon-ebs.elk: + yes\n    install-elk.amazon-ebs.elk: This tool will reset the password of the [elastic] user to an autogenerated value.\n    install-elk.amazon-ebs.elk: The password will be printed in the console.\n    install-elk.amazon-ebs.elk:\n    install-elk.amazon-ebs.elk:\n    install-elk.amazon-ebs.elk: Password for the [elastic] user successfully reset.\n    install-elk.amazon-ebs.elk: New value: dsrg34IKHU787iud=dio\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In this case, the password is ",(0,n.jsx)(s.strong,{children:"dsrg34IKHU787iud=dio"})," which is shown in the last line of the output above. ",(0,n.jsx)(s.strong,{children:"We will be\nusing this password in later steps"})," so please keep it securely"]}),"\n",(0,n.jsx)(s.h3,{id:"deploying-to-ec2",children:"Deploying to EC2"}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsxs)(s.p,{children:["Depending on the ",(0,n.jsx)(s.a,{href:"#defining-packer-variables",children:"AMI"})," and ",(0,n.jsx)(s.a,{href:"#defining-terraform-variables",children:"EC2"})," configs, ",(0,n.jsx)(s.strong,{children:"please be aware\nAWS credit charges shall incur after the following commands execute"})]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-console",children:"cd ../instances/\nterraform init\nterraform validate\nterraform apply -auto-approve\n"})}),"\n",(0,n.jsx)(s.h3,{id:"post-setup-in-ec2-instance",children:"Post Setup in EC2 Instance"}),"\n",(0,n.jsx)(s.p,{children:"As we've mentioned in the beginning, this is a semi-deployment and we still need to SSH into the box to manually\ngenerate Kibana token & verification code. This will make the automated deployment logic simple and easy to maintain"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'sudo /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token --scope kibana --url "https://localhost:9200"\nsudo /usr/share/kibana/bin/kibana-verification-code\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Now we can visit ",(0,n.jsx)(s.code,{children:"https://public-dns:port"})," to enter the token and verification code to access our ELK instance."]}),"\n",(0,n.jsx)(s.h4,{id:"logstash",children:"Logstash"}),"\n",(0,n.jsx)(s.p,{children:"Logstash, at this moment, supports redirecting log lines from Filebeat to Elasticsearch and, similar to the\ntoken and verification above, needs to be setup manually."}),"\n",(0,n.jsxs)(s.p,{children:["Create a file named ",(0,n.jsx)(s.strong,{children:"logstash-filebeat.conf"})," in the default location chosen by Logstash:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo nano /usr/share/logstash/logstash-filebeat.conf\n"})}),"\n",(0,n.jsx)(s.p,{children:"Copy and paste the following contents into the file"}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["Replace the ",(0,n.jsx)(s.code,{children:"<password for user 'elastic'>"})," accordingly. If the user is ",(0,n.jsx)(s.em,{children:"elastic"}),", which is the case here, the password\nhas been generated during the ",(0,n.jsx)(s.a,{href:"#building-ami-image",children:"AMI image building phase"})]})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:'input {\n    beats {\n        port => "5044"\n    }\n}\n\noutput {\n    elasticsearch {\n        hosts => [ "https://localhost:9200" ]\n\n        ssl_certificate_verification => false\n\n        user => "elastic"\n\n        password => "<password for user \'elastic\'>"\n    }\n}\n'})}),"\n",(0,n.jsx)(s.p,{children:"Start Logstash with:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo /usr/share/logstash/bin/logstash -f logstash-filebeat.conf --config.reload.automatic\n"})}),"\n",(0,n.jsx)(s.p,{children:"or with nohup at background:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"nohup sudo /usr/share/logstash/bin/logstash -f logstash-filebeat.conf --config.reload.automatic &\n"})}),"\n",(0,n.jsx)(s.h2,{id:"deployment-via-screwdriver-cd",children:"Deployment via Screwdriver CD"}),"\n",(0,n.jsxs)(s.p,{children:["hashicorp-aws also support deployment using ",(0,n.jsx)(s.a,{href:"https://qubitpi.github.io/screwdriver-cd-homepage/",children:"Screwdriver CD"})," with this ",(0,n.jsx)(s.a,{href:"https://github.com/QubitPi/elk-release-definition-template",children:"elk-release-definition-template"})]}),"\n",(0,n.jsx)(s.h2,{id:"deployment-via-github-actions",children:"Deployment via GitHub Actions"}),"\n",(0,n.jsx)(s.h2,{id:"deployment-via-hacp",children:"Deployment via HACP"}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsx)(s.p,{children:"Please try our HACP platform to deploy an ELK instance. It gives us one-click experience that helps us stand up ELK in\na minute."})})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1081:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/elk-deployment-diagram-c6144ad9e3b78ea9e9a1b6ec8d3d3108.png"},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>l});var n=i(6540);const a={},t=n.createContext(a);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);