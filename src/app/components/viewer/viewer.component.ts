import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {RestService} from "../../services/rest.service";
import '../../../assets/js/demo.js'
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../dialog/confirm-dialog/confirm-dialog.component";
import {Doc} from "./viewer.metadata";
import {isNullOrUndefined} from "util";

declare var demo: any;

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, OnChanges {


  @Input() personnel_id;
  @Input() field;
  @Input() search_bundle;
  @Input() showInfo: boolean = false;
  @Input() newUploadCode: number;


  @Output() output_item = new EventEmitter<any>();
  @Output() output_field = new EventEmitter<any>();
  docs: Doc[] = [];

  constructor(private dialog: MdDialog, private sanitizer: DomSanitizer, private restService: RestService) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.field && !changes.field.isFirstChange())
      this.re_arrange_docs();

    if (changes.personnel_id && !changes.personnel_id.isFirstChange()) {
      this.search_by_personnel_id();
    }
    if (changes.newUploadCode) {
      this.search_by_personnel_id();
    }
    if (changes.search_bundle && !changes.search_bundle.isFirstChange()) {
      this.search_by_search_bundle();

    }


  }

  private re_arrange_docs() {
    let related_docs: Doc[] = [];
    console.log(this.field);

    this.docs.forEach(d => d.isChecked = false);

    this.field.docs.forEach(field_doc_id => {


      let doc: Doc = this.docs.filter(d => field_doc_id === d._id)[0];
      if (doc) {
        doc.isChecked = true;

        related_docs = related_docs.concat(doc);

        this.docs = this.docs.filter(d => field_doc_id !== d._id)
      }
    });


    this.docs = related_docs.concat(this.docs);

  }


  private search_by_personnel_id() {

    if (!isNullOrUndefined(this.personnel_id)) {
      this.restService.get('document/' + this.personnel_id).subscribe(res => {

          this.docs = [];

          if (res.length && res.length > 0) {

            res.forEach(doc => {


              let final_path;
              if (this.getType(doc.path) === 'pdf')
                final_path = RestService.Host + `/assets/ViewerJS/?zoom=page-width&title=${doc.name}#${doc.path}`;
              else
                final_path = RestService.Host + doc.path;


              let newDoc = {
                _id: doc._id,
                name: doc.name,
                base_path: final_path,
                path: this.sanitizer.bypassSecurityTrustResourceUrl(final_path),
                isChecked: false
              };

              this.docs.push(newDoc);

            });


          } else {
            demo.showNotification('bottom', 'center', 3, ' سندی برای فرد مورد نظر ثبت نشده است')
          }

        },
        err => {
          console.log(err);
          this.docs = [];

        });
    }else{
      this.docs = [];
    }
  }


  private search_by_search_bundle() {


    let search_bundle_obj = JSON.parse(this.search_bundle);

    console.log(search_bundle_obj);

    this.restService.post('document/search/query', search_bundle_obj).subscribe(res => {

        this.docs = [];

        if (res.length && res.length > 0) {

          res.forEach(doc => {


            let final_path;
            if (this.getType(doc.path) === 'pdf')
              final_path = RestService.Host + `/assets/ViewerJS/?zoom=page-width&title=${doc.name}#${doc.path}`;
            else
              final_path = RestService.Host + doc.path;


            let newDoc = {
              _id: doc._id,
              name: doc.name,
              base_path: final_path,
              path: this.sanitizer.bypassSecurityTrustResourceUrl(final_path),
              isChecked: false
            };

            this.docs.push(newDoc);

          });


        } else {
          demo.showNotification('bottom', 'center', 3, ' سندی برای فرد مورد نظر ثبت نشده است')
        }

      },
      err => {
        console.log(err);
        this.docs = [];

      });


  }


  private viewInfo(document) {

    this.output_item.emit(document);

  }

  private getType(base_path) {
    let parts = base_path.split('.');
    let extension = parts[parts.length - 1];

    if (extension.toLowerCase() === 'jpg' ||
      extension.toLowerCase() === 'jpeg' ||
      extension.toLowerCase() === 'png' ||
      extension.toLowerCase() === 'gif')
      return 'pic';

    else if (extension.toLowerCase() === 'pdf')
      return 'pdf';


  }

  private changeRelation(e, doc: Doc) {


    if (e.target.checked) {
      doc.isChecked = true;
      this.field.docs.push(doc._id)
    }
    else {
      doc.isChecked = false;
      this.field.docs = this.field.docs.filter(field_docs_id => field_docs_id !== doc._id);
    }
    // to avoid changes detection strange behaviour, string json is used to emit changed field
    this.output_field.emit(JSON.stringify(this.field));

  }

  private delete(document) {

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        id: document._id,
        message: ` حذف سند: ${document.name}`
      },
    });
    dialogRef.afterClosed().subscribe(id => {

      let body = {};
      if (this.field)
        body = {filedName: this.field.key};

      this.restService.delete(`document/${id}`, body).subscribe(res => {

          if (!res.err && res.error_code === 0) {
            demo.showNotification('bottom', 'center', 2, 'سند انتخاب شده با موفقیت حذف گردید');

            this.docs = this.docs.filter(x => x._id !== id);
            this.output_item.emit(null);

          } else

            demo.showNotification('bottom', 'center', 4, 'خطا در حذف سند')

        },
        err => {
          console.error('error ==>', err);

        });


    });
  }


}
