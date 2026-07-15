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

export const deleteApplicationSchema = z.object({
  id: z.string().min(1),
});

export const crmStageSchema = z.enum(["new", "contacted", "qualified", "proposal", "won", "lost"]);
export const crmPrioritySchema = z.enum(["low", "normal", "high"]);
export const crmContactTypeSchema = z.enum(["prospect", "candidate", "customer"]);

export const patchCrmContactSchema = z.object({
  id: z.string().min(1),
  name: z.string().trim().min(1).max(200).optional(),
  company: z.string().trim().max(200).optional(),
  phone: z.string().trim().max(50).optional(),
  contact_type: crmContactTypeSchema.optional(),
  stage: crmStageSchema.optional(),
  priority: crmPrioritySchema.optional(),
  notes: z.string().optional(),
});

export const postCrmContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional(),
  phone: z.string().trim().max(50).optional(),
  contact_type: crmContactTypeSchema.optional().default("prospect"),
  stage: crmStageSchema.optional().default("new"),
  notes: z.string().optional().default(""),
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
