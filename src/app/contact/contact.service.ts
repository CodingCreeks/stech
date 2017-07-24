import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Contact } from 'app/contact/contact.model';

@Injectable()
export class ContactService {

  contactsChanged = new Subject<Contact[]>();

  private contacts: Contact[]=[
    new Contact(
      'Ram',
      'ram@test.com',
      'Developer',
      'ABC Comapnay',
      12345,
      'Need Quotation for ECommerce web site'
    )
  ];

  constructor() { }

  setContacts(contacts: Contact[]) {
    this.contacts = contacts;
    this.contactsChanged.next(this.contacts.slice());
  }

  getContacts() {
    return this.contacts.slice();
  }

  getContact(index: number) {
    return this.contacts[index];
  }
}
