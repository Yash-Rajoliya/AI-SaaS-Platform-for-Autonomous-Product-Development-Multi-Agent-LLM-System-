#!/usr/bin/env bash

set -Eeuo pipefail

REVISION="${1}"

if [ -z "$REVISION" ]; then
  echo "Usage: rollback.sh <revision>"
  exit 1
fi

kubectl rollout undo deployment/platform-core \
  --to-revision="${REVISION}"

echo "Rollback completed."