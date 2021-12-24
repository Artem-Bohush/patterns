import { State } from './state.class';
import { ConcreteStateA } from './concrete-state-a.class';

export class ConcreteStateB extends State {
  handle1(): void {
    console.log('ConcreteStateB handles request1.');
  }

  handle2(): void {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateA());
  }
}
