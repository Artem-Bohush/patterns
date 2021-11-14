import { FlyweightFactory } from './classes/flyweight-factory.class';
import { Context } from './classes/context.class';

export function flyweight(): void {
  const oakSharedState = ['oak', 'brown', 'oak.jpg'];
  const birchSharedState = ['birch', 'dark-brown', 'birch.jpg'];
  const flyweightFactory = new FlyweightFactory([
    oakSharedState,
    birchSharedState,
  ]);
  flyweightFactory.listFlyweights();

  console.log('');

  const poplarSharedState = ['poplar', 'light-brown', 'poplar.jpg'];
  const trees = [
    new Context(flyweightFactory.getFlyweight(oakSharedState), ['x: 1.5', 'y: 4.5']),
    new Context(flyweightFactory.getFlyweight(oakSharedState), ['x: 2.5', 'y: 3.5']),
    new Context(flyweightFactory.getFlyweight(oakSharedState), ['x: 5.5', 'y: 6.5']),
    new Context(flyweightFactory.getFlyweight(birchSharedState), ['x: 15.5', 'y: 16.5']),
    new Context(flyweightFactory.getFlyweight(birchSharedState), ['x: 9.5', 'y: 12.5']),
    new Context(flyweightFactory.getFlyweight(poplarSharedState), ['x: 25.5', 'y: 13.5']),
    new Context(flyweightFactory.getFlyweight(poplarSharedState), ['x: 22.5', 'y: 8.5']),
    new Context(flyweightFactory.getFlyweight(poplarSharedState), ['x: 16.5', 'y: 5.5']),
  ];
  flyweightFactory.listFlyweights();

  console.log('');

  trees.forEach(tree => tree.operation());
}
