import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoaderComponent} from './loader/loader.component';
import {InfoFormComponent, InfoFormComponentDialog} from "./info-form/info-form.component";
import {KeysGridPipe} from "../pipes/keys-grid.pipe";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UploaderComponent} from "./uploader/uploader.component";
import {FileUploadModule} from "ng2-file-upload";
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import {MdDialogModule, MdTooltipModule} from "@angular/material";
import {RestService} from "../services/rest.service";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule,
    FileUploadModule,
    ConfirmDialogModule,
    MdDialogModule,
    MdTooltipModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    InfoFormComponent,
    KeysGridPipe,
    UploaderComponent,
    InfoFormComponentDialog
  ],
  providers: [
    ConfirmationService,RestService
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    InfoFormComponent,
    UploaderComponent,
  ],
  entryComponents: [InfoFormComponentDialog]
})
export class ComponentsModule {
}
