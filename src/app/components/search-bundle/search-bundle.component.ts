import {
  AfterViewChecked,
  ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {DOCUMENT_BASE_INO} from "../document-info-form/document-info-form.config";
import '../../../assets/js/demo.js'
import {DocumentInfo} from "../document-info-form/document-info-form.metadata";
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../dialog/confirm-dialog/confirm-dialog.component";
import {MODEL_NAMES} from "../../names/Const";

declare var demo: any;

@Component({
  selector: 'app-search-bundle',
  templateUrl: './search-bundle.component.html',
  styleUrls: ['./search-bundle.component.css']
})
export class SearchBundleComponent implements OnInit, OnChanges, AfterViewChecked {

  private buttons: string[] = [];
  private newKey;
  private newValue;
  private info: DocumentInfo[] = [];

  private from_date: string;
  private to_date: string;

  @Input() input_item;

  @Output() output_bundle = new EventEmitter<string>();

  constructor( private dialog: MdDialog , private cdRef:ChangeDetectorRef) {
  }

  get _names() {

    return MODEL_NAMES;
  }


  ngOnInit() {

    DOCUMENT_BASE_INO.forEach(bi => {

      if (this.info.filter(x => x.key === bi.key).length === 0)
        this.buttons.push(bi.key);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.input_item) {

      console.log(this.input_item);


    }

  }
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }



  private add() {

    if (this.newKey) {

      if (this.info.filter(x => x.key === this.newKey).length === 0) {
        this.info = this.info.concat([{
          key: this.newKey,
          value: this.newValue ? this.newValue : '',
        }]);

        this.buttons = this.buttons.filter(x => x !== this.newKey);

        this.newKey = '';
        this.newValue = '';


      } else {
        demo.showNotification('bottom', 'center', 3, ' کلید و مقدار وارد شده تکراری است')
      }
    }

  }

  private addByTag(name: string) {

    if (this.info.filter(x => x.key === this.newKey).length === 0) {
      this.info = this.info.concat([{
        key: name,
        value: '',
      }]);

      this.buttons = this.buttons.filter(x => x !== name);
    }
  }

  private delete(item) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        id: item.key,
        message: `آیا از حذف ${item.key} اطمینان دارید؟`
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.info = this.info.filter(x => x.key !== result);
        this.buttons.push(item.key);
      }
    });

  }

  private removeName(){
    this.input_item = null;

  }

  private search(){

    if (!this.from_date && !this.to_date && this.info.length === 0){
      demo.showNotification('bottom', 'center', 4, ' هیچ مقداری جهت جستجو وارد نشده است.');
      return;
    }

    let body ={};
    if (this.input_item)
      body['personnel_id'] = this.input_item._id;

    if (this.from_date)
      body['from_date'] = this.from_date;

    if (this.to_date)
      body['to_date'] = this.to_date;


    body['data'] = this.info;



    this.output_bundle.emit(JSON.stringify(body));


  }

}
