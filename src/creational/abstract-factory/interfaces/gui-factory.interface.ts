import { Button } from './button.interface';
import { Checkbox } from './checkbox.interface';

export interface GUIFactory {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
}
