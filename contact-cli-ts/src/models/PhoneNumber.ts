export class PhoneNumber {
  private number: string;
  private label: string;

  constructor(number: string, label: string) {
    this.number = number;
    this.label = label;
  }

  // Getters and Setters
  public getNumber(): string {
    return this.number;
  }
  public setNumber(number: string): void {
    this.number = number;
  }

  public getLabel(): string {
    return this.label;
  }
  public setLabel(label: string): void {
    this.label = label;
  }

  public toString(): string {
    return `${this.label}: ${this.number}`;
  }
}
