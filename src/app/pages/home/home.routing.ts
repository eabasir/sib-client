import {NgModule} from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {MapsComponent} from './maps/maps.component';
import {AboutComponent} from './about/about.component';
import {DocumentComponent} from "./document/document.component";
import {ReportsComponent} from "./reports/reports.component";


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user-profile', component: UserProfileComponent},
      {path: 'document', component: DocumentComponent},
      {path: 'statistics', component: StatisticsComponent},
      {path: 'test', component: MapsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'reports', component: ReportsComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule {
}

