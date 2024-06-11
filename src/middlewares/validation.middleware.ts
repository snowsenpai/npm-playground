import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { HttpStatus, HttpResponse } from '../utils/exceptions';

type TRequestFields = 'body' | 'params' | 'query' | 'headers';

// Regex to locate the appropriate space for inserting commas in numbers
const regex = /(?<!.*ISO \d)\B(?=(\d{3})+(?!\d))/g;

export function validate(schema: z.ZodObject<any, any>, requestField: TRequestFields) {
  return (req: Request, res: Response, next: NextFunction) => {
    const raw = req[requestField];
    const result = schema.safeParse(raw);

    if (!result.success) {
      const validationError = fromZodError(result.error, { prefix: null });

      const errors = validationError.toString().replace(/"/g, "'").replace(regex, ',').split('; ');

      const response = HttpResponse.failed(`validation error in request ${requestField}`, errors);

      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(response);
    } else {
      req[requestField] = result.data;
      return next();
    }
  };
}
