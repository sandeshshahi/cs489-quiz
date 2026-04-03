import { Contact } from "./Contact.js";

export class ContactManager {
  private contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  public addContact(newContact: Contact): void {
    this.contacts.push(newContact);
  }

  public updateContact(
    contact: Contact,
    firstName: string,
    lastName: string,
    company: string,
    jobTitle: string,
  ): void {
    contact.setFirstName(firstName);
    contact.setLastName(lastName);
    contact.setCompany(company);
    contact.setJobTitle(jobTitle);
  }

  public deleteContact(contact: Contact): void {
    const index = this.contacts.indexOf(contact);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }

  public searchContacts(query: string): Contact[] {
    const lowerCaseQuery = query.toLowerCase();

    return this.contacts.filter(
      (contact) =>
        contact.getFirstName().toLowerCase().includes(lowerCaseQuery) ||
        contact.getLastName().toLowerCase().includes(lowerCaseQuery),
    );
  }

  public mergeContacts(contact1: Contact, contact2: Contact): Contact {
    // Create a new merged contact, defaulting to contact1's primary info
    const mergedContact = new Contact(
      contact1.getFirstName() || contact2.getFirstName(),
      contact1.getLastName() || contact2.getLastName(),
      contact1.getCompany() || contact2.getCompany(),
      contact1.getJobTitle() || contact2.getJobTitle(),
    );

    // Combine Phone Numbers
    const allPhones = [
      ...contact1.getPhoneNumbers(),
      ...contact2.getPhoneNumbers(),
    ];
    mergedContact.setPhoneNumbers(allPhones);

    // Combine Email Addresses
    const allEmails = [
      ...contact1.getEmailAddresses(),
      ...contact2.getEmailAddresses(),
    ];
    mergedContact.setEmailAddresses(allEmails);

    // Replace old contacts with the merged one
    this.deleteContact(contact1);
    this.deleteContact(contact2);
    this.addContact(mergedContact);

    return mergedContact;
  }

  public viewContact(contact: Contact): void {
    console.log(`\n--- Contact Details ---`);
    console.log(`Name: ${contact.getFirstName()} ${contact.getLastName()}`);
    console.log(`Company: ${contact.getCompany()}`);
    console.log(`Title: ${contact.getJobTitle()}`);

    console.log(`Phone Numbers:`);
    contact
      .getPhoneNumbers()
      .forEach((phone) => console.log(`  - ${phone.toString()}`));

    console.log(`Email Addresses:`);
    contact
      .getEmailAddresses()
      .forEach((email) => console.log(`  - ${email.toString()}`));
    console.log(`-----------------------\n`);
  }

  // Helper method to get all contacts
  public getAllContacts(): Contact[] {
    return this.contacts;
  }
}
