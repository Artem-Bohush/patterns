import { Aggregator } from '../interfaces/aggregator.interface';
import { AlphabeticalOrderIterator } from './alphabetical-order-iterator.class';
import { Iterator } from '../interfaces/iterator.interface';

export class WordsCollection implements Aggregator {
  private items: string[] = [];

  getItems(): string[] {
    return this.items;
  }

  getCount(): number {
    return this.items.length;
  }

  addItem(item: string): void {
    this.items.push(item);
  }

  getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
