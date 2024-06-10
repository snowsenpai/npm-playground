import { z } from 'zod';

//...
export const pk_id = z.coerce.number();
export const nanoid = z.string();

export const emailSchema = z.string().email();
export const nameSchema = z.string();

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(5),
  sort: z.enum(['asc', 'desc']).default('asc'),
});