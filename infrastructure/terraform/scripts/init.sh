#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENVIRONMENT="${1:-dev}"

echo "======================================"
echo "Terraform Initialization"
echo "Environment : ${ENVIRONMENT}"
echo "======================================"

ENV_DIR="${ROOT_DIR}/environments/${ENVIRONMENT}"

if [[ ! -d "${ENV_DIR}" ]]; then
  echo "Environment not found: ${ENV_DIR}"
  exit 1
fi

terraform -chdir="${ENV_DIR}" init \
  -upgrade \
  -reconfigure

echo "Terraform initialization completed."