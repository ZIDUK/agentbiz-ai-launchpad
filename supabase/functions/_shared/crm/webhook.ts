import type { CrmLeadPayload, CrmSyncResult } from "./types.ts";

export async function syncViaWebhook(
  payload: CrmLeadPayload,
  webhookUrl: string,
  webhookSecret?: string,
): Promise<CrmSyncResult> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "User-Agent": "AgentBiz-CRM-Sync/1.0",
  };

  if (webhookSecret) {
    headers["X-AgentBiz-Secret"] = webhookSecret;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  const body = await response.text();

  if (!response.ok) {
    return {
      provider: "webhook",
      success: false,
      summary: `Webhook ${response.status}: ${body.slice(0, 240)}`,
    };
  }

  return {
    provider: "webhook",
    success: true,
    summary: `Webhook ${response.status}`,
  };
}
