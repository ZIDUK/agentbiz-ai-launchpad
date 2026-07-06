import type { CrmLeadPayload, CrmProvider, CrmSyncResult } from "./types.ts";
import { syncToHubSpot } from "./hubspot.ts";
import { syncToPipedrive } from "./pipedrive.ts";
import { syncViaWebhook } from "./webhook.ts";

export type { CrmLeadPayload, CrmProvider, CrmSyncResult } from "./types.ts";
export {
  buildApplicationPayload,
  buildLeadPayload,
  leadSourceLabel,
  splitName,
} from "./types.ts";

export function getCrmProvider(): CrmProvider {
  const provider = (Deno.env.get("CRM_PROVIDER") || "none").toLowerCase();
  if (provider === "webhook" || provider === "hubspot" || provider === "pipedrive") {
    return provider;
  }
  return "none";
}

export async function syncToCrm(payload: CrmLeadPayload): Promise<CrmSyncResult> {
  const provider = getCrmProvider();

  if (provider === "none") {
    return { provider: "none", success: true, summary: "CRM sync disabled" };
  }

  if (provider === "webhook") {
    const url = Deno.env.get("CRM_WEBHOOK_URL");
    if (!url) {
      return { provider: "webhook", success: false, summary: "CRM_WEBHOOK_URL not configured" };
    }
    return syncViaWebhook(payload, url, Deno.env.get("CRM_WEBHOOK_SECRET"));
  }

  if (provider === "hubspot") {
    const token = Deno.env.get("HUBSPOT_ACCESS_TOKEN");
    if (!token) {
      return { provider: "hubspot", success: false, summary: "HUBSPOT_ACCESS_TOKEN not configured" };
    }
    return syncToHubSpot(payload, token);
  }

  if (provider === "pipedrive") {
    const token = Deno.env.get("PIPEDRIVE_API_TOKEN");
    if (!token) {
      return { provider: "pipedrive", success: false, summary: "PIPEDRIVE_API_TOKEN not configured" };
    }
    return syncToPipedrive(
      payload,
      token,
      Deno.env.get("PIPEDRIVE_PIPELINE_ID"),
      Deno.env.get("PIPEDRIVE_STAGE_ID"),
    );
  }

  return { provider: "none", success: false, summary: `Unknown provider: ${provider}` };
}
