#!/bin/bash

ports=(8000 8005 8006 8007)

for port in "${ports[@]}"
do
  if nc -z -w 5 localhost $port; then
    echo "port $port ping success"
  else
    echo "port $port ping failure"
  fi
done