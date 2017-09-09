import {Component, OnInit} from '@angular/core';

import '../../../../assets/js/chartist.min.js'
import '../../../../assets/js/material-dashboard.js'
import {RestService} from "../../../services/rest.service";

// declare function require(path: string): any;

declare var Chartist: any;
declare var md: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  general_total: string;
  general_added_in: string;
  general_go_out: string;
  general_in_serve: string;

  constructor(private restService: RestService) {
  }


  ngOnInit() {


    this.restService.get('dashboard/general').subscribe(res => {

        this.general_total = res.total;
        this.general_added_in = res.added_in;
        this.general_go_out = res.go_out;
        this.general_in_serve = res.in_serve;

      },
      err => {

        console.error('error ==>', err);
      });

    this.restService.get('dashboard/company-statistics').subscribe(res => {
        this.loadCompanyChart(res);
      },
      err => {
        console.error('error ==>', err);
      });


    this.restService.get('dashboard/added-in-six-month').subscribe(res => {
        console.log(res);
        this.loadAddedInSixMonth(res);
      },
      err => {
        console.error('error ==>', err);
      });

    this.restService.get('dashboard/go-out-six-month').subscribe(res => {
        this.loadGoOutSixMonth(res);
      },
      err => {
        console.error('error ==>', err);
      });
 this.restService.get('dashboard/go-out-in-six-month').subscribe(res => {
        this.loadGoOutInSixMonth(res);
      },
      err => {
        console.error('error ==>', err);
      });



    // require('../../../../assets/js/charts.js')();


  }


  loadCompanyChart(result: any) {

    let companyChartData = {
      labels: result.labels,
      series: [
        result.series
      ]
    };

    let companyChartOption = {
      axisX: {
        showGrid: true
      },
      low: 0,
      high: (Math.max.apply(Math, result.series) + 1),
      chartPadding: {top: 0, right: 0, bottom: 0, left: 5}
    };

    let responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];


    let companyChart = Chartist.Bar('#companyChart', companyChartData, companyChartOption, responsiveOptions);

    md.startAnimationForBarChart(companyChart);


  }

  loadAddedInSixMonth(result : any){

    let addedInChartData = {
      labels: result.labels,
      series: [
        result.series
      ]
    };


    let addedInChartOption = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: (Math.max.apply(Math, result.series) + 5),
      chartPadding: { top: 0, right: 0, bottom: 0, left: 5},
    };

    let addedInChart = new Chartist.Line('#addedInChart', addedInChartData, addedInChartOption);

    md.startAnimationForLineChart(addedInChart);



  }

  loadGoOutSixMonth(result : any){

    let goOutChartData = {
      labels: result.labels,
      series: [
        result.series
      ]
    };


    let goOutChartOption = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: (Math.max.apply(Math, result.series) + 5),
      chartPadding: { top: 0, right: 0, bottom: 0, left: 5}
    };

    let goOutChart = new Chartist.Line('#goOutChart', goOutChartData, goOutChartOption);

    md.startAnimationForLineChart(goOutChart);

  }
loadGoOutInSixMonth(result : any){

    let goOutInSixMonthChartData = {
      labels: result.labels,
      series: [
        result.series
      ]
    };


    let goOutInSixMonthChartOption = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: (Math.max.apply(Math, result.series) + 5),
      chartPadding: { top: 0, right: 0, bottom: 0, left: 5}
    };

    let goOutInSixMonthChart = new Chartist.Line('#goOutInSixMonthChart', goOutInSixMonthChartData, goOutInSixMonthChartOption);

    md.startAnimationForLineChart(goOutInSixMonthChart);

  }


}
