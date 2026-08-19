resource "aws_msk_configuration" "this" {
  kafka_versions = [var.kafka_version]
  name           = "${var.environment}-kafka-config"

  server_properties = <<PROPERTIES
auto.create.topics.enable=true
delete.topic.enable=true
num.partitions=6
default.replication.factor=3
min.insync.replicas=2
PROPERTIES
}

resource "aws_msk_cluster" "this" {
  cluster_name = "${var.environment}-platform-kafka"

  kafka_version = var.kafka_version

  number_of_broker_nodes = var.broker_count

  broker_node_group_info {
    instance_type = var.instance_type

    client_subnets = var.subnet_ids

    security_groups = var.security_group_ids

    storage_info {
      ebs_storage_info {
        volume_size = var.volume_size
      }
    }
  }

  encryption_info {
    encryption_at_rest_kms_key_arn = var.kms_key_arn

    encryption_in_transit {
      client_broker = "TLS"
      in_cluster    = true
    }
  }

  configuration_info {
    arn      = aws_msk_configuration.this.arn
    revision = aws_msk_configuration.this.latest_revision
  }

  enhanced_monitoring = "PER_TOPIC_PER_BROKER"

  tags = merge(
    var.tags,
    {
      Service = "kafka"
    }
  )
}