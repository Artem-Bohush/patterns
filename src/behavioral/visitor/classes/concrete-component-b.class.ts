import { Visitor } from '../interfaces/visitor.interface';

export class ConcreteComponentB {
  accept(visitor: Visitor): void {
    visitor.visitConcreteComponentB(this);
  }

  specialMethodOfConcreteComponentB(): string {
    return 'B';
  }
}
