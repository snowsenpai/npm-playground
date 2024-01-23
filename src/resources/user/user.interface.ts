export interface IUser {
  username: string;
  password: string;
}

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