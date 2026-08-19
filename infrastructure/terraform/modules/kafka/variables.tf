variable "environment" { type = string }

variable "subnet_ids" {
  type = list(string)
}

variable "security_group_ids" {
  type = list(string)
}

variable "kms_key_arn" {
  type = string
}

variable "kafka_version" {
  type    = string
  default = "3.7.x"
}

variable "broker_count" {
  type    = number
  default = 3
}

variable "instance_type" {
  type    = string
  default = "kafka.m7g.large"
}

variable "volume_size" {
  type    = number
  default = 500
}

variable "tags" {
  type    = map(string)
  default = {}
}