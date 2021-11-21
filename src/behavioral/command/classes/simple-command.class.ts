import { Command } from '../interfaces/command.interface';

export class SimpleCommand implements Command {

  constructor(
    private payload: string,
  ) {}

  execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}
