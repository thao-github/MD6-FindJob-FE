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

  ngOnInit(): void {this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    // @ts-ignore
    this.companyCode = +paramMap.get('FPT13456');
    this.company = this.findCompanyByCode(this.companyCode);
    console.log(this.company)
  })

  }

  findCompanyByCode(companyCode: string) {
    return this.companyService.findCompanyByCode('FPT13456').subscribe((data)=>{
      console.log(data);
    });
  }



}
