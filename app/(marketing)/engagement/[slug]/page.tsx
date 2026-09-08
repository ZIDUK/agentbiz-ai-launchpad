import { notFound } from "next/navigation";
import { getEngagementBySlug } from "@/i18n/content";
import PageContent from "@/pages/EngagementDetail";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getEngagementBySlug(slug, "en")) notFound();
  return <PageContent />;
}
