#!/bin/bash
set -e
set -x

# if node is not installed, install it
timeout=$1
resource=$2

if ! command -v node &> /dev/null
then
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

npm install -g wait-on
wait-on --verbose --timeout $timeout $resource
