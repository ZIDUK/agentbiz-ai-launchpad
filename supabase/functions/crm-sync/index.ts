import { createClient } from "jsr:@supabase/supabase-js@2";
import {
  buildApplicationPayload,
  buildLeadPayload,
  syncToCrm,
  type CrmLeadPayload,
} from "../_shared/crm/index.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-agentbiz-webhook-secret",
};

interface DatabaseWebhookPayload {
  type?: string;
  table?: string;
  schema?: string;
  record?: Record<string, unknown>;
  old_record?: Record<string, unknown> | null;
}

function getServiceClient() {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return null;
  return createClient(url, key);
}

async function logSync(
  recordType: "lead" | "application",
  recordId: string,
  provider: string,
  status: "success" | "error",
  summary: string,
  externalId?: string,
) {
  const client = getServiceClient();
  if (!client) return;

  await client.from("crm_sync_log").insert({
    record_type: recordType,
    record_id: recordId,
    provider,
    status,
    external_id: externalId || null,
    response_summary: summary.slice(0, 1000),
  });
}

async function markSynced(table: "resource_leads" | "applications", recordId: string) {
  const client = getServiceClient();
  if (!client) return;

  await client
    .from(table)
    .update({ crm_synced_at: new Date().toISOString() })
    .eq("id", recordId);
}

function verifyWebhookSecret(req: Request): boolean {
  const expected = Deno.env.get("CRM_INBOUND_WEBHOOK_SECRET");
  if (!expected) return true;
  const received = req.headers.get("x-agentbiz-webhook-secret");
  return received === expected;
}

function payloadFromWebhook(body: DatabaseWebhookPayload): {
  payload: CrmLeadPayload;
  recordType: "lead" | "application";
  table: "resource_leads" | "applications";
} | null {
  if (body.type !== "INSERT" || !body.record || !body.table) {
    return null;
  }

  if (body.table === "resource_leads") {
    return {
      payload: buildLeadPayload(body.record),
      recordType: "lead",
      table: "resource_leads",
    };
  }

  if (body.table === "applications") {
    // Skip incomplete applications (CV not uploaded yet)
    if (!body.record.cv_url) {
      return null;
    }
    return {
      payload: buildApplicationPayload(body.record),
      recordType: "application",
      table: "applications",
    };
  }

  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  if (!verifyWebhookSecret(req)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = (await req.json()) as DatabaseWebhookPayload;
    const parsed = payloadFromWebhook(body);

    if (!parsed) {
      return new Response(JSON.stringify({ skipped: true, reason: "No actionable record" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const result = await syncToCrm(parsed.payload);

    await logSync(
      parsed.recordType,
      parsed.payload.recordId,
      result.provider,
      result.success ? "success" : "error",
      result.summary,
      result.externalId,
    );

    if (result.success && result.provider !== "none") {
      await markSynced(parsed.table, parsed.payload.recordId);
    }

    return new Response(
      JSON.stringify({
        success: result.success,
        provider: result.provider,
        summary: result.summary,
        externalId: result.externalId,
      }),
      {
        status: result.success ? 200 : 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
