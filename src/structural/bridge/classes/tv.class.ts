import { Device } from '../interfaces/device.interface';

export class TV implements Device {
  private volume = 0;

  private channel = 1;

  private enabled = false;

  disable(): void {
    console.log('Disabling the TV...');
    this.enabled = false;
  }

  enable(): void {
    console.log('Enabling the TV...');
    this.enabled = true;
  }

  getChannel(): number {
    return this.channel;
  }

  getVolume(): number {
    return this.volume;
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  setChannel(percent: number): void {
    this.channel = percent;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }
}
