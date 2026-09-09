# Security and reliability remediation — 2026-09-08

## Evidence and limits

This is a review of the local checkout and read-only GitHub API responses. It is not a forensic clearance of the developer computer, Dokploy host, dependencies or deployed image. No production data, secrets, credentials or repository access settings were changed. No deployment or push was performed.

- The tracked incident log describes repeated obfuscated build-file injections, with root cause unresolved. The two present build files do not contain the documented payload. The historical objects available locally did not independently establish the origin of the incidents; do not attribute them to a person from commit author metadata.
- GitHub reports this repository as **public**, despite older README text calling it private. `.env` and `dokploy/supabase/.env` are not tracked in the current index. This does not establish whether older history or artifacts exposed secrets.
- The classic branch-protection API returns 404, but **ruleset `protect-main` (20896641) is active** on the default branch. It requires PR review, signatures, linear history, forbids deletion/force pushes and requires `Malware pattern scan`. A user bypass is configured for the owner. Do not describe the branch as unprotected based on the legacy API.
- The repository APIs listed only owner ZIDUK as collaborator, no deploy keys, and no repository webhooks. Personal tokens, authorized GitHub/OAuth apps and host credentials are outside this inventory.
- Actions default workflow permissions are read-only and approval of PRs by workflows is disabled. Actions are not globally restricted to SHA-pinned versions, although this workflow now pins the actions it uses.

## Local changes

- Scanner now passes explicit include filters, fails on a missing root/search errors, and has regression fixtures. It remains a known-pattern heuristic, not an antivirus guarantee.
- CI runs source scanning before installation, then dependency audit, lint, unit/integration tests, production build and Chromium flows. Checkout does not persist its credential.
- Docker scans source before dependency installation/build and uses `npm ci`. `.dockerignore` excludes local env and runtime data.
- Compatible dependency updates and a targeted PostCSS override for Next remove the vulnerable bundled PostCSS without upgrading the Next major version. Rebuilt lockfile validated through a clean install. Review `npm audit` for remaining advisories rather than applying `--force` blindly.
- CRM identity changes persist; candidates retain notes on status-only changes; lists refresh after mutations. Public lead/application writes roll back together with CRM activity on failure; failed application writes remove the PDF.
- Application deletion removes its stored CV. SQLite and filesystem do not provide one atomic transaction; reconciliation after host/disk failures still needs operational attention.
- Dashboard uses real records and settings no longer pretend to save configuration or show backup history.
- Public content and metadata render on the server, unknown content slugs use Next notFound, and production CSP removes unsafe-eval and admits analytics destinations.
- `/api/health` remains liveness. `/api/ready` validates schema/config/storage permissions and drives the Docker healthcheck. It does not prove a valid admin account or external services.
- Offline backup script and restore test replace unsafe live-file-copy guidance.

## External follow-up still required

1. Obtain GitHub account security/audit records, authorized app/token inventory, and Dokploy/host logs for the reported incident windows. Preserve evidence before remediation that removes it.
2. Determine whether any affected revision was built and which credentials were accessible in that environment. Rotate/revoke those credentials with a coordinated deployment plan; invalidate affected sessions as appropriate. No credential values should enter issues or reports.
3. Check the running image digest/source revision against a verified build; inspect the host and build runner for persistence. Rebuild/redeploy from verified source if exposure is established.
4. Once this workflow has run remotely, add `Tests lint and build` as a required ruleset check. Review owner bypass and approval settings with the account owner; removing the only owner's path without another trusted reviewer can block normal operation.
5. Apply migrations before the new readiness healthcheck, rehearse backup/restore against an actual protected copy, and verify production login, forms, PDFs and analytics. The local temporary fixtures are not a production restore rehearsal.
6. Review remaining moderate development/legacy dependency advisories. Current production Next aliases `react-router-dom` to the local shim; legacy Vite uses the actual package. Avoid exposing development servers to untrusted networks.

## Remaining product work

Large admin lists still load in full; server pagination and search are a follow-up. Explicit role-based authorization is required before introducing non-admin accounts. The incident root cause remains **open** until external evidence is reviewed.

## Follow-up verification — 2026-09-09

- PR #5 was merged. Subsequent commit `95ea146` changed Docker/CI back to `npm install` after Node 20 peer/optional lockfile failures. The earlier `npm ci` statement above describes the initial remediation, not the current deployment configuration. Docker daemon is unavailable in the local environment; clean Linux installation remains to be reproduced before changing that choice again.
- Read-only public checks returned 200 for `/api/health` and `/api/ready`; `/services` returned an HTML title and heading; a deliberately invalid service slug returned 404. These probes do not establish the image digest or validate production admin login.
- Corrected both Vite aliases so `@/poc` resolves to the repository's `poc/` directory. Browser verification found and fixed the classic entry's missing theme provider.
- Added `npm run test:legacy`: builds both entries into temporary directories and verifies home/services in Chromium, checking runtime errors. Both builds and browser checks passed locally. CI now includes this check.
- These follow-up edits are local until committed and published. No production writes or credential rotations were performed.
