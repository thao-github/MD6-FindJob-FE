import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register-login/register/register.component";
import {LoginComponent} from "./register-login/login/login.component";
import {CompanyGuard} from "./user/service/company.guard";
import {UserGuard} from "./user/service/user.guard";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'company', loadChildren: () => import ('./company/company.module').then(module => module.CompanyModule),canActivate:[CompanyGuard]},
  {path:'user', loadChildren: () => import ('./user/user.module').then(module => module.UserModule),canActivate:[UserGuard]},
  {path:'admin', loadChildren: () => import ('./admin/admin.module').then(module => module.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
