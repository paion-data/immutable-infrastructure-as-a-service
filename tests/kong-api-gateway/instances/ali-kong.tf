# Copyright 2024 Paion Data. All rights reserved.
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

variable "docker_image" {
  type        = string
  description = "The name of the image"
}

variable "docker_container_name" {
  type        = string
  description = "The name of the container"
}

variable "image_home_dir" {
  type        = string
  description = "value of home directory"
}

resource "docker_image" "kong-gateway-image" {
  name         = var.docker_image
  keep_locally = false
}

resource "docker_container" "kong-container" {
  image = docker_image.kong-gateway-image.image_id
  name  = var.docker_container_name

  # upload file before contain run
  upload {
    file       = "${var.image_home_dir}/kong-init.sh"
    source     = "../script/ali-kong-tf-init.sh"
    executable = true
  }
}

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }

  required_version = ">= 0.14.5"
}

provider "docker" {}