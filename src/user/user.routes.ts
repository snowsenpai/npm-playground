import { Router } from 'express';
import { validate } from '../middlewares/index';
import * as schema from './user.validators';
import { UserController } from './user.controller';

export const userRouter = Router();

userRouter.get('/', validate(schema.findQuery, 'query'), UserController.find);

userRouter.post('/', validate(schema.create, 'body'), UserController.create);

userRouter.patch('/', validate(schema.updateFields, 'body'), validate(schema.findQuery, 'query'), UserController.update);

userRouter.delete('/', validate(schema.findQuery, 'query'), UserController.deleteUser);
