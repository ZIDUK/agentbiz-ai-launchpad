### Task 10: Docker standalone + Dokploy + backups doc

**Files:**
- Replace: `Dockerfile` (Next standalone, not nginx/Vite)
- Create/Modify: `.dockerignore`, `docs/ops/sqlite-backup.md`
- Modify: remove Vite Supabase build ARGs from Dockerfile

**Dockerfile sketch:**

```dockerfile
# syntax=docker/dockerfile:1
FROM node:20-bookworm-slim AS deps
WORKDIR /app
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS builder
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build:next

FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV DATABASE_PATH=/data/agentbiz.sqlite
ENV CV_DIR=/data/cvs
RUN mkdir -p /data/cvs
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

- [ ] **Step 1: Local `docker build` + run with `-v agentbiz-data:/data`**
- [ ] **Step 2: Seed admin in container once**
- [ ] **Step 3: Dokploy: point domain to 3000, set secrets, mount volume `/data`**
- [ ] **Step 4: Write backup doc: copy `/data/agentbiz.sqlite*` + `/data/cvs` daily
- [ ] **Step 5: Smoke production URLs (health, form, admin login)
- [ ] **Step 6: Confirm `agentbiz-supabase` app is gone on the VPS**

