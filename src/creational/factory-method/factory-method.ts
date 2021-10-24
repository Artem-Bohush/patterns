import { Logistics } from './classes/logistics.class';
import { RoadLogistics } from './classes/road-logistics.class';
import { SeaLogistics } from './classes/sea-logistics.class';

function clientCode(logistics: Logistics): void {
  // ...
  console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
  const transport = logistics.createTransport();
  transport.deliver();
  // ...
}

export function factoryMethod(): void {
  console.log('App: Launched with the RoadLogistics...');
  clientCode(new RoadLogistics());

  console.log('');

  console.log('App: Launched with the SeaLogistics...');
  clientCode(new SeaLogistics());
}
