import {Component, OnInit} from '@angular/core';
import {RestService} from "../../../services/rest.service";
import {MODEL_NAMES} from "../../../names/Const";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {


// bar
  public barChartOptions: any = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [], label: MODEL_NAMES.under_diploma},
    {data: [], label: MODEL_NAMES.diploma},
    {data: [], label: MODEL_NAMES.above_diploma},
    {data: [], label: MODEL_NAMES.Bsc},
    {data: [], label: MODEL_NAMES.Msc},
    {data: [], label: MODEL_NAMES.phd}
  ];


  // Polar for discrete of counts
  public polarDiscreteCountLabels: string[] = [];
  public polarDiscreteCountData: number[] = [];

 // Polar for discrete of education level (EL)
  public polarDiscreteELLabels: string[] =[];
  public polarDiscreteELData: number[] = [];


  public polarLegend: boolean = true;
  public polarType: string = 'polarArea';


  ////////////////////////

  phd_total: number = 0;
  msc_total: number = 0;
  bsc_total: number = 0;
  above_diploma_total: number = 0;
  diploma_total: number = 0;
  under_diploma_total: number = 0;

  get _names() {
    return MODEL_NAMES;
  }


  constructor(private restService: RestService) {
  }


  ngOnInit() {
    this.restService.get('reports/company-education').subscribe(res => {

        this.barChartLabels = [];
        this.polarDiscreteCountLabels = [];

        for (let key in res) {

          this.barChartLabels = this.barChartLabels.concat([key]);
          this.polarDiscreteCountLabels = this.polarDiscreteCountLabels.concat([key]);

          this.polarDiscreteCountData.push(this.getTotalofEachCompany(res[key]));


          this.phd_total += Number.parseInt(res[key][MODEL_NAMES.phd]);
          this.barChartData.filter(x => x.label === MODEL_NAMES.phd)[0].data.push(res[key][MODEL_NAMES.phd]);

          this.msc_total += Number.parseInt(res[key][MODEL_NAMES.Msc]);
          this.barChartData.filter(x => x.label === MODEL_NAMES.Msc)[0].data.push(res[key][MODEL_NAMES.Msc]);

          this.bsc_total += Number.parseInt(res[key][MODEL_NAMES.Bsc]);
          this.barChartData.filter(x => x.label === MODEL_NAMES.Bsc)[0].data.push(res[key][MODEL_NAMES.Bsc]);

          this.above_diploma_total += Number.parseInt(res[key][MODEL_NAMES.above_diploma]);
          this.barChartData.filter(x => x.label === MODEL_NAMES.above_diploma)[0].data.push(res[key][MODEL_NAMES.above_diploma]);

          this.diploma_total += Number.parseInt(res[key][MODEL_NAMES.diploma]);
          this.barChartData.filter(x => x.label === MODEL_NAMES.diploma)[0].data.push(res[key][MODEL_NAMES.diploma]);

          this.under_diploma_total += Number.parseInt(res[key][MODEL_NAMES.under_diploma]);
          this.barChartData.filter(x => x.label === MODEL_NAMES.under_diploma)[0].data.push(res[key][MODEL_NAMES.under_diploma]);

        }


        this.polarDiscreteELData.push(this.under_diploma_total);
        this.polarDiscreteELData.push(this.above_diploma_total);
        this.polarDiscreteELData.push(this.diploma_total);
        this.polarDiscreteELData.push(this.bsc_total);
        this.polarDiscreteELData.push(this.msc_total);
        this.polarDiscreteELData.push(this.phd_total);

        this.polarDiscreteELLabels = [
          MODEL_NAMES.under_diploma,
          MODEL_NAMES.diploma,
          MODEL_NAMES.above_diploma,
          MODEL_NAMES.Bsc,
          MODEL_NAMES.Msc,
          MODEL_NAMES.phd
        ];

      },
      err => {

        console.error('error ==>', err);
      });

  }

  private getTotalofEachCompany(value) {

    let phd = Number.parseInt(value[MODEL_NAMES.phd]);
    let msc = Number.parseInt(value[MODEL_NAMES.Msc]);
    let bsc = Number.parseInt(value[MODEL_NAMES.Bsc]);
    let above_diploma = Number.parseInt(value[MODEL_NAMES.above_diploma]);
    let diploma = Number.parseInt(value[MODEL_NAMES.diploma]);
    let under_diploma = Number.parseInt(value[MODEL_NAMES.under_diploma]);

    return phd + msc + bsc + above_diploma + diploma + under_diploma;


  }

}
