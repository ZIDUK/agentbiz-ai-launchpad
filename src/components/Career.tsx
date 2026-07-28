import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Clock, DollarSign, Users, Briefcase } from "lucide-react";
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
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6">
            {t("careers.joinTitle")} <span className="gradient-text">{t("careers.joinHighlight")}</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">{t("careers.joinSubtitle")}</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
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

        <div className="grid gap-8">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="card-hover p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-title text-foreground mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-secondary">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign size={16} />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {job.posted}
                    </Badge>
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">{t("careers.requirements")}</h4>
                    <ul className="space-y-1 text-sm text-secondary">
                      {job.requirements.slice(0, 3).map((req) => (
                        <li key={req} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-muted-foreground text-xs">
                          +{job.requirements.length - 3} {t("careers.moreRequirements")}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="lg:ml-8 flex-shrink-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="btn-primary w-full lg:w-auto">{t("careers.applyNow")}</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
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
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Users className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {t("careers.noPositions")} {departmentLabel(selectedDepartment)}
            </h3>
            <p className="text-secondary">{t("careers.checkBack")}</p>
          </div>
        )}

        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("careers.whyJoin")} <span className="gradient-text">Agentier</span>?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t("careers.cuttingEdge")}</h4>
                <p className="text-secondary text-sm leading-relaxed">{t("careers.cuttingEdgeBody")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t("careers.worldClass")}</h4>
                <p className="text-secondary text-sm leading-relaxed">{t("careers.worldClassBody")}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-primary" size={32} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{t("careers.competitive")}</h4>
                <p className="text-secondary text-sm leading-relaxed">{t("careers.competitiveBody")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
