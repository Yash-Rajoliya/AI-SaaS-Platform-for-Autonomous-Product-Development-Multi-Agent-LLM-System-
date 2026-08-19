resource "aws_security_group" "qdrant" {
  name   = "${var.environment}-qdrant"
  vpc_id = var.vpc_id

  ingress {
    from_port = 6333
    to_port   = 6333
    protocol  = "tcp"

    security_groups = var.allowed_security_groups
  }

  ingress {
    from_port = 6334
    to_port   = 6334
    protocol  = "tcp"

    security_groups = var.allowed_security_groups
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = var.tags
}

resource "aws_launch_template" "qdrant" {
  name_prefix = "${var.environment}-qdrant"

  image_id      = var.ami_id
  instance_type = var.instance_type

  vpc_security_group_ids = [
    aws_security_group.qdrant.id
  ]

  block_device_mappings {
    device_name = "/dev/xvda"

    ebs {
      encrypted = true
      kms_key_id = var.kms_key_arn

      volume_type = "gp3"
      volume_size = var.volume_size
    }
  }

  tag_specifications {
    resource_type = "instance"

    tags = merge(
      var.tags,
      {
        Service = "qdrant"
      }
    )
  }
}

resource "aws_autoscaling_group" "qdrant" {
  name = "${var.environment}-qdrant"

  desired_capacity = var.desired_capacity
  min_size         = var.min_capacity
  max_size         = var.max_capacity

  vpc_zone_identifier = var.subnet_ids

  launch_template {
    id      = aws_launch_template.qdrant.id
    version = "$Latest"
  }

  health_check_type = "EC2"

  tag {
    key                 = "Name"
    value               = "${var.environment}-qdrant"
    propagate_at_launch = true
  }
}