import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {ChartsComponent} from "./charts/charts.component";
import {AuthGuard} from '../../guards/auth.guard';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
      {path: 'user-profile', component: UserProfileComponent,canActivate: [AuthGuard]},
      {path: 'document', component: DocumentComponent,canActivate: [AuthGuard]},
      {path: 'statistics', component: StatisticsComponent,canActivate: [AuthGuard]},
      {path: 'test', component: MapsComponent,canActivate: [AuthGuard]},
      {path: 'about', component: AboutComponent,canActivate: [AuthGuard]},
      {path: 'reports', component: ReportsComponent,canActivate: [AuthGuard]},
      {path: 'charts', component: ChartsComponent,canActivate: [AuthGuard]},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
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
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule {
}

