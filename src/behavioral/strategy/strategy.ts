import { Context } from './classes/context.class';
import { ConcreteStrategyA } from './classes/concrete-strategy-a.class';
import { ConcreteStrategyB } from './classes/concrete-strategy-b.class';

export function strategy(): void {
  const context = new Context(new ConcreteStrategyA());
  console.log('Client: Strategy is set to normal sorting.');
  context.doSomeBusinessLogic();

  console.log('');

  console.log('Client: Strategy is set to reverse sorting.');
  context.setStrategy(new ConcreteStrategyB());
  context.doSomeBusinessLogic();
}
