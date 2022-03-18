import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../service/company.service";
import {Company} from "../../model/Company";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.css']
})
export class CompanyContactComponent implements OnInit {
  company!: Company;
  id!: number;

  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get('id');
    })
  }

  ngOnInit(): void {
    this.companyService.findCompanyById(this.id).subscribe((data) => {
      this.company = data;
      console.log('company--->', this.company);
  })
}
}
