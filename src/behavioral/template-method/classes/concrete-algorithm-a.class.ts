import { BaseAlgorithm } from './base-algorithm.class';

export class ConcreteAlgorithmA extends BaseAlgorithm {
  protected requiredOperations1(): void {
    console.log('ConcreteAlgorithmA says: Implemented Operation1');
  }

  protected requiredOperation2(): void {
    console.log('ConcreteAlgorithmA says: Implemented Operation2');
  }
}
