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

variable "engine_version" {
  type    = string
  default = "7.1"
}

variable "node_type" {
  type    = string
  default = "cache.r7g.large"
}

variable "cluster_size" {
  type    = number
  default = 2
}

variable "tags" {
  type    = map(string)
  default = {}
}