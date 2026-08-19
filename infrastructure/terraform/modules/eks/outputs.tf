output "cluster_name" {
  value = aws_eks_cluster.this.name
}

output "cluster_arn" {
  value = aws_eks_cluster.this.arn
}

output "cluster_endpoint" {
  value = aws_eks_cluster.this.endpoint
}

output "cluster_version" {
  value = aws_eks_cluster.this.version
}

output "cluster_ca_data" {
  value = aws_eks_cluster.this.certificate_authority[0].data
}

output "oidc_issuer" {
  value = aws_eks_cluster.this.identity[0].oidc[0].issuer
}

output "node_group_arn" {
  value = aws_eks_node_group.platform.arn
}

output "node_role_arn" {
  value = aws_iam_role.node_group.arn
}