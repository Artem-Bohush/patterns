import { Subject } from '../interfaces/subject.interface';
import { RealSubject } from './real-subject.class';

export class Proxy implements Subject {
  constructor(private realSubject: RealSubject) {}

  request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}
