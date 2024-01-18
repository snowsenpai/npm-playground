import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { HttpStatus } from '@/utils/exceptions';

const userService = new UserService();

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const {firstName, lastName, email, username} = req.body;
    const user = await userService.create(firstName, lastName, email, username);

    res.status(HttpStatus.OK).json(user);
  } catch (error) {
    next(error);
  }
}

export async function find(req: Request, res: Response, next: NextFunction) {
  try {
    // test validation middleware
    const {body, query, params} = req;
    res.status(HttpStatus.OK).json({body, query, params});
  } catch (error) {
    next(error);
  }
}