import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OurSolutionsComponent } from 'app/our-solutions/our-solutions.component';

const ourSolutionsRoutes: Routes = [
  { path: '', component: OurSolutionsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ourSolutionsRoutes)
  ]
})
export class OurSolutionsRoutingModule {

}
