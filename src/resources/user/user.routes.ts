import { Router } from 'express';
import { validate } from '@/middlewares/index';
import * as schema from './user.validators';
import * as userController from './user.controller';

export const userRouter = Router();

const basePath = '/users';

userRouter.get(basePath, validate(schema.findQuery, 'query'), userController.find);

userRouter.post(basePath, validate(schema.create, 'body'), userController.create);

userRouter.patch(basePath, validate(schema.updateFields, 'body'), validate(schema.findQuery, 'query'), userController.update);

userRouter.delete(basePath, validate(schema.findQuery, 'query'), userController.deleteUser);
