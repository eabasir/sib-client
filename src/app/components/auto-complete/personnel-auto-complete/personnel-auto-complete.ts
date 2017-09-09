import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {RestService} from "../../../services/rest.service";
import {MODEL_NAMES} from "../../../names/Const";

@Component({
  selector: 'app-personnel-auto-complete',
  templateUrl: './personnel-auto-complete.html',
  styleUrls: ['./personnel-auto-complete.css']
})
export class PersonnelAutoCompleteComponent implements OnInit {


  searchModelCtrl: FormControl = new FormControl();
  search_items: Array<any> = [];


  get _names() {
    return MODEL_NAMES;
  }


  selected_item: any;
  @Output() output_item = new EventEmitter<any>();


  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.search_items = [];

    this.searchModelCtrl.valueChanges
      .debounceTime(500)
      .subscribe(query => {
        if (query)
          this.restService.post('personnel/query/personnel', {query}).subscribe(res => {

              this.search_items = [];
              res.forEach(personnel => {
                this.search_items.push(personnel);
              });

              return this.search_items;

            },
            err => {

              console.log(err.message);
            });
      });

  }

  search() {

    if (this.selected_item) {
      this.output_item.emit(this.selected_item);

    }
  }

  removeSearchResult() {

      this.output_item.emit(null);
      this.searchModelCtrl.setValue('');
      this.selected_item = null;

  }

}
