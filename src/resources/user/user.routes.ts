import { Router } from 'express';
import { validate } from '@/middlewares/index';
import * as schema from './user.validation';
import * as userController from './user.controller';

export const userRouter = Router();

const basePath = '/users';

userRouter.get(`${basePath}`, validate(schema.findQuery, 'query'), userController.find);

userRouter.post(basePath, userController.create);
