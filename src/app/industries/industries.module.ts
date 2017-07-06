import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { IndustriesRoutingModule } from "app/industries/industries-routing.module";

import { IndustriesComponent } from "app/industries/industries.component";
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { AutomotiveComponent } from './automotive/automotive.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';

@NgModule({
    declarations: [
        IndustriesComponent,
        SoftwareDevelopmentComponent,
        AutomotiveComponent,
        OilGasComponent,
        FoodBeverageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IndustriesRoutingModule
    ]
})
export class IndustriesModule {

}