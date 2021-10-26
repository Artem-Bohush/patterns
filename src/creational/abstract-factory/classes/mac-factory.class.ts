import { GUIFactory } from '../interfaces/gui-factory.interface';
import { Button } from '../interfaces/button.interface';
import { Checkbox } from '../interfaces/checkbox.interface';
import { MacButton } from './mac-button.class';
import { MacCheckbox } from './mac-checkbox.class';

export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
