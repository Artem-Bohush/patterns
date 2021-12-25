import { BaseAlgorithm } from './base-algorithm.class';

export class ConcreteAlgorithmB extends BaseAlgorithm {
  protected requiredOperations1(): void {
    console.log('ConcreteAlgorithmB says: Implemented Operation1');
  }

  protected requiredOperation2(): void {
    console.log('ConcreteAlgorithmB says: Implemented Operation2');
  }

  protected hook1(): void {
    console.log('ConcreteAlgorithmB says: Overridden Hook1');
  }
}
