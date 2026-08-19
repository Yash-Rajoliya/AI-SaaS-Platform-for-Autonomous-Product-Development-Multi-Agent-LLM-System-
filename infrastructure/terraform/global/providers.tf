provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Platform    = local.platform_name
      Environment = var.environment
      ManagedBy   = "Terraform"
      Team        = "Platform"
    }
  }
}

provider "kubernetes" {
  host                   = var.kubernetes_host
  cluster_ca_certificate = base64decode(var.kubernetes_cluster_ca_certificate)
  token                  = var.kubernetes_token
}

provider "helm" {
  kubernetes {
    host                   = var.kubernetes_host
    cluster_ca_certificate = base64decode(var.kubernetes_cluster_ca_certificate)
    token                  = var.kubernetes_token
  }
}

provider "random" {}

provider "tls" {}