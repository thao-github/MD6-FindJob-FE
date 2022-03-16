import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../service/company.service";
import {Company} from "../model/Company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }


}
