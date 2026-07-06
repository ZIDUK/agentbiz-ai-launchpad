export type CrmProvider = "webhook" | "hubspot" | "pipedrive" | "none";

export interface CrmContact {
  name: string;
  email: string;
  company?: string;
  phone?: string;
}

export interface CrmLeadPayload {
  event: "lead.created" | "application.created";
  site: string;
  recordId: string;
  source: string;
  contact: CrmContact;
  lead?: {
    resourceSlug: string;
    metadata: Record<string, unknown>;
  };
  application?: {
    position: string;
    experience: string;
    coverLetter: string;
    cvUrl: string;
    cvFileName: string;
  };
  createdAt: string;
}

export interface CrmSyncResult {
  provider: CrmProvider;
  success: boolean;
  externalId?: string;
  summary: string;
}

export function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: "" };
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

export function leadSourceLabel(source: string): string {
  const labels: Record<string, string> = {
    resource_download: "Resource download",
    roi_calculator: "ROI calculator",
    insight_newsletter: "Insights newsletter",
    contact_form: "Contact form",
  };
  return labels[source] || source;
}

export function buildLeadPayload(record: Record<string, unknown>): CrmLeadPayload {
  return {
    event: "lead.created",
    site: "agentbiz.io",
    recordId: String(record.id),
    source: String(record.source || "unknown"),
    contact: {
      name: String(record.name || ""),
      email: String(record.email || ""),
      company: record.company ? String(record.company) : undefined,
    },
    lead: {
      resourceSlug: String(record.resource_slug || ""),
      metadata: (record.metadata as Record<string, unknown>) || {},
    },
    createdAt: String(record.created_at || new Date().toISOString()),
  };
}

export function buildApplicationPayload(record: Record<string, unknown>): CrmLeadPayload {
  return {
    event: "application.created",
    site: "agentbiz.io",
    recordId: String(record.id),
    source: "careers",
    contact: {
      name: String(record.name || ""),
      email: String(record.email || ""),
      phone: record.phone ? String(record.phone) : undefined,
    },
    application: {
      position: String(record.position || ""),
      experience: String(record.experience || ""),
      coverLetter: String(record.cover_letter || ""),
      cvUrl: String(record.cv_url || ""),
      cvFileName: String(record.cv_file_name || ""),
    },
    createdAt: String(record.applied_at || record.created_at || new Date().toISOString()),
  };
}
