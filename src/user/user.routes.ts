import { Router } from 'express';
import { validate } from '../middlewares/index';
import * as schema from './user.validators';
import { UserController } from './user.controller';

export const userRouter = Router();

const basePath = '/users';

userRouter.get(basePath, validate(schema.findQuery, 'query'), UserController.find);

userRouter.post(basePath, validate(schema.create, 'body'), UserController.create);

userRouter.patch(basePath, validate(schema.updateFields, 'body'), validate(schema.findQuery, 'query'), UserController.update);

userRouter.delete(basePath, validate(schema.findQuery, 'query'), UserController.deleteUser);
