resource "aws_kms_key" "platform" {
  description             = "AI Platform Encryption Key"
  deletion_window_in_days = 30
  enable_key_rotation     = true

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-platform-kms"
    }
  )
}

resource "aws_kms_alias" "platform" {
  name          = "alias/${var.environment}-platform"
  target_key_id = aws_kms_key.platform.key_id
}