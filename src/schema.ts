import { z } from "zod";

export const FormSchema = z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phoneNumber: z.string().min(1),
    salary: z.string()
    });

export type FormInput = z.infer<typeof FormSchema>;
