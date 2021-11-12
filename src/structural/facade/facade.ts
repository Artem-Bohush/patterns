import { Facade } from './classes/facade.class';
import { Subsystem1 } from './classes/subsystem1.class';
import { Subsystem2 } from './classes/subsystem2.class';

function clientCode(fcd: Facade): void {
  // ...
  console.log(fcd.operation());
  // ...
}

export function facade(): void {
  const subsystem1 = new Subsystem1();
  const subsystem2 = new Subsystem2();
  const fcd = new Facade(subsystem1, subsystem2);
  clientCode(fcd);
}
