output "vpc_id" {
  value = aws_vpc.this.id
}

output "vpc_cidr" {
  value = aws_vpc.this.cidr_block
}

output "internet_gateway_id" {
  value = aws_internet_gateway.this.id
}

output "public_subnets" {
  value = [
    for subnet in aws_subnet.public :
    subnet.id
  ]
}

output "private_subnets" {
  value = [
    for subnet in aws_subnet.private :
    subnet.id
  ]
}

output "database_subnets" {
  value = [
    for subnet in aws_subnet.database :
    subnet.id
  ]
}

output "db_subnet_group" {
  value = aws_db_subnet_group.this.name
}