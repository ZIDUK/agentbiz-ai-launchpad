import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Briefcase, Clock, DollarSign, MapPin, Users } from "lucide-react";
import ApplicationForm from "./ApplicationForm";
import { useTranslation } from "@/i18n/useTranslation";
import { useJobPositions } from "@/i18n/hooks";
import { departmentKeys, type DepartmentKey } from "@/i18n/content/careers";

const Career = () => {
  const { t } = useTranslation();
  const jobPositions = useJobPositions();
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentKey>("all");

  const filteredJobs =
    selectedDepartment === "all"
      ? jobPositions
      : jobPositions.filter((job) => job.departmentKey === selectedDepartment);

  const departmentLabel = (key: DepartmentKey) => {
    if (key === "all") return t("careers.all");
    return t(`careers.departments.${key}`);
  };

  return (
    <section id="career" className="section pt-8">
      <div className="container max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-headline mb-6">
            {t("careers.joinTitle")} <span className="gradient-text">{t("careers.joinHighlight")}</span>
          </h2>
          <p className="text-lead mx-auto max-w-3xl">{t("careers.joinSubtitle")}</p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {departmentKeys.map((dept) => (
            <Button
              key={dept}
              variant={selectedDepartment === dept ? "default" : "outline"}
              onClick={() => setSelectedDepartment(dept)}
              className={selectedDepartment === dept ? "btn-primary" : ""}
            >
              {departmentLabel(dept)}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <article
              key={job.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_40px_hsl(212_100%_50%/0.12)]"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                  {job.posted}
                </span>
              </div>

              <h3 className="mb-1 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {job.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-primary">{job.department}</p>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-secondary">{job.description}</p>

              <div className="mb-5 space-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {job.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-3.5 w-3.5 text-primary" />
                  {job.salary}
                </span>
              </div>

              <ul className="mb-6 space-y-1.5 text-sm text-secondary">
                {job.requirements.slice(0, 3).map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="line-clamp-2">{req}</span>
                  </li>
                ))}
                {job.requirements.length > 3 && (
                  <li className="pl-3 text-xs text-muted-foreground">
                    +{job.requirements.length - 3} {t("careers.moreRequirements")}
                  </li>
                )}
              </ul>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-primary mt-auto w-full">
                    {t("careers.applyNow")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {t("careers.applyFor")} {job.title}
                    </DialogTitle>
                  </DialogHeader>
                  <ApplicationForm
                    position={job.positionValue}
                    positionLabel={job.title}
                    onClose={() => {
                      const closeButton = document.querySelector(
                        "[data-dialog-close]",
                      ) as HTMLButtonElement;
                      closeButton?.click();
                    }}
                  />
                </DialogContent>
              </Dialog>
            </article>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="py-12 text-center">
            <Users className="mx-auto mb-4 h-16 w-16 text-secondary" />
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              {t("careers.noPositions")} {departmentLabel(selectedDepartment)}
            </h3>
            <p className="text-secondary">{t("careers.checkBack")}</p>
          </div>
        )}

        <div className="mt-20 border-t border-border pt-16">
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              {t("careers.whyJoin")} <span className="gradient-text">Agentier</span>?
            </h3>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Briefcase className="text-primary" size={28} />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">{t("careers.cuttingEdge")}</h4>
                <p className="text-sm leading-relaxed text-secondary">{t("careers.cuttingEdgeBody")}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Users className="text-primary" size={28} />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">{t("careers.worldClass")}</h4>
                <p className="text-sm leading-relaxed text-secondary">{t("careers.worldClassBody")}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <DollarSign className="text-primary" size={28} />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">{t("careers.competitive")}</h4>
                <p className="text-sm leading-relaxed text-secondary">{t("careers.competitiveBody")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
