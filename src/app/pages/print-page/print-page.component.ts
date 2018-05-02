import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SoldierInfo} from "../../components/soldier-info-form/soldier-info-form.metadata";
import {Category, MODEL_NAMES} from "../../names/Const";

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit {


  private info: SoldierInfo[] = [];

  get _names() {

    return MODEL_NAMES;
  }

  get _categoty() {

    return Category;
  }

  data: any = {};


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {

      this.info = JSON.parse(params.data);
      this.info.forEach(x => {

        // personal data
        if (x.key === MODEL_NAMES.firstName && x.value)
          this.data[MODEL_NAMES.firstName] = x.value;

        if (x.key === MODEL_NAMES.surname && x.value)
          this.data[MODEL_NAMES.surname] = x.value;

        if (x.key === MODEL_NAMES.national_code && x.value)
          this.data[MODEL_NAMES.national_code] = x.value;

        if (x.key === MODEL_NAMES.father_name && x.value)
          this.data[MODEL_NAMES.father_name] = x.value;

        if (x.key === MODEL_NAMES.passport_number && x.value)
          this.data[MODEL_NAMES.passport_number] = x.value;

        if (x.key === MODEL_NAMES.dob && x.value)
          this.data[MODEL_NAMES.dob] = x.value;

        if (x.key === MODEL_NAMES.birth_place && x.value)
          this.data[MODEL_NAMES.birth_place] = x.value;

        if (x.key === MODEL_NAMES.phone && x.value)
          this.data[MODEL_NAMES.phone] = x.value;

        if (x.key === MODEL_NAMES.mobile_phone && x.value)
          this.data[MODEL_NAMES.mobile_phone] = x.value;

        if (x.key === MODEL_NAMES.marriage_status && x.value)
          this.data[MODEL_NAMES.marriage_status] = x.value;

        if (x.key === MODEL_NAMES.address && x.value)
          this.data[MODEL_NAMES.address] = x.value;


        // education data

        if (x.key === MODEL_NAMES.education && x.value)
          this.data[MODEL_NAMES.education] = x.value;

        if (x.key === MODEL_NAMES.university && x.value)
          this.data[MODEL_NAMES.university] = x.value;

        if (x.key === MODEL_NAMES.education_major && x.value)
          this.data[MODEL_NAMES.education_major] = x.value;

        if (x.key === MODEL_NAMES.education_sub_major && x.value)
          this.data[MODEL_NAMES.education_sub_major] = x.value;

        // serve data

        if (x.key === MODEL_NAMES.dispatch_date && x.value)
          this.data[MODEL_NAMES.dispatch_date] = x.value;

        if (x.key === MODEL_NAMES.legal_discharge_date && x.value)
          this.data[MODEL_NAMES.legal_discharge_date] = x.value;

        if (x.key === MODEL_NAMES.real_discharge_date && x.value)
          this.data[MODEL_NAMES.real_discharge_date] = x.value;

        if (x.key === MODEL_NAMES.serve_place && x.value)
          this.data[MODEL_NAMES.serve_place] = x.value;

        if (x.key === MODEL_NAMES.serve_place_part && x.value)
          this.data[MODEL_NAMES.serve_place_part] = x.value;

        if (x.key === MODEL_NAMES.serve_reduction && x.value)
          this.data[MODEL_NAMES.serve_reduction] = x.value;

        if (x.key === MODEL_NAMES.leave_incentive && x.value)
          this.data[MODEL_NAMES.leave_incentive] = x.value;

        if (x.key === MODEL_NAMES.service_penalty && x.value)
          this.data[MODEL_NAMES.service_penalty] = x.value;

        if (x.key === MODEL_NAMES.remainder_leave && x.value)
          this.data[MODEL_NAMES.remainder_leave] = x.value;

        if (x.key === MODEL_NAMES.degree && x.value)
          this.data[MODEL_NAMES.degree] = x.value;

        if (x.key === MODEL_NAMES.serve_status && x.value)
          this.data[MODEL_NAMES.serve_status] = x.value;
      });

      console.log(this.info);

      setTimeout(() => {

        window.print();
      }, 1000);
    });


  }

}
