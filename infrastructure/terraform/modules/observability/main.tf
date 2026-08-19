resource "aws_s3_bucket" "observability" {
  bucket = "${var.environment}-${var.platform_name}-observability"

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-observability"
    }
  )
}

resource "aws_s3_bucket_versioning" "observability" {
  bucket = aws_s3_bucket.observability.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "observability" {
  bucket = aws_s3_bucket.observability.id

  rule {
    apply_server_side_encryption_by_default {
      kms_master_key_id = var.kms_key_arn
      sse_algorithm     = "aws:kms"
    }
  }
}

resource "aws_cloudwatch_log_group" "platform" {
  name              = "/platform/${var.environment}"
  retention_in_days = var.log_retention_days

  kms_key_id = var.kms_key_arn

  tags = var.tags
}

resource "aws_cloudwatch_log_group" "agents" {
  name              = "/platform/${var.environment}/agents"
  retention_in_days = var.log_retention_days

  kms_key_id = var.kms_key_arn

  tags = var.tags
}

resource "aws_cloudwatch_log_group" "orchestration" {
  name              = "/platform/${var.environment}/orchestration"
  retention_in_days = var.log_retention_days

  kms_key_id = var.kms_key_arn

  tags = var.tags
}

resource "aws_cloudwatch_dashboard" "platform" {
  dashboard_name = "${var.environment}-platform-dashboard"

  dashboard_body = jsonencode({
    widgets = [
      {
        type = "metric"

        x = 0
        y = 0
        w = 12
        h = 6

        properties = {
          title = "CPU Utilization"

          metrics = [
            [
              "AWS/EKS",
              "cluster_failed_request_count",
              "ClusterName",
              var.cluster_name
            ]
          ]

          stat   = "Sum"
          period = 300
          region = var.aws_region
        }
      }
    ]
  })
}