variable "project_name" {
  type        = string
  description = "Platform project name"
}

variable "environment" {
  type        = string
  description = "Environment name"
}

variable "aws_region" {
  type = string
}

variable "vpc_cidr" {
  type = string
}