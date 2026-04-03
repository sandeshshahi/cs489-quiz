export class EmailAddress {
  private address: string;
  private label: string;

  constructor(address: string, label: string) {
    this.address = address;
    this.label = label;
  }

  // Getters and Setters
  public getAddress(): string {
    return this.address;
  }
  public setAddress(address: string): void {
    this.address = address;
  }

  public getLabel(): string {
    return this.label;
  }
  public setLabel(label: string): void {
    this.label = label;
  }

  public toString(): string {
    return `${this.label}: ${this.address}`;
  }
}
