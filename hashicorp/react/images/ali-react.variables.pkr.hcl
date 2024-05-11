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

variable "ecs_image_region" {
  type        = string
  description = "The Alicloud region (e.g. 'cn-shenzhen') where the ECS image will be published to. See https://www.alibabacloud.com/help/en/ecs/product-overview/regions-and-zones for a list of valid region names"
}

variable "ecs_image_name" {
  type        = string
  description = "The name (in either English or Chinese) of the ECS image built by Packer. The name must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, _ or -. It cannot begin with http:// or https://"
}

variable "build_instance_type" {
  type        = string
  description = "The type of the instance that builds the ECS image. See https://www.alibabacloud.com/help/doc-detail/25378.htm for a list of valid values. There is a plan (https://github.com/paion-data/immutable-infrastructure-as-a-service/issues/44) to support programmatic fetching of the latest instance type table by invoking the Querying Instance Type Table interface (https://intl.aliyun.com/help/doc-detail/25620.htm)."
}

variable "build_source" {
  type        = string
  description = "The fully qualified Packer source name used by Pakcer builder. Can only be either 'alicloud-ecs.react-app' or 'docker.ubuntu'. Defaults to 'alicloud-ecs.react-app'"
  default     = "alicloud-ecs.react-app"

  validation {
    condition     = contains(["alicloud-ecs.react-app", "docker.ubuntu"], var.build_source)
    error_message = "Allowed values for build_source are 'alicloud-ecs.kong-gateway' for Alicloud, 'amazon-ebs.kong' for AWS, or 'docker.ubuntu' for Docker."
  }
}

variable "image_home_dir" {
  type        = string
  description = "The home directory of the ECS image built. Defaults to '/root'"
  default     = "/root"
}

variable "react_dist_path" {
  type        = string
  description = "The absolute path or relative path to 'hashicorp/react/images' of the React production build directory (https://create-react-app.dev/docs/production-build/). Defaults to the 'dist' under react app project root"
  default     = "dist"
}

variable "react_app_domain" {
  type        = string
  description = "The SSL/HTTPS enabled domain serving the React app. For example: mycompany.com"
  sensitive   = true
}

variable "ssl_cert_source" {
  type        = string
  description = "The absolute path or relative path to 'hashicorp/react/images' of the SSL certificate file for the domain (mycompany.com)"
  sensitive   = true
}

variable "ssl_cert_key_source" {
  type        = string
  description = "The absolute path or relative path to 'hashicorp/react/images' of the SSL certificate key file for the domain (mycompany.com)"
  sensitive   = true
}
