import { Builder } from '../interfaces/builder.interface';

export class Director {
  buildVanCar(builder: Builder): void {
    builder.reset();
    builder.setSeats('Van car seats');
    builder.setEngine('Van car engine');
    builder.setWheels('Van car wheels');
    builder.setComputer('Van car computer');
  }

  buildVanCarManual(builder: Builder): void {
    builder.reset();
    builder.setSeats('Van car seats description');
    builder.setEngine('Van car engine description');
    builder.setWheels('Van car wheels description');
    builder.setComputer('Van car computer description');
  }

  buildSportsCar(builder: Builder): void {
    builder.reset();
    builder.setSeats('Sport car seats');
    builder.setEngine('Sport car engine');
    builder.setWheels('Sport car wheels');
    builder.setComputer('Sport car computer');
  }

  buildSportsCarManual(builder: Builder): void {
    builder.reset();
    builder.setSeats('Sport car seats description');
    builder.setEngine('Sport car engine description');
    builder.setWheels('Sport car wheels description');
    builder.setComputer('Sport car computer description');
  }
}
