"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[488],{2719:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=n(3860),t=n(7910);const r={sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying ML Models via Screwdriver CD Template"},a="Machine Learning Model Release Definition Templates",l={id:"machine-learning/screwdriver-cd-deployment",title:"Deployment via Screwdriver CD",description:"Deploying ML Models via Screwdriver CD Template",source:"@site/docs/machine-learning/screwdriver-cd-deployment.md",sourceDirName:"machine-learning",slug:"/machine-learning/screwdriver-cd-deployment",permalink:"/zh-cn/docs/machine-learning/screwdriver-cd-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/immutable-infrastructure-as-a-service/tree/master/docs/docs/machine-learning/screwdriver-cd-deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Deployment via Screwdriver CD",description:"Deploying ML Models via Screwdriver CD Template"},sidebar:"docSidebar",previous:{title:"General Deployment",permalink:"/zh-cn/docs/machine-learning/"},next:{title:"Development",permalink:"/zh-cn/docs/machine-learning/development"}},c={},o=[{value:"How to Use the Templates",id:"how-to-use-the-templates",level:2},{value:"Installing Template in Screwdriver",id:"installing-template-in-screwdriver",level:3},{value:"Using the Template",id:"using-the-template",level:3}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"machine-learning-model-release-definition-templates",children:"Machine Learning Model Release Definition Templates"}),"\n",(0,s.jsxs)(i.p,{children:["hashicorp-aws offers a ",(0,s.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/templates/job-templates",children:"Screwdriver template"})," that deploys\n",(0,s.jsx)(i.a,{href:"https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure",children:"immutable"})," instances of Machine Learning models as REST API to AWS. It uses the\n",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/screwdriver-cd-template-main",children:"screwdriver-template-main npm package"})," to assist with template validation, publishing, and tagging."]}),"\n",(0,s.jsx)(i.p,{children:"This release definition contains the following templates:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"#deploying-ml-models-via-mlflow-docker-container",children:"Deploying ML models via MLflow Docker container"})}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["All templates tag the latest versions with the ",(0,s.jsx)(i.code,{children:"latest"})," tag."]}),"\n",(0,s.jsx)(i.h2,{id:"how-to-use-the-templates",children:"How to Use the Templates"}),"\n",(0,s.jsx)(i.h3,{id:"installing-template-in-screwdriver",children:"Installing Template in Screwdriver"}),"\n",(0,s.jsx)(i.p,{children:"The template needs to be installed first in Screwdriver running instance. Installation has two parts:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/adaptors/screwdriver-cd/templates/mlflow-docker-sd-template.yaml",children:"the template"})}),"\n",(0,s.jsxs)(i.li,{children:["Some ",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/screwdriver-cd-commands",children:"pre-defined Screwdriver commands"})," that this template uses"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The template and the commands can be automatically installed using the regular ",(0,s.jsx)(i.a,{href:"https://github.com/QubitPi/hashicorp-aws/tree/master/screwdriver.yaml",children:"screwdriver.yaml"})," config file by\nfollowing the steps below:"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/quickstart#create-a-new-pipeline",children:"Create a Screwdriver pipeline"})," with the repository link being\n",(0,s.jsx)(i.code,{children:"https://github.com/QubitPi/hashicorp-aws.git"})]}),"\n",(0,s.jsx)(i.li,{children:"Trigger a pipeline run, which will install the templates and commands automatically. Wait the pipeline to finish\nrunning."}),"\n",(0,s.jsxs)(i.li,{children:["The installed template and commands can be found in ",(0,s.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/templates/job-templates#finding-templates",children:"Templates page"})," and\n",(0,s.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/commands#finding-commands",children:"Commands page"}),", respectively"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"using-the-template",children:"Using the Template"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/templates/job-templates#using-a-template",children:"Create a Screwdriver pipeline that uses this template"})," with the following\ncontents:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"---\njobs:\n  main:\n    requires: [~pr, ~commit]\n    template: paion-data/machine-learning-model-release-definition-template-mlflow-docker@latest\n    steps:\n      - build-ml-models: ...\n    secrets:\n      - AWS_ACCESS_KEY_ID\n      - AWS_SECRET_ACCESS_KEY\n      - AWS_ML_PKRVARS_HCL\n      - AWS_ML_TFVARS\n"})}),"\n",(0,s.jsxs)(i.p,{children:["The following ",(0,s.jsx)(i.a,{href:"https://qubitpi.github.io/screwdriver-cd-guide/user-guide/configuration/jobconfiguration.html#steps",children:"Screwdriver CD - steps"})," must be implemented:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"build-ml-models"})," - Commands that ",(0,s.jsx)(i.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.pyfunc.html#creating-custom-pyfunc-models",children:"package up MLflow Python models"})]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The following ",(0,s.jsx)(i.a,{href:"https://screwdriver-docs.qubitpi.org/user-guide/configuration/secrets",children:"Screwdriver Secrets"})," needs to be defined before running this template:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"../setup#aws",children:(0,s.jsx)(i.code,{children:"AWS_ACCESS_KEY_ID"})})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"../setup#aws",children:(0,s.jsx)(i.code,{children:"AWS_SECRET_ACCESS_KEY"})})}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"AWS_ML_PKRVARS_HCL"})," - A ",(0,s.jsx)(i.a,{href:"https://packer.qubitpi.org/packer/guides/hcl/variables#from-a-file",children:"HashiCorp Packer variable values file"})," with the following variable values:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:'aws_image_region = "us-east-2"\nami_name         = "my-ml-ami"\ninstance_type    = "t2.small"\nml_models_path   = "/home/my-nlp-models"\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"aws_image_region"})," is the ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"image region"})," of ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",children:"AWS AMI"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ami_name"})," is the name of the resulting AMI that will appear when managing AMIs in the AWS console or via APIs. This\ncan be the same across builds, because hashicorp-aws will deregister the old AMI with the same name and replace it\nwith the current built one"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"instance_type"})," is the recommended ",(0,s.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," running this image"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ml_models_path"})," is the absolute path to the model directory generated by the ",(0,s.jsx)(i.strong,{children:"build-ml-models"})," step above"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"AWS_ML_TFVARS"})," - A ",(0,s.jsx)(i.a,{href:"https://terraform.qubitpi.org/terraform/language/values/variables#variable-definitions-tfvars-files",children:"HashiCorp Terraform variable values file"})," with the following variable values:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-hcl",children:'aws_ec2_region   = "us-east-2"\nami_name            = "my-ml-ami"\ninstance_type       = "t2.small"\nec2_instance_name   = "My Machine Learning REST Service"\nec2_security_groups = ["ML REST Service Security Group"]\n'})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"aws_ec2_region"})," is the ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability",children:"EC2 runtime region"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ami_name"})," is the name of the published AMI; ",(0,s.jsxs)(i.strong,{children:["it must be the same as the ",(0,s.jsx)(i.code,{children:"ami_name"})," in AWS_ML_PKRVARS_HCL"]})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"instance_type"})," is the ",(0,s.jsx)(i.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"AWS EC2 instance type"})," used for deployed infrastructure"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ec2_instance_name"})," is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"ec2_security_groups"})," is the ",(0,s.jsx)(i.a,{href:"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html",children:"AWS Security Group"})," ",(0,s.jsx)(i.em,{children:"name"})," (yes, not ID, but name...)"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7910:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>a});var s=n(1733);const t={},r=s.createContext(t);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);