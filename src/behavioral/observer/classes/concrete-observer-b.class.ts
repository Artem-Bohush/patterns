import { Observer } from '../interfaces/observer.interface';
import { Subject } from '../interfaces/subject.interface';
import { ConcreteSubject } from './concrete-subject.class';

export class ConcreteObserverB implements Observer {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}
