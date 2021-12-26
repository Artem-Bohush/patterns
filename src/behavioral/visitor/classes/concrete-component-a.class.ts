import { Component } from '../interfaces/component.interface';
import { Visitor } from '../interfaces/visitor.interface';

export class ConcreteComponentA implements Component {
  accept(visitor: Visitor): void {
    visitor.visitConcreteComponentA(this);
  }

  exclusiveMethodOfConcreteComponentA(): string {
    return 'A';
  }
}
