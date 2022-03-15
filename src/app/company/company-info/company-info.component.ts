import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../service/company.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  company!: any;
  companyCode!: any;

  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }


}
