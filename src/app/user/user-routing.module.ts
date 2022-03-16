import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";
import {UserDetailComponent} from "./user-details/userdetail.component";
import {UserHomeComponent} from "./userHome/home.component";
import {CompanyComponent} from "../company/company.component";
import {CompanyInfoComponent} from "../company/company-info/company-info.component";
import {PostCreateComponent} from "../company/post/post-create/post-create.component";
import {PostEditComponent} from "../company/post/post-edit/post-edit.component";



// const routes: Routes = [
//   {
//   {path: '', component: UserHomeComponent},
//   children: [
//   { path:'', component: UserHomeComponent},
//   {path: 'profile', component: UserDetailComponent},
//   {path: 'post-list', component: PostListComponent}]
// }
// ]

const routes: Routes = [
  {
    path: '', component: UserHomeComponent,

    children: [
      {path: '', component: UserHomeComponent},
      {path:'profile', component: UserDetailComponent},
      {path:'post-list', component: PostListComponent},
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
