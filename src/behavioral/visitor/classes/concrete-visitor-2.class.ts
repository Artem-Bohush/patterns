import { Visitor } from '../interfaces/visitor.interface';
import { ConcreteComponentA } from './concrete-component-a.class';
import { ConcreteComponentB } from './concrete-component-b.class';

export class ConcreteVisitor2 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`);
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`);
  }
}
