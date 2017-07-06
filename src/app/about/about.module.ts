import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "app/about/about-routing.module";
import { AboutComponent } from "app/about/about.component";

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule
    ]
})
export class AboutModule { }