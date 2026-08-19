output "vpc_id" {
  value = module.platform.vpc_id
}

output "eks_cluster_name" {
  value = module.platform.eks_cluster_name
}

output "postgres_endpoint" {
  value = module.platform.postgres_endpoint
}

output "redis_endpoint" {
  value = module.platform.redis_endpoint
}