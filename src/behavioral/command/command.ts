import { Invoker } from './classes/invoker';
import { SimpleCommand } from './classes/simple-command.class';
import { ComplexCommand } from './classes/complex-command.class';
import { Receiver } from './classes/receiver.class';

export function command(): void {
  const invoker = new Invoker();
  invoker.setOnStart(new SimpleCommand('Say Hi!'));
  const receiver = new Receiver();
  invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save report'));

  invoker.doSomethingImportant();
}
