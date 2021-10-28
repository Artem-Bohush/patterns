import { Builder } from '../interfaces/builder.interface';
import { Car } from './car.class';

export class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  get result(): Car {
    return this.car;
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(seats: string): void {
    this.car.setPart(seats);
  }

  setEngine(engine: string): void {
    this.car.setPart(engine);
  }

  setComputer(computer: string): void {
    this.car.setPart(computer);
  }

  setWheels(wheels: string): void {
    this.car.setPart(wheels);
  }
}
