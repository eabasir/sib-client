import {
  AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {DOCUMENT_BASE_INO} from "./document-info-form.config";
import {RestService} from "../../services/rest.service";
import '../../../assets/js/demo.js'
import {DocumentInfo} from "./document-info-form.metadata";
import {MdDialog} from "@angular/material";
import {ConfirmDialogComponent} from "../dialog/confirm-dialog/confirm-dialog.component";
import {MODEL_NAMES} from "../../names/Const";

declare var demo: any;

@Component({
  selector: 'app-document-info-form',
  templateUrl: './document-info-form.component.html',
  styleUrls: ['./document-info-form.component.css']
})

export class DocumentInfoFormComponent implements OnInit, OnChanges, AfterViewChecked {


  private newKey;
  private newValue;
  @Input() input_item;

  private info: DocumentInfo[] = [];
  private buttons: string[] = [];

  private personnel_full_name: string;
  private created_at: string;


  get _names() {

    return MODEL_NAMES;
  }


  constructor(public dialog: MdDialog, private restService: RestService, private cdRef: ChangeDetectorRef) {
  }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.input_item) {

      this.restService.get(`document/getInfo/${this.input_item._id}`).subscribe(res => {

          this.info = [];
          this.buttons = [];
          console.log(res);
          this.personnel_full_name = res.personnel_full_name;
          this.created_at = res.created_at;

          for (let name in res.info) {
            let newInfo: DocumentInfo = {
              key: name,
              value: res.info[name],
            };

            this.info.push(newInfo);
          }
          DOCUMENT_BASE_INO.forEach(bi => {

            if (this.info.filter(x => x.key === bi.key).length === 0)
              this.buttons.push(bi.key);
          });


        },
        err => {
          console.error('error ==>', err);
        });

    }
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
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


  save() {


    if (this.info.length > 0) {

      let body = {};

      this.info.forEach(info => {

        body[info.key] = info.value;
      });

      this.restService.put(`document/${this.input_item._id}`, body).subscribe((res) => {

          if (!res.err && res.error_code === 0)
            demo.showNotification('bottom', 'center', 2, 'ویرایش اطلاعات با موفقیت انجام شد');
          else

            demo.showNotification('bottom', 'center', 4, 'خطا در بروز رسانی اطلاعات')

        },
        (err) => {
          console.error('error ==>', err);
        });

    } else {
      demo.showNotification('bottom', 'center', 4, 'اطلاعاتی جهت بروز رسانی ثبت نشده است')
    }

  }

}
