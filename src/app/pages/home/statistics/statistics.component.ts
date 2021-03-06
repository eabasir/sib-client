import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MODEL_NAMES} from "../../../names/Const";
import {RestService} from "../../../services/rest.service";
import '../../../../assets/js/demo.js'
import {LazyLoadEvent} from 'primeng/primeng';

declare var demo: any;
import * as jmoment from 'jalali-moment';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, AfterViewChecked {


  get _names() {
    return MODEL_NAMES;
  }


  info: any[] = [];

  totalRecords: number;

  constructor(private restService: RestService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  body: any = {};

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }


  loadCarsLazy(dataTableQuery: LazyLoadEvent) {

    this.body = dataTableQuery;
    this.search();

  }

  private search() {

    this.restService.post('statistics/query', this.body).subscribe(res => {


        if (res.error || (res.error_code && res.error_code !== 0)) {
          demo.showNotification('bottom', 'center', 4, 'خطا در دریافت اطلاعات');

          return;
        }

        if (res) {
          this.info = [];
          this.totalRecords = res.totalRecords;

          this.info = this.info.concat(res.data);

        } else
          demo.showNotification('bottom', 'center', 4, 'هیچ مقداری پیدا نشد')

      },
      err => {


      });

  }


  export() {

    this.restService.post('exports/soldier-table', this.body).subscribe(res => {

        console.log(res);
        if (res.error || (res.error_code && res.error_code !== 0)) {
          demo.showNotification('bottom', 'center', 4, 'خطا در دریافت اطلاعات');
          return;
        }
        window.open(res, "_blank");
      },
      err => {
        console.log(err);

      });

  }


}
