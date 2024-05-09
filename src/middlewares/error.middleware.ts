import { Request, Response, NextFunction } from 'express';
import { HttpException } from '../utils/exceptions/http.exception';
import { HttpStatus } from '../utils/exceptions/http-status.enum';

/**
 * Error handling middleware.
 */
export function errorMiddleware(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
  let message = error.message;
  if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
    console.log(error);
    message = 'things exploded!';
  }

  res.status(status).send({ message });
}
