import { Contact } from "./models/Contact.js";
import { PhoneNumber } from "./models/PhoneNumber.js";
import { EmailAddress } from "./models/EmailAddress.js";

function main() {
  // 1. Initialize Sample Contacts Data
  const david = new Contact("David", "Sanger", "Argos LLC", "Sales Manager");
  david.addPhoneNumber(new PhoneNumber("240-133-0011", "Home"));
  david.addPhoneNumber(new PhoneNumber("240-112-0123", "Mobile"));
  david.addEmailAddress(new EmailAddress("dave.sang@gmail.com", "Home"));
  david.addEmailAddress(new EmailAddress("dsanger@argos.com", "Work"));

  const carlos = new Contact("Carlos", "Jimenez", "Zappos", "Director");

  const ali = new Contact("Ali", "Gafar", "BMI Services", "HR Manager");
  ali.addPhoneNumber(new PhoneNumber("412-116-9988", "Work"));
  ali.addEmailAddress(new EmailAddress("ali@bmi.com", "Work"));

  // 2. Create the Array of Contacts
  const contacts: Contact[] = [david, carlos, ali];

  // 3. Sort in Ascending Order by Last Name
  contacts.sort((a, b) => a.getLastName().localeCompare(b.getLastName()));

  // 4. Print to Console in JSON Format
  // The 'null, 2' arguments format the JSON with 2 spaces of indentation for readability.
  const jsonOutput = JSON.stringify(contacts, null, 2);
  console.log(jsonOutput);
}

main();
