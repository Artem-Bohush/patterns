import { INotifier } from '../interfaces/notifier.interface';
import { Notifier } from './notifier.class';

export class BaseDecorator implements INotifier {

  constructor(protected wrappee: Notifier) {}

  send(email: string): void {
    this.wrappee.send(email);
  }
}
