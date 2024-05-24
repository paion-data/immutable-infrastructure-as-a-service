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

provider "docker" {}

resource "docker_image" "kong-gateway-image" {
  name         = var.docker_image
  keep_locally = true
}

resource "docker_container" "kong-container" {
  image   = docker_image.kong-gateway-image.image_id
  name    = var.docker_container_name
  command = ["/kong-init.sh", "/"]

  volumes {
    container_path = "/var/run/docker.sock"
    host_path      = "/var/run/docker.sock"
  }

  # upload file before contain run
  upload {
    file       = "/kong-init.sh"
    source     = "../scripts/kong-tf-init.sh"
    executable = true
  }

  upload {
    file       = "/docker-kong/compose/docker-compose.yml"
    source     = "../docker-compose.yml"
    executable = true
  }
}
