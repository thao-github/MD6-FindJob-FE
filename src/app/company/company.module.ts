import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { NavbarComponent } from './nav-footer/navbar/navbar.component';
import {CompanyComponent} from "./company.component";
import {HttpClientModule} from "@angular/common/http";
import {CompanyInfoComponent} from "./company-info/company-info.component";
import { PostCreateComponent } from './post/post-create/post-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {AppModule} from "../app.module";


@NgModule({
  declarations: [
    NavbarComponent,
    CompanyComponent,
    CompanyInfoComponent,
    PostCreateComponent,
    PostEditComponent,
    PostListComponent,
  ],
  exports: [
    NavbarComponent
  ],
    imports: [
        CommonModule,
        CompanyRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        // AppModule
    ],
  bootstrap: [CompanyComponent]

})
export class CompanyModule { }
