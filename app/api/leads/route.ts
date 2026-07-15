import { NextResponse } from "next/server";
import { assertRateLimit } from "@/lib/rate-limit";
import { upsertCrmFromLead } from "@/lib/crm-service";
import { getDb, resourceLeads } from "@/lib/db";
import { leadBodySchema } from "@/lib/validation/lead";

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isHoneypotFilled(body: unknown): boolean {
  return (
    typeof body === "object" &&
    body !== null &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.length > 0
  );
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!assertRateLimit(`leads:${ip}`)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (isHoneypotFilled(body)) {
    return NextResponse.json({ id: "ok" });
  }

  const parsed = leadBodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = parsed.data;
  const db = getDb();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  db.insert(resourceLeads)
    .values({
      id,
      name: data.name,
      email: data.email,
      company: data.company ?? null,
      resourceSlug: data.resource_slug,
      source: data.source,
      metadata: JSON.stringify(data.metadata ?? {}),
      createdAt: now,
    })
    .run();

  upsertCrmFromLead({
    name: data.name,
    email: data.email,
    company: data.company,
    content: `Lead: ${data.resource_slug} via ${data.source}`,
  });

  return NextResponse.json({ id });
}
