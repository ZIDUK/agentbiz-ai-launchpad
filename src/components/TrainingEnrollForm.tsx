import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createTrainingEnrollment } from "@/lib/leads";
import { trackEvent } from "@/lib/analytics";
import { useTranslation } from "@/i18n/useTranslation";
import type { TrainingProgram } from "@/i18n/content/trainings";

interface TrainingEnrollFormProps {
  program: TrainingProgram;
}

const TrainingEnrollForm = ({ program }: TrainingEnrollFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [courseId, setCourseId] = useState(program.courses[0]?.id ?? "");
  const [cohortId, setCohortId] = useState(program.cohorts[0]?.id ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const selectedCourse = program.courses.find((c) => c.id === courseId);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !role.trim() || !cohortId || !courseId) {
      toast.error(t("trainings.enroll.validationError"));
      return;
    }

    setSubmitting(true);
    try {
      await createTrainingEnrollment({
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        programSlug: program.slug,
        courseId,
        cohortId,
        role: role.trim(),
      });
      trackEvent("training_enroll_submit", {
        program: program.slug,
        course: courseId,
        cohort: cohortId,
      });
      navigate("/thank-you/training");
    } catch {
      toast.error(t("trainings.enroll.error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-hover p-8 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">{t("trainings.enroll.pickCourse")}</h2>
        <div className="space-y-2">
          <Label htmlFor="enroll-course">{t("trainings.enroll.courseLabel")}</Label>
          <Select value={courseId} onValueChange={setCourseId}>
            <SelectTrigger id="enroll-course">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {program.courses.map((course) => (
                <SelectItem key={course.id} value={course.id}>
                  {t("trainings.hub.course")} {course.number}: {course.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedCourse?.advanced && (
            <p className="text-xs text-muted-foreground">{selectedCourse.prerequisite}</p>
          )}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">{t("trainings.enroll.pickCohort")}</h2>
        <div className="space-y-2">
          <Label htmlFor="enroll-cohort">{t("trainings.enroll.cohortLabel")}</Label>
          <Select value={cohortId} onValueChange={setCohortId}>
            <SelectTrigger id="enroll-cohort">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {program.cohorts.map((cohort) => (
                <SelectItem key={cohort.id} value={cohort.id}>
                  {cohort.dates} · {cohort.format} · {cohort.location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">{t("trainings.enroll.yourDetails")}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="enroll-name">{t("trainings.enroll.fullName")}</Label>
            <Input
              id="enroll-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-email">{t("trainings.enroll.workEmail")}</Label>
            <Input
              id="enroll-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="enroll-company">{t("trainings.enroll.company")}</Label>
            <Input
              id="enroll-company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="enroll-role">{t("trainings.enroll.role")}</Label>
            <Input
              id="enroll-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder={t("trainings.enroll.rolePlaceholder")}
              required
            />
          </div>
        </div>
      </section>

      <div className="rounded-lg bg-muted/50 border border-border p-4 text-sm text-muted-foreground">
        {t("trainings.enroll.paymentNote")}
      </div>

      <Button type="submit" className="btn-primary w-full" disabled={submitting}>
        {submitting ? t("trainings.enroll.submitting") : t("trainings.enroll.submit")}
      </Button>
    </form>
  );
};

export default TrainingEnrollForm;
