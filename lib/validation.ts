import { z } from 'zod';

export const PROJECT_TYPES = ['lawn-mowing', 'hedge-trimming', 'garden-cleanup', 'garden-makeover', 'maintenance', 'not-sure'] as const;
export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  'lawn-mowing': 'Lawn mowing & edging',
  'hedge-trimming': 'Hedge trimming & pruning',
  'garden-cleanup': 'Garden cleanup & waste removal',
  'garden-makeover': 'Garden makeover',
  maintenance: 'Ongoing maintenance',
  'not-sure': 'Not sure yet',
};

export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80),
  email: z.string().trim().email('Enter a valid email address').max(120),
  phone: z
    .string()
    .trim()
    .min(6, 'Enter a phone number')
    .max(30)
    .regex(/^[0-9+() \-]+$/, 'Numbers, spaces, and + ( ) - only'),
  projectType: z.enum(PROJECT_TYPES),
  message: z
    .string()
    .trim()
    .min(10, 'Tell us a little about the project')
    .max(2000, 'Keep it under 2000 characters'),
  honeypot: z.string().optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
