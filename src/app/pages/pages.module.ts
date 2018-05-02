import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrintPageComponent } from './print-page/print-page.component';
import {PipesModule} from "../pipes/pipes.module";
import {MdButtonModule, MdCheckboxModule,MdGridListModule,MdInputModule,MdIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    PipesModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    PrintPageComponent,
  ]
})
export class PagesModule { }
