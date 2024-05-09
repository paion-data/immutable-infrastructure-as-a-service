variables {
  docker_image          = "paiondata/iiaas-kong-api-gateway-test:latest"
  docker_container_name = "kong-instance"
}

run "setup" {
  command = apply

  module {
    source = "./testing"
  }

  assert {
    condition     = data.external.ui_status.result.ui_status == "200"
    error_message = "error assert"
  }
}