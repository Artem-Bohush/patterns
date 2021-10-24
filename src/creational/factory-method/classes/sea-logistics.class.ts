import { Logistics } from './logistics.class';
import { Ship } from './ship.class';
import { Transport } from '../interfaces/transport.interface';

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}
