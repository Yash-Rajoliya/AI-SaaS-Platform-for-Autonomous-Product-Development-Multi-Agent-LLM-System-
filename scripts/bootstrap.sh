#!/usr/bin/env bash

set -Eeuo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "==================================="
echo " AI Platform Bootstrap"
echo "==================================="

required_tools=(
  docker
  kubectl
  helm
  terraform
  node
  pnpm
)

for tool in "${required_tools[@]}"; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "Missing dependency: $tool"
    exit 1
  fi
done

mkdir -p \
  "$ROOT_DIR/logs" \
  "$ROOT_DIR/data" \
  "$ROOT_DIR/backups"

echo "Bootstrap complete."