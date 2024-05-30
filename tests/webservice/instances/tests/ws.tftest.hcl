run "setup" {
  command = apply

  variables {
    docker_image          = "paiondata/iiaas-webservice-test:latest"
    docker_container_name = "ws-instance"
  }
}

run "test_ws" {
  module {
    source = "./harness/test-ws"
  }

  assert {
    condition     = output.ws_status == "UP"
    error_message = "webservice response error"
  }
}
