output "nat_gateway_ids" {
  value = aws_nat_gateway.this[*].id
}

output "elastic_ips" {
  value = aws_eip.nat[*].public_ip
}

output "public_route_table" {
  value = aws_route_table.public.id
}

output "private_route_tables" {
  value = aws_route_table.private[*].id
}