import { BaseDecorator } from './base-decorator.class';

export class SlackDecorator extends BaseDecorator {

  send(email: string) {
    super.send(email);
    this.sendSlackMessage(email);
  }

  private sendSlackMessage(message: string): void {
    console.log(`SlackDecorator: Sending the slack message: ${message}...`);
  }
}
