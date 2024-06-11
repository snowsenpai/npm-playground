import { HttpStatus } from '../utils/exceptions/http-status.enum';
import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to handle undefined routes and endpoints.
 */
export function handelInvalidRoutes(req: Request, res: Response, next: NextFunction): void {
  res.status(HttpStatus.NOT_FOUND).json({ error: 'invalid route or endpoint' });
}
