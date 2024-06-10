import { createKeysArray } from '../utils/sortField';

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

// serialized user
export type TSafeUser = Omit<IUser, 'password' | 'id'>

// *must match table columns name, snake_case!
export type TUserFilter = {
  id?: number;
  email?: string;
  username?: string;
  nanoid?: string;
}

// *email, password column types used only in auth service and a single user.dao fn
export type TUpdateUser = {
  username?: string;
  first_name?: string;
  last_name?: string;
}

export type TFilterOptions = {
  sensitiveFields?: boolean;
}

export const userSortFields = createKeysArray<IUser>()('email', 'created_at', 'updated_at');