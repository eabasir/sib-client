import {
  AfterViewChecked,
  ChangeDetectorRef, Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
import {MdDialog} from "@angular/material";
import '../../../assets/js/demo.js'
import {RestService} from "../../services/rest.service";
import {
  SOLDIER_BASE_INO,
} from "app/components/soldier-info-form/soldier-info-form.config";
import {ConfirmDialogComponent} from "../dialog/confirm-dialog/confirm-dialog.component";
import {Category, MODEL_NAMES} from "../../names/Const";
import * as jmoment from 'jalali-moment';
import {isNullOrUndefined, log} from "util";
import {SoldierInfo} from "./soldier-info-form.metadata";
import {Router} from "@angular/router";

declare var demo: any;

@Component({
  selector: 'app-soldier-info-form',
  templateUrl: './soldier-info-form.component.html',
  styleUrls: ['./soldier-info-form.component.css']
})
export class SoldierInfoFormComponent implements OnInit, OnChanges, AfterViewChecked {

  private newKey;
  private newValue;
  @Input() input_id;
  @Input() input_field;


  @Output() output_soldier_id = new EventEmitter<string>();
  @Output() output_field = new EventEmitter<any>();

  private info: SoldierInfo[] = [];

  get _names() {

    return MODEL_NAMES;
  }

  get _categoty() {

    return Category;
  }


  constructor(public dialog: MdDialog, private restService: RestService, private cdRef: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit() {


  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.input_field && !changes.input_field.isFirstChange()) {

      this.input_field = JSON.parse(this.input_field);
      this.updateFieldDocs();
    }
    else if (changes.input_id && !changes.input_id.isFirstChange()) {

      if (changes.input_id.currentValue !== null)
        this.getPersonnelInfo();
      else {
        this.info = [];

        SOLDIER_BASE_INO.forEach(bi => {
          bi.value = '';
          bi.docs = [];

        });


        this.info = this.info.concat(SOLDIER_BASE_INO);
      }

    } else {

      this.info = this.info.concat(SOLDIER_BASE_INO);

    }

  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  private updateFieldDocs() {


    this.info.forEach(item => {

      if (item.key === this.input_field.key)

        item.docs = this.input_field.docs;

    })

  }

  private getPersonnelInfo() {

    this.restService.get('personnel/' + this.input_id).subscribe(res => {

        if (res.err) {
          demo.showNotification('bottom', 'center', 3, ' خطا در دریافت اطلاعات فرد مورد نظر');
          return;
        }
        if (res.error_code === 424) {
          demo.showNotification('bottom', 'center', 3, ' فرد مورد نظر پیدا نشد');
          return;
        }

        this.info = [];
        for (let name in res) {
          if (name !== '_id' && name !== '__v') {
            {
              let newInfo: SoldierInfo = {
                key: name,
                value: res[name].value,
                category: Category.Other,
                docs: res[name].docs,
                mandatory: false
              };

              SOLDIER_BASE_INO.forEach(bi => {

                if (bi.key === name) {
                  newInfo.category = bi.category;
                  newInfo.mandatory = bi.mandatory;
                }
              });

              this.info.push(newInfo);
            }
          }
        }
      }
      ,
      err => {
        console.error('error ==>', err);

      }
    );

  }

  add() {
    if (this.newKey) {

      if (this.info.filter(x => x.key === this.newKey).length === 0) {
        this.info = this.info.concat([{
          key: this.newKey,
          value: this.newValue ? this.newValue : '',
          category: Category.Other,
          docs: [],
          mandatory: false
        }]);
        this.newKey = '';
        this.newValue = '';

      } else {
        demo.showNotification('bottom', 'center', 3, ' کلید و مقدار وارد شده تکراری است')
      }
    }

  }


  delete(item) {

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        id: item.key,
        message: `آیا از حذف ${item.key} اطمینان دارید؟`
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.info = this.info.filter(x => x.key !== result);
    });

  }


  save() {


    let isValid: boolean = true;
    this.info.forEach(info => {

      if (info.key === MODEL_NAMES.firstName ||
        info.key === MODEL_NAMES.surname ||
        info.key === MODEL_NAMES.national_code ||
        info.key === MODEL_NAMES.father_name ||
        info.key === MODEL_NAMES.dispatch_date ||
        info.key === MODEL_NAMES.serve_status) {

        if (isNullOrUndefined(info.value) || info.value === '')
          isValid = false;
      }

    });


    if (isValid) {

      let body: any = {};

      body.data = this.info;

      if (this.input_id) {
        body._id = this.input_id;
        this.update(body);
      }
      else {
        this.makeNew(body);

      }

    } else {
      demo.showNotification('bottom', 'center', 4, ' مقادیر لازم وارد نشده است')
    }

  }


  update(body) {
    this.restService.put('personnel', body).subscribe((res) => {

        if (res.ok === 1)
          demo.showNotification('bottom', 'center', 2, 'ویرایش اطلاعات با موفقیت انجام شد');
        else

          demo.showNotification('bottom', 'center', 4, 'خطا در بروز رسانی اطلاعات')

      },
      (err) => {
        console.error('error ==>', err);
      });
  }


  makeNew(body) {
    this.restService.post('personnel/addNew', body).subscribe((res) => {

        console.log(res);
        if (res.error) {
          switch (res.error) {
            case 11000:
              demo.showNotification('bottom', 'center', 4, 'فرد با کد ملی وارد شده قبلا ثبت شده است');
              break;
          }
          console.log(res.error);
        } else if (res.error_code === 0 && res.id) {

          this.input_id = res.id;
          demo.showNotification('bottom', 'center', 2, 'فرد جدید با موفقیت ثبت شد');
          this.output_soldier_id.emit(res.id);
        }

      },
      (err) => {
        console.error('error ==>', err);
      });
  }

  private showRelatedDocs(item) {

    if (item.value) {
      item.personnel_id = this.input_id;
      this.output_field.emit(item);
    } else

      demo.showNotification('bottom', 'center', 3, 'ابتدا مقدار را وارد نمایید')
  }


  private updateDischargeDate() {

    let dischargeDate;
    this.info.forEach(x => {

      if (x.key === this._names.dispatch_date && x.value) {
        let gDispatchDate = jmoment(x.value);
        dischargeDate = gDispatchDate.add(21, 'jmonth').format();
      }
    });

    if (dischargeDate) {

      this.info.forEach(x => {

        if (x.key === this._names.legal_discharge_date) {
          x.value = dischargeDate;
        }

      });

    }

  }


  private makePrint() {


    this.router.navigate(['/print'], {queryParams: {data: JSON.stringify(this.info)}});


  }

}
