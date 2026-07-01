import { z } from "zod";

export const createQuoteSchema = z.object({
  customer: z.string().min(1, "Customer is required"),

  project: z.string().min(1, "Project is required"),

  estimated_value: z
    .number()
    .positive("Estimated value must be greater than 0"),

  status: z
    .enum(["New", "InReview", "NeedsInfo", "Completed"])
    .optional(),
});

export const updateStatusSchema = z.object({
  status: z.enum([
    "New",
    "InReview",
    "NeedsInfo",
    "Completed",
  ]),
});