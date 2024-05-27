# Copyright Paion Data
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

terraform {
  required_providers {
    alicloud = {
      source  = "aliyun/alicloud"
      version = "1.220.1"
    }
  }

  required_version = ">= 1.2.0"
}

provider "alicloud" {
  region = var.ecs_instance_region
}

variable "ecs_instance_region" {
  type        = string
  description = "The Alicloud region (e.g. 'cn-shenzhen') where the ECS instance will be published to. See https://www.alibabacloud.com/help/en/ecs/product-overview/regions-and-zones for a list of valid region names"
}

variable "ecs_image_name" {
  type        = string
  description = "The name of the ECS image built by Packer that runs this instance. It can be retrieved from the ECS image list on Alicloud dashboard"
}

variable "instance_home_dir" {
  type        = string
  description = "The home directory of the running ECS instance. Defaults to '/root'"
  default     = "/root"
}

variable "instance_type" {
  type        = string
  description = "The type of the running ECS instance. See https://www.alibabacloud.com/help/doc-detail/25378.htm for a list of valid values. There is a plan (https://github.com/paion-data/immutable-infrastructure-as-a-service/issues/44) to support programmatic fetching of the latest instance type table by invoking the Querying Instance Type Table interface (https://intl.aliyun.com/help/doc-detail/25620.htm)."
}

variable "instance_name" {
  type    = string
  default = "The name (2 ~ 128 chars) of the ECS instance. Only alphanumeric characters or '-'/'.'/'_' are allowed. Cannot begin with a hyphen or http:// or https://"
}

variable "security_group_names" {
  type        = list(string)
  description = "A list of security group names (yes folks, names not ID's) to associate with. An example value is [\"my security group 1\", \"my security group 2\"]"
}

variable "vswitch_id" {
  type        = string
  description = "The vswitch which the instance belongs. Notice: The security group and the vswitch are in the same proprietary network VPC"
}

variable "domain_name" {
  type        = string
  description = "Name of the domain. This name without suffix can have a string of 1 to 63 characters, must contain only alphanumeric characters or ' - ', and must not begin or end with ' - ', and ' - ' must not in the 3th and 4th character positions at the same time. Suffix .sh and .tel are not supported."
}

variable "host_record" {
  type        = string
  description = "Host record for the domain record. This host_record can have at most 253 characters, and each part split with '.' can have at most 63 characters, and must contain only alphanumeric characters or hyphens, such as '-','.','*','@', and must not begin or end with '-'."
}

variable "eip_name" {
  type    = string
  default = "value"
}

data "alicloud_images" "react-images" {
  image_name  = var.ecs_image_name
  owners      = "self"
  most_recent = true
}

data "alicloud_security_groups" "react-groups" {
  name_regex = join("|", var.security_group_names)
}

data "template_file" "react-init" {
  template = file("../scripts/react-tf-init.sh")
  vars = {
    home_dir = var.instance_home_dir
  }
}

data "alicloud_eip_addresses" "react-eip" {
  address_name = var.eip_name
}

resource "alicloud_eip_association" "react-eip-association" {
  allocation_id = data.alicloud_eip_addresses.react-eip.addresses[0].id
  instance_id   = alicloud_instance.react-instance.id
}

resource "alicloud_instance" "react-instance" {
  image_id   = data.alicloud_images.react-images.images[0].id
  vswitch_id = var.vswitch_id

  instance_type = var.instance_type
  instance_name = var.instance_name

  security_groups = data.alicloud_security_groups.react-groups.ids

  user_data            = data.template_file.react-init.rendered
  system_disk_category = "cloud_essd"
}

resource "alicloud_dns_record" "record" {
  name        = var.domain_name
  host_record = var.host_record
  type        = "A"
  value       = data.alicloud_eip_addresses.react-eip.addresses[0].ip_address
}
