# Copyright Jiaqi Liu
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

variable "access_key" {
  type    = string
  default = "${env("ALICLOUD_ACCESS_KEY")}"
}

variable "secret_key" {
  type    = string
  default = "${env("ALICLOUD_SECRET_KEY")}"
}

variable "ali_image_name" {
  type = string
}

variable "instance_type" {
  type        = string
  description = "ECS instance types defined in https://www.alibabacloud.com/help/doc-detail/25378.htm"
}

source "alicloud-ecs" "kong-gateway" {
  # Authentication through environmental variables
  associate_public_ip_address = true
  image_name                  = var.ali_image_name
  instance_type               = var.instance_type
  internet_charge_type        = "PayByTraffic"
  skip_image_validation       = true
  source_image                = "ubuntu_22_04_x64_20G_alibase_20240220.vhd"
  ssh_username                = "root"
}
