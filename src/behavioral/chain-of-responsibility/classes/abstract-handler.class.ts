import { Handler } from '../interfaces/handler.interface';

export class AbstractHandler implements Handler {

  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}
