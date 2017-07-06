import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CareersComponent } from "app/careers/careers.component";

const careesRoutes: Routes=[
    { path: '', component: CareersComponent}
];

@NgModule({
    imports:[
        RouterModule.forChild(careesRoutes)
    ]
})
export class CareersRoutingModule{

}