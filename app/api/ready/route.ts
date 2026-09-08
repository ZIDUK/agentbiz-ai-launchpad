import fs from "node:fs";
import { NextResponse } from "next/server";
import { getDb, resourceLeads, applications, crmContacts, crmActivities, user, session, account, verification } from "@/lib/db";
import { getCvDir } from "@/lib/cv-storage";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    if ((process.env.BETTER_AUTH_SECRET?.length ?? 0) < 32) throw new Error("Auth secret missing");
    const origin = new URL(process.env.BETTER_AUTH_URL || "");
    if (!["http:", "https:"].includes(origin.protocol)) throw new Error("Invalid auth origin");
    const db = getDb();
    for (const table of [resourceLeads, applications, crmContacts, crmActivities, user, session, account, verification]) {
      db.select().from(table).limit(0).all();
    }
    fs.accessSync(getCvDir(), fs.constants.R_OK | fs.constants.W_OK);
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
