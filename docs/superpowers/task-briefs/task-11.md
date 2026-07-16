### Task 11: Hardening + remove Supabase deps

**Files:**
- Modify: `next.config.ts` headers, `middleware.ts` (origin allowlist for mutations)
- Modify: `package.json` remove `@supabase/supabase-js`
- Delete: `src/integrations/supabase/**` when unused
- Optional archive: `dokploy/supabase/` (do not delete until human confirms)
- Modify: default `npm run build` / `dev` → Next scripts
- Update: `README.md` / `DEPLOYMENT.md` for new stack

Security checklist:

- [ ] CSP + `X-Content-Type-Options: nosniff` + `Referrer-Policy` + `X-Frame-Options: DENY`
- [ ] Rate limit verified (burst POST → 429)
- [ ] Production signup disabled
- [ ] CV URL guessing fails without session
- [ ] No Supabase env vars required to build/run
- [ ] Rotate any secrets previously pasted in chat

