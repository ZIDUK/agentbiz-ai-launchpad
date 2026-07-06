import type { CrmLeadPayload, CrmSyncResult } from "./types.ts";
import { leadSourceLabel, splitName } from "./types.ts";

async function pipedriveFetch(
  path: string,
  token: string,
  init?: RequestInit,
): Promise<Response> {
  const base = "https://api.pipedrive.com/v1";
  const separator = path.includes("?") ? "&" : "?";
  const url = `${base}${path}${separator}api_token=${token}`;
  return fetch(url, init);
}

async function findPersonByEmail(email: string, token: string): Promise<number | null> {
  const response = await pipedriveFetch(
    `/persons/search?term=${encodeURIComponent(email)}&fields=email&exact_match=true`,
    token,
  );
  const data = await response.json();

  if (!response.ok || !data.success) {
    return null;
  }

  const item = data.data?.items?.[0]?.item;
  return item?.id ? Number(item.id) : null;
}

function buildDealTitle(payload: CrmLeadPayload): string {
  if (payload.event === "application.created" && payload.application) {
    return `Careers: ${payload.application.position} — ${payload.contact.name}`;
  }

  const workflow = payload.lead?.metadata?.workflow
    ? String(payload.lead.metadata.workflow)
    : "";
  const label = leadSourceLabel(payload.source);
  return workflow
    ? `AgentBiz: ${workflow} (${label})`
    : `AgentBiz: ${payload.lead?.resourceSlug || label}`;
}

function buildNote(payload: CrmLeadPayload): string {
  if (payload.event === "application.created" && payload.application) {
    return [
      "Job application via agentbiz.io/careers",
      `Position: ${payload.application.position}`,
      `Experience: ${payload.application.experience}`,
      payload.application.cvUrl ? `CV: ${payload.application.cvUrl}` : "",
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
    `Source: ${leadSourceLabel(payload.source)}`,
    payload.lead?.resourceSlug ? `Resource: ${payload.lead.resourceSlug}` : "",
    workflow ? `Workflow: ${workflow}` : "",
    message ? `Message: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function syncToPipedrive(
  payload: CrmLeadPayload,
  token: string,
  pipelineId?: string,
  stageId?: string,
): Promise<CrmSyncResult> {
  const { firstName, lastName } = splitName(payload.contact.name);
  let personId = await findPersonByEmail(payload.contact.email, token);

  if (!personId) {
    const personResponse = await pipedriveFetch("/persons", token, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.contact.name,
        first_name: firstName,
        last_name: lastName || undefined,
        email: [{ value: payload.contact.email, primary: true, label: "work" }],
        phone: payload.contact.phone
          ? [{ value: payload.contact.phone, primary: true, label: "work" }]
          : undefined,
      }),
    });

    const personData = await personResponse.json();
    if (!personResponse.ok || !personData.success) {
      return {
        provider: "pipedrive",
        success: false,
        summary: `Pipedrive person ${personResponse.status}: ${JSON.stringify(personData).slice(0, 240)}`,
      };
    }
    personId = personData.data.id;
  }

  const dealBody: Record<string, unknown> = {
    title: buildDealTitle(payload),
    person_id: personId,
    visible_to: "3",
  };

  if (pipelineId) dealBody.pipeline_id = Number(pipelineId);
  if (stageId) dealBody.stage_id = Number(stageId);

  const dealResponse = await pipedriveFetch("/deals", token, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dealBody),
  });

  const dealData = await dealResponse.json();

  if (!dealResponse.ok || !dealData.success) {
    return {
      provider: "pipedrive",
      success: false,
      externalId: String(personId),
      summary: `Pipedrive deal ${dealResponse.status}: ${JSON.stringify(dealData).slice(0, 240)}`,
    };
  }

  const dealId = dealData.data?.id;
  const note = buildNote(payload);

  if (dealId && note) {
    await pipedriveFetch("/notes", token, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: note,
        deal_id: dealId,
        person_id: personId,
      }),
    });
  }

  return {
    provider: "pipedrive",
    success: true,
    externalId: dealId ? String(dealId) : String(personId),
    summary: dealId
      ? `Pipedrive deal created (${dealId}) for person ${personId}`
      : `Pipedrive person ${personId}`,
  };
}
