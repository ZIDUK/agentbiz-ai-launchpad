import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, GraduationCap, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTrainingPrograms } from "@/i18n/hooks";
import { useTranslation } from "@/i18n/useTranslation";

const TrainingsHub = () => {
  const { t } = useTranslation();
  const programs = useTrainingPrograms();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 lg:pt-32 pb-20">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wider text-primary mb-3">
              {t("trainings.hub.eyebrow")}
            </p>
            <h1 className="text-display mb-6">
              {t("trainings.hub.title")}{" "}
              <span className="gradient-text">{t("trainings.hub.titleHighlight")}</span>
            </h1>
            <p className="text-lead max-w-3xl mx-auto">{t("trainings.hub.subtitle")}</p>
          </div>

          <div className="space-y-6">
            {programs.map((program) => (
              <article
                key={program.slug}
                className="card-hover p-8 md:p-10 border border-border"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                      {program.brandName}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {program.title}
                    </h2>
                    <p className="text-secondary leading-relaxed mb-6 max-w-2xl">
                      {program.heroSubtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {program.formatLabel}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {program.locationLabel}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        {program.courses.length} {t("trainings.hub.courses")}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {program.courses.map((course) => (
                        <div
                          key={course.id}
                          className="rounded-lg border border-border bg-card/50 p-4"
                        >
                          <p className="text-xs font-semibold text-primary mb-1">
                            {t("trainings.hub.course")} {course.number}
                            {course.advanced ? ` · ${t("trainings.hub.advanced")}` : ""}
                          </p>
                          <p className="font-semibold text-foreground text-sm">{course.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-64 shrink-0 flex flex-col gap-3">
                    <div className="rounded-xl bg-primary/5 border border-primary/20 p-5 text-center">
                      <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground mb-1">{program.nextCohortLabel}</p>
                      <p className="font-bold text-foreground">{program.nextCohortDate}</p>
                    </div>
                    <Button asChild className="btn-primary w-full">
                      <Link to={`/trainings/${program.slug}`}>
                        {t("trainings.hub.viewProgram")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/trainings/${program.slug}/enroll`}>
                        {t("trainings.hub.enrollNow")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 card-hover p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">{t("trainings.hub.ctaTitle")}</h2>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">{t("trainings.hub.ctaBody")}</p>
            <Button asChild variant="outline">
              <Link to="/#contact">{t("trainings.hub.contactTeam")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainingsHub;
