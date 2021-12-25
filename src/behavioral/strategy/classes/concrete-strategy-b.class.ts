import { Strategy } from '../interfaces/strategy.interface';

export class ConcreteStrategyB implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}
