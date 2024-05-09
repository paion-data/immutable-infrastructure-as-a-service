data "external" "ui_status" {
  program = ["bash", "../../script/test-kong-ui.sh"]
}

data "external" "admin_api_status" {
  program = ["bash", "../../script/test-kong-admin-api.sh"]
}

data "external" "all" {
  program = ["bash", "../../script/test-kong-all.sh"]
}

output "ui_status" {
  value = data.external.ui_status.result.ui_status
}

