import { Transport } from '../interfaces/transport.interface';

export class Ship implements Transport {
  deliver(): void {
    console.log('Shipping by sea...');
  }
}
