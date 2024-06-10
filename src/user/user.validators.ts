import { z } from 'zod';
import { paginationSchema, pk_id } from '../lib/validation-schemas';
import { userSortFields } from './user.interface';

const first_name = z.string().min(1);
const last_name = z.string();
const email = z.string().email();
const username = z.string();

// object key's case should match keys defined in interface (snake_case) which represent a table's column
//? create z obj from selected fields of a type?
//? create base z obj, infer type then extend to another type? e.g interface IUser extends TCreateUser
export const create = z.object({ 
  first_name,
  last_name,
  email,
  username
});

// can merge with a z.object if needed
export const paginateUser = z.object({
  sortField: z.enum(userSortFields).default('created_at'),
}).merge(paginationSchema);

export type TUserPaginate = z.infer<typeof paginateUser>;

//? findAll or findOne??
export const findQuery = z.object({ 
  id: pk_id.optional(),
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
