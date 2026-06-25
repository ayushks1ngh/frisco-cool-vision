import { z } from "zod";

export const leadCreateSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  phone: z.string().min(1, "Phone is required").max(30),
  email: z.string().email("Invalid email").max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Service is required").max(100),
  message: z.string().max(2000).optional().or(z.literal("")),
  sourcePage: z.string().max(255).optional(),
});

export const leadUpdateSchema = z.object({
  status: z.enum(["new", "contacted", "quoted", "scheduled", "completed", "closed"]).optional(),
  name: z.string().min(1).max(255).optional(),
  phone: z.string().min(1).max(30).optional(),
  email: z.string().email().max(255).optional().or(z.literal("")),
  service: z.string().min(1).max(100).optional(),
  message: z.string().max(2000).optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LeadCreate = z.infer<typeof leadCreateSchema>;
export type LeadUpdate = z.infer<typeof leadUpdateSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
