import { Component, OnInit } from '@angular/core';
import {Company} from "../../model/Company";
import {PostService} from "../service/postService";
import {CompanyService} from "../../service/company.service";

@Component({
  selector: 'app-topcompany',
  templateUrl: './topcompany.component.html',
  styleUrls: ['./topcompany.component.css']
})
export class TopcompanyComponent implements OnInit {

  companyList: Company[] = [];

  companyDetail!: Company;

  constructor(private postservice : PostService, private companyservice : CompanyService) { }

  ngOnInit(): void {
    this.findTopCompany();
  }

  findTopCompany(){
    this.postservice.findTopCompany().subscribe(data => {
      this.companyList = data;
    })
  }

  getCompanyDetail(id: number) {
    this.companyservice.findCompanyById(id).subscribe((data) =>{
      this.companyDetail = data;
    })
  }

}
