export class HttpResponse {
  public success: boolean;
  public message?: string;
  public data?: any;
  public error?: any;

  private constructor(success: boolean, message: string, data?: any, errors?: any) {
    this.success = success;
    this.message = message || undefined;
    this.data = data;
    this.error = errors;
  }

  static success(message: string, data?: any): HttpResponse {
    return new HttpResponse(true, message, data, undefined);
  }

  static failed(message: string, errors?: any): HttpResponse {
    return new HttpResponse(false, message, undefined, errors);
  }
}