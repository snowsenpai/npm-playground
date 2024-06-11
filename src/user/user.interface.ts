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
export type TCreateUser = Pick<
  IUser,
  'email' | 'password' | 'first_name' | 'last_name' | 'username'
>;

//* case1: a type with one or more optional keys but with one required key
// export type TUpdateUser = Pick<IUser, 'username'> & Partial<Pick<IUser, 'email' | 'first_name' | 'last_name'>>;
//* z.infer<> wont return unknown for string | undefined
export type TUpdateUser = {
  username: string;
  email: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
};

// serialized user
export type TSafeUser = Omit<IUser, 'password' | 'id'>;

export const userSortFields = createKeysArray<IUser>()('email', 'created_at', 'updated_at');
