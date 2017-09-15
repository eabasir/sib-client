import {Component, OnInit} from '@angular/core';
import {RestService} from "../../../services/rest.service";
import {MODEL_NAMES} from "../../../names/Const";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  company_education = [];

  phd_total: number = 0;
  msc_total: number = 0;
  bsc_total: number = 0;
  above_diploma_total: number = 0;
  diploma_total: number = 0;
  under_diploma_total: number = 0;
  total: number = 0;


  get _names() {
    return MODEL_NAMES;
  }



  constructor(private restService: RestService) {
  }


  ngOnInit() {

    this.restService.get('reports/company-education').subscribe(res => {


        this.company_education = [];
        for (let key in res) {

          this.company_education = this.company_education.concat([{
            name: key,
            value: res[key]

          }]);

          this.phd_total += Number.parseInt(res[key][MODEL_NAMES.phd]);
          this.msc_total += Number.parseInt(res[key][MODEL_NAMES.Msc]);
          this.bsc_total += Number.parseInt(res[key][MODEL_NAMES.Bsc]);
          this.above_diploma_total += Number.parseInt(res[key][MODEL_NAMES.above_diploma]);
          this.diploma_total += Number.parseInt(res[key][MODEL_NAMES.diploma]);
          this.under_diploma_total += Number.parseInt(res[key][MODEL_NAMES.under_diploma]);

        }

        this.total += this.phd_total + this.msc_total + this.bsc_total + this.above_diploma_total +  this.diploma_total + this.under_diploma_total;


      },
      err => {

        console.error('error ==>', err);
      });

  }

  private getTotalofEachCompany(value){

    let phd = Number.parseInt(value[MODEL_NAMES.phd]);
    let msc = Number.parseInt(value[MODEL_NAMES.Msc]);
    let bsc = Number.parseInt(value[MODEL_NAMES.Bsc]);
    let above_diploma = Number.parseInt(value[MODEL_NAMES.above_diploma]);
    let diploma = Number.parseInt(value[MODEL_NAMES.diploma]);
    let under_diploma = Number.parseInt(value[MODEL_NAMES.under_diploma]);

    return phd + msc + bsc + above_diploma + diploma + under_diploma;


  }


}
