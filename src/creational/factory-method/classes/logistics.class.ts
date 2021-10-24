import { Transport } from '../interfaces/transport.interface';

export abstract class Logistics {
  abstract createTransport(): Transport;
}
