import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/i18n/content";
import { isPublicIndustry } from "@/data/site-content";
import PageContent from "@/pages/IndustryDetail";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isPublicIndustry(slug) || !getIndustryBySlug(slug, "en")) notFound();
  return <PageContent />;
}
