import { GUIFactory } from './interfaces/gui-factory.interface';
import { WinFactory } from './classes/win-factory.class';
import { MacFactory } from './classes/mac-factory.class';

function clientCode(guiFactory: GUIFactory): void {
  // ...
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  const button = guiFactory.createButton();
  button.render();

  const checkbox = guiFactory.createCheckbox();
  checkbox.render();
  // ...
}

export function abstractFactory(): void {
  console.log('App: Launched with the WinFactory...');
  clientCode(new WinFactory());

  console.log('');

  console.log('App: Launched with the MacFactory...');
  clientCode(new MacFactory());
}
