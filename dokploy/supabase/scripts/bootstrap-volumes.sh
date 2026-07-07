#!/usr/bin/env bash
# Re-fetch Supabase docker volume files from the official repository.
# Run from dokploy/supabase/:  sh scripts/bootstrap-volumes.sh

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE="https://raw.githubusercontent.com/supabase/supabase/master/docker/volumes"
DEST="$ROOT/volumes"

FILES=(
  api/kong.yml
  api/kong-entrypoint.sh
  logs/vector.yml
  db/realtime.sql
  db/webhooks.sql
  db/roles.sql
  db/jwt.sql
  db/_supabase.sql
  db/logs.sql
  db/pooler.sql
  pooler/pooler.exs
  functions/main/index.ts
  functions/hello/index.ts
)

mkdir -p "$DEST/api" "$DEST/logs" "$DEST/db/data" "$DEST/storage" "$DEST/snippets" \
  "$DEST/functions/main" "$DEST/functions/hello" "$DEST/pooler"

for f in "${FILES[@]}"; do
  echo "→ $f"
  curl -fsSL "$BASE/$f" -o "$DEST/$f"
done

echo "Done. Volume tree at $DEST"
