#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENVIRONMENT="${1:-dev}"

echo "======================================"
echo "Terraform Apply"
echo "Environment : ${ENVIRONMENT}"
echo "======================================"

ENV_DIR="${ROOT_DIR}/environments/${ENVIRONMENT}"

if [[ ! -d "${ENV_DIR}" ]]; then
  echo "Environment not found: ${ENV_DIR}"
  exit 1
fi

PLAN_FILE="terraform-${ENVIRONMENT}.plan"

if [[ -f "${ENV_DIR}/${PLAN_FILE}" ]]; then
  terraform -chdir="${ENV_DIR}" apply "${PLAN_FILE}"
else
  terraform -chdir="${ENV_DIR}" apply \
    -var-file="terraform.tfvars" \
    -auto-approve
fi

echo "Infrastructure successfully applied."