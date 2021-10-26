import { Button } from '../interfaces/button.interface';

export class WinButton implements Button {
  render(): void {
    console.log('Render a button in Windows OS style...');
  }
}
