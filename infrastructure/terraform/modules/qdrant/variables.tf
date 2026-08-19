variable "environment" { type = string }

variable "vpc_id" {
  type = string
}

variable "subnet_ids" {
  type = list(string)
}

variable "allowed_security_groups" {
  type = list(string)
}

variable "ami_id" {
  type = string
}

variable "kms_key_arn" {
  type = string
}

variable "instance_type" {
  type    = string
  default = "m7i.large"
}

variable "volume_size" {
  type    = number
  default = 500
}

variable "desired_capacity" {
  type    = number
  default = 3
}

variable "min_capacity" {
  type    = number
  default = 3
}

variable "max_capacity" {
  type    = number
  default = 10
}

variable "tags" {
  type    = map(string)
  default = {}
}