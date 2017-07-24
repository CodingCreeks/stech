import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';


import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { ContactService } from 'app/contact/contact.service';
import { Contact } from 'app/contact/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id: number;
  editMode = false;
  contactForm: FormGroup;
  submitted = false;

  private contact = new Contact(
    'Sam',
    'sam@test.com',
    'Java Developer',
    'Sharavathi Technologies',
    1234567890,
    'Need Quotation for ECommerce web site'
  );

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  // heroForm: FormGroup;
  // constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   this.buildForm();
  // }

  constructor(private fb: FormBuilder, private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  addContact() {
    this.contact = new Contact('', '', '', '', 1234567890 ,'');
    this.initForm();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  onSubmit() {
    this.submitted = true;
    this.contact = this.contactForm.value;
    console.log(this.contactForm);
  }

  private initForm() {
    let contactName = '';
    let contactEmail = '';
    let contactTitle = '';
    let contactCompany = '';
    let contactNumber = null;
    let contactMessage = '';

    if (this.editMode) {
      const contact = this.contactService.getContact(this.id);
      contactName = contact.name;
      contactEmail = contact.email;
      contactTitle = contact.title;
      contactCompany = contact.company;
      contactNumber = contact.number;
      contactMessage = contact.message;
    }

    this.contactForm = new FormGroup({
      'name': new FormControl(contactName, [
        // Validators.required, Validators.minLength(4), Validators.maxLength(24), forbiddenNameValidator(/user/i)
        Validators.required, Validators.minLength(4), Validators.maxLength(24)
      ]),
      'email': new FormControl(contactEmail, Validators.required),
      'title': new FormControl(contactTitle, Validators.required),
      'company': new FormControl(contactCompany, Validators.required),
      'number': new FormControl(
        contactNumber, [Validators.required,
        Validators.pattern(/^[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/)
        ]),
      'message': new FormControl(contactMessage, Validators.required)
    })

    this.contactForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }

  onValueChanged(data?: any) {
    if (!this.contactForm) { return; }
    const form = this.contactForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'email': '',
    'title': '',
    'company': '',
    'number': '',
    'message': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "user/test" cannot be a your name.'
    },
    'email': {
      'required': 'email is required.'
    },

    'title': {
      'required': 'Title/Designation is required.'
    },
    'company': {
      'required': 'Company name is required.'
    },
    'number': {
      'required': 'Contact number is required.'
    },
    'message': {
      'required': 'Your Message/query is required.'
    },
  };

}
