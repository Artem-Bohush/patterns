import { Memento } from '../interfaces/memento.interface';

export class ConcreteMemento implements Memento {
  private state: string;

  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  getState(): string {
    return this.state;
  }

  getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  getDate(): string {
    return this.date;
  }
}
