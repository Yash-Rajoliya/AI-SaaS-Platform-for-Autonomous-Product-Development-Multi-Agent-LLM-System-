output "logs_bucket_id" {
  value = aws_s3_bucket.observability.id
}

output "logs_bucket_arn" {
  value = aws_s3_bucket.observability.arn
}

output "platform_log_group" {
  value = aws_cloudwatch_log_group.platform.name
}

output "agent_log_group" {
  value = aws_cloudwatch_log_group.agents.name
}

output "orchestration_log_group" {
  value = aws_cloudwatch_log_group.orchestration.name
}

output "dashboard_name" {
  value = aws_cloudwatch_dashboard.platform.dashboard_name
}