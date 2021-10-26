import { GUIFactory } from '../interfaces/gui-factory.interface';
import { Button } from '../interfaces/button.interface';
import { WinButton } from './win-button.class';
import { Checkbox } from '../interfaces/checkbox.interface';
import { WinCheckbox } from './win-checkbox.class';

export class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }

  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}
