#!/bin/bash

# 发送Service创建请求
create_service_response=$(curl -X POST -H "Content-Type: application/json" -d '{"name": "my-service", "url": "http://example.com"}' http://localhost:8001/services)
create_service_status=$(echo $create_service_response | jq -r '.status')

if [[ $create_service_status == "201" ]]; then
  echo "Service创建请求成功"
else
  echo "Service创建请求失败"
fi

# 发送Route创建请求
create_route_response=$(curl -X POST -H "Content-Type: application/json" -d '{"hosts": ["example.com"], "paths": ["/"], "service": {"name": "my-service"}}' http://localhost:8001/routes)
create_route_status=$(echo $create_route_response | jq -r '.status')

if [[ $create_route_status == "201" ]]; then
  echo "Route创建请求成功"
else
  echo "Route创建请求失败"
fi

# 发送Service列表访问请求
list_services_response=$(curl -X GET http://localhost:8001/services)
list_services_status=$(echo $list_services_response | jq -r '.status')

if [[ $list_services_status == "200" ]]; then
  echo "Service列表访问请求成功"
else
  echo "Service列表访问请求失败"
fi

# 发送Route列表访问请求
list_routes_response=$(curl -X GET http://localhost:8001/routes)
list_routes_status=$(echo $list_routes_response | jq -r '.status')

if [[ $list_routes_status == "200" ]]; then
  echo "Route列表访问请求成功"
else
  echo "Route列表访问请求失败"
fi

if [[ $create_service_status == "201" && $create_route_status == "201" && $list_services_status == "200" && $list_routes_status == "200" ]]; then
  echo "success"
else
  echo "failure"
fi