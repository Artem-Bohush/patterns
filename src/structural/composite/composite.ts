import { Box } from './classes/box.class';
import { Product } from './classes/product.class';

export function composite(): void {
  const order = new Box();
  order.addProduct(new Product(220));

  const box1 = new Box();
  box1.addProduct(new Product(80));
  box1.addProduct(new Product(120));

  const box2 = new Box();
  box2.addProduct(new Product(180));

  box1.addProduct(box2);

  order.addProduct(box1);

  // getting the total order price
  console.log(order.getPrice()); // 600
}
