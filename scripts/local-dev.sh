#!/usr/bin/env bash

set -Eeuo pipefail

docker compose up \
  postgres redis kafka qdrant \
  -d

pnpm dev