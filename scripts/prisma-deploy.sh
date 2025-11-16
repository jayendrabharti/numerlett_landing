#!/bin/bash

# This script handles Prisma migrations for both new and existing databases
# It attempts to deploy migrations, and if that fails due to existing schema,
# it marks migrations as applied and generates the client

set -e

echo "Attempting to deploy Prisma migrations..."

if npx prisma migrate deploy 2>&1 | grep -q "P3005"; then
  echo "Database already has schema. Marking migrations as resolved..."
  
  # Get list of migration directories
  for migration in prisma/migrations/*/; do
    migration_name=$(basename "$migration")
    if [ "$migration_name" != "migration_lock.toml" ]; then
      echo "Resolving migration: $migration_name"
      npx prisma migrate resolve --applied "$migration_name" || true
    fi
  done
  
  echo "Migrations marked as resolved."
else
  echo "Migrations deployed successfully."
fi

echo "Generating Prisma Client..."
npx prisma generate

echo "Prisma setup complete!"
