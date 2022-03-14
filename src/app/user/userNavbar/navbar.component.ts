import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {reload} from "@angular/fire/auth";

@Component({
  selector: 'app-userNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnHome() {
    this.router.navigate(['']);
    setTimeout(function () {
      window.location.reload();
    },1 );
  }
}
