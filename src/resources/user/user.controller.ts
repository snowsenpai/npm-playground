import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { HttpStatus } from '@/utils/exceptions';
import * as schema from './user.validators';

const userService = new UserService();

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const {first_name, last_name, email, username} = req.body;
    const user = await userService.create(first_name, last_name, email, username);

    res.status(HttpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

export async function find(req: Request, res: Response, next: NextFunction) {
  try {
    const filter: typeof schema.findQuery._type = req.query;
    const user = await userService.findUser(filter);
    res.status(HttpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const filter: typeof schema.findQuery._type = req.query;
    const user = await userService.updateUser(filter, req.body);
    res.status(HttpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    const filter: typeof schema.findQuery._type = req.query;
    const user = await userService.deleteUser(filter);
    res.status(HttpStatus.OK).json({ userDeleted: user });
  } catch (error) {
    next(error);
  }
}