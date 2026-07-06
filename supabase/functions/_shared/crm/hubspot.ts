import type { CrmLeadPayload, CrmSyncResult } from "./types.ts";
import { leadSourceLabel, splitName } from "./types.ts";

async function findContactByEmail(email: string, token: string): Promise<string | null> {
  const response = await fetch(
    `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (response.status === 404) return null;
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`HubSpot lookup ${response.status}: ${body.slice(0, 200)}`);
  }

  const data = await response.json();
  return data.id ? String(data.id) : null;
}

function buildNote(payload: CrmLeadPayload): string {
  if (payload.event === "application.created" && payload.application) {
    return [
      "AgentBiz job application",
      `Position: ${payload.application.position}`,
      `Experience: ${payload.application.experience}`,
      payload.application.cvUrl ? `CV: ${payload.application.cvUrl}` : "",
      payload.application.coverLetter
        ? `Cover letter: ${payload.application.coverLetter.slice(0, 500)}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  const workflow = payload.lead?.metadata?.workflow
    ? String(payload.lead.metadata.workflow)
    : "";
  const message = payload.lead?.metadata?.message
    ? String(payload.lead.metadata.message)
    : "";

  return [
    `AgentBiz lead — ${leadSourceLabel(payload.source)}`,
    payload.lead?.resourceSlug ? `Resource: ${payload.lead.resourceSlug}` : "",
    workflow ? `Workflow: ${workflow}` : "",
    message ? `Message: ${message.slice(0, 500)}` : "",
    Object.keys(payload.lead?.metadata || {}).length
      ? `Metadata: ${JSON.stringify(payload.lead?.metadata).slice(0, 400)}`
      : "",
  ]
    .filter(Boolean)
    .join("\n");
}

async function attachNote(contactId: string, body: string, token: string): Promise<void> {
  const noteResponse = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        hs_timestamp: new Date().toISOString(),
        hs_note_body: body,
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
        },
      ],
    }),
  });

  if (!noteResponse.ok) {
    console.warn("HubSpot note failed:", await noteResponse.text());
  }
}

export async function syncToHubSpot(
  payload: CrmLeadPayload,
  token: string,
): Promise<CrmSyncResult> {
  const { firstName, lastName } = splitName(payload.contact.name);
  const lifecycleStage = payload.event === "application.created" ? "other" : "lead";

  const properties: Record<string, string> = {
    email: payload.contact.email,
    firstname: firstName,
    lastname: lastName || "—",
    lifecyclestage: lifecycleStage,
    hs_lead_status: "NEW",
  };

  if (payload.contact.company) {
    properties.company = payload.contact.company;
  }
  if (payload.contact.phone) {
    properties.phone = payload.contact.phone;
  }
  if (payload.application?.position) {
    properties.jobtitle = payload.application.position;
  }

  const existingId = await findContactByEmail(payload.contact.email, token);

  const response = await fetch(
    existingId
      ? `https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`
      : "https://api.hubapi.com/crm/v3/objects/contacts",
    {
      method: existingId ? "PATCH" : "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    return {
      provider: "hubspot",
      success: false,
      summary: `HubSpot ${response.status}: ${JSON.stringify(data).slice(0, 240)}`,
    };
  }

  const contactId = String(data.id || existingId || "");
  await attachNote(contactId, buildNote(payload), token);

  return {
    provider: "hubspot",
    success: true,
    externalId: contactId,
    summary: existingId ? `HubSpot contact updated (${contactId})` : `HubSpot contact created (${contactId})`,
  };
}
