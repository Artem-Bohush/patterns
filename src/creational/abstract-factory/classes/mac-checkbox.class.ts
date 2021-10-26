import { Checkbox } from '../interfaces/checkbox.interface';

export class MacCheckbox implements Checkbox {
  render(): void {
    console.log('Render a checkbox in Mac OS style...');
  }
}
