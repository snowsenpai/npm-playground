import { z } from 'zod';

export const emailSchema = z.string().email();
export const nameSchema = z.string();
