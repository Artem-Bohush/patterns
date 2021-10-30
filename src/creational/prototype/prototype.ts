import { ComplexObjectPrototype } from './classes/complex-object-prototype';
import { SubComplexObjectPrototype } from './classes/sub-complex-object-prototype';

export function prototype(): void {
  const p = new ComplexObjectPrototype('public field1 value');
  const pClone = p.clone();
  console.log(p !== pClone); // true
  console.log(p.field1 === pClone.field1); // true
  console.log(p.field2Value === pClone.field2Value); // true

  console.log();

  const subP = new SubComplexObjectPrototype('public field1 value', 'public field3 value');
  const subPClone = subP.clone();
  console.log(subP !== subPClone); // true
  console.log(subP.field1 === subPClone.field1); // true
  console.log(subP.field2Value === subPClone.field2Value); // true
  console.log(subP.field3 === subPClone.field3); // true
  console.log(subP.field4Value === subPClone.field4Value); // true
}
