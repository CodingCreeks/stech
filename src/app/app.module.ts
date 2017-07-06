import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "app/app-routing.module";

import { CoreModule } from "app/core/core.module";
import { IndustriesModule } from "app/industries/industries.module";
import { ServicesModule } from "app/services/services.module";
import { OurSolutionsModule } from "app/our-solutions/our-solutions.module";

import { AboutModule } from "app/about/about.module";
import { CareersModule } from "app/careers/careers.module";
import { ContactModule } from "app/contact/contact.module";
import { AuthModule } from "app/auth/auth.module";

import { AppComponent } from './app.component';
import { ContactService } from "app/contact/contact.service";
import { AuthService } from "app/auth/auth.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, FormsModule, HttpModule, NgbModule.forRoot(), AppRoutingModule, CoreModule,
    IndustriesModule, ServicesModule, OurSolutionsModule, AboutModule, CareersModule, ContactModule, AuthModule
  ],
  providers: [ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
