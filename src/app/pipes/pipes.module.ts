import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatsPipe} from "./cats.pipe";
import {JalaliPipe} from "./jalali.pipe";
import {KeysGridPipe} from "./keys-grid.pipe";

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    CatsPipe,
    JalaliPipe,
    KeysGridPipe
  ],
  exports: [
    CatsPipe,
    JalaliPipe,
    KeysGridPipe
  ]
})
export class PipesModule { }
