export interface Device {
  isEnabled: () => boolean;
  enable: () => void;
  disable: () => void;
  getVolume: () => number;
  setVolume: (percent: number) => void;
  getChannel: () => number;
  setChannel: (percent: number) => void;
}
