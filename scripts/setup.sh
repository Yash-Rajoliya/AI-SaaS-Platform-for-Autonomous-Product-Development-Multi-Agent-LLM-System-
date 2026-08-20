#!/usr/bin/env bash

set -Eeuo pipefail

ENVIRONMENT="${1:-development}"

echo "Setting up environment: ${ENVIRONMENT}"

cp "configs/environments/${ENVIRONMENT}.env" .env

pnpm install

docker network create ai-platform-network \
  >/dev/null 2>&1 || true

echo "Environment setup completed."