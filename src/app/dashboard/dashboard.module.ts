import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DetailsComponent } from './details/details.component'

@NgModule({
  declarations: [
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    
    DashboardRoutingModule
    
  ],
  providers: []
})
export class DashBoardModule { }
