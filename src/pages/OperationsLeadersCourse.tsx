import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useTrainingBySlug } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";
import { ArrowRight, Calendar, Check, Lock, MapPin } from "lucide-react";
import NotFound from "./NotFound";

const OperationsLeadersCourse = () => {
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
        <div className="container max-w-5xl">
          <section className="text-center mb-20">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              {program.brandName}
            </p>
            <h1 className="text-display mb-6">
              <span className="gradient-text">{program.title}</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto mb-8">{program.heroSubtitle}</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 text-primary" />
                {program.formatLabel}
              </span>
              <span className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <MapPin className="h-4 w-4 text-primary" />
                {program.locationLabel}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {program.nextCohortLabel}{" "}
              <span className="font-semibold text-foreground">{program.nextCohortDate}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <Link to={`/trainings/${program.slug}/enroll`}>
                  {t("trainings.course.enrollCta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/trainings">{t("trainings.course.allPrograms")}</Link>
              </Button>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{program.valuePropTitle}</h2>
            <p className="text-secondary text-lg leading-relaxed max-w-3xl">{program.valuePropBody}</p>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{program.coursesIntroTitle}</h2>
            <p className="text-secondary leading-relaxed mb-10 max-w-3xl">{program.coursesIntroBody}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {program.courses.map((course) => (
                <div
                  key={course.id}
                  className={`card-hover p-8 h-full ${course.advanced ? "border-dashed" : ""}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {t("trainings.hub.course")} {course.number}
                    </span>
                    {course.advanced && (
                      <Lock className="h-4 w-4 text-muted-foreground" aria-hidden />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{course.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{course.subtitle}</p>
                  <p className="text-sm text-secondary mb-6 leading-relaxed">{course.audience}</p>

                  <ul className="space-y-2 mb-6">
                    {course.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-5 space-y-3">
                    {course.modules.map((mod) => (
                      <div key={mod.title}>
                        <p className="text-sm font-semibold text-foreground">{mod.title}</p>
                        <p className="text-xs text-muted-foreground">{mod.description}</p>
                      </div>
                    ))}
                  </div>

                  {course.prerequisite && (
                    <p className="text-xs text-muted-foreground mt-5 border-l-2 border-primary pl-3">
                      {course.prerequisite}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{program.artifactsTitle}</h2>
            <p className="text-secondary mb-10 max-w-3xl">{program.artifactsSubtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {program.artifacts.map((artifact) => {
                const Icon = artifact.icon;
                return (
                  <div key={artifact.title} className="card-hover p-6">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{artifact.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed">{artifact.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="card-hover p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">{t("trainings.course.finalCtaTitle")}</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">{t("trainings.course.finalCtaBody")}</p>
            <Button asChild className="btn-primary">
              <Link to={`/trainings/${program.slug}/enroll`}>{t("trainings.course.reserveSeat")}</Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OperationsLeadersCourse;
