import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurSolutionsComponent } from 'app/our-solutions/our-solutions.component';
import { OurSolutionsRoutingModule } from 'app/our-solutions/our-solutions-routing.module';

@NgModule({
  declarations: [
    OurSolutionsComponent
  ],
  imports: [
    CommonModule,
    OurSolutionsRoutingModule
  ]
})
export class OurSolutionsModule { }
