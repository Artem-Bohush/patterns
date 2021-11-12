import { INotifier } from './interfaces/notifier.interface';
import { Notifier } from './classes/notifier.class';
import { SMSDecorator } from './classes/sms-decorator.class';
import { TelegramDecorator } from './classes/telegram-decorator.class';
import { SlackDecorator } from './classes/slack-decorator.class';

function clientCode(notifier: INotifier): void {
  // ...
  const notification = 'some important message';
  notifier.send(notification);
  // ...
}

export function decorator(): void {
  let notifier: INotifier = new Notifier();
  clientCode(notifier);

  console.log('');

  notifier = new SMSDecorator(notifier);
  clientCode(notifier);

  console.log('');

  notifier = new SlackDecorator(new TelegramDecorator(notifier));
  clientCode(notifier);
}
