import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getAdminSessionOr401 } from "@/lib/auth-guard";
import { applications, getDb } from "@/lib/db";
import { deleteApplicationSchema, patchApplicationSchema } from "@/lib/validation/admin";

export async function GET() {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  const db = getDb();
  const rows = db.select().from(applications).orderBy(desc(applications.appliedAt)).all();
  return NextResponse.json(rows);
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

  const parsed = patchApplicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { id, status, notes } = parsed.data;
  const db = getDb();
  const existing = db.select().from(applications).where(eq(applications.id, id)).get();
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const now = new Date().toISOString();
  const updates: Partial<typeof applications.$inferInsert> = {};
  if (status !== undefined) {
    updates.status = status;
    updates.reviewedAt = now;
  }
  if (notes !== undefined) {
    updates.notes = notes;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  db.update(applications).set(updates).where(eq(applications.id, id)).run();
  const updated = db.select().from(applications).where(eq(applications.id, id)).get();
  return NextResponse.json(updated);
}

export async function DELETE(req: Request) {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = deleteApplicationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const db = getDb();
  const existing = db.select().from(applications).where(eq(applications.id, parsed.data.id)).get();
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  db.delete(applications).where(eq(applications.id, parsed.data.id)).run();
  return NextResponse.json({ ok: true });
}
