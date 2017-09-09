import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MODEL_NAMES} from "../../../names/Const";
import {RestService} from "../../../services/rest.service";

@Component({
  selector: 'app-general-auto-complete',
  templateUrl: './general-auto-complete.component.html',
  styleUrls: ['./general-auto-complete.component.css']
})
export class GeneralAutoCompleteComponent implements OnInit {

  searchModelCtrl: FormControl = new FormControl();
  search_items: Array<any> = [];

  @Output() output_item = new EventEmitter<any>();

  @Input() input_name: string;
  @Input() input_value: string;


  get _names() {
    return MODEL_NAMES;
  }

  constructor(private restService: RestService) {
  }

  ngOnInit() {

    this.search_items = [];

    this.searchModelCtrl.valueChanges
      .debounceTime(500)
      .subscribe(query => {

        if (query)
          this.restService.post('personnel/query/general', {query, name: this.input_name}).subscribe(res => {

              this.search_items = [];
              res.forEach(res => {
                this.search_items.push(res);
              });

              return this.search_items;

            },
            err => {

              console.log(err.message);
            });
      });

  }

  emit(item) {

    if (item) {
      this.output_item.emit(item);

    }
  }

}
