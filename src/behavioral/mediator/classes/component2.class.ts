import { BaseComponent } from './base-component';

export class Component2 extends BaseComponent {
  doC(): void {
    console.log('Component 2 does C.');
    this.mediator.notify(this, 'C');
  }

  doD(): void {
    console.log('Component 2 does D.');
    this.mediator.notify(this, 'D');
  }
}
