
export class Contact {
  public name: string;
  public email: string;
  public title: string;
  public company: string;
  public number: number;
  public message: string;

  constructor(name: string, email: string, title: string, company: string, contactNumber: number, message: string) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.company = company;
    this.number = contactNumber;
    this.message = message;
  }
}
