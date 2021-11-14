import { Subject } from './interfaces/subject.interface';
import { RealSubject } from './classes/real-subject.class';
import { Proxy } from './classes/proxy.class';

function clientCode(subject: Subject): void {
  // ...
  subject.request();
  // ...
}

export function proxy(): void {
  console.log('Client: Executing the client code with a real subject:');
  const realSubject = new RealSubject();
  clientCode(realSubject);

  console.log('');

  console.log('Client: Executing the same client code with a proxy:');
  const proxyObj = new Proxy(realSubject);
  clientCode(proxyObj);
}
