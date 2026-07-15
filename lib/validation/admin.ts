import { z } from "zod";

export const applicationStatusSchema = z.enum([
  "pending",
  "reviewed",
  "interviewed",
  "accepted",
  "rejected",
]);

export const patchApplicationSchema = z.object({
  id: z.string().min(1),
  status: applicationStatusSchema.optional(),
  notes: z.string().optional(),
});

export const crmStageSchema = z.enum(["new", "contacted", "qualified", "proposal", "won", "lost"]);
export const crmPrioritySchema = z.enum(["low", "normal", "high"]);

export const patchCrmContactSchema = z.object({
  id: z.string().min(1),
  stage: crmStageSchema.optional(),
  priority: crmPrioritySchema.optional(),
  notes: z.string().optional(),
});

export const crmActivityTypeSchema = z.enum([
  "note",
  "call",
  "email",
  "meeting",
  "stage_change",
  "lead_capture",
  "application",
]);

export const postCrmActivitySchema = z.object({
  content: z.string().min(1),
  activityType: crmActivityTypeSchema.optional().default("note"),
});
