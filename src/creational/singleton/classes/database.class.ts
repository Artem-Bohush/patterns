export class Database {
  private static instance: Database;

  static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }

  private constructor() {
    console.log('Connecting to database...');
  }

  query(sql: string): string {
    console.log('Querying data...');
    return `Received by query: ${sql}`;
  }
}
