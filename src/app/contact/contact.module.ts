import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ContactRoutingModule } from "app/contact/contact-routing.module";
import { SharedModule } from "app/shared/shared.module";

import { ContactComponent } from "app/contact/contact.component";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule, 
        ContactRoutingModule, 
        SharedModule
    ]
})

export class ContactModule {

}