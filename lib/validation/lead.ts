import { z } from "zod";

export const leadBodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional(),
  resource_slug: z.string().trim().min(1).max(200),
  source: z.enum([
    "resource_download",
    "roi_calculator",
    "insight_newsletter",
    "contact_form",
    "training_enrollment",
  ]),
  metadata: z.record(z.unknown()).optional(),
  website: z.string().max(0).optional().or(z.literal("")),
});
