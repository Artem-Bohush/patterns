import { BaseAlgorithm } from './classes/base-algorithm.class';
import { ConcreteAlgorithmA } from './classes/concrete-algorithm-a.class';
import { ConcreteAlgorithmB } from './classes/concrete-algorithm-b.class';

function clientCode(abstractClass: BaseAlgorithm) {
  // ...
  abstractClass.templateMethod();
  // ...
}

export function templateMethod(): void {
  console.log('Same client code can work with different subclasses:');
  clientCode(new ConcreteAlgorithmA());

  console.log('');

  console.log('Same client code can work with different subclasses:');
  clientCode(new ConcreteAlgorithmB());
}
