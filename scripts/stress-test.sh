#!/usr/bin/env bash

set -Eeuo pipefail

TARGET_URL="${1:-http://localhost:8080}"

k6 run \
  --vus 200 \
  --duration 5m \
  tests/performance/load/api-load-test.js \
  --env TARGET="${TARGET_URL}"