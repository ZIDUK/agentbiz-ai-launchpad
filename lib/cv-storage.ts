import fs from "node:fs";
import path from "node:path";

const MAX_BYTES = 5 * 1024 * 1024;

export function getCvDir() {
  const dir = process.env.CV_DIR ?? path.join(process.cwd(), ".data", "cvs");
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export function saveCvBuffer(applicationId: string, buf: Buffer, originalName: string) {
  if (buf.byteLength > MAX_BYTES) throw new Error("FILE_TOO_LARGE");
  if (buf.subarray(0, 4).toString("utf8") !== "%PDF") throw new Error("INVALID_TYPE");
  const safeName = originalName.replace(/[^\w.-]+/g, "_").slice(0, 120);
  const stored = `${applicationId}.pdf`;
  const full = path.join(getCvDir(), stored);
  fs.writeFileSync(full, buf);
  return { cvPath: stored, cvFileName: safeName };
}

export async function saveCvFile(
  applicationId: string,
  file: File | Buffer,
  originalName: string,
): Promise<{ cvPath: string; cvFileName: string }> {
  const buf =
    file instanceof Buffer
      ? file
      : Buffer.from(await (file as File).arrayBuffer());
  return saveCvBuffer(applicationId, buf, originalName);
}
