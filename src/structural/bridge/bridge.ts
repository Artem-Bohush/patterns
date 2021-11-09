import { Remote } from './classes/remote.class';
import { TV } from './classes/tv.class';
import { Radio } from './classes/radio.class';
import { Device } from './interfaces/device.interface';

function clientCode(abstraction: Remote): void {
  // ...
  console.log(abstraction.isEnabled); // false
  abstraction.togglePower();
  console.log(abstraction.isEnabled); // true
  // ...
}

export function bridge(): void {
  let implementation: Device;
  let abstraction: Remote;

  implementation = new TV();
  abstraction = new Remote(implementation);
  clientCode(abstraction);

  console.log('');

  implementation = new Radio();
  abstraction = new Remote(implementation);
  clientCode(abstraction);
}
