import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Contact } from "app/contact/contact.model";

@Component({
    selector: 'contact-submitted',
    template: `
                <div *ngIf="submitted">
                  <h2>You submitted the following:</h2>
                  <div class="row">
                    <div class="col-xs-3">Name:</div>
                    <div class="col-xs-9  pull-left">{{ contact.name }}</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">Email:</div>
                    <div class="col-xs-9 pull-left">{{ contact.email }}</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">Title:</div>
                    <div class="col-xs-9 pull-left">{{ contact.title}} </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">Company:</div>
                    <div class="col-xs-9 pull-left">{{ contact.company}}</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">Contact number:</div>
                    <div class="col-xs-9 pull-left">{{ contact.number}}</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">Message</div>
                    <div class="col-xs-9 pull-left">{{ contact.message}}</div>
                  </div>
                  <br>
                  <button class="btn btn-default" (click)="onClick()">Edit</button>
                </div>`
})
// templateUrl: `./submitted.component.html`})
export class SubmittedComponent {
    @Input() contact: Contact;
    @Input() submitted = false;
    @Output() submittedChange = new EventEmitter<boolean>();
    onClick() { this.submittedChange.emit(false); }
}