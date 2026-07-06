import { supabase } from "@/integrations/supabase/client";

export interface ResourceLead {
  id?: string;
  name: string;
  email: string;
  company?: string;
  resource_slug: string;
  source: "resource_download" | "roi_calculator" | "insight_newsletter";
  metadata?: Record<string, unknown>;
  created_at: Date;
}

export const createResourceLead = async (
  lead: Omit<ResourceLead, "id" | "created_at">,
): Promise<string> => {
  const { data, error } = await (supabase as any)
    .from("resource_leads")
    .insert({
      name: lead.name,
      email: lead.email,
      company: lead.company || null,
      resource_slug: lead.resource_slug,
      source: lead.source,
      metadata: lead.metadata || {},
    })
    .select("id")
    .single();

  if (error || !data) {
    console.error("Error creating resource lead:", error);
    throw error;
  }

  return data.id;
};

export const getResourceLeads = async (): Promise<ResourceLead[]> => {
  const { data, error } = await (supabase as any)
    .from("resource_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching resource leads:", error);
    throw error;
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company || "",
    resource_slug: row.resource_slug,
    source: row.source as ResourceLead["source"],
    metadata: row.metadata || {},
    created_at: new Date(row.created_at),
  }));
};

export const subscribeToResourceLeads = (callback: (leads: ResourceLead[]) => void) => {
  getResourceLeads().then(callback);

  const channel = supabase
    .channel("resource-leads-changes")
    .on("postgres_changes", { event: "*", schema: "public", table: "resource_leads" }, () => {
      getResourceLeads().then(callback);
    })
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};

export const hasUnlockedResource = (slug: string): boolean => {
  return localStorage.getItem(`agentbiz_resource_access_${slug}`) === "true";
};

export const unlockResource = (slug: string): void => {
  localStorage.setItem(`agentbiz_resource_access_${slug}`, "true");
};
