variable "environment" {
  description = "Deployment environment"
  type        = string
}

variable "vpc_cidr" {
  description = "VPC CIDR"
  type        = string
}

variable "availability_zones" {
  description = "AWS AZs"
  type        = list(string)
}

variable "public_subnet_cidrs" {
  type = list(string)
}

variable "private_subnet_cidrs" {
  type = list(string)
}

variable "database_subnet_cidrs" {
  type = list(string)
}

variable "tags" {
  description = "Global tags"
  type        = map(string)
  default     = {}
}