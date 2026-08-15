#!/usr/bin/env bash
# install-hooks.sh — Install the tracked git hooks from scripts/hooks/ into
# .git/hooks/. Run once after cloning the repo, or any time a new hook is
# added under scripts/hooks/.
#
# Usage: ./scripts/install-hooks.sh

set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel)"
SRC="$REPO_ROOT/scripts/hooks"
DEST="$REPO_ROOT/.git/hooks"

if [[ ! -d "$SRC" ]]; then
  echo "no scripts/hooks/ directory found at $SRC — nothing to install"
  exit 0
fi

installed=0
for hook in "$SRC"/*; do
  [[ -f "$hook" ]] || continue
  name="$(basename "$hook")"
  cp "$hook" "$DEST/$name"
  chmod +x "$DEST/$name"
  echo "installed $name"
  installed=$((installed + 1))
done

if (( installed == 0 )); then
  echo "no hooks found under $SRC"
else
  echo "done — $installed hook(s) installed"
fi
