export interface Builder {
  reset: () => void;
  setSeats: (seats: string) => void;
  setWheels: (wheels: string) => void;
  setEngine: (engine: string) => void;
  setComputer: (computer: string) => void;
}
