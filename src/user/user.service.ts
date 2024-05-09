import { HttpStatus, HttpException } from '../utils/exceptions';
import { UserRepo } from './user.repo';
import { IUser, TUserFilter, TFilterOptions, TUpdateUser } from './user.interface';

class UserService {
  public static async create(first_name: string, last_name: string, email: string, username: string) {
    return await UserRepo.create(first_name, last_name, email, username);
  }

  // auth flag to return sensitive fields
  public static async findUser(filter: TUserFilter) {
    const user = await UserRepo.findOne(filter);
    if (!user)
      throw new HttpException(HttpStatus.NOT_FOUND, 'user not found');
    return user;
  }

  public static async updateUser(filter: TUserFilter, newData: TUpdateUser) {
    const user = await UserRepo.updateOne(filter, newData);
    if (!user)
      throw new HttpException(HttpStatus.NOT_FOUND, 'user not found');
    return user;
  }

  public static async deleteUser(filter: TUserFilter) {
    return await UserRepo.removeOne(filter);
  }
}

export { UserService };