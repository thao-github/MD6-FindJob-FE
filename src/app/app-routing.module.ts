import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register-login/register/register.component";
import {LoginComponent} from "./register-login/login/login.component";
import {RegisterCompanyComponent} from "./register-login/register-company/register-company.component";
import {UserHomeComponent} from "./user/userHome/home.component";

const routes: Routes = [
  {path:'', component: UserHomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'registerCompany', component: RegisterCompanyComponent},
  {path: 'post', loadChildren: ()=> import('./user/user.module').then(module => module.UserModule)},
  {path: 'user', loadChildren: ()=> import('./user/user.module').then(module => module.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
