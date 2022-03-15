import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserRoutingModule} from "./user-routing.module";
import {UserComponent} from "./user.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {FindAllJobComponent} from "./find-all-job/find-all-job.component";
import {UserHomeComponent} from "./userHome/home.component";
import {NavbarComponent} from "./userNavbar/navbar.component";
import {FooterComponent} from "./userFooter/footer.component";
import {UserDetailComponent} from "./user-details/userdetail.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {CompanyModule} from "../company/company.module";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    PostDetailsComponent,
    UserComponent,
    FindAllJobComponent,
    UserHomeComponent,
    NavbarComponent,
    FooterComponent,
    UserDetailComponent,
    UserEditComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        CompanyModule,
        MatPaginatorModule
    ],
  providers: [],
  bootstrap: [UserComponent]
})

export class UserModule{}
