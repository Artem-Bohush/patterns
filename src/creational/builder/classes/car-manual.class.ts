export class CarManual {
  private descriptions: string[] = ['frame description'];

  get manual(): string {
    return `Car manual: ${this.descriptions.join(', ')}\n`;
  }

  setPartDescription(description: string): void {
    this.descriptions.push(description);
  }
}
