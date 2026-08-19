resource "aws_iam_role" "platform_role" {
  name = "${var.environment}-platform-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = [
            "ec2.amazonaws.com",
            "eks.amazonaws.com"
          ]
        }

        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_policy" "platform_policy" {
  name = "${var.environment}-platform-policy"

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "eks:*",
          "ec2:*",
          "elasticloadbalancing:*",
          "autoscaling:*",
          "cloudwatch:*"
        ]

        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "platform_attach" {
  role       = aws_iam_role.platform_role.name
  policy_arn = aws_iam_policy.platform_policy.arn
}