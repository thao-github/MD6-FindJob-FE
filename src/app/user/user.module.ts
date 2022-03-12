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
import {AppModule} from "../app.module";
import {UserDetailComponent} from "./user-details/userdetail.component";


@NgModule({
  declarations: [
    PostDetailsComponent,
    UserComponent,
    FindAllJobComponent,
    UserHomeComponent,
    NavbarComponent,
    FooterComponent,
    UserDetailComponent,
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [UserComponent]
})

export class UserModule{ }
