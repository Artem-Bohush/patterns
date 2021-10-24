import { Transport } from '../interfaces/transport.interface';

export class Truck implements Transport {
  deliver(): void {
    console.log('Delivery by land...');
  }
}
