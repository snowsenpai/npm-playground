import { HttpStatus, HttpException } from '@/utils/exceptions';
import { create } from './user.dao';

class UserService {
  public async create(first_name: string, last_name: string, email: string, username: string) {
    return await create(first_name, last_name, email, username);
  } 
}

export { UserService };