run "setup" {
  command = apply

  variables {
    docker_image          = "paiondata/iiaas-react-test:latest"
    docker_container_name = "react-instance"
  }
}

run "test_react" {
  module {
    source = "./harness/test-react"
  }

  assert {
    condition     = output.react_status == "200"
    error_message = "react response error"
  }
}
