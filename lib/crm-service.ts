import { eq } from "drizzle-orm";
import { getDb, crmContacts, crmActivities } from "@/lib/db";

export function upsertCrmFromLead(input: {
  name: string;
  email: string;
  company?: string | null;
  content: string;
}) {
  const db = getDb();
  const email = input.email.trim().toLowerCase();
  const now = new Date().toISOString();
  const existing = db.select().from(crmContacts).where(eq(crmContacts.email, email)).get();
  let contactId = existing?.id;
  if (!contactId) {
    contactId = crypto.randomUUID();
    db.insert(crmContacts)
      .values({
        id: contactId,
        name: input.name,
        email,
        company: input.company ?? null,
        stage: "new",
        contactType: "prospect",
        priority: "normal",
        notes: "",
        lastActivityAt: now,
        createdAt: now,
        updatedAt: now,
      })
      .run();
  } else {
    db.update(crmContacts)
      .set({ lastActivityAt: now, updatedAt: now, name: input.name })
      .where(eq(crmContacts.id, contactId))
      .run();
  }
  db.insert(crmActivities)
    .values({
      id: crypto.randomUUID(),
      contactId,
      activityType: "lead_capture",
      content: input.content,
      metadata: "{}",
      createdAt: now,
    })
    .run();
  return contactId;
}
