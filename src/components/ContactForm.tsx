import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createContactInquiry } from "@/lib/leads";
import { trackEvent } from "@/lib/analytics";
import { useTranslation } from "@/i18n/useTranslation";

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [workflow, setWorkflow] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !workflow.trim()) {
      toast.error(t("contactForm.validationError"));
      return;
    }

    setSubmitting(true);
    try {
      await createContactInquiry({
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        workflow: workflow.trim(),
        message: message.trim() || undefined,
      });
      trackEvent("contact_form_submit", { workflow: workflow.trim() });
      toast.success(t("contactForm.success"));
      setName("");
      setEmail("");
      setCompany("");
      setWorkflow("");
      setMessage("");
    } catch {
      toast.error(t("contactForm.error"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-hover p-8 space-y-5">
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">{t("contactForm.title")}</h3>
        <p className="text-sm text-secondary">{t("contactForm.subtitle")}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{t("contactForm.fullName")}</Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("contactForm.namePlaceholder")}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{t("contactForm.workEmail")}</Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("contactForm.emailPlaceholder")}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-company">{t("contactForm.company")}</Label>
        <Input
          id="contact-company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={t("contactForm.companyPlaceholder")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-workflow">{t("contactForm.workflow")}</Label>
        <Input
          id="contact-workflow"
          value={workflow}
          onChange={(e) => setWorkflow(e.target.value)}
          placeholder={t("contactForm.workflowPlaceholder")}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">{t("contactForm.message")}</Label>
        <Textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("contactForm.messagePlaceholder")}
          rows={4}
        />
      </div>

      <Button type="submit" className="btn-primary w-full sm:w-auto" disabled={submitting}>
        {submitting ? t("contactForm.submitting") : t("contactForm.submit")}
      </Button>
    </form>
  );
};

export default ContactForm;
