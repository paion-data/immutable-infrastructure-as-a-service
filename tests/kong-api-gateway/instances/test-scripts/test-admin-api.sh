#!/bin/bash

service_name="example_service"
route_name="example_route"

# create service
create_service_response=$(curl -i -m 10 -s -X POST http://localhost:8001/services --data name=$service_name --data url='http://example.com')
create_service_status=$(echo "$create_service_response" | grep '^HTTP/' | awk '{print $2}')

# create route
create_route_response=$(curl -i -m 10 -s -X POST http://localhost:8001/services/$service_name/routes --data 'paths[]=/mock' --data name=$route_name)
create_route_status=$(echo "$create_route_response" | grep '^HTTP/' | awk '{print $2}')

# service list
list_services_response=$(curl -i -s -X GET http://localhost:8001/services)
list_services_status=$(echo "$list_services_response" | grep '^HTTP/' | awk '{print $2}')

# route list
list_routes_response=$(curl -i -s -X GET http://localhost:8001/routes)
list_routes_status=$(echo "$list_routes_response" | grep '^HTTP/' | awk '{print $2}')


if [[ $create_service_status == "201" && $create_route_status == "201" && $list_services_status == "200" && $list_routes_status == "200" ]]; then
  jq -n --arg admin_api_status "success" '{"admin_api_status": $admin_api_status}'
else
  jq -n --arg admin_api_status "failure" '{"admin_api_status": $admin_api_status}'
fi

# cleanup
ROUTES=$(curl -s -X GET http://localhost:8001/routes | jq -r '.data[].id')
for ROUTE in $ROUTES; do
  curl -X DELETE http://localhost:8001/routes/$ROUTE
done

SERVICES=$(curl -s -X GET http://localhost:8001/services | jq -r '.data[].id')
for SERVICE in $SERVICES; do
  curl -X DELETE http://localhost:8001/services/$SERVICE
done
