output "eks_security_group_id" {
  value = aws_security_group.eks_cluster.id
}

output "application_security_group_id" {
  value = aws_security_group.application.id
}

output "platform_role_arn" {
  value = aws_iam_role.platform_role.arn
}

output "kms_key_arn" {
  value = aws_kms_key.platform.arn
}

output "kms_key_id" {
  value = aws_kms_key.platform.id
}