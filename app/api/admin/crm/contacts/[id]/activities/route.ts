import { desc, eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getAdminSessionOr401 } from "@/lib/auth-guard";
import { crmActivities, crmContacts, getDb } from "@/lib/db";
import { postCrmActivitySchema } from "@/lib/validation/admin";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: Request, context: RouteContext) {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  const { id } = await context.params;
  const db = getDb();
  const contact = db.select().from(crmContacts).where(eq(crmContacts.id, id)).get();
  if (!contact) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const activities = db
    .select()
    .from(crmActivities)
    .where(eq(crmActivities.contactId, id))
    .orderBy(desc(crmActivities.createdAt))
    .all();
  return NextResponse.json(activities);
}

export async function POST(req: Request, context: RouteContext) {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  const { id } = await context.params;
  const db = getDb();
  const contact = db.select().from(crmContacts).where(eq(crmContacts.id, id)).get();
  if (!contact) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = postCrmActivitySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const now = new Date().toISOString();
  const activityId = crypto.randomUUID();
  db.insert(crmActivities)
    .values({
      id: activityId,
      contactId: id,
      activityType: parsed.data.activityType,
      content: parsed.data.content,
      metadata: "{}",
      createdAt: now,
    })
    .run();

  db.update(crmContacts)
    .set({ lastActivityAt: now, updatedAt: now })
    .where(eq(crmContacts.id, id))
    .run();

  const activity = db.select().from(crmActivities).where(eq(crmActivities.id, activityId)).get();
  return NextResponse.json(activity);
}
