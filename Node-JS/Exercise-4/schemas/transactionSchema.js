import { z } from "zod";

export const transactionZodSchema = z.object({
  title: z.string().min(1, "Title cannot be empty"),

  amount: z.number(),

  type: z.enum(["expense", "income"], {
    message: "Type must be either 'expense' or 'income'",
  }),

  category: z.string().min(1, "Category cannot be empty"),

  date: z.coerce.date(),
});
