import { ConcreteSubject } from './classes/concrete-subject.class';
import { ConcreteObserverA } from './classes/concrete-observer-a.class';
import { ConcreteObserverB } from './classes/concrete-observer-b.class';

export function observer(): void {
  const subject = new ConcreteSubject();

  const observer1 = new ConcreteObserverA();
  subject.attach(observer1);

  const observer2 = new ConcreteObserverB();
  subject.attach(observer2);

  subject.someBusinessLogic();
  subject.someBusinessLogic();

  subject.detach(observer2);

  subject.someBusinessLogic();
}
