import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { CoreRoutingModule } from "app/core/core-routing.module";

import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        CoreRoutingModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        FooterComponent
    ],

})
export class CoreModule { }
