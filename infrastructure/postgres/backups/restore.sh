#!/usr/bin/env bash

set -euo pipefail

BACKUP_FILE="$1"

if [[ -z "${BACKUP_FILE}" ]]; then
  echo "Usage: restore.sh <backup-file>"
  exit 1
fi

gunzip -c "${BACKUP_FILE}" | psql postgres

echo "Restore completed."