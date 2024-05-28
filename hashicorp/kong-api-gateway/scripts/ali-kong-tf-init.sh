#!/bin/bash
set -x
set -e

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

HOME_DIR=${home_dir}
cd $HOME_DIR/docker-kong/compose/
sudo KONG_DATABASE=postgres docker compose --profile database up

# enable jwt plugin
curl -X POST http://localhost:8001/plugins/ \
   --header "accept: application/json" \
   --header "Content-Type: application/json" \
   --data '
   {
     "name": "jwt"
   }
   '
# create consumer
curl -X POST http://localhost:8001/consumers -d username=paion-consumer
# get the public key
PUBLIC_KEY=$(cat publicKey)
# create jwt credential
curl -X POST http://localhost:8001/consumers/paion-consumer/jwt \
   --header "Content-Type: application/json" \
   --data '
   {
     "algorithm": "ES384",
     "rsa_public_key": "'"$PUBLIC_KEY"'",
     "key": "'"${jwk_iss}"'"
   }
   '

