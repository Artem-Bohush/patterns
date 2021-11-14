export class Flyweight {
  constructor(private sharedState: string[]) {}

  operation(uniqueState: string[]): void {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}
