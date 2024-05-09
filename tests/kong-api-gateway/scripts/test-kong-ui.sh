ui_status=$(curl -I -m 10 -o /dev/null -s -w %{http_code} localhost:8002)
