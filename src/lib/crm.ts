import { supabase } from "@/integrations/supabase/client";

export type CrmStage = "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
export type CrmContactType = "prospect" | "candidate" | "customer";
export type CrmPriority = "low" | "normal" | "high";
export type CrmActivityType =
  | "note"
  | "call"
  | "email"
  | "meeting"
  | "stage_change"
  | "lead_capture"
  | "application";

export interface CrmContact {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  stage: CrmStage;
  contact_type: CrmContactType;
  priority: CrmPriority;
  notes: string;
  last_activity_at: Date;
  created_at: Date;
  updated_at: Date;
}

export interface CrmActivity {
  id: string;
  contact_id: string;
  activity_type: CrmActivityType;
  content: string;
  metadata: Record<string, unknown>;
  created_at: Date;
}

export const CRM_STAGES: { id: CrmStage; label: string; color: string }[] = [
  { id: "new", label: "New", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { id: "contacted", label: "Contacted", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { id: "qualified", label: "Qualified", color: "bg-amber-100 text-amber-800 border-amber-200" },
  { id: "proposal", label: "Proposal", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { id: "won", label: "Won", color: "bg-green-100 text-green-800 border-green-200" },
  { id: "lost", label: "Lost", color: "bg-slate-100 text-slate-600 border-slate-200" },
];

function mapContact(row: Record<string, unknown>): CrmContact {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    company: row.company ? String(row.company) : undefined,
    phone: row.phone ? String(row.phone) : undefined,
    stage: row.stage as CrmStage,
    contact_type: row.contact_type as CrmContactType,
    priority: row.priority as CrmPriority,
    notes: String(row.notes || ""),
    last_activity_at: new Date(String(row.last_activity_at)),
    created_at: new Date(String(row.created_at)),
    updated_at: new Date(String(row.updated_at)),
  };
}

function mapActivity(row: Record<string, unknown>): CrmActivity {
  return {
    id: String(row.id),
    contact_id: String(row.contact_id),
    activity_type: row.activity_type as CrmActivityType,
    content: String(row.content || ""),
    metadata: (row.metadata as Record<string, unknown>) || {},
    created_at: new Date(String(row.created_at)),
  };
}

export const getCrmContacts = async (): Promise<CrmContact[]> => {
  const { data, error } = await (supabase as any)
    .from("crm_contacts")
    .select("*")
    .order("last_activity_at", { ascending: false });

  if (error) {
    console.error("Error fetching CRM contacts:", error);
    throw error;
  }

  return (data || []).map(mapContact);
};

export const getCrmActivities = async (contactId: string): Promise<CrmActivity[]> => {
  const { data, error } = await (supabase as any)
    .from("crm_activities")
    .select("*")
    .eq("contact_id", contactId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching CRM activities:", error);
    throw error;
  }

  return (data || []).map(mapActivity);
};

export const updateCrmContact = async (
  id: string,
  updates: Partial<
    Pick<CrmContact, "name" | "company" | "phone" | "stage" | "contact_type" | "priority" | "notes">
  >,
): Promise<void> => {
  const { error } = await (supabase as any)
    .from("crm_contacts")
    .update({
      ...updates,
      last_activity_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating CRM contact:", error);
    throw error;
  }
};

export const updateCrmContactStage = async (
  id: string,
  stage: CrmStage,
  previousStage?: CrmStage,
): Promise<void> => {
  await updateCrmContact(id, { stage });

  if (previousStage && previousStage !== stage) {
    await addCrmActivity(id, "stage_change", `Stage: ${previousStage} → ${stage}`, {
      from: previousStage,
      to: stage,
    });
  }
};

export const addCrmActivity = async (
  contactId: string,
  activityType: CrmActivityType,
  content: string,
  metadata: Record<string, unknown> = {},
): Promise<void> => {
  const { error } = await (supabase as any).from("crm_activities").insert({
    contact_id: contactId,
    activity_type: activityType,
    content,
    metadata,
  });

  if (error) {
    console.error("Error adding CRM activity:", error);
    throw error;
  }

  await (supabase as any)
    .from("crm_contacts")
    .update({ last_activity_at: new Date().toISOString() })
    .eq("id", contactId);
};

export const createCrmContact = async (contact: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  contact_type?: CrmContactType;
  stage?: CrmStage;
  notes?: string;
}): Promise<string> => {
  const { data, error } = await (supabase as any)
    .from("crm_contacts")
    .insert({
      name: contact.name.trim(),
      email: contact.email.trim().toLowerCase(),
      company: contact.company?.trim() || null,
      phone: contact.phone?.trim() || null,
      contact_type: contact.contact_type || "prospect",
      stage: contact.stage || "new",
      notes: contact.notes || "",
    })
    .select("id")
    .single();

  if (error || !data) {
    console.error("Error creating CRM contact:", error);
    throw error;
  }

  await addCrmActivity(data.id, "note", "Contact created manually");
  return data.id;
};

export const subscribeToCrmContacts = (callback: (contacts: CrmContact[]) => void) => {
  getCrmContacts().then(callback);

  const channel = supabase
    .channel("crm-contacts-changes")
    .on("postgres_changes", { event: "*", schema: "public", table: "crm_contacts" }, () => {
      getCrmContacts().then(callback);
    })
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "crm_activities" }, () => {
      getCrmContacts().then(callback);
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};

export const exportCrmContactsCsv = (contacts: CrmContact[]): void => {
  const rows = [
    ["name", "email", "company", "phone", "stage", "type", "priority", "notes", "last_activity"],
    ...contacts.map((c) => [
      c.name,
      c.email,
      c.company || "",
      c.phone || "",
      c.stage,
      c.contact_type,
      c.priority,
      c.notes,
      c.last_activity_at.toISOString(),
    ]),
  ];

  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `agentbiz-crm-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};
