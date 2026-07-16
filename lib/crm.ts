import { fetchJson } from "./api-fetch";

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

type ApiContactRow = {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  stage: CrmStage;
  contactType: CrmContactType;
  priority: CrmPriority;
  notes: string;
  lastActivityAt: string;
  createdAt: string;
  updatedAt: string;
};

type ApiActivityRow = {
  id: string;
  contactId: string;
  activityType: CrmActivityType;
  content: string;
  metadata: string;
  createdAt: string;
};

function mapContact(row: ApiContactRow): CrmContact {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company || undefined,
    phone: row.phone || undefined,
    stage: row.stage,
    contact_type: row.contactType,
    priority: row.priority,
    notes: row.notes || "",
    last_activity_at: new Date(row.lastActivityAt),
    created_at: new Date(row.createdAt),
    updated_at: new Date(row.updatedAt),
  };
}

function mapActivity(row: ApiActivityRow): CrmActivity {
  let metadata: Record<string, unknown> = {};
  try {
    metadata = JSON.parse(row.metadata || "{}") as Record<string, unknown>;
  } catch {
    metadata = {};
  }

  return {
    id: row.id,
    contact_id: row.contactId,
    activity_type: row.activityType,
    content: row.content || "",
    metadata,
    created_at: new Date(row.createdAt),
  };
}

export const getCrmContacts = async (): Promise<CrmContact[]> => {
  const rows = await fetchJson<ApiContactRow[]>("/api/admin/crm/contacts");
  return rows.map(mapContact);
};

export const getCrmActivities = async (contactId: string): Promise<CrmActivity[]> => {
  const rows = await fetchJson<ApiActivityRow[]>(`/api/admin/crm/contacts/${contactId}/activities`);
  return rows.map(mapActivity);
};

export const updateCrmContact = async (
  id: string,
  updates: Partial<
    Pick<CrmContact, "name" | "company" | "phone" | "stage" | "contact_type" | "priority" | "notes">
  >,
): Promise<void> => {
  const payload: Record<string, unknown> = { id };
  if (updates.stage !== undefined) payload.stage = updates.stage;
  if (updates.priority !== undefined) payload.priority = updates.priority;
  if (updates.notes !== undefined) payload.notes = updates.notes;

  if (Object.keys(payload).length === 1) return;

  await fetchJson<ApiContactRow>("/api/admin/crm/contacts", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
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
  await fetchJson<ApiActivityRow>(`/api/admin/crm/contacts/${contactId}/activities`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ activityType, content }),
  });
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
  const { id } = await fetchJson<{ id: string }>("/api/admin/crm/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: contact.name.trim(),
      email: contact.email.trim().toLowerCase(),
      company: contact.company?.trim() || undefined,
      phone: contact.phone?.trim() || undefined,
      contact_type: contact.contact_type || "prospect",
      stage: contact.stage || "new",
      notes: contact.notes || "",
    }),
  });
  return id;
};

export const subscribeToCrmContacts = (callback: (contacts: CrmContact[]) => void) => {
  getCrmContacts().then(callback).catch(console.error);
  return () => {};
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
