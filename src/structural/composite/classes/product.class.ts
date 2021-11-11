import { IProduct } from '../interfaces/product.interface';

export class Product implements IProduct {

  constructor(private price: number) {}

  getPrice(): number {
    return this.price;
  }
}
