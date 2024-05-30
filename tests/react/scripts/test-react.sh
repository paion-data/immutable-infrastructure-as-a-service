#!/bin/bash

# Initialize variables
max_attempts=30
wait_seconds=1
attempt_num=1

# Function to check the HTTP status
check_status() {
    response=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
    echo $response
}

# Loop until the service is up or max attempts are reached
while [ $attempt_num -le $max_attempts ]
do
    react_status=$(check_status)
    
    # Check if the HTTP status is 200
    if [ "$react_status" -eq 200 ]; then
        jq -n --arg react_status "$react_status" '{"react_status": $react_status}'
        exit 0
    else
        sleep $wait_seconds
        ((attempt_num++))
    fi
done

react_status=500
jq -n --arg react_status "$react_status" '{"react_status": $react_status}'
