import { Component1 } from './classes/component1.class';
import { Component2 } from './classes/component2.class';
import { ConcreteMediator } from './classes/concrete-mediator.class';

export function mediator(): void {
  const c1 = new Component1();
  const c2 = new Component2();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mdtr = new ConcreteMediator(c1, c2);

  console.log('Client triggers operation A.');
  c1.doA();

  console.log('');
  console.log('Client triggers operation D.');
  c2.doD();
}
