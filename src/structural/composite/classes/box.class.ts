import { IProduct } from '../interfaces/product.interface';

export class Box implements IProduct {

  products: IProduct[] = [];

  addProduct(product: IProduct): void {
    this.products.push(product);
  }

  getPrice(): number {
    return this.products.reduce((price, product) => price + product.getPrice(), 0);
  }
}
