import {Component, OnInit} from '@angular/core';
import * as jmoment from 'jalali-moment';
// import {jDate} from "jalali-moment";


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {


  rec_date: string;
  gDate: string;
  jDate: string;
  jAddedDate: string;

  constructor() {
  }


  ngOnInit() {


    console.log(jmoment());

  }

  private update(event) {

    this.rec_date = event;

    let input_date_moment = jmoment(this.rec_date);
    this.gDate = input_date_moment.format('YYYY-MM-DD');
    this.jDate = input_date_moment.format('jYYYY-jMM-jDD');


    let month = Number.parseInt(input_date_moment.format('jMM'));
    let year = Number.parseInt(input_date_moment.format('jYYYY'));


    let newYear =  year + ((month + 21) / 12);

    let temp_month =  month + ( (month + 21) % 12 );

    let newMonth = temp_month > 12 ? temp_month % 12 : temp_month;

    this.jAddedDate = newYear + '/' + newMonth;

  }


}
