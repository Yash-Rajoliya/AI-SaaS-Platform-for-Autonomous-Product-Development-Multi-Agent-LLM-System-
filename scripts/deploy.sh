#!/usr/bin/env bash

set -Eeuo pipefail

ENVIRONMENT="${1:-staging}"

echo "Deploying to ${ENVIRONMENT}"

terraform -chdir=infrastructure/terraform/environments/${ENVIRONMENT} apply -auto-approve

kubectl apply -f infrastructure/kubernetes/

echo "Deployment completed."