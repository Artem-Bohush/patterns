import { BaseDecorator } from './base-decorator.class';

export class SMSDecorator extends BaseDecorator {

  send(email: string) {
    super.send(email);
    this.sendSMS(email);
  }

  private sendSMS(sms: string): void {
    console.log(`SMSDecorator: Sending the sms: ${sms}...`);
  }
}
