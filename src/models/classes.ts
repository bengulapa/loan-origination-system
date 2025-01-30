export class Asset {
  type: string;
  description: string;
  value: number;

  constructor(type: string, description: string, value: number) {
    this.type = type;
    this.description = description;
    this.value = value;
  }
}

export class Liability {
  type: string;
  description: string;
  amountOwed: number;

  constructor(type: string, description: string, amountOwed: number) {
    this.type = type;
    this.description = description;
    this.amountOwed = amountOwed;
  }
}
