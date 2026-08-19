#!/usr/bin/env bash

set -euo pipefail

BOOTSTRAP_SERVER=${BOOTSTRAP_SERVER:-kafka-service:9092}
PRINCIPAL=${1:?principal required}
TOPIC=${2:?topic required}

kafka-acls.sh \
  --bootstrap-server "${BOOTSTRAP_SERVER}" \
  --add \
  --allow-principal "User:${PRINCIPAL}" \
  --producer \
  --topic "${TOPIC}"

echo "Producer ACL granted for ${PRINCIPAL} on ${TOPIC}"