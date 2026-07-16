import { fetchJson } from "./api-fetch";

export interface ResourceLead {
  id?: string;
  name: string;
  email: string;
  company?: string;
  resource_slug: string;
  source:
    | "resource_download"
    | "roi_calculator"
    | "insight_newsletter"
    | "contact_form"
    | "training_enrollment";
  metadata?: Record<string, unknown>;
  created_at: Date;
  crm_synced_at?: Date;
}

type ApiLeadRow = {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  resourceSlug: string;
  source: string;
  metadata: string;
  createdAt: string;
};

function mapLead(row: ApiLeadRow): ResourceLead {
  let metadata: Record<string, unknown> = {};
  try {
    metadata = JSON.parse(row.metadata || "{}") as Record<string, unknown>;
  } catch {
    metadata = {};
  }

  return {
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company || "",
    resource_slug: row.resourceSlug,
    source: row.source as ResourceLead["source"],
    metadata,
    created_at: new Date(row.createdAt),
  };
}

export const createResourceLead = async (
  lead: Omit<ResourceLead, "id" | "created_at">,
): Promise<string> => {
  const { id } = await fetchJson<{ id: string }>("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      company: lead.company || undefined,
      resource_slug: lead.resource_slug,
      source: lead.source,
      metadata: lead.metadata || {},
    }),
  });
  return id;
};

export const getResourceLeads = async (): Promise<ResourceLead[]> => {
  const rows = await fetchJson<ApiLeadRow[]>("/api/admin/leads");
  return rows.map(mapLead);
};

export const subscribeToResourceLeads = (callback: (leads: ResourceLead[]) => void) => {
  getResourceLeads().then(callback).catch(console.error);
  return () => {};
};

export const hasUnlockedResource = (slug: string): boolean => {
  return localStorage.getItem(`agentbiz_resource_access_${slug}`) === "true";
};

export const unlockResource = (slug: string): void => {
  localStorage.setItem(`agentbiz_resource_access_${slug}`, "true");
};

export interface ContactInquiry {
  name: string;
  email: string;
  company?: string;
  workflow: string;
  message?: string;
}

export const createContactInquiry = async (inquiry: ContactInquiry): Promise<string> => {
  return createResourceLead({
    name: inquiry.name,
    email: inquiry.email,
    company: inquiry.company,
    resource_slug: "contact-form",
    source: "contact_form",
    metadata: {
      workflow: inquiry.workflow,
      message: inquiry.message || "",
    },
  });
};

export interface TrainingEnrollment {
  name: string;
  email: string;
  company?: string;
  programSlug: string;
  courseId: string;
  cohortId: string;
  role: string;
}

export const createTrainingEnrollment = async (enrollment: TrainingEnrollment): Promise<string> => {
  return createResourceLead({
    name: enrollment.name,
    email: enrollment.email,
    company: enrollment.company,
    resource_slug: enrollment.programSlug,
    source: "training_enrollment",
    metadata: {
      course_id: enrollment.courseId,
      cohort_id: enrollment.cohortId,
      role: enrollment.role,
    },
  });
};
