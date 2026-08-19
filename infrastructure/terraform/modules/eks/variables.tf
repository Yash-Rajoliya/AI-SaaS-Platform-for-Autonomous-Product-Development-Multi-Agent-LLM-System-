terraform {
  required_version = ">= 1.7.0"
}

resource "aws_iam_role" "eks_cluster" {
  name = "${var.environment}-${var.cluster_name}-cluster-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "eks.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = var.tags
}

resource "aws_iam_role_policy_attachment" "cluster_policy" {
  role       = aws_iam_role.eks_cluster.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}

resource "aws_iam_role_policy_attachment" "cluster_vpc_policy" {
  role       = aws_iam_role.eks_cluster.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController"
}

resource "aws_eks_cluster" "this" {
  name     = "${var.environment}-${var.cluster_name}"
  role_arn = aws_iam_role.eks_cluster.arn

  version = var.kubernetes_version

  vpc_config {
    endpoint_private_access = true
    endpoint_public_access  = true

    subnet_ids = var.private_subnet_ids

    security_group_ids = [
      var.cluster_security_group_id
    ]
  }

  encryption_config {
    provider {
      key_arn = var.kms_key_arn
    }

    resources = ["secrets"]
  }

  enabled_cluster_log_types = [
    "api",
    "audit",
    "authenticator",
    "controllerManager",
    "scheduler"
  ]

  depends_on = [
    aws_iam_role_policy_attachment.cluster_policy,
    aws_iam_role_policy_attachment.cluster_vpc_policy
  ]

  tags = merge(
    var.tags,
    {
      Environment = var.environment
      Platform    = "ai-saas"
    }
  )
}

resource "aws_iam_role" "node_group" {
  name = "${var.environment}-${var.cluster_name}-node-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "ec2.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = var.tags
}

resource "aws_iam_role_policy_attachment" "worker_nodes" {
  role       = aws_iam_role.node_group.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
}

resource "aws_iam_role_policy_attachment" "cni" {
  role       = aws_iam_role.node_group.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
}

resource "aws_iam_role_policy_attachment" "ecr" {
  role       = aws_iam_role.node_group.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}

resource "aws_eks_node_group" "platform" {
  cluster_name    = aws_eks_cluster.this.name
  node_group_name = "${var.environment}-platform"
  node_role_arn   = aws_iam_role.node_group.arn

  subnet_ids = var.private_subnet_ids

  instance_types = var.node_instance_types
  capacity_type  = var.capacity_type

  scaling_config {
    desired_size = var.desired_nodes
    min_size     = var.min_nodes
    max_size     = var.max_nodes
  }

  update_config {
    max_unavailable_percentage = 25
  }

  depends_on = [
    aws_iam_role_policy_attachment.worker_nodes,
    aws_iam_role_policy_attachment.cni,
    aws_iam_role_policy_attachment.ecr
  ]

  tags = {
    Name = "${var.environment}-platform-workers"
  }
}