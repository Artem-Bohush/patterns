import { Component } from './interfaces/component.interface';
import { Visitor } from './interfaces/visitor.interface';
import { ConcreteComponentA } from './classes/concrete-component-a.class';
import { ConcreteComponentB } from './classes/concrete-component-b.class';
import { ConcreteVisitor1 } from './classes/concrete-visitor-1.class';
import { ConcreteVisitor2 } from './classes/concrete-visitor-2.class';

function clientCode(components: Component[], vstr: Visitor) {
  // ...
  for (const component of components) {
    component.accept(vstr);
  }
  // ...
}

export function visitor(): void {
  const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
  ];

  console.log('The client code works with all visitors via the base Visitor interface:');
  const visitor1 = new ConcreteVisitor1();
  clientCode(components, visitor1);

  console.log('');

  console.log('It allows the same client code to work with different types of visitors:');
  const visitor2 = new ConcreteVisitor2();
  clientCode(components, visitor2);
}
