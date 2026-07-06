import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from "sonner";
import {
  addCrmActivity,
  CRM_STAGES,
  getCrmActivities,
  updateCrmContact,
  updateCrmContactStage,
  type CrmActivity,
  type CrmContact,
  type CrmStage,
} from "@/lib/crm";
import { Building2, Calendar, Mail, Phone, StickyNote } from "lucide-react";

const activityLabels: Record<string, string> = {
  note: "Note",
  call: "Call",
  email: "Email",
  meeting: "Meeting",
  stage_change: "Stage change",
  lead_capture: "Lead captured",
  application: "Job application",
};

interface CrmContactDetailProps {
  contact: CrmContact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdated: () => void;
}

export function CrmContactDetail({
  contact,
  open,
  onOpenChange,
  onUpdated,
}: CrmContactDetailProps) {
  const [activities, setActivities] = useState<CrmActivity[]>([]);
  const [note, setNote] = useState("");
  const [activityType, setActivityType] = useState<"note" | "call" | "email" | "meeting">("note");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!contact?.id || !open) return;
    getCrmActivities(contact.id).then(setActivities);
  }, [contact?.id, open]);

  if (!contact) return null;

  const saveField = async (
    updates: Partial<Pick<CrmContact, "name" | "company" | "phone" | "priority" | "notes" | "contact_type">>,
  ) => {
    setSaving(true);
    try {
      await updateCrmContact(contact.id, updates);
      onUpdated();
    } catch {
      toast.error("Could not save contact");
    } finally {
      setSaving(false);
    }
  };

  const handleStageChange = async (stage: CrmStage) => {
    if (stage === contact.stage) return;
    setSaving(true);
    try {
      await updateCrmContactStage(contact.id, stage, contact.stage);
      onUpdated();
      setActivities(await getCrmActivities(contact.id));
      toast.success("Stage updated");
    } catch {
      toast.error("Could not update stage");
    } finally {
      setSaving(false);
    }
  };

  const handleAddActivity = async () => {
    if (!note.trim()) return;
    setSaving(true);
    try {
      await addCrmActivity(contact.id, activityType, note.trim());
      setNote("");
      setActivities(await getCrmActivities(contact.id));
      onUpdated();
      toast.success("Activity added");
    } catch {
      toast.error("Could not add activity");
    } finally {
      setSaving(false);
    }
  };

  const stageMeta = CRM_STAGES.find((s) => s.id === contact.stage);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left">{contact.name}</SheetTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {stageMeta && (
              <Badge variant="outline" className={stageMeta.color}>
                {stageMeta.label}
              </Badge>
            )}
            <Badge variant="secondary">{contact.contact_type}</Badge>
            {contact.priority !== "normal" && (
              <Badge variant="outline">{contact.priority} priority</Badge>
            )}
          </div>
        </SheetHeader>

        <div className="space-y-6">
          <section className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="crm-name">Name</Label>
              <Input
                id="crm-name"
                defaultValue={contact.name}
                onBlur={(e) => {
                  if (e.target.value.trim() !== contact.name) {
                    void saveField({ name: e.target.value.trim() });
                  }
                }}
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crm-company">Company</Label>
                <Input
                  id="crm-company"
                  defaultValue={contact.company || ""}
                  placeholder="Company"
                  onBlur={(e) => {
                    const value = e.target.value.trim();
                    if (value !== (contact.company || "")) {
                      void saveField({ company: value || undefined });
                    }
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="crm-phone">Phone</Label>
                <Input
                  id="crm-phone"
                  defaultValue={contact.phone || ""}
                  placeholder="Phone"
                  onBlur={(e) => {
                    const value = e.target.value.trim();
                    if (value !== (contact.phone || "")) {
                      void saveField({ phone: value || undefined });
                    }
                  }}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Stage</Label>
                <Select value={contact.stage} onValueChange={(v) => void handleStageChange(v as CrmStage)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CRM_STAGES.map((stage) => (
                      <SelectItem key={stage.id} value={stage.id}>
                        {stage.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Priority</Label>
                <Select
                  value={contact.priority}
                  onValueChange={(v) => void saveField({ priority: v as CrmContact["priority"] })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="crm-notes">Notes</Label>
              <Textarea
                id="crm-notes"
                defaultValue={contact.notes}
                rows={3}
                placeholder="Internal notes..."
                onBlur={(e) => {
                  if (e.target.value !== contact.notes) {
                    void saveField({ notes: e.target.value });
                  }
                }}
              />
            </div>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h3 className="font-semibold text-foreground">Log activity</h3>
            <div className="flex gap-2">
              <Select value={activityType} onValueChange={(v) => setActivityType(v as typeof activityType)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="note">Note</SelectItem>
                  <SelectItem value="call">Call</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="meeting">Meeting</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What happened?"
              rows={3}
            />
            <Button size="sm" onClick={() => void handleAddActivity()} disabled={saving || !note.trim()}>
              Add activity
            </Button>
          </section>

          <section className="space-y-3 border-t border-border pt-6">
            <h3 className="font-semibold text-foreground">Timeline</h3>
            {activities.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity yet.</p>
            ) : (
              <div className="space-y-3">
                {activities.map((activity) => (
                  <div key={activity.id} className="rounded-lg border border-border p-3">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {activityLabels[activity.activity_type] || activity.activity_type}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {activity.created_at.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-secondary">{activity.content}</p>
                    {activity.activity_type === "lead_capture" && activity.metadata?.metadata ? (
                      <pre className="mt-2 text-xs text-muted-foreground whitespace-pre-wrap">
                        {JSON.stringify(activity.metadata.metadata, null, 2)}
                      </pre>
                    ) : null}
                    {activity.activity_type === "application" && activity.metadata?.cv_url ? (
                      <a
                        href={String(activity.metadata.cv_url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-2 inline-block"
                      >
                        View CV
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </section>

          <div className="text-xs text-muted-foreground flex flex-wrap gap-4 pt-2">
            <span className="flex items-center gap-1">
              <Building2 className="h-3 w-3" />
              Created {contact.created_at.toLocaleDateString()}
            </span>
            {contact.phone && (
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                {contact.phone}
              </span>
            )}
            <span className="flex items-center gap-1">
              <StickyNote className="h-3 w-3" />
              Last activity {contact.last_activity_at.toLocaleString()}
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
