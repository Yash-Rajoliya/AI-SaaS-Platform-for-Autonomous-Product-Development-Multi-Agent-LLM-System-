variable "environment" { type = string }

variable "identifier" {
  type    = string
  default = "platform-db"
}

variable "database_name" {
  type = string
}

variable "master_username" {
  type = string
}

variable "master_password" {
  type      = string
  sensitive = true
}

variable "engine_version" {
  type    = string
  default = "16.4"
}

variable "parameter_group_family" {
  type    = string
  default = "postgres16"
}

variable "instance_class" {
  type    = string
  default = "db.r6g.large"
}

variable "allocated_storage" {
  type    = number
  default = 100
}

variable "max_allocated_storage" {
  type    = number
  default = 1000
}

variable "backup_retention_days" {
  type    = number
  default = 30
}

variable "backup_window" {
  type    = string
  default = "03:00-04:00"
}

variable "maintenance_window" {
  type    = string
  default = "Sun:04:00-Sun:05:00"
}

variable "deletion_protection" {
  type    = bool
  default = true
}

variable "multi_az" {
  type    = bool
  default = true
}

variable "subnet_ids" {
  type = list(string)
}

variable "security_group_ids" {
  type = list(string)
}

variable "kms_key_arn" {
  type = string
}

variable "tags" {
  type    = map(string)
  default = {}
}