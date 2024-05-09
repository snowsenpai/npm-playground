import { HttpStatus, HttpException } from '../utils/exceptions';
import { create, findOne, removeOne, updateOne } from './user.dao';
import { IUser, TUserFilter, TFilterOptions, TUpdateUser } from './user.interface';

class UserService {
  public async create(first_name: string, last_name: string, email: string, username: string) {
    return await create(first_name, last_name, email, username);
  }

  public async isUser(filter: TUserFilter) {
    const user = await findOne(filter);
    if (!user)
      return false;
    return true;
  }

  // auth flag to return sensitive fields
  public async findUser(filter: TUserFilter) {
    const user = await findOne(filter);
    if (!user)
      throw new HttpException(HttpStatus.NOT_FOUND, 'user not found');
    return user;
  }

  public async updateUser(filter: TUserFilter, newData: TUpdateUser) {
    const user = await updateOne(filter, newData);
    if (!user)
      throw new HttpException(HttpStatus.NOT_FOUND, 'user not found');
    return user;
  }

  public async deleteUser(filter: TUserFilter) {
    return await removeOne(filter);
  }
}

export { UserService };