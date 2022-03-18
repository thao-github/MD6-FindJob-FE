import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";
import {UserDetailComponent} from "./user-details/userdetail.component";
import {UserHomeComponent} from "./userHome/home.component";
import {CompanyContactComponent} from "./company-contact/company-contact.component";
const routes: Routes = [
  {path: '', component: UserHomeComponent},
  {path: 'profile', component: UserDetailComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'company-contact/:id', component: CompanyContactComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
