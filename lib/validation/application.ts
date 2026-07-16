import { z } from "zod";

export const applicationFieldsSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().max(50).default(""),
  position: z.string().trim().min(1).max(200),
  experience: z.string().trim().min(1).max(5000),
  cover_letter: z.string().trim().max(10000).default(""),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ApplicationFields = z.infer<typeof applicationFieldsSchema>;
