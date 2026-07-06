import { useState } from "react";
import { Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useTranslation } from "@/i18n/useTranslation";
import { trackEvent } from "@/lib/analytics";
import {
  createResourceLead,
  hasUnlockedResource,
  unlockResource,
  type ResourceLead,
} from "@/lib/leads";

interface ResourceDownloadGateProps {
  resourceSlug: string;
  resourceTitle: string;
  downloadPath: string;
  downloadLabel?: string;
  source?: ResourceLead["source"];
}

const ResourceDownloadGate = ({
  resourceSlug,
  resourceTitle,
  downloadPath,
  downloadLabel,
  source = "resource_download",
}: ResourceDownloadGateProps) => {
  const { t } = useTranslation();
  const [unlocked, setUnlocked] = useState(() => hasUnlockedResource(resourceSlug));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error(t("resourceGate.validationError"));
      return;
    }

    setSubmitting(true);
    try {
      await createResourceLead({
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        resource_slug: resourceSlug,
        source,
      });
      unlockResource(resourceSlug);
      setUnlocked(true);
      trackEvent("download_resource", { resource_slug: resourceSlug, source });
      toast.success(t("resourceGate.thankYou"));
    } catch {
      unlockResource(resourceSlug);
      setUnlocked(true);
      toast.message(t("resourceGate.fallbackTitle"), {
        description: t("resourceGate.fallbackBody"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (unlocked) {
    return (
      <Button asChild variant="outline">
        <a href={downloadPath} download>
          <Download className="mr-2 h-4 w-4" />
          {downloadLabel ?? t("common.download")}
        </a>
      </Button>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-muted/30 p-6 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Lock className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{t("resourceGate.title")}</h3>
          <p className="text-sm text-secondary mt-1">
            {t("resourceGate.body").replace("{title}", resourceTitle)}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`gate-name-${resourceSlug}`}>{t("resourceGate.fullName")}</Label>
          <Input
            id={`gate-name-${resourceSlug}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("resourceGate.namePlaceholder")}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`gate-email-${resourceSlug}`}>{t("resourceGate.workEmail")}</Label>
          <Input
            id={`gate-email-${resourceSlug}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("resourceGate.emailPlaceholder")}
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor={`gate-company-${resourceSlug}`}>{t("resourceGate.companyOptional")}</Label>
          <Input
            id={`gate-company-${resourceSlug}`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={t("resourceGate.companyPlaceholder")}
          />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" className="btn-primary w-full sm:w-auto" disabled={submitting}>
            {submitting ? t("resourceGate.unlocking") : t("resourceGate.unlock")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResourceDownloadGate;
