import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../../components/components.module';
import {HomeRoutingModule} from './home.routing';

import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {MapsComponent} from './maps/maps.component';
import {AboutComponent} from './about/about.component';
import {MaterialModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DocumentComponent} from "./document/document.component";
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import {PipesModule} from "../../pipes/pipes.module";
import {DataTableModule} from 'primeng/primeng';
import { ReportsComponent } from './reports/reports.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ComponentsModule,
    HomeRoutingModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    FormsModule,
    PipesModule,
    DataTableModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    UserProfileComponent,
    StatisticsComponent,
    MapsComponent,
    AboutComponent,
    DocumentComponent,
    ReportsComponent,
  ],
  providers: [
  ],
})
export class HomeModule {
}
