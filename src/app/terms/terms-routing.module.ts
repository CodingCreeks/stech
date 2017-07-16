import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TermsComponent } from 'app/terms/terms.component';

const termsRoutes: Routes = [
  { path: '', component: TermsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(termsRoutes)
  ]
})
export class TermsRoutingModule { }
