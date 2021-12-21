import { Memento } from '../interfaces/memento.interface';
import { ConcreteMemento } from './concrete-memento.class';

export class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  doSomething(): void {
    console.log('Originator: I\'m doing something important.');
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  save(): Memento {
    return new ConcreteMemento(this.state);
  }

  restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }

  private generateRandomString(length = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // eslint-disable-next-line prefer-spread
    return Array.apply(null, { length })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
  }
}
