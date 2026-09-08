import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/i18n/content";
import PageContent from "@/pages/ServiceDetail";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getServiceBySlug(slug, "en")) notFound();
  return <PageContent />;
}
