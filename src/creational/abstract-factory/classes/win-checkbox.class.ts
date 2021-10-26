import { Checkbox } from '../interfaces/checkbox.interface';

export class WinCheckbox implements Checkbox {
  render(): void {
    console.log('Render a checkbox in Windows OS style...');
  }
}
