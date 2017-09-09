import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  personnel_id;
  field;
  modified_field;
  new_upload_code;


  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    /*this.route.queryParams.subscribe((params: Params )=>{

     this.personnel_id = params['_id'];

     });
     */


  }

  setPersonnelId($event){

    if ($event)
      this.personnel_id=$event._id;
    else
      this.personnel_id= null;
  }


}
