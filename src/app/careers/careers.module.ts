import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from 'app/careers/careers-routing.module';
import { CareersComponent } from 'app/careers/careers.component';

@NgModule({
declarations:[
    CareersComponent
],
imports:[
    CommonModule,
    CareersRoutingModule
]
})
export class CareersModule{

}
