# Security

## Incident log

### 2026-08-15 — Obfuscated JS injection in `postcss.config.js` + `scripts/generate-sitemap.mjs` (recurring)

**Pattern:** A push to `origin/main` and `origin/feat/next-sqlite-cutover` modified
two otherwise-inert build-time files (`postcss.config.js`,
`scripts/generate-sitemap.mjs`) by:

1. Prepending a legitimate-looking `createRequire` shim.
2. Appending a single long (5k+ char) obfuscated blob that uses
   `String['constructor']` (i.e. the `Function` constructor) to compile a hidden
   payload at runtime. The payload is invoked as `jYh(8358)`.

The blob executes whenever `npm run build` or `npm run build:classic` runs
(Next.js reads `postcss.config.js` during the build, and the sitemap script
runs in `build:classic`). At that point it has access to `process.env` of the
build process.

**Same file targeted twice** — first seen in commit `08f49b7` (2026-07-15,
removed same day), then again in `7249d17` (main) and `bb5b469`
(feat/next-sqlite-cutover) on 2026-07-31. The obfuscation scheme changed
between incidents but the structure is identical.

**Remediation applied:**
- Force-pushed clean local commits to `origin/main` and
  `origin/feat/next-sqlite-cutover`. Malicious commits preserved locally for a
  short window, then deleted.
- Added `scripts/scan-malware.sh` (tracked, reusable).
- Added `.git/hooks/pre-push` (local guard, refuses push if scan flags).
- Added `.github/workflows/security-scan.yml` (CI guard, runs on every push
  and PR).

**Open (root cause):** How the malicious commit reached `origin/main` is
unresolved. The user should:
1. Audit GitHub push access: collaborators, deploy keys, PATs.
2. If Dokploy uses a deploy key with push, rotate it.
3. Enable branch protection on `main` requiring PR review.

## Defense layers

1. **Local pre-push hook** (`.git/hooks/pre-push`) — refuses `git push` if
   `scripts/scan-malware.sh` flags anything. Override with `--no-verify` only
   in emergencies.

2. **CI scan** (`.github/workflows/security-scan.yml`) — runs on every push
   and PR. Even if the local hook is bypassed, CI will fail.

3. **Manual scan** — `npm run scan:malware` (see `package.json`).

## What to do if the scanner flags your code

1. Read the offending file. If the obfuscated blob is on a single line and
   uses `Function` / `String['constructor']` constructors, it is **not yours**.
2. Compare against the last known-good version in git history:
   `git show HEAD~5:postcss.config.js`.
3. If the file should be small but is now large, restore it from a clean
   commit: `git checkout <clean-sha> -- postcss.config.js`.
4. Re-run the scan to confirm.
5. **Do not push the cleaned file until you understand how the malicious
   version got there.** Otherwise it will reappear.
