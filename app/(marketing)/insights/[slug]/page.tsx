import { notFound } from "next/navigation";
import { getInsightBySlug } from "@/i18n/content";
import PageContent from "@/pages/InsightArticle";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getInsightBySlug(slug, "en")) notFound();
  return <PageContent />;
}
