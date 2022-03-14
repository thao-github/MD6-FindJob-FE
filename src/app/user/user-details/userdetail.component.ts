import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/userService";
import {Users} from "../model/users";


@Component({
  selector: 'app-user-details',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: Users;
  id!: number;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = window.sessionStorage.getItem('user');
    this.findUserById(this.id);
  }

  findUserById(id: number) {
    this.userService.findUserById(id).subscribe((user) => {
      this.user = user;
      console.log('user--->', user)
    })
  }


}
