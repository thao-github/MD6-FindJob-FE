import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserRoutingModule} from "./user-routing.module";
import {UserComponent} from "./user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostListComponent} from "./post-list/post-list.component";
import {UserHomeComponent} from "./userHome/home.component";
import {NavbarComponent} from "./userNavbar/navbar.component";
import {UserDetailComponent} from "./user-details/userdetail.component";
import {CompanyModule} from "../company/company.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    UserComponent,
    PostListComponent,
    UserHomeComponent,
    NavbarComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CompanyModule,
    MatPaginatorModule,
    // AppModule,
  ],
  providers: [],
  bootstrap: [UserComponent]
})

export class UserModule{}
