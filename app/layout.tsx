import { headers } from "next/headers";
import type { ReactNode } from "react";
import "./globals.css";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = (await headers()).get("x-agentbiz-locale") === "es" ? "es" : "en";
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
