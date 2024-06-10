import { Request, Response, NextFunction } from 'express';
import { HttpResponse, HttpStatus, HttpException } from '../utils/exceptions';

/**
 * Error handling middleware.
 */
// refine error handling?
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

  const response = HttpResponse.failed(message);
  res.status(status).json(response);
}
