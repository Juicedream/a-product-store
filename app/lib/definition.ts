import * as z from "zod";

export const SignupSchema = z.object({
  name: z
    .string()
    .min(2, { error: "Name must be at least 2 characters long" })
    .trim(),
  email: z.email({ error: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { error: "Be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { error: "Contain at least one letter." })
    .regex(/[0-9]/, { error: "Contain at least one number." })
    .trim(),
  confirmPassword: z.string().or(z.literal('')),
  
}).refine((data) => data.confirmPassword === data.password, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const SigninSchema = z.object({
  email: z.email({ error: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(1, { error: "password cannot be empty" })
    .trim(),
})
