import { knexInstance } from '../utils/databases/knex/knex';
import { IUser, TUserFilter, TFilterOptions, TUpdateUser, TSafeUser } from './user.interface';

const tableName = 'user';

export async function create(first_name: string, last_name: string, email: string, username: string) {
  return await knexInstance(tableName).insert({first_name, last_name, email, username}).returning('*');
}

// *filter options e.g select sensitive fields?
export async function findOne(filter: TUserFilter) {
  // *support returning dynamic columns ref .select()
  return await knexInstance(tableName).where(filter).first<IUser>();
}

export async function updateOne(filter: TUserFilter, newData: TUpdateUser) {
  return await knexInstance(tableName).where(filter).update(newData).returning<TSafeUser>('*');
}

export async function removeOne(filter: TUserFilter) {
  return await knexInstance(tableName).where(filter).del();
}