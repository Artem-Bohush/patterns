import { Flyweight } from './flyweight.class';

export class Context {
  constructor(
    private flyweight: Flyweight,
    private uniqueState: string[],
  ) {}

  operation(): void {
    this.flyweight.operation(this.uniqueState);
  }
}
