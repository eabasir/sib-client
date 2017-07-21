import {Component, Inject, Input, OnInit, SimpleChanges} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from "@angular/material";
import '../../../assets/js/demo.js'
import {RestService} from "../../services/rest.service";
import {PERSONNEL_INFO, SOLDIER_INFO} from "app/components/info-form/info-form.config";
import {Info} from "./info-form.metadata";

declare var demo: any;

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {

  newKey;
  newValue;
  @Input() info_type: String;
  @Input() info_id;

  info : Info [] =[];
  defults = [];


  constructor(public dialog: MdDialog, private restService: RestService) {

  }


  ngOnInit() {

    switch (this.info_type) {

      case "soldier" :
        this.defults = SOLDIER_INFO;
        break;
      case "personnel" :
        this.defults = PERSONNEL_INFO;
        break;
    }

    if (!this.info_id) {
      this.defults.forEach(x => {

        this.info.push({
          key: x.key,
          value: '',
          property_name: x.property_name,
          mandatory: x.mandatory
        });

      });
    }

  }

  add() {
    if (this.newKey) {

      if (this.info.filter(x => x.key === this.newKey).length === 0) {
        this.info = this.info.concat([{
          key: this.newKey,
          value: this.newValue ? this.newValue : '',
          property_name:'',
          mandatory: false
        }]);
        this.newKey = "";
        this.newValue = "";

      } else {
        demo.showNotification('bottom', 'center', 3, ' کلید و مقدار وارد شده تکراری است')
      }
    }

  }


  delete(item) {

    let dialogRef = this.dialog.open(InfoFormComponentDialog, {
      data: item.key,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.info = this.info.filter(x => x.key !== result);
    });

  }

  save() {

    let validate = true;
    this.info.filter(x => x.mandatory).forEach(x => {
       if(!x.value || x.value === '')
         validate = false;
    });


    if (validate) {

      let body : any = {};

      if (this.info_id)
        body.id = this.info_id;


      body.data = JSON.stringify(this.info);

        this.restService.post('personnel', body).subscribe(res => {
            console.log(res);
          },
          err => {

          });

    }else {
      demo.showNotification('bottom', 'center', 4, ' مقادیر لازم وارد نشده است')
    }

  }


}

@Component({
  selector: 'app-info-form-dialog',
  template: `<h1 class="title" md-dialog-title>حذف</h1>
  <div md-dialog-content>آیا از حذف {{data}} اطمینان دارید؟</div>
  <div md-dialog-actions>
    <button class="btn btn-success" md-dialog-close="">خیر
      <div class="ripple-container"></div>
    </button>
    <button class="btn btn-danger" md-dialog-close="{{data}}">بلی
      <div class="ripple-container"></div>
    </button>

  </div>`,
})
export class InfoFormComponentDialog {
  constructor(public dialogRef: MdDialogRef<InfoFormComponentDialog>, @Inject(MD_DIALOG_DATA) public data: any) {
  }
}
