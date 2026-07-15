import { NextResponse } from "next/server";
import { upsertCrmFromApplication } from "@/lib/crm-service";
import { saveCvFile } from "@/lib/cv-storage";
import { applications, getDb } from "@/lib/db";
import { assertRateLimit } from "@/lib/rate-limit";
import { applicationFieldsSchema } from "@/lib/validation/application";

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isHoneypotFilled(website: string | undefined): boolean {
  return typeof website === "string" && website.length > 0;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!assertRateLimit(`applications:${ip}`)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const rawFields = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    position: formData.get("position"),
    experience: formData.get("experience"),
    cover_letter: formData.get("cover_letter"),
    website: formData.get("website"),
  };

  if (isHoneypotFilled(typeof rawFields.website === "string" ? rawFields.website : undefined)) {
    return NextResponse.json({ id: "ok" });
  }

  const stringFields = Object.fromEntries(
    Object.entries(rawFields).map(([key, value]) => [key, typeof value === "string" ? value : ""]),
  );

  const parsed = applicationFieldsSchema.safeParse(stringFields);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const cvEntry = formData.get("cv");
  if (!(cvEntry instanceof File) || cvEntry.size === 0) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (cvEntry.type !== "application/pdf") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = parsed.data;
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  let cvMeta: { cvPath: string; cvFileName: string };
  try {
    cvMeta = await saveCvFile(id, cvEntry, cvEntry.name || "cv.pdf");
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const db = getDb();
  db.insert(applications)
    .values({
      id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience,
      coverLetter: data.cover_letter,
      cvPath: cvMeta.cvPath,
      cvFileName: cvMeta.cvFileName,
      status: "pending",
      appliedAt: now,
    })
    .run();

  upsertCrmFromApplication({
    name: data.name,
    email: data.email,
    phone: data.phone,
    position: data.position,
    content: `Application: ${data.position}`,
  });

  return NextResponse.json({ id });
}
