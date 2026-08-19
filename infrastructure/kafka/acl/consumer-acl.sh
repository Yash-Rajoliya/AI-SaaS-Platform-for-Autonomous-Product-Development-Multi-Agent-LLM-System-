#!/usr/bin/env bash

set -euo pipefail

BOOTSTRAP_SERVER=${BOOTSTRAP_SERVER:-kafka-service:9092}
PRINCIPAL=${1:?principal required}
TOPIC=${2:?topic required}
GROUP=${3:?consumer group required}

kafka-acls.sh \
  --bootstrap-server "${BOOTSTRAP_SERVER}" \
  --add \
  --allow-principal "User:${PRINCIPAL}" \
  --consumer \
  --topic "${TOPIC}" \
  --group "${GROUP}"

echo "Consumer ACL granted for ${PRINCIPAL}"