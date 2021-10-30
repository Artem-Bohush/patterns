import { ComplexObjectPrototype } from './complex-object-prototype';

export class SubComplexObjectPrototype extends ComplexObjectPrototype {
  field3: string;

  private field4 = 'private field4 value';

  constructor(param1: string, param2: string) {
    super(param1);
    this.field3 = param2;
  }

  get field4Value(): string {
    return this.field4;
  }

  clone(): SubComplexObjectPrototype {
    return new SubComplexObjectPrototype(this.field1, this.field3);
  }
}
