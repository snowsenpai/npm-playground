import { z } from 'zod';

const id = z.coerce.number();
const nanoid = z.string();
const first_name = z.string().min(1);
const last_name = z.string();
const email = z.string().email();
const username = z.string();

// object key's case should match keys defined in interface (snake_case) which represent a table's column
export const create = z.object({ 
  first_name,
  last_name,
  email,
  username
});

export const findQuery = z.object({ 
  id: id.optional(),
  first_name: first_name.optional(),
  last_name: last_name.optional(),
  email: email.optional(),
  username: username.optional()
 });

 export const updateFields = z.object({ 
  first_name: first_name.optional(),
  last_name: last_name.optional(),
  email: email.optional(),
  username: username.optional()
 });