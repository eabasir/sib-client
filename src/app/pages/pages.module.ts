import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrintPageComponent } from './print-page/print-page.component';
import {PipesModule} from "../pipes/pipes.module";


@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    PipesModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    PrintPageComponent,
  ]
})
export class PagesModule { }
