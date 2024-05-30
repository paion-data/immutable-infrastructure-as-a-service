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

resource "docker_image" "react-test-image" {
  name         = var.docker_image
  keep_locally = true
}

resource "docker_container" "kong-container" {
  image   = docker_image.react-test-image.image_id
  name    = var.docker_container_name
  command = ["/react-tf-init.sh"]

  ports {
    internal = 3000
    external = 3000
  }

  # upload file before contain run
  upload {
    file       = "/react-tf-init.sh"
    source     = "../scripts/react-tf-init.sh"
    executable = true
  }
}
