import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getPublicPaths, siteUrl } from "./seo-routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const paths = getPublicPaths();
const today = new Date().toISOString().slice(0, 10);

const urlEntries = paths
  .map((path) => {
    const loc = `${siteUrl}${path === "/" ? "" : path}`;
    const alternates = ["en", "es"]
      .map(
        (lang) =>
          `    <xhtml:link rel="alternate" hreflang="${lang}" href="${loc}?lang=${lang}" />`,
      )
      .join("\n");

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path.startsWith("/insights") ? "0.8" : "0.7"}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}?lang=en" />
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, sitemap, "utf8");
console.log(`Generated sitemap with ${paths.length} URLs → public/sitemap.xml`);
