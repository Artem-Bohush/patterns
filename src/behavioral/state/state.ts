import { Context } from './classes/context.class';
import { ConcreteStateA } from './classes/concrete-state-a.class';

export function state(): void {
  const context = new Context(new ConcreteStateA());
  context.request1();
  context.request2();
}
