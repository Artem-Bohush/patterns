import { Button } from '../interfaces/button.interface';

export class MacButton implements Button {
  render(): void {
    console.log('Render a button in Mac OS style...');
  }
}
