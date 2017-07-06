import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownDirective } from "app/shared/dropdown.directive";
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { SubmittedComponent } from "app/shared/submitted.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        DropdownDirective,
        ForbiddenValidatorDirective,
        SubmittedComponent
    ],
    exports: [
        CommonModule,
        DropdownDirective, SubmittedComponent
    ]
})
export class SharedModule { }