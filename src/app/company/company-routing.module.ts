import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company.component";
import {CompanyInfoComponent} from "./company-info/company-info.component";
import {PostCreateComponent} from "./post/post-create/post-create.component";
import {PostListComponent} from "./post/post-list/post-list.component";
import {PostEditComponent} from "./post/post-edit/post-edit.component";


const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        component: PostListComponent
      },
      {path:'profile', component: CompanyInfoComponent},
      {path:'post/create', component: PostCreateComponent},
      {path:'post/edit/:id', component: PostEditComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
