import { HttpStatus } from './http-status.enum';

class HttpException extends Error {
  public status: number;
  public message: string;

  /**
   * @param status - A valid HttpStatus.
   * @param message - The error message.
   */
  constructor(status: HttpStatus, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export { HttpException };
