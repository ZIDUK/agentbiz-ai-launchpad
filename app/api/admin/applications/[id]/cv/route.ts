import fs from "node:fs";
import path from "node:path";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getAdminSessionOr401 } from "@/lib/auth-guard";
import { getCvDir } from "@/lib/cv-storage";
import { applications, getDb } from "@/lib/db";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: Request, context: RouteContext) {
  const auth = await getAdminSessionOr401();
  if (auth.error) return auth.error;

  const { id } = await context.params;
  const db = getDb();
  const app = db.select().from(applications).where(eq(applications.id, id)).get();
  if (!app?.cvPath) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const cvRoot = path.resolve(getCvDir());
  const fullPath = path.resolve(cvRoot, app.cvPath);
  if (!fullPath.startsWith(cvRoot + path.sep) && fullPath !== cvRoot) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const buffer = fs.readFileSync(fullPath);
  const filename = app.cvFileName || "cv.pdf";
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename.replace(/"/g, "")}"`,
    },
  });
}
