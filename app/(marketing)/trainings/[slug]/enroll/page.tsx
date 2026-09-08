import { notFound } from "next/navigation";
import { getTrainingBySlug } from "@/i18n/content/trainings";
import PageContent from "@/pages/TrainingEnroll";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getTrainingBySlug(slug, "en")) notFound();
  return <PageContent />;
}
