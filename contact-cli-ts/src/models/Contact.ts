import { PhoneNumber } from "./PhoneNumber.js";
import { EmailAddress } from "./EmailAddress.js";

export class Contact {
  private firstName: string;
  private lastName: string;
  private company: string;
  private jobTitle: string;
  private phoneNumbers: PhoneNumber[];
  private emailAddresses: EmailAddress[];

  constructor(
    firstName: string,
    lastName: string,
    company: string,
    jobTitle: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.jobTitle = jobTitle;
    this.phoneNumbers = [];
    this.emailAddresses = [];
  }

  // List Management Methods
  public addPhoneNumber(phoneNumber: PhoneNumber): void {
    this.phoneNumbers.push(phoneNumber);
  }

  public addEmailAddress(emailAddress: EmailAddress): void {
    this.emailAddresses.push(emailAddress);
  }

  // Getters and Setters
  public getFirstName(): string {
    return this.firstName;
  }
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getCompany(): string {
    return this.company;
  }
  public setCompany(company: string): void {
    this.company = company;
  }

  public getJobTitle(): string {
    return this.jobTitle;
  }
  public setJobTitle(jobTitle: string): void {
    this.jobTitle = jobTitle;
  }

  public getPhoneNumbers(): PhoneNumber[] {
    return this.phoneNumbers;
  }
  public setPhoneNumbers(phoneNumbers: PhoneNumber[]): void {
    this.phoneNumbers = phoneNumbers;
  }

  public getEmailAddresses(): EmailAddress[] {
    return this.emailAddresses;
  }
  public setEmailAddresses(emailAddresses: EmailAddress[]): void {
    this.emailAddresses = emailAddresses;
  }

  public toString(): string {
    return `${this.firstName} ${this.lastName} | ${this.jobTitle} at ${this.company}`;
  }
}
