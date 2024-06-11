/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { HttpStatus, HttpResponse } from '../utils/exceptions';
import { TFindAll } from './user.validators';
import { TUpdateUser } from './user.interface';

export class UserController {
  public static async create(req: Request, res: Response, next: NextFunction) {
    const { first_name, last_name, email, username } = req.body;
    const user = await UserService.create(first_name, last_name, email, username);
    const result = HttpResponse.success('user created', user);

    res.status(HttpStatus.OK).json(result);
  }

  public static async findOne(req: Request, res: Response, next: NextFunction) {
    const filter: TFindAll = req.query;
    const user = await UserService.findUser(filter);
    const result = HttpResponse.success('user found', user);

    res.status(HttpStatus.OK).json(result);
  }

  public static async update(req: Request, res: Response, next: NextFunction) {
    const filter: TFindAll = req.query;
    const newData: TUpdateUser = req.body;
    const user = await UserService.updateUser(filter, newData);
    const result = HttpResponse.success('user updated', user);

    res.status(HttpStatus.OK).json(result);
  }

  public static async deleteUser(req: Request, res: Response, next: NextFunction) {
    const filter: TFindAll = req.query;
    const user = await UserService.deleteUser(filter);
    const result = HttpResponse.success('user deleted', user);

    res.status(HttpStatus.OK).json(result);
  }
}
