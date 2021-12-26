import { ConcreteComponentA } from '../classes/concrete-component-a.class';
import { ConcreteComponentB } from '../classes/concrete-component-b.class';

export interface Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void;
  visitConcreteComponentB(element: ConcreteComponentB): void;
}
