import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { IndustriesComponent } from "app/industries/industries.component";
import { SoftwareDevelopmentComponent } from "app/industries/software-development/software-development.component";
import { AutomotiveComponent } from "app/industries/automotive/automotive.component";
import { FoodBeverageComponent } from "app/industries/food-beverage/food-beverage.component";
import { OilGasComponent } from "app/industries/oil-gas/oil-gas.component";

const industriesRoutes: Routes = [{
  path: '', children: [
    { path: '', component: IndustriesComponent },
    { path: 'automotive', component: AutomotiveComponent },
    { path: 'oil-gas', component: OilGasComponent },
    { path: 'food-beverage', component: FoodBeverageComponent },
    { path: 'software-developement', component: SoftwareDevelopmentComponent },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(industriesRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class IndustriesRoutingModule { }
