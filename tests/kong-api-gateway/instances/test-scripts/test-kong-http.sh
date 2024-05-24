#!/bin/bash

ports=(8000)
all_success=true 

for port in "${ports[@]}"
do
  if ! nc -z -w 5 localhost $port; then
    all_success=false
  fi
done

if $all_success; then
    jq -n --arg http_status "success" '{"http_status": $http_status}'
else
    jq -n --arg http_status "failure" '{"http_status": $http_status}'
fi
