ui_status=$(curl -I -m 10 -o /dev/null -s -w %{http_code} localhost:8002)
jq -n --arg ui_status "$ui_status" '{"ui_status": $ui_status}'
