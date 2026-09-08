# SQLite and CV backup / restore

The database and CV directory form one restore point. **Stop the application and all other writers before backing up or restoring.** Do not copy a running SQLite database, WAL and SHM using separate `cp` commands: those files may represent different instants.

## Backup

From a checkout with dependencies installed, and with the application stopped:

```bash
node scripts/backup-sqlite.mjs /path/to/data /path/to/backups/2026-09-08-120000
```

The source directory must contain `agentbiz.sqlite` and `cvs/`. The destination must not exist and must be outside the source. The command validates database integrity and referenced CV files, creates a SQLite backup snapshot, copies CVs, and writes `backup.json`. The app must remain stopped until the command completes because its PDFs and database cannot be snapshotted atomically together.

Restart the app after the command completes. Protect backups as sensitive data: they contain candidate documents, contact data and authentication records. Keep encrypted off-host copies and establish retention appropriate for these records. Scheduling and off-host storage are not configured by this script.

## Restore rehearsal

`npm test -- tests/backup.test.ts` creates a temporary database and PDF, backs them up, restores into a separate directory and verifies `integrity_check`, the row and PDF bytes. This validates the procedure against fixtures; it does not verify the production backup.

## Production restore

1. Stop the app and all writers.
2. Preserve the existing data directory separately for rollback.
3. Restore `agentbiz.sqlite` and `cvs/` together into an empty data directory. Never mix the restored database with old `-wal` or `-shm` files.
4. Check ownership and point the persistent volume at the restored directory.
5. Start the app. Verify `/api/ready`, admin login, a known record and its CV download.
6. Keep the previous volume until the restored data is accepted.

## Deployment

Use a persistent volume at `/data`, with `DATABASE_PATH=/data/agentbiz.sqlite` and `CV_DIR=/data/cvs`. `/api/health` checks the process only; `/api/ready` checks schema, auth configuration and CV directory permissions. Migrations must run before readiness can pass.
