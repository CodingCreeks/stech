import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServicesComponent } from "app/services/services.component";
import { ServicesRoutingModule } from "app/services/services-routing.module";

@NgModule({
    declarations:[
        ServicesComponent
    ],
imports:[
    CommonModule,
    ServicesRoutingModule
]
})
export class ServicesModule{

}