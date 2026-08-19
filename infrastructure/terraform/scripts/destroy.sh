#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENVIRONMENT="${1:-dev}"

echo "======================================"
echo "Terraform Destroy"
echo "Environment : ${ENVIRONMENT}"
echo "======================================"

read -rp "Type '${ENVIRONMENT}' to confirm destruction: " CONFIRM

if [[ "${CONFIRM}" != "${ENVIRONMENT}" ]]; then
  echo "Confirmation failed."
  exit 1
fi

ENV_DIR="${ROOT_DIR}/environments/${ENVIRONMENT}"

if [[ ! -d "${ENV_DIR}" ]]; then
  echo "Environment not found: ${ENV_DIR}"
  exit 1
fi

terraform -chdir="${ENV_DIR}" destroy \
  -var-file="terraform.tfvars" \
  -auto-approve

echo "Infrastructure destroyed."