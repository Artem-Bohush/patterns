import { Database } from './classes/database.class';

export function singleton(): void {
  const db1 = Database.getInstance();
  const db2 = Database.getInstance();
  console.log(db1 === db2); // true
  console.log(db1.query('my-sql'));
}
