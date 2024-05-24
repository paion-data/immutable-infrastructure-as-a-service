data "external" "ui_status" {
  program = ["bash", "${path.module}/../../test-scripts/test-kong-ui.sh"]
}

data "external" "admin_api_status" {
  program = ["bash", "${path.module}/../../test-scripts/test-admin-api.sh"]
}

data "external" "all" {
  program = ["bash", "${path.module}/../../test-scripts/test-kong-http.sh"]
}

output "ui_status" {
  value = data.external.ui_status.result.ui_status
}

output "admin_api_status" {
  value = data.external.admin_api_status.result.admin_api_status
}

output "http_port_status" {
  value = data.external.all.result.http_status
}
