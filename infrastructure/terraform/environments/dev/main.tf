terraform {
  required_version = ">= 1.8.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.60"
    }
  }

  backend "s3" {
    bucket         = "ai-saas-tf-state-dev"
    key            = "platform/dev/terraform.tfstate"
    region         = "ap-south-1"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}

module "platform" {
  source = "../../modules/platform"

  environment      = var.environment
  project_name     = var.project_name
  aws_region       = var.aws_region

  vpc_cidr         = var.vpc_cidr

  eks_node_count   = 2
  eks_instance_type = "t3.large"

  postgres_instance_class = "db.t3.medium"
  redis_node_type         = "cache.t3.small"

  enable_multi_az         = false
}