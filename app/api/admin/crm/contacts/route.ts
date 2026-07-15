import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getAdminSessionOr401 } from "@/lib/auth-guard";
import { crmActivities, crmContacts, getDb } from "@/lib/db";
import { patchCrmContactSchema, postCrmContactSchema } from "@/lib/validation/admin";

export async function GET() {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  const db = getDb();
  const contacts = db.select().from(crmContacts).orderBy(desc(crmContacts.lastActivityAt)).all();
  return NextResponse.json(contacts);
}

export async function PATCH(req: Request) {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = patchCrmContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { id, stage, priority, notes } = parsed.data;
  const db = getDb();
  const existing = db.select().from(crmContacts).where(eq(crmContacts.id, id)).get();
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const now = new Date().toISOString();
  const updates: Partial<typeof crmContacts.$inferInsert> = {
    lastActivityAt: now,
    updatedAt: now,
  };
  if (stage !== undefined) updates.stage = stage;
  if (priority !== undefined) updates.priority = priority;
  if (notes !== undefined) updates.notes = notes;

  if (stage === undefined && priority === undefined && notes === undefined) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  db.update(crmContacts).set(updates).where(eq(crmContacts.id, id)).run();
  const updated = db.select().from(crmContacts).where(eq(crmContacts.id, id)).get();
  return NextResponse.json(updated);
}

export async function POST(req: Request) {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = postCrmContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = parsed.data;
  const db = getDb();
  const email = data.email.trim().toLowerCase();
  const existing = db.select().from(crmContacts).where(eq(crmContacts.email, email)).get();
  if (existing) {
    return NextResponse.json({ error: "Email already exists" }, { status: 409 });
  }

  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  db.insert(crmContacts)
    .values({
      id,
      name: data.name.trim(),
      email,
      company: data.company?.trim() || null,
      phone: data.phone?.trim() || null,
      stage: data.stage,
      contactType: data.contact_type,
      priority: "normal",
      notes: data.notes,
      lastActivityAt: now,
      createdAt: now,
      updatedAt: now,
    })
    .run();

  db.insert(crmActivities)
    .values({
      id: crypto.randomUUID(),
      contactId: id,
      activityType: "note",
      content: "Contact created manually",
      metadata: "{}",
      createdAt: now,
    })
    .run();

  return NextResponse.json({ id });
}
