import { Context } from './context.class';

export abstract class State {
  protected context: Context;

  setContext(context: Context) {
    this.context = context;
  }

  abstract handle1(): void;

  abstract handle2(): void;
}
