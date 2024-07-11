---
sidebar_position: 1
title: General Deployment
---

Deploying Sonatype Nexus Repository
===================================

hashicorp-aws deploys [Sonatype Nexus Repository] in the following way:

- Deploys [Sonatype Nexus Repository] in **HTTP** mode
- Deploys a reverse proxy Nginx in front of the [Sonatype Nexus Repository] in the same EC2 to redirect all HTTPS
  request to its [8081][Sonatype Nexus Repository default HTTP port] HTTP port

General Deployments
-------------------

:::info

Please complete the [general setup](../setup#setup) before proceeding.

:::

### Defining Packer Variables

Create a [HashiCorp Packer variable values file] named **aws-kong.auto.pkrvars.hcl** under
**[hashicorp-aws/hashicorp/sonatype-nexus-repository/images/aws]** directory with the following contents:

```hcl title="hashicorp-aws/hashicorp/sonatype-nexus-repository/images/aws/aws.auto.pkrvars.hcl"
ami_region                       = "us-west-2"
ami_name                         = "my-nexus-ami"
instance_type                    = "t2.small"
sonatype_nexus_repository_domain = "nexus.mycompany.com"
ssl_cert_base64                  = "YXNkZnNnaHRkeWhyZXJ3ZGZydGV3ZHNmZ3RoeTY0cmV3ZGZyZWd0cmV3d2ZyZw=="
ssl_cert_key_base64              = "MzI0NXRnZjk4dmJoIGNsO2VbNDM1MHRdzszNDM1b2l0cmo="
```

- `ami_region` is the [image region][AWS regions] where Nexus [AMI][AWS AMI] will be published to. The
  published image will be _private_
- `ami_name` is the name of the resulting AMI that will appear when managing AMIs in the AWS console or via APIs. This
  can be the same across builds, because hashicorp-aws will deregister the old AMI with the same name and replace it
  with the current built one
- `instance_type` The [AWS EC2 instance type] to use while _building_ the AMI
- `sonatype_nexus_repository_domain` is the SSL-enabled domain that will serve the deployed HTTP Nexus instance
- `ssl_cert_base64` is a __base64 encoded__ string of the content of
  [SSL certificate file](../setup#optional-setup-ssl) for the SSL-enabled domain, i.e. `nexus.mycompany.com` given
  the `sonatype_nexus_repository_domain` is `nexus.mycompany.com`
- `ssl_cert_key_base64` is a __base64 encoded__ string of the content of
  [SSL certificate file](../setup#optional-setup-ssl) for the SSL-enabled domain, i.e. `nexus.mycompany.com` given
  the kong-api-gateway-domain is `nexus.mycompany.com`

### Defining Terraform Variables

Create a [HashiCorp Terraform variable values file] named **aws.auto.tfvars** under
**[hashicorp-aws/hashicorp/sonatype-nexus-repository/instances/aws]** directory with the following contents:

```hcl title="hashicorp-aws/hashicorp/sonatype-nexus-repository/instances/aws/aws.auto.tfvars"
aws_ec2_region   = "us-west-2"
ami_name         = "my-nexus-ami"
instance_type    = "t2.medium"
instance_name    = "My Nexus"
security_groups  = ["My Nexus Security Group A", "My Nexus Security Group B", "My Nexus Security Group C"]
route_53_zone_id = "MBS8YLKZML18VV2E8M8OK"
domain           = "nexus.mycompany.com"
```

- `aws_ec2_region` is the [EC2 runtime region][AWS regions] where Kong will be deployed into
- `ami_name` is the name of the published AMI; __it must be the same as the `ami_name` in
  [Packer variable file](#defining-packer-variables)__
- `instance_type` is the [AWS EC2 instance type] used for deployed Nexus
- `instance_name` is the deployed EC2 name as appeared in the instance list of AWS console; it can be arbitrary
- `security_groups` is the list of [AWS Security Group] _names_ to associate with (yes, not ID, but name...)

  :::info

  The port [8081][Sonatype Nexus Repository default HTTP port] need to be open by configuring the inbound rules

  :::

- `sonatype_nexus_repository_domain` is the SSL-enabled domain that will serve the Nexus
- `route_53_zone_id` is the AWS Route 53 hosted Zone ID that hosts the domain `nexus.mycompany.com`

  :::tip

  To find the zone ID in AWS Route 53, we can:

  1. Sign in to the AWS Management Console
  2. Open the Route 53 console at https://console.aws.amazon.com/route53/
  3. Select Hosted zones in the navigation pane
  4. Find the requested ID in the top level Hosted Zones summary in the Route 53 section

  :::

### Building AMI Image

```bash
cd hashicorp-aws

cp hashicorp/common/images/aws/aws-builder.pkr.hcl hashicorp/sonatype-nexus-repository/images/aws
cp hashicorp/common/images/aws/aws-packer.pkr.hcl hashicorp/sonatype-nexus-repository/images/aws

cd hashicorp/sonatype-nexus-repository/images/aws
packer init .
packer validate.
packer build .
```

### Deploying to EC2

:::caution

Depending on the [AMI](#defining-packer-variables) and [EC2](#defining-terraform-variables) configs, **please be aware
AWS credit charges shall incur after the following commands execute**

:::

```bash
cd ../../instances/aws
terraform init
terraform validate
terraform apply -auto-approve
```

Deployment via Screwdriver CD
-----------------------------

hashicorp-aws supports deployment using [Screwdriver CD](screwdriver-cd-deployment). Please check it out. <img src="https://github.com/QubitPi/QubitPi/blob/master/img/8%E5%A5%BD.gif?raw=true" height="40px"/>

Deployment via HACP
-------------------

:::tip

Please try our HACP platform to deploy a Nexus instance. It gives us one-click experience that helps us stand up a
software artifactory in a minute.

:::

[AWS AMI]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html
[AWS EC2 instance type]: https://aws.amazon.com/ec2/instance-types/
[AWS regions]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html#Concepts.RegionsAndAvailabilityZones.Availability
[AWS Security Group]: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html

[hashicorp-aws/hashicorp/sonatype-nexus-repository/images/aws]: https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/sonatype-nexus-repository/images/aws
[hashicorp-aws/hashicorp/sonatype-nexus-repository/instances/aws]: https://github.com/QubitPi/hashicorp-aws/tree/master/hashicorp/sonatype-nexus-repository/instances/aws
[HashiCorp Packer - Install]: https://developer.hashicorp.com/packer/install
[HashiCorp Packer variable values file]: https://developer.hashicorp.com/packer/guides/hcl/variables#from-a-file
[HashiCorp Terraform - Install]: https://developer.hashicorp.com/terraform/install
[HashiCorp Terraform variable values file]: https://developer.hashicorp.com/terraform/language/values/variables#variable-definitions-tfvars-files

[Sonatype Nexus Repository]: https://github.com/QubitPi/docker-nexus3
[Sonatype Nexus Repository default HTTP port]: https://help.sonatype.com/en/network-configuration.html#network-configuration-in-nexus-repository-2

[Screwdriver CD]: https://qubitpi.github.io/screwdriver-cd-homepage/
