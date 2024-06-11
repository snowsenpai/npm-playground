import { Router } from 'express';
import * as schema from './user.validators';
import { UserController } from './user.controller';
import { validate } from '../middlewares/index';

export const userRouter = Router();

userRouter.get('/', validate(schema.findQuery, 'query'), UserController.findOne);

userRouter.post('/', validate(schema.createUser, 'body'), UserController.create);

userRouter.patch(
  '/',
  validate(schema.updateFields, 'body'),
  validate(schema.findQuery, 'query'),
  UserController.update,
);

userRouter.delete('/', validate(schema.findQuery, 'query'), UserController.deleteUser);
