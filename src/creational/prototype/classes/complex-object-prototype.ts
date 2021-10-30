import { Prototype } from '../interfaces/prototype.interface';

export class ComplexObjectPrototype implements Prototype {
  public field1: string;

  private field2 = 'private field2 value';

  constructor(param1: string) {
    this.field1 = param1;
  }

  get field2Value(): string {
    return this.field2;
  }

  clone(): ComplexObjectPrototype {
    const clone = new ComplexObjectPrototype(this.field1);
    clone.field2 = this.field2;
    return clone;
  }
}
