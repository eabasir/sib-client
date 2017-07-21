import {Component, OnInit, OnDestroy, EventEmitter, Output, Input} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {Documents} from "./douments";
import {RestService} from "../../services/rest.service";
let URL = RestService.API + '/scans/';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit, OnDestroy {
  public uploader: FileUploader;
  public hasBaseDropZoneOver: boolean = true;
  enabled: boolean = false;
  documents: Documents = new Documents();


  @Input() upload_id;
  @Output() onUploadCompleted = new EventEmitter<Documents>();

  constructor() {
  }


  ngOnInit(): void {

    // if (this.Documents.upload_id) => upload is related to specific person
    this.uploader = new FileUploader({url: this.upload_id ? URL + this.upload_id : URL});

    this.enabled = true;


    this.uploader.onSuccessItem = (item, response, status, headers) => {

      if (JSON.parse(response).error_code === 0 && status === 200) {
        this.documents.download_path.push(JSON.parse(response).path);
      }

    };

    this.uploader.onCompleteAll = () => {
      this.onUploadCompleted.emit(this.documents);

    };


  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  ngOnDestroy() {
  }
}
