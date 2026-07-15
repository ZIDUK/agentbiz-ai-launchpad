import { desc } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getAdminSessionOr401 } from "@/lib/auth-guard";
import { getDb, resourceLeads } from "@/lib/db";

export async function GET() {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  const db = getDb();
  const leads = db.select().from(resourceLeads).orderBy(desc(resourceLeads.createdAt)).all();
  return NextResponse.json(leads);
}
