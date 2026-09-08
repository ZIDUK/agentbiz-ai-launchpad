import { notFound } from "next/navigation";
import { getResourceBySlug } from "@/i18n/content";
import PageContent from "@/pages/ResourceGuide";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getResourceBySlug(slug, "en")) notFound();
  return <PageContent />;
}
