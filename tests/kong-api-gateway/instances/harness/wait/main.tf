variable "timeout" {
  type        = number
  description = "The timeout in milliseconds"
}

variable "resource" {
  type        = string
  description = "The resource to wait on"
}

resource "null_resource" "null" {
  # sleep to wait docker-kong ready
  provisioner "local-exec" {
    command = "bash test-scripts/wait-on.sh ${var.timeout} ${var.resource}"
  }
}
