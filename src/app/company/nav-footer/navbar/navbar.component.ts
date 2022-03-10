import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  localStorageSaveCompanyCode(companyCode:String) {
    // @ts-ignore
    localStorage.setItem("company_code",companyCode);
  }
}
