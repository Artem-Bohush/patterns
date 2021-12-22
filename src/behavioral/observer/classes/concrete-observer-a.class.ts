import { Observer } from '../interfaces/observer.interface';
import { Subject } from '../interfaces/subject.interface';
import { ConcreteSubject } from './concrete-subject.class';

export class ConcreteObserverA implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}
