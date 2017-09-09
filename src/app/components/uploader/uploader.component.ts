import {Component, OnInit, OnDestroy, EventEmitter, Output, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {RestService} from "../../services/rest.service";
let URL = RestService.API + '/document/';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit, OnDestroy {

  public uploader: FileUploader;
  public hasBaseDropZoneOver: boolean = true;
  enabled: boolean = false;


  @Input() personnel_id;
  @Output() new_upload_code = new EventEmitter<number>();

  constructor() {
  }



  ngOnInit(): void {


    this.uploader = new FileUploader({url: URL + this.personnel_id });

     this.enabled = true;

    this.uploader.onSuccessItem = (item, response, status, headers) => {

    };

    this.uploader.onCompleteAll = () => {

      let newCode = Math.round(Math.random() * 10000);

      this.new_upload_code.emit(newCode);

    };


  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  ngOnDestroy() {
  }
}
