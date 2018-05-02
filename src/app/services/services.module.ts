import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth.service';
import {RestService} from './rest.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [

    AuthService,
    RestService
  ],
})
export class ServicesModule { }
