import { Builder } from '../interfaces/builder.interface';
import { CarManual } from './car-manual.class';

export class CarManualBuilder implements Builder {
  private manual: CarManual;

  constructor() {
    this.reset();
  }

  get result(): CarManual {
    return this.manual;
  }

  reset(): void {
    this.manual = new CarManual();
  }

  setSeats(seatsDescription: string): void {
    this.manual.setPartDescription(seatsDescription);
  }

  setEngine(engineDescription: string): void {
    this.manual.setPartDescription(engineDescription);
  }

  setComputer(computerDescription: string): void {
    this.manual.setPartDescription(computerDescription);
  }

  setWheels(wheelsDescription: string): void {
    this.manual.setPartDescription(wheelsDescription);
  }
}
