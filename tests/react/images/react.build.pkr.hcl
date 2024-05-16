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

variable "build_source" {
  type      = string
  sensitive = false

  validation {
    condition     = contains(["alicloud-ecs.kong-gateway", "amazon-ebs.kong", "docker.ubuntu"], var.build_source)
    error_message = "Allowed values for build_source are 'alicloud-ecs.kong-gateway' for Alicloud, 'amazon-ebs.kong' for AWS, or 'docker.ubuntu' for Docker."
  }
}

variable "image_home_dir" {
  type = string
  // sensitive = true

  validation {
    condition     = contains(["/root", "/home/ubuntu", "/"], var.image_home_dir)
    error_message = "Allowed values for image_home_dir are '/root' for Alicloud, '/home/ubuntu' for AWS, or '/' in general."
  }
}

variable "ssl_cert_source" {
  type      = string
  sensitive = true
  default   = ""
}

variable "ssl_cert_key_source" {
  type      = string
  sensitive = true
  default   = ""
}

variable "react_domain" {
  type      = string
  sensitive = true
  default   = ""
}

variable "dist_path" {
  type      = string
  sensitive = true
}

build {
  name = "install-react"
  sources = [
    "source.docker.ubuntu"
  ]

  provisioner "file" {
    source      = var.dist_path
    destination = "${var.image_home_dir}/dist"
  }

  post-processor "docker-tag" {
    repository = "paiondata/iiaas-react-test"
    tags       = ["latest"]
  }

  provisioner "iiaas-react-app-provisioner" {
    homeDir          = "${var.image_home_dir}"
    sslCertSource    = "${var.ssl_cert_source}"
    sslCertKeySource = "${var.ssl_cert_key_source}"
    ReactAppDomain   = "${var.react_domain}"
  }
}
