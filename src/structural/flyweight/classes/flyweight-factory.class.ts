import { Flyweight } from './flyweight.class';

export class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState);

    if (!(key in this.flyweights)) {
      console.log('FlyweightFactory: Can\'t find a flyweight, creating new one.');
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights[key];
  }

  listFlyweights(): void {
    const keys = Object.keys(this.flyweights);
    console.log(`\nFlyweightFactory: I have ${keys.length} flyweights:`);
    keys.forEach(key => console.log(key));
  }

  private getKey(state: string[]): string {
    return state.join('_');
  }
}
