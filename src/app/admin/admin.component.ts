import { Component, OnInit } from '@angular/core';
import {AdminService} from "./service/admin.service";
import {Company} from "../company/model/company";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  listCompany!: Company[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllCompany();
  }

  getAllCompany() {
    this.adminService.getAllCompany().subscribe(data => {
      this.listCompany = data;
    })
  }

  confirmCompany(company: Company) {
    this.adminService.confirmCompany(company).subscribe(() => {
      this.getAllCompany();
    })
  }
}
