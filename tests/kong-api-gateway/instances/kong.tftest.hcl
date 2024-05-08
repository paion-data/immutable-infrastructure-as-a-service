variables {
    docker_image = "paiondata/iiaas-kong-api-gateway-test:latest"
    docker_container_name = "kong-instance"
}

provider "docker" {}

run "setup" {
    command = apply
}