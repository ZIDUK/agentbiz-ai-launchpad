import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainingEnrollForm from "@/components/TrainingEnrollForm";
import { useTrainingBySlug } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";
import NotFound from "./NotFound";

const TrainingEnroll = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const program = useTrainingBySlug(slug ?? "");

  if (!program) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              {program.brandName}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("trainings.enroll.title")}{" "}
              <span className="gradient-text">{program.title}</span>
            </h1>
            <p className="text-secondary">{t("trainings.enroll.subtitle")}</p>
          </div>

          <TrainingEnrollForm program={program} />

          <p className="text-center text-sm text-muted-foreground mt-8">
            <Link to={`/trainings/${program.slug}`} className="text-primary hover:underline">
              {t("trainings.enroll.backToProgram")}
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingEnroll;
