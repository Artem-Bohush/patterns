import { BaseDecorator } from './base-decorator.class';

export class TelegramDecorator extends BaseDecorator {

  send(email: string) {
    super.send(email);
    this.sendTelegramMessage(email);
  }

  private sendTelegramMessage(message: string): void {
    console.log(`TelegramDecorator: Sending the telegram message: ${message}...`);
  }
}
