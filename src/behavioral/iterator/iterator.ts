import { WordsCollection } from './classes/words-collection.class';

export function iterator(): void {
  const collection = new WordsCollection();
  collection.addItem('First');
  collection.addItem('Second');
  collection.addItem('Third');

  const itrtr = collection.getIterator();

  console.log('Straight traversal:');
  while (itrtr.valid()) {
    console.log(itrtr.next());
  }

  console.log('');
  console.log('Reverse traversal:');
  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }
}
