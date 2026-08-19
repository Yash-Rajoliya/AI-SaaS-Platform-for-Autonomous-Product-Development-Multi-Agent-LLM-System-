#!/usr/bin/env bash

set -euo pipefail

BACKUP_DIR="/backups"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

mkdir -p "${BACKUP_DIR}"

pg_dumpall \
  --clean \
  --if-exists \
  --quote-all-identifiers \
  > "${BACKUP_DIR}/platform-${TIMESTAMP}.sql"

gzip "${BACKUP_DIR}/platform-${TIMESTAMP}.sql"

find "${BACKUP_DIR}" \
  -name "*.gz" \
  -mtime +14 \
  -delete

echo "Backup completed: ${TIMESTAMP}"