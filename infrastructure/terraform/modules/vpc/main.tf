terraform {
  required_version = ">= 1.7.0"
}

resource "aws_vpc" "this" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-platform-vpc"
    }
  )
}

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-igw"
    }
  )
}

resource "aws_subnet" "public" {
  for_each = {
    for idx, cidr in var.public_subnet_cidrs :
    idx => cidr
  }

  vpc_id                  = aws_vpc.this.id
  cidr_block              = each.value
  availability_zone       = var.availability_zones[tonumber(each.key)]
  map_public_ip_on_launch = true

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-public-${each.key}"
      Type = "public"
    }
  )
}

resource "aws_subnet" "private" {
  for_each = {
    for idx, cidr in var.private_subnet_cidrs :
    idx => cidr
  }

  vpc_id            = aws_vpc.this.id
  cidr_block        = each.value
  availability_zone = var.availability_zones[tonumber(each.key)]

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-private-${each.key}"
      Type = "private"
    }
  )
}

resource "aws_subnet" "database" {
  for_each = {
    for idx, cidr in var.database_subnet_cidrs :
    idx => cidr
  }

  vpc_id            = aws_vpc.this.id
  cidr_block        = each.value
  availability_zone = var.availability_zones[tonumber(each.key)]

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-database-${each.key}"
      Type = "database"
    }
  )
}

resource "aws_db_subnet_group" "this" {
  name = "${var.environment}-db-subnet-group"

  subnet_ids = [
    for subnet in aws_subnet.database :
    subnet.id
  ]

  tags = var.tags
}