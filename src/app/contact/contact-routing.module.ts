import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from 'app/contact/contact.component';

const contactRoutes: Routes = [{
  path: '', component: ContactComponent, children: []
}];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
