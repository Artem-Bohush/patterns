import { CarBuilder } from './classes/car-builder.class';
import { CarManualBuilder } from './classes/car-manual-builder.class';
import { Director } from './classes/director.class';

function clientCode(director: Director): void {
  // ...
  console.log('Client: I\'m not aware of object creation details, just use director.');

  console.log('Client: Cars are going to be built...');
  const carBuilder = new CarBuilder();

  director.buildVanCar(carBuilder);
  const vanCar = carBuilder.result;
  console.log(vanCar.specificationList);

  director.buildSportsCar(carBuilder);
  const sportCar = carBuilder.result;
  console.log(sportCar.specificationList);

  console.log('');

  console.log('Client: Manuals are going to be built...');
  const manualBuilder = new CarManualBuilder();

  director.buildVanCarManual(manualBuilder);
  const vanCarManual = manualBuilder.result;
  console.log(vanCarManual.manual);

  director.buildSportsCarManual(manualBuilder);
  const sportCarManual = manualBuilder.result;
  console.log(sportCarManual.manual);
  // ...
}

export function builder(): void {
  const director = new Director();
  console.log('App: The director is passed to the client.');
  clientCode(director);
}
