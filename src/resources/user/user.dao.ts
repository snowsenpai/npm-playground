import { knexInstance } from '@/utils/databases/knex/knex';

const tableName = 'user';

export async function create(first_name: string, last_name: string, email: string, username: string) {
  return await knexInstance(tableName).insert({first_name, last_name, email, username}).returning('*');
}