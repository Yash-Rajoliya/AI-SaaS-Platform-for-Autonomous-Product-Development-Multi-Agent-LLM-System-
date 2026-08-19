#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENVIRONMENT="${1:-dev}"

echo "======================================"
echo "Terraform Plan"
echo "Environment : ${ENVIRONMENT}"
echo "======================================"

ENV_DIR="${ROOT_DIR}/environments/${ENVIRONMENT}"

if [[ ! -d "${ENV_DIR}" ]]; then
  echo "Environment not found: ${ENV_DIR}"
  exit 1
fi

PLAN_FILE="terraform-${ENVIRONMENT}.plan"

terraform -chdir="${ENV_DIR}" fmt -recursive
terraform -chdir="${ENV_DIR}" validate

terraform -chdir="${ENV_DIR}" plan \
  -var-file="terraform.tfvars" \
  -out="${PLAN_FILE}"

echo ""
echo "Plan generated:"
echo "${ENV_DIR}/${PLAN_FILE}"