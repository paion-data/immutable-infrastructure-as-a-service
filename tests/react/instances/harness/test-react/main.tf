data "external" "react_status" {
  program = ["bash", "${path.module}/../../../scripts/test-react.sh"]
}

output "react_status" {
  value = data.external.react_status.result.react_status
}
