import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {



  personnel_id;
  personnel_item;

  search_bundle;

  document;

  constructor() { }

  ngOnInit() {

   }


   private update(e){

    this.personnel_id = e._id;
     this.personnel_item = e;

   }



}
