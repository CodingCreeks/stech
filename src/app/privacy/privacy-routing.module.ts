import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivacyComponent } from 'app/privacy/privacy.component';

const PrivacyRoutes: Routes = [
  { path: '', component: PrivacyComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(PrivacyRoutes)
  ]
})
export class PrivacyRoutingModule {

}
