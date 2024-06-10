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

// use to create a typed z.object
export type TCreateUser = Pick<IUser, 'email' | 'password' | 'first_name' | 'last_name' | 'username'>;

// serialized user
export type TSafeUser = Omit<IUser, 'password' | 'id'>

export const userSortFields = createKeysArray<IUser>()('email', 'created_at', 'updated_at');