#!/usr/bin/env bash

set -Eeuo pipefail

cat > .env <<EOF
NODE_ENV=development

APP_NAME=AI_PLATFORM
APP_VERSION=1.0.0

API_PORT=8080
REDIS_HOST=redis
POSTGRES_HOST=postgres
QDRANT_HOST=qdrant

OPENAI_API_KEY=
ANTHROPIC_API_KEY=
GOOGLE_API_KEY=
EOF

echo ".env generated."