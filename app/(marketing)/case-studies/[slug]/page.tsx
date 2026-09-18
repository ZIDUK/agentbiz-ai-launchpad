import { notFound } from "next/navigation";
import { getCaseStudyBySlug } from "@/i18n/content";
import PageContent from "@/pages/CaseStudyDetail";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getCaseStudyBySlug(slug, "en")) notFound();
  return <PageContent />;
}
