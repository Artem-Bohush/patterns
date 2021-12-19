import { BaseComponent } from './base-component';

export class Component1 extends BaseComponent {
  doA(): void {
    console.log('Component 1 does A.');
    this.mediator.notify(this, 'A');
  }

  doB(): void {
    console.log('Component 1 does B.');
    this.mediator.notify(this, 'B');
  }
}
