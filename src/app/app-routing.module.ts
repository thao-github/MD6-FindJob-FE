import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register-login/register/register.component";
import {LoginComponent} from "./register-login/login/login.component";
import {RegisterCompanyComponent} from "./register-login/register-company/register-company.component";
import {LoginCompanyComponent} from "./register-login/login-company/login-company.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'registerCompany', component: RegisterCompanyComponent},
  {path:'loginCompany', component: LoginCompanyComponent},
  {path:'company', loadChildren: () => import ('./company/company.module').then(module => module.CompanyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
