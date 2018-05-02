import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoaderComponent} from './loader/loader.component';
import {SoldierInfoFormComponent} from "./soldier-info-form/soldier-info-form.component";
import {KeysGridPipe} from "../pipes/keys-grid.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UploaderComponent} from "./uploader/uploader.component";
import {FileUploadModule} from "ng2-file-upload";
import {MaterialModule} from "@angular/material";
import { PersonnelAutoCompleteComponent } from './auto-complete/personnel-auto-complete/personnel-auto-complete';
import { ViewerComponent } from './viewer/viewer.component';
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import { DocumentInfoFormComponent } from './document-info-form/document-info-form.component';
import { SearchBundleComponent } from './search-bundle/search-bundle.component';
import {JalaliPipe} from "../pipes/jalali.pipe";
import { GeneralAutoCompleteComponent } from './auto-complete/general-auto-complete/general-auto-complete.component';
import { DateComponent } from './date/date.component';
import {PipesModule} from "../pipes/pipes.module";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule,
    FileUploadModule,
    MaterialModule,
    ReactiveFormsModule,
    DpDatePickerModule,
    PipesModule,

  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    SoldierInfoFormComponent,
    // KeysGridPipe,
    UploaderComponent,
    PersonnelAutoCompleteComponent,
    ViewerComponent,
    ConfirmDialogComponent,
    DocumentInfoFormComponent,
    SearchBundleComponent,
    // JalaliPipe,
    GeneralAutoCompleteComponent,
    DateComponent,
  ],
  providers: [

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    SoldierInfoFormComponent,
    UploaderComponent,
    PersonnelAutoCompleteComponent,
    ViewerComponent,
    ConfirmDialogComponent,
    DocumentInfoFormComponent,
    SearchBundleComponent,
    GeneralAutoCompleteComponent,
    DateComponent,
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class ComponentsModule {
}
