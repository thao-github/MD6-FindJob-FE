import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {reload} from "@angular/fire/auth";
import {ApplyService} from "../service/apply.service";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-userNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  postList: any = [];

  constructor(private router: Router, private applyService: ApplyService) { }

  ngOnInit(): void {
    this.showApplyByUser();
  }

  returnHome() {
    this.router.navigate(['']);
    setTimeout(function () {
      window.location.reload();
    },1 );
  }

  logOut() {
    window.sessionStorage.removeItem('user')
    window.sessionStorage.removeItem('token');
    this.router.navigate(['']);
    setTimeout(function () {
      window.location.reload();
    },1 );
  }

  showApplyByUser() {
    this.applyService.showApplyByUser().subscribe(data => {
      this.postList = data;
      console.log(this.postList)
    })
  }
}
