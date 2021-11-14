import { Subject } from '../interfaces/subject.interface';

export class RealSubject implements Subject {
  request(): void {
    console.log('RealSubject: Handling request.');
  }
}
