import { Target } from './classes/target.class';
import { Adaptee } from './classes/adaptee.class';
import { Adapter } from './classes/adapter.class';

function clientCode(target: Target): void {
  console.log(target.request());
}

export function adapter(): void {
  console.log('Client: I can work just fine with the Target objects:');
  const target = new Target();
  clientCode(target);

  console.log('');

  const adaptee = new Adaptee();
  console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
  console.log(`Adaptee: ${adaptee.specificRequest()}`);

  console.log('');

  console.log('Client: But I can work with it via the Adapter:');
  const adapter1 = new Adapter(adaptee);
  clientCode(adapter1);
}
