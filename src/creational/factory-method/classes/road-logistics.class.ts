import { Logistics } from './logistics.class';
import { Truck } from './truck.class';
import { Transport } from '../interfaces/transport.interface';

export class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}
