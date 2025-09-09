import { z } from 'zod';

export const tourRequestSchema = z.object({
  orgName: z.string().min(2, "Organization name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State/Region is required"),
  country: z.string().default("USA"),
  estAttendance: z.string().optional(),
  preferredDates: z.string().optional(),
  venue: z.string().optional(),
  notes: z.string().optional()
});

export const roundtableJoinSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State/Region is required"),
  preferInPerson: z.boolean().default(true),
  availability: z.string().min(10, "Please describe your availability"),
  experience: z.string().optional(),
  churchAffiliation: z.string().optional()
});

export const kosRemindersSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  smsOptIn: z.boolean().default(false)
});

export const contactSchema = z.object({
  topic: z.enum(["general", "tour", "roundtables", "kos", "media", "other"]),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().min(10, "Please provide a detailed message")
});

export type TourRequest = z.infer<typeof tourRequestSchema>;
export type RoundtableJoin = z.infer<typeof roundtableJoinSchema>;
export type KOSReminders = z.infer<typeof kosRemindersSchema>;
export type Contact = z.infer<typeof contactSchema>;