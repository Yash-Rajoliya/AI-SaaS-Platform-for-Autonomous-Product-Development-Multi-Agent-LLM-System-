#!/usr/bin/env bash

set -Eeuo pipefail

echo "Seeding platform data..."

psql "$DATABASE_URL" \
  -f infrastructure/postgres/seeds/demo-users.sql

psql "$DATABASE_URL" \
  -f infrastructure/postgres/seeds/demo-projects.sql

psql "$DATABASE_URL" \
  -f infrastructure/postgres/seeds/demo-agents.sql

echo "Seed completed."