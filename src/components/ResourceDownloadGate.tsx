import { useState } from "react";
import { Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
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
  downloadLabel = "Download",
  source = "resource_download",
}: ResourceDownloadGateProps) => {
  const [unlocked, setUnlocked] = useState(() => hasUnlockedResource(resourceSlug));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast.error("Please enter your name and work email.");
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
      toast.success("Download unlocked. Thank you!");
    } catch {
      unlockResource(resourceSlug);
      setUnlocked(true);
      toast.message("Download available", {
        description: "We saved your request locally. Download is ready.",
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
          {downloadLabel}
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
          <h3 className="font-semibold text-foreground">Unlock the download</h3>
          <p className="text-sm text-secondary mt-1">
            Enter your details to access <span className="text-foreground">{resourceTitle}</span>.
            We use this to share relevant enterprise AI insights — no spam.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`gate-name-${resourceSlug}`}>Full name</Label>
          <Input
            id={`gate-name-${resourceSlug}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`gate-email-${resourceSlug}`}>Work email</Label>
          <Input
            id={`gate-email-${resourceSlug}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor={`gate-company-${resourceSlug}`}>Company (optional)</Label>
          <Input
            id={`gate-company-${resourceSlug}`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Corp"
          />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" className="btn-primary w-full sm:w-auto" disabled={submitting}>
            {submitting ? "Unlocking..." : "Unlock download"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResourceDownloadGate;
