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

packer {
  required_plugins {
    alicloud = {
      source  = "github.com/hashicorp/alicloud"
      version = "~> 1"
    }

    iiaas = {
      source  = "github.com/paion-data/paion-data"
      version = ">= 0.0.10"
    }
  }
}

source "alicloud-ecs" "react-app" {
  region                       = var.ecs_image_region
  image_force_delete           = true
  image_force_delete_snapshots = true
  image_name                   = var.ecs_image_name
  instance_type                = var.build_instance_type
  source_image                 = "ubuntu_22_04_x64_20G_alibase_20240322.vhd"
  ssh_username                 = "root" # Alicloud REQUIRING this is just awfully terrible!!!
  system_disk_mapping {
    disk_category             = "cloud_essd" # Alicloud REQUIRING this is just super awfully terrible!!! （╯－＿－）╯╧╧
    disk_delete_with_instance = true
  }
  associate_public_ip_address = true # Alicloud REQUIRING this is just super awfully deadly terrible!!! （╯－＿－）╯╧╧
}
