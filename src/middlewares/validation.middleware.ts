import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { HttpStatus } from '@/utils/exceptions';

type TRequestFields = 'body' | 'params' | 'query' | 'headers';

export function validate(schema: z.ZodObject<any, any>, requestField: TRequestFields) {
  return (req: Request, res: Response, next: NextFunction) => {
    const raw = req[requestField];
    const result = schema.safeParse(raw);

    let errors: string[] = [];
    if (!result.success) {
      result.error.errors.forEach((issue) => {
        errors.push(`${issue.path.join('.')} is ${issue.message} in request ${requestField}`);
      });
      return res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .json({
          message: 'validation error',
          errors
        });
    } else {
      req[requestField] = result.data;
      return next();
    }
  }
};