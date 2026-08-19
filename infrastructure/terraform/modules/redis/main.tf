resource "aws_elasticache_subnet_group" "this" {
  name       = "${var.environment}-redis-subnets"
  subnet_ids = var.subnet_ids
}

resource "aws_elasticache_replication_group" "this" {
  replication_group_id = "${var.environment}-redis"

  description = "AI Platform Redis Cluster"

  engine         = "redis"
  engine_version = var.engine_version

  node_type = var.node_type

  num_cache_clusters = var.cluster_size

  automatic_failover_enabled = true
  multi_az_enabled           = true

  transit_encryption_enabled = true
  at_rest_encryption_enabled = true

  kms_key_id = var.kms_key_arn

  subnet_group_name = aws_elasticache_subnet_group.this.name

  security_group_ids = var.security_group_ids

  snapshot_retention_limit = 7

  tags = merge(
    var.tags,
    {
      Service = "redis"
    }
  )
}