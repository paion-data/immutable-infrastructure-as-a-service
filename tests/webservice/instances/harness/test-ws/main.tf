data "external" "ws_status" {
  program = ["bash", "${path.module}/../../../scripts/test-ws.sh"]
}

output "ws_status" {
  value = data.external.ws_status.result.ws_status
}
