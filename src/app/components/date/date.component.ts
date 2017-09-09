import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output ,SimpleChanges} from '@angular/core';
import * as jmoment from 'jalali-moment';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})

export class DateComponent implements OnInit, AfterViewInit, OnChanges {

  items: any;

  ngAfterViewInit(): void {

    this.items = document.querySelectorAll('.mat-select-trigger');

    for (let i = 0; i < this.items.length; i++) {

      this.items[i].style.minWidth = '60px';

    }

  }


  years: string[] = [];
  months: string[] = [];
  days: string[] = [];


  selectedDay: string;
  selectedMonth: string;
  selectedYear: string;

  /**
   * input date is always in utc mode
   */
  @Input() input_date: string;
  @Output() output_date = new EventEmitter<string>();


  constructor() {
  }

  ngOnInit() {
  this.initSelect();

  }

  ngOnChanges(changes: SimpleChanges): void {


    this.initSelect();
    let input_date_moment = jmoment(this.input_date);

    if (input_date_moment.isValid()) {

      this.selectedYear = input_date_moment.format('jYYYY');
      this.selectedMonth = input_date_moment.format('jM');
      this.selectedDay = input_date_moment.format('jD');
    }

  }


  private initSelect() {
    if (this.years.length === 0)
      for (let i = 1300; i <= 1499; i++) {
        this.years.push(i.toString());
      }

    if (this.months.length === 0)
      for (let i = 1; i <= 12; i++) {
        this.months.push(i.toString());
      }

    if (this.days.length === 0)
      for (let i = 1; i <= 31; i++) {
        this.days.push(i.toString());
      }
  }

  private emit() {

    if (this.selectedYear && this.selectedMonth && this.selectedDay) {


      let gOutput = jmoment(this.selectedYear + '-' + this.selectedMonth + '-' + this.selectedDay, 'jYYYY-jM-jD').format('YYYY-M-D');

      let output_utc = jmoment.utc(gOutput).add(1, 'days').format(); // 1 day is added to for containing current day

      this.output_date.emit(output_utc);

    }
  }

  private isCurrentYear(value){

    let currentYear = jmoment().format('jYYYY');
    if (value === currentYear)
      return true;
    else
      return false;


  }


}
