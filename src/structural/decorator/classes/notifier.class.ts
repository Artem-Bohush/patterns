import { INotifier } from '../interfaces/notifier.interface';

export class Notifier implements INotifier {
  send(email: string): void {
    console.log(`Notifier: Sending the email: ${email}...`);
  }
}
