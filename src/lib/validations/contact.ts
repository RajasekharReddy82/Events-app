import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Required Name")
    .max(50, "Name must be less than 50 characters"),

  email: z
    .string()
    .min(1, "Required Email")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (value) =>
        /^\(\d{3}\)\s\d{3}-\d{4}$/.test(value) ||
        value.replace(/\D/g, "").length < 10,
      "Please enter a valid US phone number"
    ),

  eventType: z.string().min(1, "Please Select Event Type"),

  eventDate: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Event date must be in the future"),

  guestCount: z
    .string()
    .transform(Number)
    .refine((value) => value > 0, "Guest count must be greater than 0")
    .refine((value) => value <= 10000, "Guest count must be less than 10,000"),

  budget: z.string().min(1, "Please Select Budget"),

  venue: z
    .string()
    .min(1, "Required Venue Location")
    .max(100, "Venue location must be less than 100 characters"),

  message: z
    .string()
    .max(2000, "Message must be less than 2000 characters")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
