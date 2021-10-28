export class Car {
  private parts: string[] = ['frame'];

  get specificationList(): string {
    return `Car specification: ${this.parts.join(', ')}\n`;
  }

  setPart(part: string): void {
    this.parts.push(part);
  }
}
