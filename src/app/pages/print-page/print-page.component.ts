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


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {


      this.info = JSON.parse(params.data);
      setTimeout(() => {

        window.print();
      }, 1000);
    });


  }

}
