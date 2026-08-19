resource "aws_route_table" "private" {
  count  = length(var.private_subnet_ids)
  vpc_id = var.vpc_id

  tags = merge(
    var.tags,
    {
      Name = "${var.environment}-private-rt-${count.index}"
    }
  )
}

resource "aws_route" "private_nat" {
  count = length(var.private_subnet_ids)

  route_table_id         = aws_route_table.private[count.index].id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = aws_nat_gateway.this[count.index].id
}

resource "aws_route_table_association" "private" {
  count = length(var.private_subnet_ids)

  subnet_id      = var.private_subnet_ids[count.index]
  route_table_id = aws_route_table.private[count.index].id
}