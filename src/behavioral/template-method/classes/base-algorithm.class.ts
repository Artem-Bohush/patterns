export abstract class BaseAlgorithm {
  templateMethod(): void {
    this.baseOperation1();
    this.requiredOperations1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  protected baseOperation1(): void {
    console.log('BaseAlgorithm says: I am doing the bulk of the work');
  }

  protected baseOperation2(): void {
    console.log('BaseAlgorithm says: But I let subclasses override some operations');
  }

  protected baseOperation3(): void {
    console.log('BaseAlgorithm says: But I am doing the bulk of the work anyway');
  }

  protected abstract requiredOperations1(): void;

  protected abstract requiredOperation2(): void;

  protected hook1(): void { }

  protected hook2(): void { }
}
