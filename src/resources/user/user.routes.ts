import { Router } from 'express';
import { create } from './user.controller';

export const userRouter = Router();

const basePath = '/users';

userRouter.post(basePath, create);
