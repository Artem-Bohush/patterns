import { Strategy } from '../interfaces/strategy.interface';

export class ConcreteStrategyA implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}
