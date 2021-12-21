import { Originator } from './classes/originator.class';
import { Caretaker } from './classes/caretaker.class';

export function memento(): void {
  const originator = new Originator('Super-duper-super-puper-super.');
  const caretaker = new Caretaker(originator);

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  console.log('');
  caretaker.showHistory();

  console.log('\nClient: Now, let\'s rollback!\n');
  caretaker.undo();

  console.log('\nClient: Once more!\n');
  caretaker.undo();
}
