import { Iterator } from '../interfaces/iterator.interface';
import { WordsCollection } from './words-collection.class';

export class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;

  private position = 0;

  private reverse = false;

  constructor(collection: WordsCollection, reverse = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  rewind() {
    this.position = this.reverse ?
      this.collection.getCount() - 1 :
      0;
  }

  current(): string {
    return this.collection.getItems()[this.position];
  }

  key(): number {
    return this.position;
  }

  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}
