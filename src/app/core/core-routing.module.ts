import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/core/home/home.component';

const coreRoutes: Routes = [{
  path: '', component: HomeComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CoreRoutingModule { }
