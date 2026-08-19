variable "environment" {
  description = "Environment"
  type        = string
}

variable "platform_name" {
  description = "Platform name"
  type        = string
}

variable "cluster_name" {
  description = "EKS cluster"
  type        = string
}

variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "kms_key_arn" {
  description = "Encryption key"
  type        = string
}

variable "log_retention_days" {
  description = "CloudWatch retention"
  type        = number
  default     = 90
}

variable "tags" {
  description = "Tags"
  type        = map(string)
  default     = {}
}