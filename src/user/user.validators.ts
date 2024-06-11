import { z } from 'zod';
import { pk_id, zObject, zResourcePagination } from '../lib/validation-schemas';
import { TCreateUser, TUpdateUser, userSortFields } from './user.interface';

const first_name = z.string().min(1);
const last_name = z.string();
const email = z.string().email();
const username = z.string();

export const createUser = zObject<TCreateUser>({
  email: z.string(),
  password: z.string(),
  first_name: z.string(),
  username: z.string(),
  last_name: z.string(),
});

// can merge with a z.object if needed
export const paginateUser = zResourcePagination(userSortFields, 'created_at');
export type TUserPaginate = z.infer<typeof paginateUser>;

//? findAll or findOne??
export const findQuery = z.object({
  id: pk_id.optional(),
  first_name: first_name.optional(),
  last_name: last_name.optional(),
  email: email.optional(),
  username: username.optional(),
}); // if findAll merge paginateUser

export type TFindAll = z.infer<typeof findQuery>;

// without
export const updateFields = zObject<TUpdateUser>({
  first_name: first_name.optional(),
  last_name: last_name.optional(),
  email: email.optional(),
  username: username,
});

//* case1: a type with one or more optional keys but with one required key
// when zObject<TUpdateUser>
// if TUpdate = TRequired & TOptional -> optional fields will be `unknown`
export type TUpdateUserValid = z.infer<typeof updateFields>;
