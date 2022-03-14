import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register-login/register/register.component";
import {LoginComponent} from "./register-login/login/login.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'company', loadChildren: () => import ('./company/company.module').then(module => module.CompanyModule)},
  {path:'post', loadChildren: () => import ('./user/user.module').then(module => module.UserModule)},
  {path:'user', loadChildren: () => import ('./user/user.module').then(module => module.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
