import { z } from "zod";

// Signup validation schema
export const signUpFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// SignIn validation schema
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Types for forms
export type signUpFormValues = z.infer<typeof signUpFormSchema>;
export type signInFormValues = z.infer<typeof signInFormSchema>; // Corrected type
