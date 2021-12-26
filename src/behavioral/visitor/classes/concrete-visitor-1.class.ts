import { Visitor } from '../interfaces/visitor.interface';
import { ConcreteComponentA } from './concrete-component-a.class';
import { ConcreteComponentB } from './concrete-component-b.class';

export class ConcreteVisitor1 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
  }

  visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
  }
}
