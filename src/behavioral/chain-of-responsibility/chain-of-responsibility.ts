import { Handler } from './interfaces/handler.interface';
import { MonkeyHandler } from './classes/monkey-handler.class';
import { SquirrelHandler } from './classes/squirrel-handler.class';
import { DogHandler } from './classes/dog-handler.class';

function clientCode(handler: Handler) {
  const foods = ['Nut', 'Banana', 'Cup of coffee'];

  for (const food of foods) {
    console.log(`Client: Who wants a ${food}?`);
    const result = handler.handle(food);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${food} was left untouched.`);
    }
  }
}

export function chainOfResponsibility(): void {
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.setNext(squirrel).setNext(dog);

  console.log('Chain: Monkey > Squirrel > Dog\n');
  clientCode(monkey);

  console.log('');

  console.log('Subchain: Squirrel > Dog\n');
  clientCode(squirrel);
}
