import { knexInstance } from '../utils/databases/knex/knex';
import { IUser, TSafeUser, TUpdateUser } from './user.interface';
import { TFindAll } from './user.validators';

// data access object
//! Knex Error handling!!
export class UserRepo {
  public static tableName = 'user';

  static async create(first_name: string, last_name: string, email: string, username: string) {
    return await knexInstance(this.tableName)
      .insert({ first_name, last_name, email, username })
      .returning('*');
  }

  // *filter options e.g select sensitive fields?
  static async findOne(filter: TFindAll) {
    // *support returning dynamic columns ref .select()
    return await knexInstance(this.tableName).where(filter).first<IUser>();
  }

  static async updateOne(filter: TFindAll, newData: TUpdateUser) {
    return await knexInstance(this.tableName)
      .where(filter)
      .update(newData)
      .returning<TSafeUser>('*');
  }

  static async removeOne(filter: TFindAll) {
    return await knexInstance(this.tableName).where(filter).del();
  }
}
