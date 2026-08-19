terraform {
  required_version = ">= 1.7.0"
}

resource "aws_db_parameter_group" "postgres" {
  name        = "${var.environment}-${var.identifier}-pg"
  family      = var.parameter_group_family
  description = "PostgreSQL parameter group"

  parameter {
    name  = "log_connections"
    value = "1"
  }

  parameter {
    name  = "log_disconnections"
    value = "1"
  }

  parameter {
    name  = "shared_preload_libraries"
    value = "pg_stat_statements"
  }

  tags = var.tags
}

resource "aws_db_subnet_group" "this" {
  name       = "${var.environment}-${var.identifier}-subnets"
  subnet_ids = var.subnet_ids

  tags = var.tags
}

resource "aws_db_instance" "this" {
  identifier = "${var.environment}-${var.identifier}"

  engine         = "postgres"
  engine_version = var.engine_version

  instance_class = var.instance_class

  allocated_storage     = var.allocated_storage
  max_allocated_storage = var.max_allocated_storage

  storage_type          = "gp3"
  storage_encrypted     = true
  kms_key_id            = var.kms_key_arn
  multi_az              = var.multi_az
  publicly_accessible   = false

  db_name  = var.database_name
  username = var.master_username
  password = var.master_password

  vpc_security_group_ids = var.security_group_ids
  db_subnet_group_name   = aws_db_subnet_group.this.name

  parameter_group_name = aws_db_parameter_group.postgres.name

  backup_retention_period = var.backup_retention_days
  backup_window           = var.backup_window

  maintenance_window = var.maintenance_window

  deletion_protection = var.deletion_protection

  skip_final_snapshot       = false
  final_snapshot_identifier = "${var.environment}-${var.identifier}-final"

  performance_insights_enabled          = true
  performance_insights_kms_key_id       = var.kms_key_arn
  performance_insights_retention_period = 7

  enabled_cloudwatch_logs_exports = [
    "postgresql"
  ]

  tags = merge(
    var.tags,
    {
      Service = "postgres"
    }
  )
}