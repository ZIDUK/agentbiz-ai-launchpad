# SQLite and CV backup / restore

AgentBiz Next stores all business data in a single SQLite file and uploaded CVs as PDF files on disk. In production (Dokploy), both live on a **persistent volume** mounted at `/data`.

## What to back up

| Path | Contents |
|------|----------|
| `/data/agentbiz.sqlite` | Main database (leads, applications, CRM, Better Auth users/sessions) |
| `/data/agentbiz.sqlite-wal` | WAL journal (present when app is running with WAL mode) |
| `/data/agentbiz.sqlite-shm` | WAL shared memory (present while app is running) |
| `/data/cvs/` | Uploaded CV PDFs (one file per application UUID) |

Copy **all** `agentbiz.sqlite*` files together. Restoring only the main `.sqlite` file while stale WAL/SHM files remain can corrupt the database.

## Daily backup (recommended)

Run from the Dokploy host (or any machine with access to the volume):

```bash
BACKUP_ROOT=/var/backups/agentbiz
STAMP=$(date +%Y%m%d-%H%M%S)
DEST="$BACKUP_ROOT/$STAMP"
mkdir -p "$DEST"

# Adjust VOLUME_PATH if your Dokploy bind mount differs
VOLUME_PATH=/var/lib/dokploy/volumes/agentbiz-data

cp -a "$VOLUME_PATH/agentbiz.sqlite"* "$DEST/"
cp -a "$VOLUME_PATH/cvs" "$DEST/"

# Optional: compress for off-site copy
tar -czf "$BACKUP_ROOT/agentbiz-$STAMP.tar.gz" -C "$BACKUP_ROOT" "$STAMP"
```

Schedule with cron (example — daily at 03:15 UTC):

```cron
15 3 * * * root /usr/local/bin/agentbiz-sqlite-backup.sh
```

Retain at least 7 daily copies off the VPS (S3, another server, or encrypted object storage).

## Restore procedure

1. **Stop** the AgentBiz application in Dokploy (or scale to 0) so nothing writes to SQLite.
2. Copy backup files back to the volume:

   ```bash
   VOLUME_PATH=/var/lib/dokploy/volumes/agentbiz-data
   RESTORE_FROM=/var/backups/agentbiz/20260715-031500

   rm -f "$VOLUME_PATH/agentbiz.sqlite"*
   cp -a "$RESTORE_FROM/agentbiz.sqlite"* "$VOLUME_PATH/"
   rm -rf "$VOLUME_PATH/cvs"
   cp -a "$RESTORE_FROM/cvs" "$VOLUME_PATH/"
   ```

3. Fix ownership if needed (`chown` to the container user).
4. **Start** the application and verify:
   - `GET /api/health` → `{"ok":true}`
   - Admin login works
   - A known CV downloads from admin

## Dokploy volume notes

- Mount a **named or bind volume** at `/data` in the application settings.
- Set runtime env vars (see [dokploy-next-cutover.md](./dokploy-next-cutover.md)):
  - `DATABASE_PATH=/data/agentbiz.sqlite`
  - `CV_DIR=/data/cvs`
- The Docker image creates `/data/cvs` at build time, but the **mounted volume** replaces `/data` at runtime — ensure `cvs` exists on first deploy (`mkdir -p` on the host volume if empty).
- Do **not** store the database inside the container filesystem; it will be lost on redeploy.
- Empty database on first cutover is acceptable (no legacy Supabase data restore in v1).

## Related

- [Dokploy Next.js cutover checklist](./dokploy-next-cutover.md)
