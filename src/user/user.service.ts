import { HttpStatus, HttpException } from '../utils/exceptions';
import { UserRepo } from './user.repo';
import { TFindAll, TUpdateUser } from './user.validators';

class UserService {
  public static async create(first_name: string, last_name: string, email: string, username: string) {
    return await UserRepo.create(first_name, last_name, email, username);
  }

  // auth flag to return sensitive fields
  public static async findUser(filter: TFindAll) {
    const user = await UserRepo.findOne(filter);
    console.log('user ', user);
    if (!user)
      throw new HttpException(HttpStatus.NOT_FOUND, 'user not found');
    return user;
  }

  public static async updateUser(filter: TFindAll, newData: TUpdateUser) {
    const user = await UserRepo.updateOne(filter, newData);
    if (!user)
      throw new HttpException(HttpStatus.NOT_FOUND, 'user not found');
    return user;
  }

  public static async deleteUser(filter: TFindAll) {
    return await UserRepo.removeOne(filter);
  }
}

export { UserService };