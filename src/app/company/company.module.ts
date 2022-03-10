import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { NavbarComponent } from './nav-footer/navbar/navbar.component';
import {CompanyHomeComponent} from "./company-home/company-home.component";
import {CompanyComponent} from "./company.component";
import {HttpClientModule} from "@angular/common/http";
import {CompanyInfoComponent} from "./company-info/company-info.component";



@NgModule({
  declarations: [
    NavbarComponent,
    CompanyHomeComponent,
    CompanyComponent,
    CompanyInfoComponent,
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    HttpClientModule
  ],
  bootstrap: [CompanyComponent]

})
export class CompanyModule { }
