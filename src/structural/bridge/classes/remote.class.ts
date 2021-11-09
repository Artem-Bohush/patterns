import { Device } from '../interfaces/device.interface';

export class Remote {

  constructor(protected device: Device) {}

  get isEnabled(): boolean {
    return this.device.isEnabled();
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown(): void {
    if (this.device.getVolume()) {
      this.device.setVolume(this.device.getVolume() - 1);
    }
  }

  volumeUp(): void {
    if (this.device.getVolume() !== 100) {
      this.device.setVolume(this.device.getVolume() + 1);
    }
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}
