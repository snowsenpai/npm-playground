import { IUser } from './user.interface';

export class UserDto {
  static addMailToList(user: IUser) {
    return {
      email: user.email,
    };
  }
}
