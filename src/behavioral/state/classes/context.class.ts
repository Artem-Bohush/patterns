import { State } from './state.class';

export class Context {
  private state: State;

  constructor(state: State) {
    this.transitionTo(state);
  }

  transitionTo(state: State): void {
    console.log(`Context: Transition to ${state.constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  request1(): void {
    this.state.handle1();
  }

  request2(): void {
    this.state.handle2();
  }
}
