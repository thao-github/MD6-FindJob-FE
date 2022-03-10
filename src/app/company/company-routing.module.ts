import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyHomeComponent} from "./company-home/company-home.component";
import {CompanyComponent} from "./company.component";
import {CompanyInfoComponent} from "./company-info/company-info.component";


const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        component: CompanyHomeComponent
      },
      {path:'FPT13456', component: CompanyInfoComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
