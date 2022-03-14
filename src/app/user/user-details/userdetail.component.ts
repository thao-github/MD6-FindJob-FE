import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Users} from "../model/users";
import {UserService} from "../service/userService";

@Component({
  selector: 'app-user-details',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.css']
})
export class UserDetailComponent implements OnInit {

  id!: number;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = Number(<string>paramMap.get('id'))
      this.userDetail()
    });
  }

  ngOnInit(): void {
  }

  user : Users = new Users(0,'','','','','','','','','','',0,'','','','','','');

  userDetail() {
    this.userService.findUserById(this.id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }

}
