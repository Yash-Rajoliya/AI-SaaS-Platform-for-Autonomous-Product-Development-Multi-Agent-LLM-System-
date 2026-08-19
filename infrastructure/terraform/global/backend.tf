terraform {
  backend "s3" {
    bucket         = "ai-saas-terraform-state"
    key            = "platform/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "ai-saas-terraform-locks"
  }
}