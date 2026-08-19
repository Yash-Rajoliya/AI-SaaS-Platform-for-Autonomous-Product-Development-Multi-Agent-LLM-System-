output "security_group_id" {
  value = aws_security_group.qdrant.id
}

output "launch_template_id" {
  value = aws_launch_template.qdrant.id
}

output "autoscaling_group_name" {
  value = aws_autoscaling_group.qdrant.name
}

output "desired_capacity" {
  value = aws_autoscaling_group.qdrant.desired_capacity
}